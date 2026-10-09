// End-to-end QA in a simulated browser. Run: NODE_PATH=<dir with jsdom> node scripts/qa.js
const fs = require("fs"), path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
let fails = 0, passes = 0;
const ok = (cond, msg) => { if (cond) passes++; else { fails++; console.error("✗ " + msg); } };

function boot(lang = "es") {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => errors.push(String(e && e.message || e)));
  vc.on("error", e => errors.push(String(e)));
  const dom = new JSDOM(html, { runScripts: "dangerously", url: "https://example.test/", virtualConsole: vc, pretendToBeVisual: true,
    beforeParse(w) { w.localStorage.setItem("sfm.lang", JSON.stringify(lang)); w.scrollTo = () => {}; } });
  return { dom, w: dom.window, d: dom.window.document, errors };
}
const go = (env, hash) => { env.w.location.hash = hash; env.w.dispatchEvent(new env.w.HashChangeEvent("hashchange")); };
const change = (env, el) => el.dispatchEvent(new env.w.Event("change", { bubbles: true }));
const text = el => (el ? el.textContent.replace(/\s+/g, " ").trim() : "");

// Load data independently to compute expectations
const vm = require("vm"); const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", "data.js"), "utf8") + ";this.F=FEATURES;this.P=PLANS;this.IND=INDUSTRIES;this.S=SIGNALS;this.I=INTEGRATIONS;this.IG=INT_GROUPS;this.G=GROUPS;", ctx);
const tierIdx = id => ["A", "P", "E"].findIndex(t => ctx.F.find(f => f.id === id).plans.includes(t));
const expectedBase = ind => ["Advanced", "Premium", "Enterprise"][Math.max(...ind.f.map(tierIdx))];

// 1. Every route renders in every language without errors
const routes = ["home", "map", "map-a", "map-p", "map-e", "vdr", "recommend", "compare", "matrix", "calc", "integrations", "usecases", "adopt", "compliance", "knowledge", "glossary", "changelog", "discrepancies"];
for (const lang of ["es", "en", "pt"]) {
  const env = boot(lang);
  for (const r of routes) {
    go(env, r);
    const v = env.d.querySelector("#view");
    ok(v && v.innerHTML.length > 200, `[${lang}] #${r} renders content`);
    ok(!/undefined|NaN|\[object Object\]/.test(text(v)), `[${lang}] #${r} has no undefined/NaN text`);
  }
  ok(env.errors.length === 0, `[${lang}] no script errors: ${env.errors.slice(0, 3).join(" | ")}`);
}

// 2. Recommender: each industry, sizes, signals
{
  const env = boot("es");
  go(env, "recommend");
  const planName = () => text(env.d.querySelector(".result-plan strong"));
  const needs = () => [...env.d.querySelectorAll("#recout .flist")][0];
  // clear signals
  env.d.querySelectorAll('input[name="sig"]:checked').forEach(c => { c.checked = false; change(env, c); });
  const seenLists = new Set();
  for (const ind of ctx.IND) {
    const r = env.d.querySelector(`input[name="ind"][value="${ind.id}"]`);
    ok(!!r, `industry radio ${ind.id} exists`);
    r.checked = true; change(env, r);
    ok(planName() === expectedBase(ind), `industry ${ind.id}: plan ${planName()} = expected ${expectedBase(ind)}`);
    const list = text(needs());
    ok(ind.f.every(id => list.includes(ctx.F.find(f => f.id === id).name)), `industry ${ind.id}: lists all its official features`);
    seenLists.add(list);
    ok(env.d.querySelector('input[name="ind"]:checked').value === ind.id, `industry ${ind.id} stays selected after re-render`);
  }
  ok(seenLists.size === ctx.IND.length, `each industry shows a different feature list (${seenLists.size}/${ctx.IND.length})`);
  // other/general
  const o = env.d.querySelector('input[name="ind"][value="other"]'); o.checked = true; change(env, o);
  ok(planName() === "Advanced", `Otra/general -> Advanced (got ${planName()})`);
  // signals one by one on accounting
  const acc = env.d.querySelector('input[name="ind"][value="accounting"]'); acc.checked = true; change(env, acc);
  for (const s of ctx.S) {
    const cb = env.d.querySelector(`input[name="sig"][value="${s.id}"]`);
    cb.checked = true; change(env, cb);
    const want = s.vdr ? "Premium" : "Enterprise";
    ok(planName() === want, `signal ${s.id}: plan ${planName()} = ${want}`);
    if (s.vdr) ok(/Virtual Data Room/.test(text(env.d.querySelector("#recout"))), `signal ${s.id}: suggests VDR`);
    const cb2 = env.d.querySelector(`input[name="sig"][value="${s.id}"]`); cb2.checked = false; change(env, cb2);
    ok(planName() === "Premium", `signal ${s.id} unchecked: back to Premium`);
  }
  // finance investment sub-segment suggests VDR
  const fin = env.d.querySelector('input[name="ind"][value="finance"]'); fin.checked = true; change(env, fin);
  const inv = env.d.querySelector('input[name="sub"][value="invest"]'); ok(!!inv, "finance shows sub-segments");
  inv.checked = true; change(env, inv);
  ok(/Virtual Data Room/.test(text(env.d.querySelector("#recout"))), "finance/investment suggests VDR");
  // sizes
  for (const sz of ["small", "mid", "large"]) {
    const r = env.d.querySelector(`input[name="size"][value="${sz}"]`); r.checked = true; change(env, r);
    ok(env.d.querySelector('input[name="size"]:checked').value === sz, `size ${sz} selectable`);
  }
  ok(env.errors.length === 0, `recommender no script errors: ${env.errors.join(" | ")}`);
}

