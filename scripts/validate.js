// Data integrity checks. Run: node scripts/validate.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = {};
vm.createContext(ctx);
for (const f of ["data.js", "i18n.js"]) vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", f), "utf8") + "\nthis.FEATURES=FEATURES;this.PLANS=PLANS;this.GROUPS=GROUPS;this.INDUSTRIES=typeof INDUSTRIES!=='undefined'?INDUSTRIES:[];this.SIGNALS=typeof SIGNALS!=='undefined'?SIGNALS:[];this.BADGES=BADGES;this.UI=typeof UI!=='undefined'?UI:null;", ctx);
const { FEATURES, PLANS, GROUPS, INDUSTRIES, SIGNALS, BADGES, UI } = ctx;
let errors = 0;
const err = m => { errors++; console.error("✗", m); };
const ids = new Set();
const groups = new Set(GROUPS.map(g => g.id));
for (const f of FEATURES) {
  if (ids.has(f.id)) err("duplicate id " + f.id);
  ids.add(f.id);
  if (!groups.has(f.g)) err(f.id + " bad group " + f.g);
  if (!/^A?P?E?V?$/.test(f.plans) || !f.plans) err(f.id + " bad plans " + f.plans);
  if (!/^https:\/\//.test(f.url)) err(f.id + " bad url");
  for (const l of ["es", "en", "pt"]) if (!f.d[l]) err(f.id + " missing desc " + l);
  for (const b of f.badges || []) if (!BADGES[b]) err(f.id + " unknown badge " + b);
  if (f.note) for (const l of ["es", "en", "pt"]) if (!f.note[l]) err(f.id + " missing note " + l);
}
for (const i of INDUSTRIES) for (const x of i.f) if (!ids.has(x)) err("industry " + i.id + " unknown feature " + x);
for (const s of SIGNALS) for (const x of s.f) if (!ids.has(x)) err("signal " + s.id + " unknown feature " + x);
// UI keys parity
const keys = (o, p = "") => Object.entries(o).flatMap(([k, v]) => typeof v === "object" ? keys(v, p + k + ".") : [p + k]);
const base = new Set(keys(UI.es));
for (const l of ["en", "pt"]) { const k = new Set(keys(UI[l])); for (const x of base) if (!k.has(x)) err("UI " + l + " missing " + x); for (const x of k) if (!base.has(x)) err("UI " + l + " extra " + x); }
// Summary per plan
for (const p of PLANS) console.log(p.name.padEnd(18), FEATURES.filter(f => f.plans.includes(p.id)).length, "features");
console.log("total features", FEATURES.length);
if (errors) { console.error(errors + " error(s)"); process.exit(1); }
console.log("✓ data OK");

// Integrations
{
  const c2 = {}; vm.createContext(c2);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", "data.js"), "utf8") + "\nthis.INTEGRATIONS=INTEGRATIONS;this.INT_GROUPS=INT_GROUPS;this.INDUSTRIES=INDUSTRIES;this.BADGES=BADGES;", c2);
  const gs = new Set(c2.INT_GROUPS.map(g => g.id)), inds = new Set(c2.INDUSTRIES.map(i => i.id)), seen = new Set();
  let e2 = 0;
  for (const x of c2.INTEGRATIONS) {
    if (seen.has(x.id)) { e2++; console.error("✗ dup integration " + x.id); } seen.add(x.id);
    if (!gs.has(x.g)) { e2++; console.error("✗ " + x.id + " bad group"); }
    if (x.plan && x.plan !== "check" && !/^A?P?E?V?$/.test(x.plan)) { e2++; console.error("✗ " + x.id + " bad plan"); }
    for (const i of x.ind || []) if (!inds.has(i)) { e2++; console.error("✗ " + x.id + " bad industry " + i); }
    for (const b of x.badges || []) if (!c2.BADGES[b]) { e2++; console.error("✗ " + x.id + " bad badge " + b); }
    for (const l of ["es", "en", "pt"]) { if (!x.d[l]) { e2++; console.error("✗ " + x.id + " desc " + l); } if (x.n && !x.n[l]) { e2++; console.error("✗ " + x.id + " note " + l); } }
  }
  console.log("integrations", c2.INTEGRATIONS.length);
  if (e2) process.exit(1);
}

// Videos
{
  const c3 = {}; vm.createContext(c3);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src", "data.js"), "utf8") + "\nthis.VIDEOS=VIDEOS;this.FEATURES=FEATURES;this.INTEGRATIONS=INTEGRATIONS;", c3);
  const fids = new Set(c3.FEATURES.map(f => f.id)), iids = new Set(c3.INTEGRATIONS.map(i => i.id));
  let e3 = 0;
  const vseen = new Set();
  for (const v of c3.VIDEOS) {
    if (vseen.has(v.id)) { e3++; console.error("✗ duplicate video " + v.id + " (" + v.t + ")"); }
    vseen.add(v.id);
    if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) { e3++; console.error("✗ bad video id " + v.id); }
    for (const f of v.f || []) if (!fids.has(f)) { e3++; console.error("✗ video " + v.id + " unknown feature " + f); }
    for (const i of v.i || []) if (!iids.has(i)) { e3++; console.error("✗ video " + v.id + " unknown integration " + i); }
  }
  console.log("videos", c3.VIDEOS.length);
  if (e3) process.exit(1);
}
