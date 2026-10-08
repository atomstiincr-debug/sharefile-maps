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