// 3. Comparator math
{
  const env = boot("en");
  go(env, "compare");
  const sel = (id, v) => { const e = env.d.querySelector(id); e.value = v; change(env, e); };
  sel("#ca", "A"); sel("#cb", "P");
  const onlyB = ctx.F.filter(f => f.plans.includes("P") && !f.plans.includes("A")).length;
  ok(text(env.d.querySelector('[data-col="P"]')).includes(`Plus these ${onlyB}:`), `compare A vs P: ${onlyB} Premium additions shown`);
  const both = ctx.F.filter(f => f.plans.includes("A") && f.plans.includes("P")).length;
  const nAdv = ctx.F.filter(f => f.plans.includes("A")).length;
  ok(env.d.querySelectorAll('[data-col="A"] .flist li').length === nAdv, `compare A vs P: Advanced column lists all ${nAdv} features`);
  ok(text(env.d.querySelector('[data-col="P"] details.inherit summary')).includes(`Everything in Advanced (${both})`), `compare A vs P: Premium column 'Everything in Advanced (${both})'`);
  ok(/Basic Client Portal → Enhanced Client Portal/.test(text(env.d.querySelector('[data-col="P"]'))), "compare Premium column notes portal upgrade");
  ok(!env.d.querySelector("#cmpbase"), "compare nested plans: no separate shared block");
  ok(/Premium includes everything in Advanced \(Basic Client Portal upgrades to Enhanced Client Portal\) and adds \d+ features/.test(text(env.d.querySelector("#cmpsum"))), "compare A vs P summary explains superset and portal upgrade: " + text(env.d.querySelector("#cmpsum")));
  ok(/upgrades to Enhanced Client Portal/.test(text(env.d.querySelector(".cmp-cols"))), "compare marks Basic Client Portal as upgrade");
  ok(env.d.querySelectorAll(".cmp-cols .fgrp h4").length >= 3, "compare differences grouped under named category headers");
  sel("#ca", "E"); sel("#cb", "V");
  ok(/share 49/.test(text(env.d.querySelector("#cmpsum"))), "compare E vs V general summary");
  ok(!!env.d.querySelector("#cmpbase") && env.d.querySelectorAll("#cmpbase .gchip").length >= 3, "compare E vs V shows shared block with category counts");
  ok(/Only in Enterprise \(18\):/.test(text(env.d.querySelector('[data-col="E"]'))) && /Only in Virtual Data Room \(4\):/.test(text(env.d.querySelector('[data-col="V"]'))), "compare E vs V own lists");
  sel("#ca", "E"); sel("#cb", "P");
  ok(/Enterprise includes everything in Premium and adds 5/.test(text(env.d.querySelector("#cmpsum"))), "compare reversed order summary");
  sel("#ca", "A"); sel("#cb", "P");
  sel("#cb", "V");
  const meta = id => text(env.d.querySelector(`[data-col="${id}"] .cmp-meta`));
  ok(meta("A") === "min. 3 licenses · 1 TB per license, pooled" && meta("V") === "min. 5 licenses · 1 GB per license, pooled", `compare columns show minimum and storage: ${meta("A")} | ${meta("V")}`);
  ok(!env.d.querySelector("#cu") && !/\$\d/.test(text(env.d.querySelector("#view"))), "compare has no users field and no prices");
  sel("#ca", "P"); sel("#cb", "P");
  ok(/different/.test(text(env.d.querySelector("#cmpout"))), "compare same plan shows warning");
}

