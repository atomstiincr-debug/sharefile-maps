// Full UI audit in a real browser (Chromium via Playwright).
// Run: NODE_PATH=<dir with playwright> CHROME=<chromium path> node scripts/ui-audit.js
// Covers every route x language x theme x viewport, every toggle and control, every detail panel,
// every plan pair, calculator math, filters, and the shape of every link on the page.
const fs = require("fs"), path = require("path"), vm = require("vm");
const { chromium } = require("playwright");

const FILE = "file://" + path.join(__dirname, "..", "index.html");
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", "data.js"), "utf8") +
  ";this.F=FEATURES;this.P=PLANS;this.IND=INDUSTRIES;this.S=SIGNALS;this.I=INTEGRATIONS;this.IG=INT_GROUPS;this.G=GROUPS;this.SZ=SIZES;this.U=USECASES;", ctx);
const ROUTES = ["home", "map", "map-a", "map-p", "map-e", "vdr", "recommend", "compare", "matrix", "calc", "integrations", "usecases", "knowledge", "glossary", "changelog", "discrepancies"];
const LANGS = ["es", "en", "pt"];
let pass = 0, fail = 0; const fails = [];
const ok = (c, m) => { if (c) pass++; else { fail++; fails.push(m); console.error("✗ " + m); } };

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME });
  const newPage = async (lang, opts = {}) => {
    const context = await browser.newContext({ viewport: opts.viewport || { width: 1300, height: 900 }, colorScheme: opts.scheme || "light", acceptDownloads: true });
    await context.route(/^https?:\/\//, r => r.abort()); // offline: only the page itself
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push("pageerror: " + e.message));
    page.on("console", m => { if (m.type() === "error" && !/ERR_FAILED|net::/.test(m.text())) errors.push("console: " + m.text()); });
    await page.addInitScript(([l, th]) => { try { if (!sessionStorage.getItem("init")) { localStorage.clear(); localStorage.setItem("sfm.lang", JSON.stringify(l)); if (th) localStorage.setItem("sfm.theme", JSON.stringify(th)); sessionStorage.setItem("init", 1); } } catch (e) {} }, [lang, opts.theme || null]);
    await page.goto(FILE + "#home");
    return { page, context, errors };
  };
  const go = async (page, r) => { await page.evaluate(h => { location.hash = h; }, r); await page.waitForTimeout(40); };
  const viewText = page => page.$eval("#view", v => v.innerText);

  // 1. Every route x language x theme x viewport
  for (const lang of LANGS) for (const theme of ["light", "dark"]) for (const vp of [{ width: 1300, height: 900 }, { width: 390, height: 844 }]) {
    const tag = `[${lang}/${theme}/${vp.width}]`;
    const { page, context, errors } = await newPage(lang, { viewport: vp, theme });
    for (const r of ROUTES) {
      await go(page, r);
      const txt = await viewText(page);
      ok(txt.length > 80, `${tag} #${r} renders`);
      ok(!/undefined|NaN|\[object Object\]|null\b/.test(txt), `${tag} #${r} no undefined/NaN/null text`);
      ok(!/\{[a-z]{1,10}\}/.test(txt), `${tag} #${r} no unreplaced {placeholder}: ${(txt.match(/\{[a-z]{1,10}\}/) || [])[0]}`);
      const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      ok(over <= 1, `${tag} #${r} no horizontal page scroll (overflow ${over}px)`);
      const title = await page.title();
      ok(/ShareFile Maps/.test(title), `${tag} #${r} title set`);
      const navCur = await page.$$eval('#nav a[aria-current="page"]', a => a.length);
      ok(navCur === (["changelog", "discrepancies"].includes(r) ? 0 : 1), `${tag} #${r} one active nav item (${navCur})`);
      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      ok(htmlLang === lang, `${tag} html lang = ${lang} (got ${htmlLang})`);
      if (theme === "dark") {
        const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
        ok(!/255, 255, 255|248, 250|241, 243/.test(bg), `${tag} #${r} dark background applied (${bg})`);
      }
    }
    ok(errors.length === 0, `${tag} no JS errors: ${errors.slice(0, 3).join(" | ")}`);
    await context.close();
  }

  // 2. Header: language switch, theme cycle, nav links, brand link, skip link
  {
    const { page, context, errors } = await newPage("es");
    await go(page, "calc");
    await page.selectOption("#lang", "en"); await page.waitForTimeout(50);
    ok(/Calculator/.test(await viewText(page)), "lang switch re-renders current page in EN");
    ok(await page.evaluate(() => location.hash) === "#calc", "lang switch keeps the current page");
    await page.reload(); await page.waitForTimeout(50);
    ok(await page.$eval("#lang", s => s.value) === "en", "language persists after reload");
    const seen = new Set();
    for (let i = 0; i < 3; i++) { await page.click("#theme"); seen.add(await page.evaluate(() => document.documentElement.getAttribute("data-theme") || "system")); }
    ok(seen.size === 3, `theme button cycles 3 states (${[...seen].join(",")})`);
    const navHrefs = await page.$$eval("#nav a", as => as.map(a => a.getAttribute("href").slice(1)));
    for (const h of navHrefs) {
      await page.click(`#nav a[href="#${h}"]`);
      const on = await page.waitForFunction(x => { const a = document.querySelector(`#nav a[href="#${x}"]`); return a && a.getAttribute("aria-current") === "page"; }, h, { timeout: 1500 }).then(() => true, () => false);
      ok(on, `nav ${h} activates`);
    }
    await page.click("a.brand"); ok(await page.evaluate(() => location.hash) === "#home", "brand link goes home");
    await go(page, "matrix");
    await page.focus('a[href="#view"]'); await page.keyboard.press("Enter"); await page.waitForTimeout(50);
    ok(await page.evaluate(() => location.hash) === "#matrix", "skip link keeps the current page");
    ok(await page.evaluate(() => document.activeElement && document.activeElement.id) === "view", "skip link moves focus to content");
    const footLinks = await page.$$eval("#foot a", as => as.map(a => a.getAttribute("href")));
    for (const h of footLinks.filter(h => h.startsWith("#"))) { await page.click(`#foot a[href="${h}"]`); ok((await viewText(page)).length > 80, `footer link ${h} works`); }
    ok(errors.length === 0, "header no JS errors: " + errors.join(" | "));
    ok(!(await page.$(".cookie, #cookie")), "no cookie banner while analytics is off");
    await context.close();
  }

  // 3. Billing toggle: every page that has one, values match official data, state shared across pages
  {
    const { page, context } = await newPage("en");
    const money = n => "$" + n.toFixed(2);
    for (const r of ROUTES) {
      await go(page, r);
      if (!(await page.$('[data-bill="monthly"]'))) continue;
      await page.click('[data-bill="monthly"]');
      let t = await viewText(page);
      const want = r === "vdr" ? [ctx.P[3]] : ["matrix", "home"].includes(r) ? ctx.P : r === "map" ? ctx.P.slice(0, 3) : [];
      for (const p of want) ok(t.includes(money(p.monthly)), `#${r} monthly shows ${p.name} ${money(p.monthly)}`);
      ok(await page.$eval('[data-bill="monthly"]', b => b.getAttribute("aria-pressed")) === "true", `#${r} monthly pressed state`);
      await page.click('[data-bill="annual"]');
      t = await viewText(page);
      for (const p of want) ok(t.includes(money(p.annual)), `#${r} annual shows ${p.name} ${money(p.annual)}`);
    }
    await go(page, "home"); await page.click('[data-bill="monthly"]'); await go(page, "matrix");
    ok(await page.$eval('[data-bill="monthly"]', b => b.getAttribute("aria-pressed")) === "true", "billing choice carries across pages");
    await context.close();
  }

  // 4. Map: tiles per plan view, every detail panel, close by Esc and scrim
  {
    const { page, context, errors } = await newPage("en");
    // #map-a = everything in Advanced; #map-p / #map-e = step-up (what each adds over the previous tier)
    for (const [r, id, prev] of [["map-a", "A", null], ["map-p", "P", "A"], ["map-e", "E", "P"]]) {
      await go(page, r);
      const n = await page.$$eval("[data-detail]", els => new Set(els.map(e => e.dataset.detail)).size);
      const want = ctx.F.filter(f => f.plans.includes(id) && (!prev || !f.plans.includes(prev))).length;
      ok(n === want, `#${r} shows ${want} features (got ${n})`);
    }
    // Every plan header states price per user / month and the plan minimum
    for (const [r, id] of [["map-a", "A"], ["map-p", "P"], ["map-e", "E"]]) {
      await go(page, r);
      const th = await page.$eval(".map-head .th", e => e.innerText);
      ok(/per user \/ month/.test(th) && th.includes(`min. ${ctx.P.find(p => p.id === id).min} users`), `#${r} header shows per-user price and minimum`);
      if (id !== "A") ok(new RegExp(`\\(${ctx.F.filter(f => f.plans.includes(id)).length} in total\\)`).test(th), `#${r} header shows total features`);
    }
    await go(page, "vdr");
    ok(/per user \/ month/.test(await viewText(page)) && /min\. 5 users/.test(await viewText(page)), "#vdr shows per-user price and 5-user minimum");
    await go(page, "matrix");
    ok((await page.$eval("thead", e => e.innerText)).match(/per user \/ month/g).length === 4, "matrix headers state per user / month for 4 plans");
    await go(page, "map");
    const ids = await page.$$eval("[data-detail]", els => [...new Set(els.map(e => e.dataset.detail))]);
    ok(ids.length >= ctx.F.filter(f => f.plans !== "V").length - 1, `#map has a tile for every feature (${ids.length})`);
    let i = 0;
    for (const id of ids) {
      const f = ctx.F.find(x => x.id === id); if (!f) { ok(false, `tile ${id} matches a feature`); continue; }
      await page.click(`[data-detail="${id}"]`);
      ok(await page.$eval(".panel h2", h => h.textContent.trim()) === f.name, `panel ${id} title`);
      const hrefs = await page.$$eval(".panel a[href^='http']", as => as.map(a => a.href + "|" + a.target + "|" + a.rel));
      ok(hrefs.some(h => h.startsWith(f.url.split("#")[0])), `panel ${id} links to its official doc`);
      ok(hrefs.every(h => /\|_blank\|.*noopener/.test(h)), `panel ${id} external links open safely in new tab`);
      if (i++ % 2) await page.keyboard.press("Escape"); else await page.click("[data-close]");
      ok(!(await page.$(".scrim")), `panel ${id} closes`);
    }
    await go(page, "vdr");
    ok((await page.$$("[data-detail]")).length >= ctx.F.filter(f => f.plans.includes("V")).length - 1, "#vdr tiles");
    ok(errors.length === 0, "map no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 5. Recommender: deep links, every industry x size, signals, sub-segments
  {
    const { page, context, errors } = await newPage("en");
    for (const ind of ctx.IND) {
      await go(page, "recommend-" + ind.id);
      ok(await page.$eval('input[name="ind"]:checked', r => r.value) === ind.id, `deep link #recommend-${ind.id} preselects`);
    }
    for (const sz of ctx.SZ) { await go(page, "recommend-size-" + sz.id); ok(await page.$eval('input[name="size"]:checked', r => r.value) === sz.id, `deep link size ${sz.id}`); }
    await go(page, "recommend-size-bogus"); ok((await viewText(page)).length > 80 && !(/undefined/.test(await viewText(page))), "bogus size deep link does not break the page");
    await go(page, "recommend-bogus"); ok((await viewText(page)).length > 80, "bogus industry deep link does not break the page");
    await go(page, "recommend");
    for (const ind of ctx.IND) for (const sz of ctx.SZ) {
      await page.click(`label:has(input[name="ind"][value="${ind.id}"])`);
      await page.click(`label:has(input[name="size"][value="${sz.id}"])`);
      const plan = await page.$eval(".result-plan strong", s => s.textContent);
      ok(["Advanced", "Premium", "Enterprise"].includes(plan), `rec ${ind.id}/${sz.id} -> ${plan}`);
      if (ind.subs) for (const sub of ind.subs) {
        await page.click(`label:has(input[name="sub"][value="${sub.id}"])`);
        ok(!!(await page.$("#recout")), `rec ${ind.id}/${sub.id} renders`);
      }
    }
    ok(errors.length === 0, "recommender no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 6. Comparator: all 12 ordered pairs, column totals consistent with data
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "compare");
    for (const a of ctx.P) for (const b of ctx.P) {
      if (a.id === b.id) continue;
      await page.selectOption("#ca", a.id); await page.selectOption("#cb", b.id);
      const t = await page.$eval("#cmpout", e => e.innerText);
      const nA = ctx.F.filter(f => f.plans.includes(a.id)).length, nB = ctx.F.filter(f => f.plans.includes(b.id)).length;
      ok(t.includes(`${nA} features`) && t.includes(`${nB} features`), `compare ${a.id}/${b.id}: both totals shown`);
      const onlyB = ctx.F.filter(f => f.plans.includes(b.id) && !f.plans.includes(a.id)).length;
      ok(t.includes(String(onlyB)), `compare ${a.id}/${b.id}: additions count ${onlyB}`);
      const dU = (b.annual - a.annual);
      ok(t.includes((dU >= 0 ? "+" : "−") + "$" + Math.abs(dU).toFixed(2)), `compare ${a.id}/${b.id}: per-user delta ${dU.toFixed(2)}`);
      const links = await page.$$eval("#cmpout a[href^='http']", as => as.length);
      ok(links > 0, `compare ${a.id}/${b.id}: features link to docs`);
    }
    await page.selectOption("#chl", ctx.IND[0].id);
    ok((await page.$$("#cmpout li.rel")).length > 0, "compare industry highlight marks features");
    ok(errors.length === 0, "compare no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 7. Matrix: filters, URL persistence, CSV export, copy link
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "matrix");
    const rows = () => page.$$eval("#mbody tr:not(.grp)", r => r.length);
    ok(await rows() === ctx.F.length, "matrix all rows");
    for (const g of ctx.G) { await page.selectOption("#mg", g.id); ok(await rows() === ctx.F.filter(f => f.g === g.id).length, `matrix group ${g.id}`); }
    await page.selectOption("#mg", "");
    for (const ind of ctx.IND) { await page.selectOption("#mi", ind.id); const n = await rows(); ok(n > 0 && n <= ctx.F.length, `matrix industry ${ind.id} filters (${n})`); }
    await page.selectOption("#mi", "");
    await page.check("#md"); ok(await rows() === ctx.F.filter(f => f.plans.length < 4).length, "matrix differences only");
    await page.uncheck("#md");
    await page.fill("#mq", "watermark"); await page.waitForTimeout(30);
    ok(await rows() >= 1 && /q=watermark/.test(await page.evaluate(() => location.search)), "matrix search writes URL");
    await page.reload(); await page.waitForTimeout(80);
    ok(await page.$eval("#mq", i => i.value) === "watermark" && await rows() >= 1, "matrix filters restored from URL");
    await page.fill("#mq", "");
    const [dl] = await Promise.all([page.waitForEvent("download", { timeout: 3000 }).catch(() => null), page.click("#mexp")]);
    ok(!!dl, "matrix CSV export downloads");
    if (dl) { const csv = fs.readFileSync(await dl.path(), "utf8"); ok(csv.split("\r\n").length === ctx.F.length + 1, `CSV has ${ctx.F.length} rows + header`); }
    await page.click("#mcopy"); await page.waitForTimeout(50);
    ok(!!(await page.$(".toast")), "copy link shows confirmation");
    await page.click('[data-detail]'); ok(!!(await page.$(".panel")), "matrix ⓘ opens detail"); await page.keyboard.press("Escape");
    ok(errors.length === 0, "matrix no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 8. Calculator math: every plan x preset x billing
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "calc");
    const presets = await page.$$eval("[data-preset]", b => b.map(x => +x.dataset.preset));
    for (const bill of ["annual", "monthly"]) {
      await page.click(`[data-bill="${bill}"]`);
      for (const p of ctx.P) for (const n of presets) {
        await page.click(`label.choice:has(input[value="${p.id}"])`);
        await page.click(`[data-preset="${n}"]`);
        const seats = Math.max(n, p.min), per = bill === "annual" ? p.annual : p.monthly;
        const t = await page.$eval("#calcout", e => e.innerText);
        const m = "$" + (per * seats).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        ok(t.includes(m), `calc ${bill} ${p.id} x${n}: monthly total ${m}`);
        ok(await page.$eval("#kusers", i => +i.value) === seats, `calc ${p.id} x${n}: field shows ${seats}`);
      }
    }
    ok(errors.length === 0, "calc no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 9. Integrations, glossary, knowledge
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "integrations");
    for (const g of ctx.IG) { await page.click(`[data-ig="${g.id}"]`); ok(await page.$$eval("#ilist .icard", c => c.length) === ctx.I.filter(x => x.g === g.id).length, `integrations chip ${g.id}`); await page.click(`[data-ig="${g.id}"]`); }
    for (const ind of ctx.IND) { await page.selectOption("#ii", ind.id); ok(!!(await page.$("#ifocus")), `integrations industry ${ind.id}`); }
    await page.selectOption("#ii", "");
    await go(page, "glossary");
    const all = await page.$$eval("#gll > div", d => d.length);
    await page.fill("#gq", "SSO"); ok((await page.$$eval("#gll > div", d => d.length)) < all, "glossary search filters");
    await go(page, "knowledge");
    ok((await page.$$("#view a[href^='http']")).length > 10, "knowledge has links");
    ok(errors.length === 0, "integrations/glossary no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 9b. Use cases: chips, deep links, plan labels, feature panels, customer links
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "usecases");
    ok(await page.$$eval(".ucard", c => c.length) === ctx.U.length, `use cases: all ${ctx.U.length} cards`);
    const TI = ["A", "P", "E"];
    for (const ind of ctx.IND) {
      await go(page, "usecases-" + ind.id);
      const ids = await page.$$eval(".ucard", c => c.map(x => x.id.slice(3)));
      ok(ids.length === 5 && ids.every(id => ctx.U.find(u => u.id === id).ind === ind.id), `use cases #usecases-${ind.id} shows its 5 cases`);
      ok(await page.$eval(`[data-uc="${ind.id}"]`, b => b.getAttribute("aria-pressed")) === "true", `use cases chip ${ind.id} active`);
      for (const id of ids) {
        const u = ctx.U.find(x => x.id === id);
        const vOnly = u.f.some(f => !ctx.F.find(x => x.id === f).plans.match(/[APE]/));
        const want = vOnly ? "Virtual Data Room" : ["Advanced", "Premium", "Enterprise"][Math.max(...u.f.map(f => TI.findIndex(t => ctx.F.find(x => x.id === f).plans.includes(t))))];
        ok((await page.$eval(`#uc-${id} header .pill`, p => p.textContent)).includes(want), `use case ${id} minimum plan ${want}`);
        const links = await page.$$eval(`#uc-${id} a[href^="http"]`, as => as.map(a => a.href));
        ok(links.every(h => h.startsWith("https://www.sharefile.com/")), `use case ${id} links only to sharefile.com`);
      }
      await page.click(`.ucard .fchip`); ok(!!(await page.$(".panel")), `use case feature chip opens panel (${ind.id})`); await page.keyboard.press("Escape");
    }
    await page.click('[data-uc=""]'); ok(await page.$$eval(".ucard", c => c.length) === ctx.U.length, "use cases: All chip shows everything");
    await go(page, "recommend-legal");
    await page.click('a[href="#usecases-legal"]'); await page.waitForTimeout(60);
    ok(await page.$$eval(".ucard", c => c.length) === 5, "recommender links to its industry use cases");
    ok(errors.length === 0, "use cases no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 10. Link hygiene on every route and language: internal routes resolve, externals safe and official
  {
    const { page, context } = await newPage("es");
    const bad = new Set(), unsafe = new Set(), domains = new Set();
    for (const lang of LANGS) {
      await page.selectOption("#lang", lang);
      for (const r of ROUTES) {
        await go(page, r);
        const links = await page.$$eval("a[href]", as => as.map(a => ({ h: a.getAttribute("href"), t: a.target, rel: a.rel, txt: (a.textContent || a.getAttribute("aria-label") || "").trim() })));
        for (const l of links) {
          if (!l.h || l.h === "#" || /^javascript:/i.test(l.h)) bad.add(`${r}: empty href "${l.txt}"`);
          else if (l.h.startsWith("#")) { const h = l.h.slice(1); if (!(ROUTES.includes(h) || h === "view" || (/^recommend-(size-)?[a-z]+$/.test(h) || /^usecases-[a-z]+$/.test(h)))) bad.add(`${r}: ${l.h}`); }
          else if (/^https?:/.test(l.h)) { domains.add(new URL(l.h).hostname); if (l.t !== "_blank" || !/noopener/.test(l.rel)) unsafe.add(`${r}: ${l.h}`); if (!l.txt && !(await page.$(`a[href="${l.h}"][aria-label]`))) bad.add(`${r}: link without text ${l.h}`); }
        }
      }
    }
    ok(bad.size === 0, "all links valid: " + [...bad].slice(0, 5).join(" | "));
    ok(unsafe.size === 0, "all external links open in new tab with noopener: " + [...unsafe].slice(0, 5).join(" | "));
    const allowed = /(^|\.)sharefile\.com$|(^|\.)youtube\.com$|(^|\.)github\.com$|(^|\.)progress\.com$|appsource\.microsoft\.com$|workspace\.google\.com$|^sharefile\.ideas\.aha\.io$/; // aha: ShareFile ideas portal (redirects to ShareFile sign-in)
    const off = [...domains].filter(d => !allowed.test(d));
    ok(off.length === 0, "external links only go to official domains: " + off.join(", "));
    console.log("external domains:", [...domains].join(", "));
    await context.close();
  }

  await browser.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
