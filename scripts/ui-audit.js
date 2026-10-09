// Full UI audit in a real browser (Chromium via Playwright).
// Run: NODE_PATH=<dir with playwright> CHROME=<chromium path> node scripts/ui-audit.js
// Covers every route x language x theme x viewport, every toggle and control, every detail panel,
// every plan pair, calculator math, filters, and the shape of every link on the page.
const fs = require("fs"), path = require("path"), vm = require("vm");
const { chromium } = require("playwright");

const FILE = "file://" + path.join(__dirname, "..", "index.html");
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", "data.js"), "utf8") +
  ";this.F=FEATURES;this.P=PLANS;this.IND=INDUSTRIES;this.S=SIGNALS;this.I=INTEGRATIONS;this.IG=INT_GROUPS;this.G=GROUPS;this.SZ=SIZES;this.U=USECASES;this.C=COMPLIANCE;", ctx);
const ROUTES = ["home", "map", "map-a", "map-p", "map-e", "vdr", "recommend", "compare", "matrix", "calc", "integrations", "usecases", "adopt", "compliance", "knowledge", "glossary", "changelog", "discrepancies"];
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
  // Chromium commits localStorage to the browser process in batches; reloading milliseconds after a write can read
  // stale data (a test artifact: people don't reload that fast). Wait for the commit before a persistence check.
  const reload = async page => { await page.waitForTimeout(1200); await page.reload(); await page.waitForLoadState("load"); };
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
    ok(/Storage calculator/.test(await viewText(page)), "lang switch re-renders current page in EN");
    ok(await page.evaluate(() => location.hash) === "#calc", "lang switch keeps the current page");
    await reload(page); await page.waitForTimeout(50);
    ok(await page.$eval("#lang", s => s.value) === "en", "language persists after reload");
    const seen = new Set();
    for (let i = 0; i < 3; i++) { await page.click("#theme"); seen.add(await page.evaluate(() => document.documentElement.getAttribute("data-theme") || "system")); }
    ok(seen.size === 3, `theme button cycles 3 states (${[...seen].join(",")})`);
    const navHrefs = await page.$$eval("#nav a", as => as.map(a => a.getAttribute("href").slice(1)));
    ok(await page.$eval("#nav", n => n.scrollWidth <= n.clientWidth + 1), "desktop: every nav item visible without sideways scrolling");
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

  // 3. No prices anywhere (they vary by country): every route, 3 languages; pricing note sends to partner / regional rep
  {
    const PRICE = /\$\s?\d|US\$|16[.,]50|18[.,]15|26[.,]00|28[.,]59|35[.,]00|42[.,]00|69[.,]30|77[.,]00|MSRP|per user \/ month|por usuario \/ mes|por usuário \/ mês/;
    const AMOUNT = /16[.,]50|18[.,]15|26[.,]00|28[.,]59|35[.,]00|42[.,]00|69[.,]30|77[.,]00|MSRP/; // use cases quote customer savings; changelog keeps history without amounts
    for (const lang of ["es", "en", "pt"]) {
      const { page, context } = await newPage(lang);
      for (const r of ROUTES) {
        await go(page, r);
        ok(!(r === "usecases" || r === "changelog" ? AMOUNT : PRICE).test(await viewText(page)), `[${lang}] #${r} shows no prices`);
        ok(!(await page.$("[data-bill]")), `[${lang}] #${r} no billing toggle`);
      }
      for (const r of ["home", "map", "vdr", "compare", "matrix", "calc"]) { await go(page, r); ok(!!(await page.$(".pricing-note")), `[${lang}] #${r} pricing note (partner / regional rep)`); }
      ok(/no publica precios|does not publish prices|não publica preços/.test(await page.$eval("#foot", e => e.innerText)), `[${lang}] footer pricing note`);
      await context.close();
    }
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
    // Every plan header states the plan minimum (official wording)
    for (const [r, id] of [["map-a", "A"], ["map-p", "P"], ["map-e", "E"]]) {
      await go(page, r);
      const th = await page.$eval(".map-head .th", e => e.innerText);
      ok(th.includes(`Minimum of ${ctx.P.find(p => p.id === id).min} users`), `#${r} header shows plan minimum`);
      if (id !== "A") ok(new RegExp(`\\(${ctx.F.filter(f => f.plans.includes(id)).length} in total\\)`).test(th), `#${r} header shows total features`);
    }
    await go(page, "vdr");
    ok(/Minimum of 5 users · 1 GB per license, pooled/.test(await viewText(page)), "#vdr shows 5-user minimum and 1 GB per license");
    await go(page, "matrix");
    ok((await page.$eval("thead", e => e.innerText)).match(/min\. \d licenses/g).length === 4, "matrix headers state the minimum for 4 plans");
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
      ok(onlyB === 0 ? /includes everything in/.test(t) : t.includes(String(onlyB)), `compare ${a.id}/${b.id}: additions count ${onlyB}`);
      const meta = p => `min. ${p.min} licenses · 1 ${p.unit} per license, pooled`;
      ok(t.includes(meta(a)) && t.includes(meta(b)), `compare ${a.id}/${b.id}: minimum and storage per column`);
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

  // 8. Storage calculator: every plan x preset (sharefile.com/plans: 1 TB per license pooled, 3 TB min; VDR 1 GB per license, 5 min)
  {
    const { page, context, errors } = await newPage("en");
    await go(page, "calc");
    const presets = await page.$$eval("[data-preset]", b => b.map(x => +x.dataset.preset));
    for (const p of ctx.P) for (const n of presets) {
      await page.click(`label.choice:has(input[value="${p.id}"])`);
      await page.click(`[data-preset="${n}"]`);
      const seats = Math.max(n, p.min), total = Math.max(p.storageMin, seats) + " " + p.unit;
      const shown = (await page.$eval("#calctotal", e => e.innerText)).replace(/,/g, "");
      ok(shown === total, `calc ${p.id} x${n}: pooled storage ${total} (got ${shown})`);
      ok(await page.$eval("#kusers", i => +i.value) === seats, `calc ${p.id} x${n}: field shows ${seats}`);
    }
    // Round trips between plans never lose the reader's number (Adri's report: VDR 5 -> Advanced must go back to 3)
    for (const n of presets) {
      await page.click(`label.choice:has(input[value="A"])`); await page.click(`[data-preset="${n}"]`);
      const seq = [];
      for (const id of ["V", "A", "E", "V", "P", "A"]) { await page.click(`label.choice:has(input[value="${id}"])`); seq.push(await page.$eval("#kusers", i => +i.value)); }
      const want = ["V", "A", "E", "V", "P", "A"].map(id => Math.max(n, ctx.P.find(p => p.id === id).min));
      ok(seq.join() === want.join(), `calc round trip from ${n}: ${seq.join(",")} (want ${want.join(",")})`);
    }
    const before = await page.evaluate(() => [location.href, localStorage.getItem("sfm.calc3")].join(" "));
    await reload(page); await page.waitForSelector("#kusers"); await page.waitForTimeout(80);
    const kept = await page.$eval("#kusers", i => +i.value);
    ok(kept === presets[presets.length - 1], `calc keeps the reader's number after reload (got ${kept}; ${before})`);
    const t = await page.$eval("#calcout", e => e.innerText);
    ok(/Storage is pooled/.test(t) && /not a per-user quota/.test(t), "calc explains pooled storage");
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
      const nInd = ctx.U.filter(u => u.ind === ind.id).length;
      ok(ids.length === nInd && nInd >= 5 && ids.every(id => ctx.U.find(u => u.id === id).ind === ind.id), `use cases #usecases-${ind.id} shows its ${nInd} cases`);
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
    for (const x of ctx.U.filter((_, i) => i % 7 === 0)) {
      await go(page, `usecases-${x.ind}~${x.id}`); await page.waitForTimeout(30);
      ok(await page.$eval(`#uc-${x.id}`, e => e.classList.contains("focus")), `deep link highlights case ${x.id}`);
    }
    await go(page, "recommend-legal");
    await page.click('a[href="#usecases-legal"]'); await page.waitForTimeout(60);
    ok(await page.$$eval(".ucard", c => c.length) === ctx.U.filter(u => u.ind === "legal").length, "recommender links to its industry use cases");
    ok(errors.length === 0, "use cases no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 9c. Get more from your plan (self-diagnosis)
  {
    const { page, context, errors } = await newPage("en");
    const PASSIVE = new Set(["anytime_access", "file_encryption", "unlimited_clients", "support", "storage", "vdr_storage", "device_security"]);
    await go(page, "adopt");
    for (const p of ctx.P) {
      await page.click(`label.choice:has(input[name="aplan"][value="${p.id}"])`);
      const n = ctx.F.filter(f => f.plans.includes(p.id) && !PASSIVE.has(f.id)).length;
      ok(await page.$$eval("#alist .arow", r => r.length) === n, `adopt ${p.id}: lists its ${n} features`);
      ok((await page.$eval("#adout", e => e.innerText)).includes(`${n} features you can turn on in ${p.name}`), `adopt ${p.id}: total stated`);
    }
    await page.click('label.choice:has(input[name="aplan"][value="P"])');
    const ids = await page.$$eval("#alist [data-ans]", b => [...new Set(b.map(x => x.dataset.ans))]);
    for (const id of ids.slice(0, 10)) await page.click(`[data-ans="${id}"][data-v="y"]`);
    for (const id of ids.slice(10, 15)) await page.click(`[data-ans="${id}"][data-v="n"]`);
    const kpi = await page.$$eval("#adout .kpi b", b => b.map(x => x.textContent));
    ok(kpi[0] === Math.round(10 / ids.length * 100) + "%" && kpi[1] === "10" && kpi[2] === "5", `adopt KPIs follow answers (${kpi.join(",")})`);
    const picks = await page.$$eval(".apick li [data-detail]", b => b.map(x => x.dataset.detail));
    ok(picks.length === 5 && picks.every(id => !ids.slice(0, 10).includes(id)), "adopt 'Start here' never suggests features already in use");
    await page.selectOption("#aind", "legal");
    const picksLegal = await page.$$eval(".apick li [data-detail]", b => b.map(x => x.dataset.detail));
    const legalFeats = new Set(ctx.U.filter(u => u.ind === "legal").flatMap(u => u.f));
    ok(picksLegal.length > 0 && picksLegal.every(id => legalFeats.has(id)), "adopt industry priorities come from that industry's use cases");
    await reload(page); await page.waitForSelector("#alist .arow"); await page.waitForTimeout(50);
    ok(await page.$eval('#aind', s => s.value) === "legal" && (await page.$$eval('#alist [aria-pressed="true"][data-v="y"]', b => b.length)) === 10, "adopt answers persist in this browser");
    await page.click("#acopy"); await page.waitForTimeout(50); ok(!!(await page.$(".toast")), "adopt copy summary confirms");
    await page.click("#areset"); ok((await page.$$eval("#adout .kpi b", b => b.map(x => x.textContent)))[0] === "0%", "adopt reset clears answers");
    await page.click(".apick [data-detail]"); ok(!!(await page.$(".panel")), "adopt ⓘ opens detail"); await page.keyboard.press("Escape");
    await page.click('[data-ans]'); // make sure picks exist again
    const enab = await page.$$eval(".apick a[href^='#usecases-']", as => as.map(a => a.getAttribute("href")));
    ok(enab.length > 0 && enab.every(h => /^#usecases-[a-z]+~[a-z-]+$/.test(h)), "adopt 'Enables' links point to exact cases");
    ok(errors.length === 0, "adopt no JS errors: " + errors.slice(0, 3).join(" | "));
    await context.close();
  }

  // 9d. Compliance: every country, every language
  for (const lang of LANGS) {
    const { page, context, errors } = await newPage(lang);
    for (const c of ctx.C) {
      await go(page, "compliance-" + c.id);
      const tag = `[${lang}/${c.id}]`;
      ok(await page.$eval(`[data-cc="${c.id}"]`, b => b.getAttribute("aria-pressed")) === "true", `${tag} country chip active`);
      ok(await page.$$eval(".comp-norm", n => n.length) === c.norms.length, `${tag} shows ${c.norms.length} norms`);
      const pts = c.norms.reduce((a, n) => a + n.points.length, 0);
      ok(await page.$$eval(".comp-pt", n => n.length) === pts && await page.$$eval(".comp-pt blockquote", n => n.length) === pts && await page.$$eval(".comp-you", n => n.length) === pts, `${tag} every requirement has official extract, fit and customer responsibility`);
      ok((await page.$eval(".comp-principle", e => e.innerText)).length > 80, `${tag} responsibility principle shown`);
      const res = await page.$eval(".comp-res", e => e.innerText);
      ok(res.length > 80 && !/\{c\}/.test(res), `${tag} residency text`);
      const links = await page.$$eval(".comp-norm a[href^='http']", as => as.map(a => a.href));
      const official = h => /\.(gob|gov)\.[a-z]{2}\/|\.(go|fi)\.cr\/|\/\/(www\.)?(bcn\.cl|cmfchile\.cl|busquedas\.elperuano\.pe)\/|sharefile\.com\//.test(h);
      ok(links.length > 0 && links.every(official), `${tag} links only to government or ShareFile sites: ` + links.filter(h => !official(h)).join(" "));
      ok(!/cumple con|complies with|cumpre a/i.test(await page.$$eval(".comp-pt .comp-cols > div:first-child", d => d.map(x => x.innerText).join(" "))), `${tag} never claims ShareFile complies`);
    }
    if (lang === "en") { await page.click(".comp-norm .fchip"); ok(!!(await page.$(".panel")), "compliance feature chip opens panel"); await page.keyboard.press("Escape"); }
    ok(errors.length === 0, `[${lang}] compliance no JS errors: ` + errors.slice(0, 3).join(" | "));
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
          else if (l.h.startsWith("#")) { const h = l.h.slice(1); if (!(ROUTES.includes(h) || h === "view" || (/^recommend-(size-)?[a-z]+$/.test(h) || /^usecases-[a-z]+(~[a-z-]+)?$/.test(h)))) bad.add(`${r}: ${l.h}`); }
          else if (/^https?:/.test(l.h)) { domains.add(new URL(l.h).hostname); if (l.t !== "_blank" || !/noopener/.test(l.rel)) unsafe.add(`${r}: ${l.h}`); if (!l.txt && !(await page.$(`a[href="${l.h}"][aria-label]`))) bad.add(`${r}: link without text ${l.h}`); }
        }
      }
    }
    ok(bad.size === 0, "all links valid: " + [...bad].slice(0, 5).join(" | "));
    ok(unsafe.size === 0, "all external links open in new tab with noopener: " + [...unsafe].slice(0, 5).join(" | "));
    const allowed = /(^|\.)sharefile\.com$|(^|\.)youtube\.com$|(^|\.)github\.com$|(^|\.)progress\.com$|appsource\.microsoft\.com$|workspace\.google\.com$|^sharefile\.ideas\.aha\.io$|\.(go|fi)\.cr$|\.(gob|gov)\.[a-z]{2}$|(^|\.)(bcn\.cl|cmfchile\.cl|elperuano\.pe)$/; // .go.cr/.fi.cr: Costa Rica government sources (compliance); aha: ShareFile ideas portal (redirects to ShareFile sign-in)
    const off = [...domains].filter(d => !allowed.test(d));
    ok(off.length === 0, "external links only go to official domains: " + off.join(", "));
    console.log("external domains:", [...domains].join(", "));
    await context.close();
  }

  await browser.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  if (process.env.GITHUB_ACTIONS) console.log("::notice title=UI audit::" + [`${pass} passed, ${fail} failed`, ...fails.slice(0, 40)].map(x => x.replace(/%/g, "%25").replace(/\n/g, " ")).join("%0A"));
  process.exit(fail ? 1 : 0);
})();