// 4. Storage calculator: minimums, pooled storage, verified facts (sharefile.com/plans, docs storage-usage)
{
  const env = boot("en");
  go(env, "calc");
  const v = env.d.querySelector('input[name="plan"][value="V"]'); v.checked = true; change(env, v);
  const u = env.d.querySelector("#kusers"); u.value = "2"; u.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  const out = () => text(env.d.querySelector("#calcout"));
  const tot = () => text(env.d.querySelector("#calctotal"));
  ok(/5-license minimum|at least 5 licenses/.test(out()), "calc VDR 2 users applies 5 minimum");
  ok(tot() === "5 GB", `calc VDR 5 licenses = 5 GB (got ${tot()})`);
  const lic = id => text(env.d.querySelector(`#calctbl tr[data-plan="${id}"] td:nth-child(2)`));
  const st = id => text(env.d.querySelector(`#calctbl tr[data-plan="${id}"] td:nth-child(4)`));
  ok(lic("V") === "5*" && lic("A") === "3*", `calc table licenses per plan at 2 users: A=${lic("A")} V=${lic("V")}`);
  ok(st("A") === "3 TB" && st("P") === "3 TB" && st("E") === "3 TB" && st("V") === "5 GB", "calc table storage at minimums: 3 TB / 5 GB");
  ok(/Minimum licenses required per plan: Advanced 3 · Premium 3 · Enterprise 3 · Virtual Data Room 5/.test(out()), "calc shows minimum footnote");
  u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  ok(u.value === "5" && u.min === "5", `calc VDR field raised to 5 on commit (value ${u.value}, min ${u.min})`);
  ok(/calculated with 5 instead of 2/.test(out()), "calc shows adjustment notice");
  const a3 = env.d.querySelector('input[name="plan"][value="A"]'); a3.checked = true; change(env, a3);
  u.value = "3"; u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  ok(u.value === "3" && u.min === "3", "calc Advanced accepts 3");
  v.checked = true; change(env, v);
  ok(u.value === "5", `calc switching to VDR raises 3 -> 5 (got ${u.value})`);
  ok(text(env.d.querySelector("#calcout .kpi b")) === "5*", "calc licenses KPI = 5* (minimum applied to a request of 3)");
  u.value = "25"; u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  ok(["A", "P", "E", "V"].every(id => lic(id) === "25"), "calc 25 users: 25 licenses on every plan, no minimum flag");
  ok(st("A") === "25 TB" && st("V") === "25 GB", "calc 25 licenses: 25 TB pooled (A/P/E), 25 GB (VDR)");
  const p = env.d.querySelector('input[name="plan"][value="P"]'); p.checked = true; change(env, p);
  u.value = "10"; u.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(tot() === "10 TB" && /10 licenses × 1 TB = 10 TB for the whole account/.test(out()), "calc Premium 10 licenses = 10 TB pooled (docs example: 1 TB x 10 = 10 TB)");
  ok(/Storage is pooled/.test(out()) && /not a per-user quota/.test(out()), "calc explains storage is pooled, not per user");
  ok(/Recycle Bin/.test(out()) && /3 TB packs/.test(out()) && /uploads and new documents are blocked/.test(out()), "calc explains what counts, packs and what happens when full");
  ok(env.d.querySelectorAll('#calcout a[href*="storage-usage"], #calcout a[href*="sharefile.com/plans"]').length === 2, "calc cites official storage sources");
  ok(!/\$\d|USD|per month|annual/i.test(out()), "calc shows no prices");
}

// 4b. Users field defaults to the plan minimum and follows the plan until the user types
{
  const env = boot("es");
  go(env, "calc");
  const u = env.d.querySelector("#kusers"), pick = id => { const r = env.d.querySelector(`input[name="plan"][value="${id}"]`); r.checked = true; change(env, r); };
  ok(u.value === "3", `calc fresh default = Premium minimum 3 (got ${u.value})`);
  pick("V"); ok(u.value === "5", `calc untouched field follows VDR minimum 5 (got ${u.value})`);
  pick("A"); ok(u.value === "3", `calc untouched field back to 3 on Advanced (got ${u.value})`);
  env.d.querySelector('[data-preset="3"]').click(); pick("V");
  ok(u.value === "5" && /se calcula con 5 en lugar de 3/.test(text(env.d.querySelector("#calcout"))), "calc preset 3 on VDR raises to 5 with notice");
  // Adri's report (2026-10-09): VDR raises 3 -> 5, going back to Advanced must return to 3
  pick("A"); ok(u.value === "3" && text(env.d.querySelector("#calcout .kpi b")) === "3", `calc preset 3: VDR 5 -> back to Advanced 3 (got ${u.value})`);
  pick("V"); pick("P"); ok(u.value === "3", `calc preset 3: VDR 5 -> Premium 3 (got ${u.value})`);
  u.value = "3"; u.dispatchEvent(new env.w.Event("input", { bubbles: true })); u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  pick("V"); ok(u.value === "5", "calc typed 3 on VDR shows 5"); pick("A"); ok(u.value === "3", `calc typed 3: VDR -> Advanced returns to 3 (got ${u.value})`);
  u.value = "4"; u.dispatchEvent(new env.w.Event("input", { bubbles: true })); u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  pick("V"); pick("A"); ok(u.value === "4", `calc typed 4: VDR 5 -> Advanced 4 (got ${u.value})`);
  pick("A");
  env.d.querySelector('[data-preset="25"]').click();
  ok(u.value === "25" && text(env.d.querySelector("#calcout .kpi b")) === "25", "calc preset 25 sets 25 licenses");
  pick("V"); ok(u.value === "25", "calc typed/preset value kept on plan change");
  u.value = ""; u.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(text(env.d.querySelector("#calcout .kpi b")) === "5", "calc empty field -> plan minimum, never 0");
  u.dispatchEvent(new env.w.Event("change", { bubbles: true }));
  ok(u.value === "5", "calc empty field refilled with minimum on commit");
  u.value = "0"; u.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(!/(^|\D)0 (TB|GB)/.test(text(env.d.querySelector("#calcout"))), "calc 0 never shows zero storage");
  go(env, "compare");
  ok(env.d.querySelector("#ca").value === "A" && env.d.querySelector("#cb").value === "P", "compare default Advanced vs Premium");
  ok(env.errors.length === 0, "users field no script errors: " + env.errors.join(" | "));
}

// 5. No prices anywhere (prices vary by country): every route, every language
{
  const PRICE = /\$\s?\d|US\$|16[.,]50|18[.,]15|26[.,]00|28[.,]59|35[.,]00|42[.,]00|69[.,]30|77[.,]00|MSRP|per user \/ month|por usuario \/ mes|por usuário \/ mês/;
  for (const lang of ["es", "en", "pt"]) {
    const env = boot(lang);
    // Use cases quote customer savings (not plan prices); the changelog keeps the history of the old price features, without amounts
    const AMOUNT = /16[.,]50|18[.,]15|26[.,]00|28[.,]59|35[.,]00|42[.,]00|69[.,]30|77[.,]00|MSRP/;
    for (const r of routes) { go(env, r); const re = r === "usecases" || r === "changelog" ? AMOUNT : PRICE; ok(!re.test(text(env.d.querySelector("#view"))), `[${lang}] #${r} shows no prices`); }
    ok(!env.d.querySelector("[data-bill]"), `[${lang}] no billing toggle`);
    ok(/(no publica precios|does not publish prices|não publica preços)/.test(text(env.d.querySelector("#foot"))), `[${lang}] footer sends pricing to partner / regional rep`);
    go(env, "home"); ok(!!env.d.querySelector(".pricing-note"), `[${lang}] home shows pricing note`);
  }
  ok(ctx.P.every(p => p.annual === undefined && p.monthly === undefined && p.storage === 1 && ["TB", "GB"].includes(p.unit)), "data: PLANS carry no prices, only verified storage");
}

// 6. Matrix filters
{
  const env = boot("en");
  go(env, "matrix");
  const q = env.d.querySelector("#mq"); q.value = "SCIM"; q.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(env.d.querySelectorAll("#mbody tr:not(.grp)").length === 1, "matrix search SCIM -> 1 row");
  q.value = ""; q.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(env.d.querySelectorAll("#mbody tr:not(.grp)").length === ctx.F.length, `matrix shows all ${ctx.F.length} features`);
}

// 7. Integrations chips and search
{
  const env = boot("en");
  go(env, "integrations");
  for (const g of ctx.IG) {
    env.d.querySelector(`[data-ig="${g.id}"]`).click();
    const n = ctx.I.filter(x => x.g === g.id).length;
    ok(env.d.querySelectorAll("#ilist .icard").length === n, `integrations chip ${g.id} -> ${n} cards`);
    env.d.querySelector(`[data-ig="${g.id}"]`).click();
  }
  const s = env.d.querySelector("#iq"); s.value = "salesforce"; s.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  ok(env.d.querySelectorAll("#ilist .icard").length === 1, "integrations search salesforce -> 1");
  s.value = ""; s.dispatchEvent(new env.w.Event("input", { bubbles: true }));
  // Industry filter: each industry changes the view, shows its own + featured, hides other industries' specific ones
  const iSel = env.d.querySelector("#ii"), views = new Set();
  const names = () => [...env.d.querySelectorAll("#ilist .icard")].map(c => text(c));
  for (const ind of ctx.IND) {
    iSel.value = ind.id; change(env, iSel);
    const focus = env.d.querySelector("#ifocus"); ok(!!focus, `integrations ${ind.id}: industry block shown`);
    const ftxt = text(focus);
    const spec = ctx.I.filter(x => (x.ind || []).includes(ind.id));
    ok(spec.every(x => ftxt.includes(x.name)), `integrations ${ind.id}: its specific integrations at top (${spec.length})`);
    ok((ind.fi || []).every(id => ftxt.includes(ctx.I.find(x => x.id === id).name)), `integrations ${ind.id}: featured from official page (${(ind.fi || []).length})`);
    const all = names().join(" | ");
    const foreign = ctx.I.filter(x => (x.ind || []).length && !x.ind.includes(ind.id));
    ok(foreign.every(x => !all.includes(x.name)), `integrations ${ind.id}: other industries' specific ones hidden (${foreign.length})`);
    ok(!spec.length ? /no publica|publishes no/.test(ftxt) : true, `integrations ${ind.id}: honest note when none specific`);
    views.add(ftxt);
  }
  ok(views.size === ctx.IND.length, `integrations: every industry shows a different block (${views.size}/${ctx.IND.length})`);
  iSel.value = ""; change(env, iSel);
  ok(env.d.querySelectorAll("#ilist .icard").length === ctx.I.length && !env.d.querySelector("#ifocus"), "integrations: clearing industry shows all");
}

// 8. Detail panel opens and closes
{
  const env = boot("en");
  go(env, "map");
  env.d.querySelector('[data-detail="siem"]').click();
  ok(text(env.d.querySelector(".panel h2")) === "SIEM Integration", "detail panel opens for SIEM");
  ok(/Stream ShareFile Security Events/.test(text(env.d.querySelector(".panel"))), "SIEM panel shows its official video");
  env.d.querySelector("[data-close]").click();
  ok(!env.d.querySelector(".scrim"), "detail panel closes");
}

// 9. Internal links point to real routes
{
  const env = boot("es");
  const bad = new Set();
  for (const r of routes) {
    go(env, r);
    env.d.querySelectorAll('a[href^="#"]').forEach(a => {
      const h = a.getAttribute("href").slice(1);
      const okRoute = routes.includes(h) || (/^recommend-(size-)?[a-z]+$/.test(h) || /^usecases-[a-z]+(~[a-z-]+)?$/.test(h)) || h === "view";
      if (!okRoute) bad.add(h);
    });
  }
  ok(bad.size === 0, "all internal links resolve: " + [...bad].join(", "));
}

console.log(`\n${passes} passed, ${fails} failed`);
process.exit(fails ? 1 : 0);
