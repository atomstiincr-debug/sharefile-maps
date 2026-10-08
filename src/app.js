/* ShareFile Maps — app. Plain JS, no dependencies. */
(function () {
  "use strict";

  // ── Storage (tolerant)
  const store = {
    get(k, d) { try { const v = localStorage.getItem("sfm." + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("sfm." + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  // ── Indexes
  const F = Object.fromEntries(FEATURES.map(f => [f.id, f]));
  const P = Object.fromEntries(PLANS.map(p => [p.id, p]));
  const G = Object.fromEntries(GROUPS.map(g => [g.id, g]));
  const IND = Object.fromEntries(INDUSTRIES.map(i => [i.id, i]));
  const TIERS = ["A", "P", "E"];

  // ── Language
  const pickLang = () => {
    const saved = store.get("lang", null);
    if (saved && UI[saved]) return saved;
    const n = (navigator.language || "es").slice(0, 2);
    return UI[n] ? n : "es";
  };
  let lang = pickLang();
  const t = () => UI[lang];
  const L = obj => (obj && (obj[lang] || obj.es || obj.en)) || "";
  const fmt = (s, map) => s.replace(/\{(\w+)\}/g, (_, k) => map[k] ?? "");
  const money = (n, dec = 2) => new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-CR",
    { style: "currency", currency: "USD", minimumFractionDigits: dec, maximumFractionDigits: dec }).format(n);
  const int = n => new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-CR").format(n);

  // ── Helpers
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);
  const tierOf = f => TIERS.find(x => f.plans.includes(x)) || null;
  const minPlan = ids => {
    let idx = 0;
    ids.forEach(id => { const tr = tierOf(F[id]); if (tr) idx = Math.max(idx, TIERS.indexOf(tr)); });
    return TIERS[idx];
  };
  const ext = (url, label, cls = "") => `<a href="${esc(url)}" target="_blank" rel="noopener" class="${cls}">${label}</a>`;
  const YT = id => "https://www.youtube.com/watch?v=" + id;
  const videosFor = (kind, id) => VIDEOS.filter(v => (v[kind] || []).includes(id));
  const videoList = vs => vs.map(v => `<li><span>▶ ${ext(YT(v.id), esc(v.t))}</span><span>${v.dur ? esc(v.dur) + " · " : ""}YouTube</span></li>`).join("");
  const flagsFor = f => (f.badges || []).filter(b => ["new", "us", "eu", "usreg"].includes(b))
    .map(b => `<span>${b === "new" ? "NEW" : b === "eu" ? "EU" : "US"}</span>`).join("");

  const tileHTML = (f, opts = {}) => {
    const cls = ["tile", "g-" + f.g];
    if (f.plans === "V") cls.push("vdr-only");
    if (opts.rel === false) cls.push("dim");
    if (opts.rel === true) cls.push("hit");
    return `<div class="${cls.join(" ")}">
      <a href="${esc(f.url)}" target="_blank" rel="noopener" title="${esc(L(f.d))}">${esc(f.name)}</a>
      <button class="i" type="button" data-detail="${f.id}" aria-label="${esc(t().info + ": " + f.name)}">i</button>
      <div class="flags" aria-hidden="true">${videosFor("f", f.id).length ? "<span>▶</span>" : ""}${flagsFor(f)}</div>
    </div>`;
  };

  // ── State
  const state = {
    hl: store.get("hl", ""),
    rec: store.get("rec", { ind: "accounting", sub: "", size: "mid", sig: [] }),
    cmp: store.get("cmp2", { a: "P", b: "E", users: 3, custom: false, hl: "" }),
    calc: store.get("calc2", { plan: "P", users: 3, custom: false }),
    mx: { q: "", g: "", i: "", diff: false },
    bill: store.get("bill", "annual")
  };
  const priceOf = p => state.bill === "annual" ? p.annual : p.monthly;
  const savePct = p => Math.round((1 - p.annual / p.monthly) * 100);
  const billLabel = () => state.bill === "annual" ? t().billing.annualNote : t().billing.monthlyNote;
  const priceHTML = p => state.bill === "annual"
    ? `<s class="was">${money(p.monthly)}</s> ${money(p.annual)}`
    : money(p.monthly);
  const billToggle = () => `<span class="seg bill" role="group" aria-label="${esc(t().billing.label)}">${["monthly", "annual"].map(b =>
    `<button type="button" data-bill="${b}" aria-pressed="${state.bill === b}">${esc(t().billing[b])}</button>`).join("")}</span>`;
  try {
    const qs = new URLSearchParams(location.search);
    state.mx = { q: qs.get("q") || "", g: qs.get("g") || "", i: qs.get("i") || "", diff: qs.get("diff") === "1" };
  } catch (e) { /* ignore */ }

  // ── Routes
  const routes = {
    home: renderHome, map: () => renderMap("all"), "map-a": () => renderMap("A"), "map-p": () => renderMap("P"), "map-e": () => renderMap("E"),
    vdr: renderVdr, recommend: renderRec, compare: renderCompare, matrix: renderMatrix, calc: renderCalc,
    integrations: renderIntegrations, knowledge: renderKnowledge, glossary: renderGlossary, changelog: renderChangelog, discrepancies: renderDisc
  };
  const navKeys = ["home", "map", "vdr", "recommend", "compare", "matrix", "calc", "integrations", "knowledge", "glossary"];

  function route() {
    let h = (location.hash || "#home").slice(1) || "home";
    if (h.startsWith("recommend-size-")) { state.rec.size = h.slice(15); h = "recommend"; }
    else if (h.startsWith("recommend-")) { const id = h.slice(10); if (IND[id] || id === "other") { state.rec.ind = id; state.rec.sub = ""; } h = "recommend"; }
    const fn = routes[h] || renderHome;
    const navKey = h.startsWith("map") ? "map" : (routes[h] ? h : "home");
    renderChrome(navKey);
    $("#view").innerHTML = "";
    fn();
    document.title = (navKey === "home" ? "" : t().nav[navKey] + " · ") + "ShareFile Maps";
    window.scrollTo(0, 0);
  }

  // ── Chrome
  function renderChrome(active) {
    const u = t();
    $("#nav").innerHTML = navKeys.map(k => `<a href="#${k}" ${k === active ? 'aria-current="page"' : ""}>${u.nav[k]}</a>`).join("");
    $("#brand-tag").textContent = u.siteTag;
    $("#unofficial").textContent = u.unofficial;
    $("#lang").value = lang;
    $("#lang").setAttribute("aria-label", u.lang);
    const th = store.get("theme", "system");
    $("#theme").textContent = th === "dark" ? "◐ " + u.dark : th === "light" ? "◑ " + u.light : "◒ " + u.system;
    $("#theme").setAttribute("aria-label", u.theme);
    $("#foot").innerHTML = `
      <p>${esc(u.foot.disclaimer)}</p>
      <p>${esc(u.foot.truth)} ${esc(u.foot.prices)}</p>
      <p>${u.by} ${esc(SITE.author)} · ${u.updated} <span class="num">${SITE.updated}</span> · v<span class="num">${SITE.version}</span> ·
        <a href="#changelog">${u.nav.changelog}</a> · <a href="#discrepancies">${u.nav.discrepancies}</a></p>`;
  }

  const head = (title, lead, extra = "") => `<div class="page-head"><h1>${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}${extra}</div>`;
  const updatedLine = () => `<p class="meta">${t().updated} <span class="num">${SITE.updated}</span> · ${ext(SITE.pricingSource, "sharefile.com/plans")}</p>`;

  // ── Home
  function renderHome() {
    const u = t(), h = u.home;
    const row = (label, links) => `<div class="index-row"><b>${esc(label)}</b><div class="index-links">${links}</div></div>`;
    const a = (href, txt) => `<a href="${href}">${esc(txt)}</a>`;
    $("#view").innerHTML = `
      <div class="page-head">
        <p class="eyebrow">${esc(u.siteTag)}</p>
        <h1>ShareFile Maps</h1>
        <p class="meta">${u.by} ${esc(SITE.author)} — <b>${new Date(SITE.updated + "T12:00:00").toLocaleDateString(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-CR", { month: "long", year: "numeric" })}</b></p>
        <p class="lead">${esc(h.lead)}</p>
        <p class="actions">${ext("https://www.youtube.com/watch?v=" + OVERVIEW_VIDEO.id, "▶ " + esc(t().video.overview), "btn primary")}${ext(TUTORIALS, "▶ " + esc(t().video.tutorials), "btn")}</p>
      </div>
      <div class="index">
        ${row(h.plans, [a("#map", h.allPlans), a("#map-a", "Advanced"), a("#map-p", "Premium " + h.stepup), a("#map-e", "Enterprise " + h.stepup), a("#vdr", "Virtual Data Room")].join(""))}
        ${row(h.industries, INDUSTRIES.map(i => a("#recommend-" + i.id, L(i.name))).join(""))}
        ${row(h.sizes, SIZES.map(s => a("#recommend-size-" + s.id, L(s.name))).join(""))}
        ${row(h.tools, ["recommend", "compare", "matrix", "calc"].map(k => a("#" + k, u.nav[k])).join(""))}
        ${row(h.resources, ["integrations", "knowledge", "glossary", "changelog", "discrepancies"].map(k => a("#" + k, u.nav[k])).join(""))}
      </div>
      <div class="toolbar" style="margin-top:28px;margin-bottom:0">${billToggle()}<span class="hint">${esc(t().billing.explain)}</span></div>
      <div class="price-row" style="margin-top:12px">
        ${PLANS.map(p => {
          const n = FEATURES.filter(f => f.plans.includes(p.id)).length;
          return `<a class="price" href="${p.id === "V" ? "#vdr" : "#map-" + p.id.toLowerCase()}" style="text-decoration:none;color:inherit">
            <span class="eyebrow">${esc(p.name)}</span>
            <span class="amt">${priceHTML(p)}</span>
            <span class="hint">${esc(t().billing.perUserMonth)} · ${esc(billLabel())}${state.bill === "annual" ? ` · <b class="save">${esc(fmt(t().billing.save, { n: savePct(p) }))}</b>` : ""}</span>
            <span class="muted" style="font-size:.85rem">${esc(L(p.tag))}</span>
            <span class="tier-bar" aria-hidden="true"><i style="width:${Math.round(n / FEATURES.length * 100)}%"></i></span>
            <span class="hint">${n} ${esc(u.map.count)} · ${h.min} ${p.min} ${h.users}</span>
          </a>`;
        }).join("")}
      </div>`;
  }

  // ── Plan map
  function industrySelect(id, val) {
    return `<select id="${id}"><option value="">${esc(t().map.none)}</option>${INDUSTRIES.map(i => `<option value="${i.id}" ${i.id === val ? "selected" : ""}>${esc(L(i.name))}</option>`).join("")}</select>`;
  }
  function relSet(indId) { return indId && IND[indId] ? new Set(IND[indId].f) : null; }

  function renderMap(view) {
    const u = t(), m = u.map;
    const cols = view === "all" ? TIERS : [view];
    const rel = relSet(state.hl);
    const names = { A: m.tierA, P: m.tierP, E: m.tierE };
    const hints = { A: m.tierAHint, P: m.tierPHint, E: m.tierEHint };
    const title = view === "all" ? m.title : names[view];
    const bands = GROUPS.map(g => {
      const cells = cols.map(tr => {
        const fs = FEATURES.filter(f => f.g === g.id && tierOf(f) === tr);
        return `<div class="cell"><span class="cell-tier">${esc(names[tr])}</span>${fs.map(f => tileHTML(f, { rel: rel ? rel.has(f.id) : undefined })).join("")}</div>`;
      });
      const any = cols.some(tr => FEATURES.some(f => f.g === g.id && tierOf(f) === tr));
      if (!any) return "";
      return `<div class="band"><div class="band-label g-${g.id}">${esc(L(g.name))}</div>${cells.join("")}</div>`;
    }).join("");
    const counts = cols.map(tr => FEATURES.filter(f => tierOf(f) === tr).length);
    $("#view").innerHTML = `
      ${head(title, view === "all" ? m.lead : "", updatedLine())}
      <div class="toolbar">
        <span class="seg" role="group" aria-label="${esc(m.views)}">
          ${[["map", m.viewAll], ["map-a", m.viewA], ["map-p", m.viewP], ["map-e", m.viewE]].map(([h, lbl]) =>
            `<a href="#${h}" ${(h === "map" && view === "all") || h === "map-" + view.toLowerCase() ? 'aria-current="true"' : ""}>${esc(lbl)}</a>`).join("")}
        </span>
        <label>${esc(m.highlight)} ${industrySelect("hl", state.hl)}</label>
        ${billToggle()}
      </div>
      <div class="map-frame">
        <div class="map-title"><h2>${esc(title)}</h2><p>${esc(SITE.updated)} · ShareFile Maps</p></div>
        <div class="map" style="--cols:${cols.length}">
          <div class="map-head"><div></div>${cols.map((tr, i) => `<div class="th t-${tr}">${esc(names[tr])}<small>${esc(hints[tr])} · ${counts[i]} ${esc(m.count)} · ${money(priceOf(P[tr]))}</small></div>`).join("")}</div>
          ${bands}
        </div>
        <div class="map-foot">
          ${GROUPS.map(g => `<span class="k"><i class="g-${g.id}"></i>${esc(L(g.name))}</span>`).join("")}
          <span class="k">${esc(m.legend)}</span>
          <span class="k">▶ ${ext(TUTORIALS, esc(t().video.tutorials))}</span>
        </div>
      </div>`;
    $("#hl").addEventListener("change", e => { state.hl = e.target.value; store.set("hl", state.hl); renderMap(view); });
  }

  function renderVdr() {
    const u = t(), m = u.map;
    const rel = relSet(state.hl);
    const inV = FEATURES.filter(f => f.plans.includes("V"));
    const notV = FEATURES.filter(f => !f.plans.includes("V") && /[APE]/.test(f.plans));
    const bands = GROUPS.map(g => {
      const fs = inV.filter(f => f.g === g.id);
      if (!fs.length) return "";
      return `<div class="band"><div class="band-label g-${g.id}">${esc(L(g.name))}</div><div class="cell">${fs.map(f => tileHTML(f, { rel: rel ? rel.has(f.id) : undefined })).join("")}</div></div>`;
    }).join("");
    $("#view").innerHTML = `
      ${head(m.vdrTitle, m.vdrLead, updatedLine())}
      <div class="toolbar"><label>${esc(m.highlight)} ${industrySelect("hl", state.hl)}</label>
        ${billToggle()}<span class="chip num">${money(priceOf(P.V))} · ${esc(billLabel())} · ${u.home.min} ${P.V.min} ${u.home.users}</span>
        ${ext(P.V.page, "sharefile.com/plans/sharefile-virtual-data-room")}</div>
      <div class="map-frame">
        <div class="map-title"><h2>Virtual Data Room</h2><p>${inV.length} ${esc(m.count)}</p></div>
        <div class="map" style="--cols:1">${bands}</div>
        <div class="map-foot"><span class="k"><i style="box-shadow:0 0 0 2px var(--vdr);background:var(--surface)"></i>${esc(m.vdrOnly)}</span><span class="k">${esc(m.legend)}</span></div>
      </div>
      <div class="vdr-out box">
        <h3>${esc(m.notInVdr)}</h3>
        <div class="cell">${notV.map(f => tileHTML(f)).join("")}</div>
      </div>`;
    $("#hl").addEventListener("change", e => { state.hl = e.target.value; store.set("hl", state.hl); renderVdr(); });
  }

  // ── Detail panel
  function openDetail(id) {
    const f = F[id]; if (!f) return;
    const u = t(), dd = u.detail;
    const inds = INDUSTRIES.filter(i => i.f.includes(f.id));
    const wrap = document.createElement("div");
    wrap.className = "scrim";
    wrap.innerHTML = `<aside class="panel" role="dialog" aria-modal="true" aria-labelledby="dt-title">
      <div class="swatch g-${f.g}"></div>
      <p class="eyebrow">${esc(L(G[f.g].name))}</p>
      <h2 id="dt-title">${esc(f.name)}</h2>
      <p>${esc(L(f.d))}</p>
      ${(f.badges || []).length ? `<div class="pills">${f.badges.map(b => `<span class="pill ${["us", "usreg", "eu", "third", "check"].includes(b) ? "warn" : "ok"}">${esc(L(BADGES[b]))}</span>`).join("")}</div>` : ""}
      ${f.note ? `<div class="note"><b>${esc(dd.note)}:</b> ${esc(L(f.note))}</div>` : ""}
      ${G[f.g].note ? `<div class="note">${esc(L(G[f.g].note))}</div>` : ""}
      <dl>
        <dt>${esc(dd.plans)}</dt><dd>${PLANS.filter(p => f.plans.includes(p.id)).map(p => esc(p.name)).join(", ")}</dd>
        ${inds.length ? `<dt>${esc(u.home.industries)}</dt><dd>${inds.map(i => esc(L(i.name))).join(", ")}</dd>` : ""}
        <dt>${esc(dd.source)}</dt><dd>${f.id === "eidas" ? ext(f.url, "docs.sharefile.com") : ext(SITE.pricingSource, "sharefile.com/plans")}</dd>
        ${videosFor("f", f.id).length ? `<dt>${esc(t().video.title)}</dt><dd><ul class="flist">${videoList(videosFor("f", f.id))}</ul></dd>` : ""}
        ${f.also ? `<dt>${esc(dd.also)}</dt><dd>${f.also.map(a => ext(a.url, esc(a.label))).join(" · ")}</dd>` : ""}
      </dl>
      <div class="actions">${ext(f.url, esc(dd.docs) + " ↗", "btn primary")}<button class="btn" type="button" data-close>${esc(dd.close)}</button></div>
    </aside>`;
    const close = () => { wrap.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = e => { if (e.key === "Escape") close(); };
    wrap.addEventListener("click", e => { if (e.target === wrap || e.target.closest("[data-close]")) close(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(wrap);
    $("[data-close]", wrap).focus();
  }

  // ── Recommender
  function recompute() {
    const r = state.rec;
    const ind = IND[r.ind];
    const needs = ind ? ind.f : [];
    let plan = ind ? minPlan(needs) : "A";
    const sigs = SIGNALS.filter(s => r.sig.includes(s.id));
    const entSigs = sigs.filter(s => !s.vdr);
    if (entSigs.length) plan = "E";
    const sub = ind && ind.subs ? ind.subs.find(s => s.id === r.sub) : null;
    const vdr = sigs.some(s => s.vdr) || (sub && sub.vdr);
    return { ind, needs, plan, entSigs, vdr, sub };
  }

  function renderRec() {
    const u = t(), R = u.rec, r = state.rec;
    const choice = (name, val, label, checked, extra = "") => `<label class="choice"><input type="radio" name="${name}" value="${val}" ${checked ? "checked" : ""}><span>${esc(label)}</span></label>${extra}`;
    $("#view").innerHTML = `
      ${head(R.title, R.lead)}
      <div class="grid2">
        <form class="box" id="recf" onsubmit="return false">
          <fieldset><legend>${esc(R.q1)}</legend><div class="choices">
            ${INDUSTRIES.map(i => choice("ind", i.id, L(i.name), r.ind === i.id)).join("")}
            ${choice("ind", "other", R.other, r.ind === "other")}
          </div>${r.ind === "other" ? `<p class="hint">${esc(R.otherHint)}</p>` : ""}</fieldset>
          ${IND[r.ind] && IND[r.ind].subs ? `<fieldset><legend>${esc(R.q1b)}</legend><div class="choices">
            ${IND[r.ind].subs.map(s => choice("sub", s.id, L(s.name), r.sub === s.id)).join("")}</div></fieldset>` : ""}
          <fieldset><legend>${esc(R.q2)}</legend><div class="choices">
            ${SIZES.map(s => choice("size", s.id, L(s.name), r.size === s.id)).join("")}
          </div><p class="hint">${esc(L((SIZES.find(s => s.id === r.size) || SIZES[1]).hint))}</p></fieldset>
          <fieldset><legend>${esc(R.q3)}</legend><p class="hint">${esc(R.q3hint)}</p>
            ${SIGNALS.map(s => `<label class="check"><input type="checkbox" name="sig" value="${s.id}" ${r.sig.includes(s.id) ? "checked" : ""}><span>${esc(L(s.t))}</span></label>`).join("")}
          </fieldset>
        </form>
        <section class="box" id="recout" aria-live="polite"></section>
      </div>`;
    $("#recf").addEventListener("change", e => {
      const el = e.target;
      if (el.name === "ind") { r.ind = el.value; r.sub = ""; store.set("rec", r); renderRec(); return; }
      if (el.name === "sub") r.sub = el.value;
      if (el.name === "size") { r.size = el.value; store.set("rec", r); renderRec(); return; }
      if (el.name === "sig") r.sig = [...document.querySelectorAll('input[name="sig"]:checked')].map(x => x.value);
      store.set("rec", r); renderRecOut();
    });
    renderRecOut();
  }

  function renderRecOut() {
    const u = t(), R = u.rec, res = recompute();
    const p = P[res.plan];
    const size = SIZES.find(s => s.id === state.rec.size);
    const prev = TIERS[Math.max(0, TIERS.indexOf(res.plan) - 1)];
    const reasons = [];
    if (res.ind) reasons.push(fmt(R.baseReason, { ind: L(res.ind.name), plan: P[minPlan(res.needs)].name }));
    else reasons.push(R.advReason);
    if (res.entSigs.length) reasons.push(R.entReason);
    const fl = ids => `<ul class="flist">${ids.map(id => { const f = F[id]; const tr = tierOf(f) || "V";
      return `<li><span><i class="dot g-${f.g}"></i>${ext(f.url, esc(f.name))}</span><span>${esc(R.from)} ${esc(P[tr].name)}</span></li>`; }).join("")}</ul>`;
    const sigFeatures = [...new Set(res.entSigs.flatMap(s => s.f))];
    const warns = [];
    if (res.ind && res.ind.warn) warns.push(L(res.ind.warn));
    if (sigFeatures.includes("scim") || sigFeatures.includes("siem")) warns.push(L(F.scim.badges && BADGES.third) + ": SCIM / SIEM.");
    const basePlan = P[res.ind ? minPlan(res.needs) : "A"];
    const who = (res.ind ? L(res.ind.name) + (res.sub ? " · " + L(res.sub.name) : "") : R.other) + (size ? " · " + L(size.name) : "");
    const entOnly = id => F[id].plans === "E";
    $("#recout").innerHTML = `
      <p class="eyebrow">${esc(fmt(R.resultFor, { who }))}</p>
      <div class="result-plan"><strong>${esc(p.name)}</strong><span class="num">${priceHTML(p)}</span><span class="muted">${esc(u.billing.perUserMonth)} · ${esc(billLabel())}</span>${billToggle()}</div>
      <ol class="path">
        <li><span class="step">${esc(R.stepInd)}</span><b>${esc(basePlan.name)}</b><span class="why">${esc(reasons[0])}</span></li>
        ${res.entSigs.length ? `<li><span class="step">${esc(R.stepSig)}</span><b>Enterprise</b><span class="why">${esc(R.entReason)}</span>
          <ul class="sigs">${res.entSigs.map(sg => `<li>${esc(L(sg.t))} → ${sg.f.filter(entOnly).map(id => ext(F[id].url, esc(F[id].name))).join(", ")} <span class="muted">(${esc(R.entOnly)})</span></li>`).join("")}</ul></li>` : ""}
      </ol>
      ${res.ind && !res.entSigs.length ? `<p class="hint">${esc(R.samePlan)}</p>` : ""}
      ${res.ind ? `<div><h3>${esc(fmt(R.needsFor, { ind: L(res.ind.name) }))}</h3>${fl(res.needs)}</div>` : ""}
      ${res.vdr ? `<div class="note"><b>${esc(R.vdrToo)}.</b> ${esc(R.vdrWhy)} <span class="num">${money(priceOf(P.V))}</span> · <a href="#vdr">${esc(u.nav.vdr)}</a></div>` : ""}
      ${res.ind && INTEGRATIONS.some(x => (x.ind || []).includes(res.ind.id)) ? `<div><h3>${esc(u.int.forIndustry)}</h3><ul class="flist">${INTEGRATIONS.filter(x => (x.ind || []).includes(res.ind.id)).map(x => `<li><span>${ext(x.url, esc(x.name))}</span><span>${esc(L(x.d).slice(0, 60))}…</span></li>`).join("")}</ul></div>` : ""}
      ${warns.length ? `<div><h3>${esc(R.warnings)}</h3><ul>${warns.map(w => `<li>${esc(w)}</li>`).join("")}</ul></div>` : ""}
      ${(res.ind && res.ind.video) || (size && size.video) ? `<div><h3>${esc(u.video.title)}</h3><ul class="flist">${[res.ind && res.ind.video, size && size.video].filter(Boolean).map(v => `<li><span>▶ ${ext("https://www.youtube.com/watch?v=" + v.id, esc(v.t))}</span><span>YouTube · ${esc(u.video.lang)}</span></li>`).join("")}</ul></div>` : ""}
      <p class="hint">${esc(R.sizeNote)}</p>
      <div class="actions">
        ${res.ind ? ext(res.ind.url, esc(R.industryPage) + " ↗", "btn") : ""}
        ${size ? ext(size.url, esc(R.sizePage) + " ↗", "btn") : ""}
        <button class="btn primary" type="button" id="toCalc">${esc(R.openCalc)}</button>
        ${res.plan !== "A" ? `<button class="btn" type="button" id="toCmp">${esc(R.openCompare)}</button>` : ""}
      </div>`;
    const box = $("#recout"); box.classList.remove("updated"); void box.offsetWidth; box.classList.add("updated");
    $("#toCalc").addEventListener("click", () => { state.calc.plan = res.plan; store.set("calc", state.calc); location.hash = "calc"; });
    const tc = $("#toCmp");
    if (tc) tc.addEventListener("click", () => { Object.assign(state.cmp, { a: prev, b: res.plan, hl: res.ind ? res.ind.id : "" }); store.set("cmp", state.cmp); location.hash = "compare"; });
  }

  // ── Users field helpers (calculator and comparator)
  const PRESETS = [5, 10, 25, 50, 100, 250];
  const presetsHTML = () => `<span class="presets">${PRESETS.map(n => `<button type="button" class="chipbtn" data-preset="${n}">${n}</button>`).join("")}</span>`;
  const readUsers = el => { const v = parseInt(el.value, 10); return el.value.trim() === "" || !(v > 0) ? null : Math.min(100000, v); };

  // ── Compare
  function renderCompare() {
    const u = t(), C = u.cmp, c = state.cmp;
    const planSel = (id, val) => `<select id="${id}">${PLANS.map(p => `<option value="${p.id}" ${p.id === val ? "selected" : ""}>${esc(p.name)}</option>`).join("")}</select>`;
    $("#view").innerHTML = `
      ${head(C.title, C.lead, updatedLine())}
      <div class="box">
        <div class="cmp-head">
          <label class="hint">${esc(C.planA)}<br>${planSel("ca", c.a)}</label>
          <label class="hint">${esc(C.planB)}<br>${planSel("cb", c.b)}</label>
          <label class="hint">${esc(C.users)}<br><input id="cu" type="number" min="1" max="100000" value="${c.users}"></label>
          <div class="hint">${esc(C.billing)}<br>${billToggle()}</div>
          <label class="hint">${esc(C.highlight)}<br>${industrySelect("chl", c.hl)}</label>
        </div>
        <p class="hint" style="margin:8px 0 0">${esc(u.calc.usersHint)} ${presetsHTML()}</p>
        <div id="cmpout"></div>
      </div>`;
    const floor = () => Math.max(P[c.a].min, P[c.b].min);
    const sync = () => { if (!c.custom) { c.users = floor(); $("#cu").value = c.users; } };
    const upd = () => {
      c.a = $("#ca").value; c.b = $("#cb").value; c.hl = $("#chl").value;
      sync(); store.set("cmp2", c); renderCmpOut();
    };
    ["#ca", "#cb", "#chl"].forEach(s => $(s).addEventListener("change", upd));
    $("#cu").addEventListener("input", () => { const v = readUsers($("#cu")); c.custom = v !== null; c.users = v !== null ? v : floor(); store.set("cmp2", c); renderCmpOut(); });
    $("#cu").addEventListener("change", () => { if (!c.custom) $("#cu").value = c.users; });
    document.querySelectorAll("[data-preset]").forEach(b => b.addEventListener("click", () => { $("#cu").value = b.dataset.preset; c.custom = true; c.users = +b.dataset.preset; store.set("cmp2", c); renderCmpOut(); }));
    sync(); renderCmpOut();
  }

  function renderCmpOut() {
    const u = t(), C = u.cmp, c = state.cmp, A = P[c.a], B = P[c.b];
    if (c.a === c.b) { $("#cmpout").innerHTML = `<p class="note">${esc(C.same)}</p>`; return; }
    const rel = relSet(c.hl);
    const onlyA = FEATURES.filter(f => f.plans.includes(c.a) && !f.plans.includes(c.b));
    const onlyB = FEATURES.filter(f => f.plans.includes(c.b) && !f.plans.includes(c.a));
    const both = FEATURES.filter(f => f.plans.includes(c.a) && f.plans.includes(c.b));
    const price = priceOf;
    const seats = p => Math.max(c.users, p.min);
    const tot = p => price(p) * seats(p);
    const dU = price(B) - price(A), dM = tot(B) - tot(A);
    const list = arr => arr.length ? `<ul class="flist">${GROUPS.flatMap(g => arr.filter(f => f.g === g.id)).map(f =>
      `<li class="${rel && rel.has(f.id) ? "rel" : ""}"><span><i class="dot g-${f.g}"></i>${ext(f.url, esc(f.name))}</span><span>${esc(L(G[f.g].name))}</span></li>`).join("")}</ul>` : `<p class="muted">—</p>`;
    const sign = n => (n > 0 ? "+" : n < 0 ? "−" : "") + money(Math.abs(n));
    $("#cmpout").innerHTML = `
      <div class="kpis" style="margin-top:16px">
        <div class="kpi"><span>${esc(C.diff)} · ${esc(C.perUser)}</span><b class="delta ${dU > 0 ? "up" : "down"}">${sign(dU)}</b></div>
        <div class="kpi"><span>${esc(C.diff)} · ${esc(C.perMonth)}</span><b class="delta ${dM > 0 ? "up" : "down"}">${sign(dM)}</b></div>
        <div class="kpi"><span>${esc(C.diff)} · ${esc(C.perYear)}</span><b class="delta ${dM > 0 ? "up" : "down"}">${sign(dM * 12)}</b></div>
        <div class="kpi"><span>${esc(C.both)}</span><b class="num">${both.length}</b></div>
      </div>
      <p class="hint" style="margin-top:10px">${esc(fmt(C.seats, { u: int(c.users), list: [A, B].map(p => p.name + " " + int(seats(p)) + (seats(p) > c.users ? "*" : "")).join(" · ") }))}</p>
      ${[A, B].some(p => seats(p) > c.users) ? `<p class="note">${[A, B].filter(p => seats(p) > c.users).map(p => esc(fmt(C.seatsMin, { p: p.name, n: p.min }))).join("<br>")}</p>` : ""}
      ${rel ? `<p class="hint" style="margin-top:10px">● ${esc(C.relevant)}: ${esc(L(IND[c.hl].name))}</p>` : ""}
      <div class="cmp-cols">
        <div><h3>${esc(fmt(C.onlyA, { p: A.name }))} <span class="muted num">(${onlyA.length})</span></h3>${list(onlyA)}</div>
        <div><h3>${esc(fmt(C.onlyB, { p: B.name }))} <span class="muted num">(${onlyB.length})</span></h3>${list(onlyB)}</div>
      </div>`;
  }

  // ── Matrix
  function renderMatrix() {
    const u = t(), M = u.mx, s = state.mx;
    $("#view").innerHTML = `
      ${head(M.title, M.lead, updatedLine())}
      <div class="toolbar">
        <input id="mq" type="search" placeholder="${esc(M.search)}" value="${esc(s.q)}" aria-label="${esc(M.search)}">
        <label>${esc(M.group)} <select id="mg"><option value="">${esc(M.all)}</option>${GROUPS.map(g => `<option value="${g.id}" ${s.g === g.id ? "selected" : ""}>${esc(L(g.name))}</option>`).join("")}</select></label>
        <label>${esc(M.industry)} ${industrySelect("mi", s.i)}</label>
        <label class="check" style="padding:0"><input id="md" type="checkbox" ${s.diff ? "checked" : ""}><span>${esc(M.onlyDiff)}</span></label>
        <button class="btn" type="button" id="mexp">${esc(M.export)}</button>
        <button class="btn" type="button" id="mcopy">${esc(M.copy)}</button>
        ${billToggle()}
        <span class="mx-count" id="mcount"></span>
      </div>
      <div class="tbl-wrap"><table><thead><tr><th>${esc(M.feature)}</th>${PLANS.map(p => `<th class="c">${esc(p.name)}<br><span class="num muted" style="font-weight:500">${money(priceOf(p))}</span></th>`).join("")}</tr></thead><tbody id="mbody"></tbody></table></div>`;
    const upd = () => {
      s.q = $("#mq").value.trim(); s.g = $("#mg").value; s.i = $("#mi").value; s.diff = $("#md").checked;
      try {
        const qs = new URLSearchParams();
        if (s.q) qs.set("q", s.q); if (s.g) qs.set("g", s.g); if (s.i) qs.set("i", s.i); if (s.diff) qs.set("diff", "1");
        history.replaceState(null, "", (qs.toString() ? "?" + qs : location.pathname) + "#matrix");
      } catch (e) { /* ignore */ }
      renderMxBody();
    };
    $("#mq").addEventListener("input", upd);
    ["#mg", "#mi", "#md"].forEach(x => $(x).addEventListener("change", upd));
    $("#mexp").addEventListener("click", exportCsv);
    $("#mcopy").addEventListener("click", () => {
      const done = () => toast(M.copied);
      try { navigator.clipboard.writeText(location.href).then(done, () => toast(location.href)); } catch (e) { toast(location.href); }
    });
    renderMxBody();
  }

  function mxRows() {
    const s = state.mx, q = s.q.toLowerCase(), rel = relSet(s.i);
    return FEATURES.filter(f =>
      (!s.g || f.g === s.g) &&
      (!rel || rel.has(f.id)) &&
      (!s.diff || f.plans.length < 4) &&
      (!q || f.name.toLowerCase().includes(q) || L(f.d).toLowerCase().includes(q)));
  }

  function renderMxBody() {
    const u = t(), rows = mxRows();
    const html = GROUPS.map(g => {
      const fs = rows.filter(f => f.g === g.id);
      if (!fs.length) return "";
      return `<tr class="grp"><td colspan="5">${esc(L(g.name))}</td></tr>` + fs.map(f => `<tr>
        <td><span class="feat">${ext(f.url, esc(f.name))} <button class="i" type="button" data-detail="${f.id}" aria-label="${esc(u.info)}" style="border:0;background:none;color:var(--muted);padding:0 4px">ⓘ</button></span>
          <span class="sub">${esc(L(f.d))}</span>
          ${(f.badges || []).length ? `<span class="pills" style="margin-top:4px">${f.badges.map(b => `<span class="pill ${["us", "usreg", "eu", "third", "check"].includes(b) ? "warn" : "ok"}">${esc(L(BADGES[b]))}</span>`).join("")}</span>` : ""}</td>
        ${PLANS.map(p => f.plans.includes(p.id) ? `<td class="c yes" aria-label="✓">✓</td>` : `<td class="c no" aria-label="—">—</td>`).join("")}</tr>`).join("");
    }).join("");
    $("#mbody").innerHTML = html;
    $("#mcount").textContent = rows.length + " " + u.mx.shown;
  }

  function exportCsv() {
    const rows = mxRows();
    const q = v => '"' + String(v).replace(/"/g, '""') + '"';
    const lines = [["Group", "Feature", ...PLANS.map(p => p.name), "Description", "Notes", "Documentation"].map(q).join(",")];
    rows.forEach(f => lines.push([L(G[f.g].name), f.name, ...PLANS.map(p => f.plans.includes(p.id) ? "Yes" : ""), L(f.d), (f.badges || []).map(b => L(BADGES[b])).join("; "), f.url].map(q).join(",")));
    try {
      const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "sharefile-maps-matrix-" + SITE.updated + ".csv";
      document.body.appendChild(a); a.click(); a.remove();
    } catch (e) { /* ignore */ }
  }

  // ── Calculator
  let calcAdj = null; // { p, from, n } when the users field was raised to a plan minimum
  function renderCalc() {
    const u = t(), K = u.calc, c = state.calc;
    $("#view").innerHTML = `
      ${head(K.title, K.lead, updatedLine())}
      <div class="grid2">
        <form class="box" id="calcf" onsubmit="return false">
          <fieldset><legend>${esc(K.plan)}</legend><div class="choices">
            ${PLANS.map(p => `<label class="choice"><input type="radio" name="plan" value="${p.id}" ${c.plan === p.id ? "checked" : ""}><span>${esc(p.name)} <small class="num" style="opacity:.75;color:inherit">${esc(u.home.min)} ${p.min}*</small></span></label>`).join("")}
          </div></fieldset>
          <label class="hint">${esc(K.users)}<br><input id="kusers" type="number" min="${P[c.plan].min}" max="100000" value="${c.users}"></label>
          <p class="hint" style="margin:6px 0 0">${esc(K.usersHint)} ${presetsHTML()}</p>
          <fieldset><legend>${esc(K.billing)}</legend>${billToggle()}</fieldset>
          <p class="hint">${esc(K.storageNote)}</p>
          <p class="hint">${esc(K.priceNote)}</p>
        </form>
        <section class="box" id="calcout" aria-live="polite"></section>
      </div>`;
    // Raise the users field to the plan minimum (on plan change or when the field is committed).
    const enforceMin = () => {
      const p = P[c.plan], el = $("#kusers");
      el.min = p.min;
      if (c.users < p.min) { calcAdj = { p: p.name, from: c.users, n: p.min }; c.users = p.min; el.value = p.min; }
    };
    // Untouched field follows the plan minimum; a typed number is kept (raised to the minimum if lower).
    const read = () => {
      c.plan = ($('input[name="plan"]:checked') || {}).value || "P";
      const v = readUsers($("#kusers")); c.custom = v !== null; c.users = v !== null ? v : P[c.plan].min;
    };
    const follow = () => { if (!c.custom) { c.users = P[c.plan].min; $("#kusers").value = c.users; $("#kusers").min = c.users; } };
    // While typing: recompute without rewriting the field. On commit (change) or plan change: enforce minimum.
    $("#kusers").addEventListener("input", () => { read(); calcAdj = null; store.set("calc2", c); renderCalcOut(); });
    $("#calcf").addEventListener("change", e => {
      if (e.target.id === "kusers") read(); else c.plan = ($('input[name="plan"]:checked') || {}).value || "P";
      calcAdj = null; follow(); enforceMin(); store.set("calc2", c); renderCalcOut();
    });
    document.querySelectorAll("[data-preset]").forEach(b => b.addEventListener("click", () => { $("#kusers").value = b.dataset.preset; read(); calcAdj = null; enforceMin(); store.set("calc2", c); renderCalcOut(); }));
    calcAdj = null; follow(); enforceMin(); store.set("calc2", c);
    renderCalcOut();
  }

  const storageFor = (p, seats) => p.id === "V" ? int(seats) + " GB" : int(Math.max(3, seats)) + " TB";

  function renderCalcOut() {
    const u = t(), K = u.calc, c = state.calc, p = P[c.plan];
    const seatsOf = q => Math.max(c.users, q.min);
    const seats = seatsOf(p);
    const per = priceOf(p);
    const star = q => seatsOf(q) > c.users ? "*" : "";
    $("#calcout").innerHTML = `
      <p class="eyebrow">${esc(p.name)} · ${esc(billLabel())}</p>
      ${calcAdj ? `<p class="note">${esc(fmt(K.adjusted, calcAdj))}</p>` : ""}
      <div class="kpis">
        <div class="kpi"><span>${esc(K.licenses)}</span><b class="num">${int(seats)}${star(p)}</b></div>
        <div class="kpi"><span>${esc(K.perUser)}</span><b>${money(per)}</b></div>
        <div class="kpi"><span>${esc(K.monthTotal)}</span><b>${money(per * seats)}</b></div>
        <div class="kpi"><span>${esc(K.yearTotal)}</span><b>${money(per * seats * 12, 0)}</b></div>
        <div class="kpi"><span>${esc(K.storage)}</span><b>${storageFor(p, seats)}</b></div>
      </div>
      ${seats > c.users ? `<p class="note">${esc(fmt(K.minApplied, { n: p.min }))}</p>` : ""}
      <h3>${esc(K.allPlans)} <span class="muted num">(${int(c.users)} ${esc(u.home.users)})</span></h3>
      <div class="tbl-wrap"><table id="calctbl"><thead><tr><th></th><th class="c">${esc(K.licCol)}</th><th class="c">${esc(K.perUser)}</th><th class="c">${esc(K.monthTotal)}</th><th class="c">${esc(K.yearTotal)}</th><th class="c">${esc(K.storage)}</th></tr></thead><tbody>
        ${PLANS.map(q => { const s = seatsOf(q), pr = priceOf(q);
          return `<tr data-plan="${q.id}" ${q.id === p.id ? 'style="background:var(--accent-soft)"' : ""}><td><b>${esc(q.name)}</b></td><td class="c num">${int(s)}${star(q)}</td><td class="c num">${money(pr)}</td><td class="c num">${money(pr * s)}</td><td class="c num">${money(pr * s * 12, 0)}</td><td class="c num">${storageFor(q, s)}</td></tr>`; }).join("")}
      </tbody></table></div>
      <p class="hint">${esc(fmt(K.minFoot, { list: PLANS.map(q => q.name + " " + q.min).join(" · ") }))}</p>`;
  }

  // ── Integrations
  const planPills = x => {
    if (x.plan === "check") return `<span class="pill warn">${esc(t().int.planCheck)}</span>`;
    if (!x.plan) return "";
    return PLANS.filter(p => x.plan.includes(p.id)).map(p => `<span class="pill">${esc(p.name)}</span>`).join("");
  };
  const intCard = x => `<article class="icard">
      <h3>${ext(x.url, esc(x.name))}</h3>
      <p>${esc(L(x.d))}</p>
      ${x.n ? `<p class="hint">${esc(L(x.n))}</p>` : ""}
      <div class="pills">${planPills(x)}${(x.badges || []).map(b => `<span class="pill warn">${esc(L(BADGES[b]))}</span>`).join("")}${(x.ind || []).map(i => `<span class="pill ok">${esc(L(IND[i].name))}</span>`).join("")}</div>
      ${videosFor("i", x.id).length ? `<ul class="flist">${videoList(videosFor("i", x.id))}</ul>` : ""}
      ${x.also ? `<p class="hint">${x.also.map(a => ext(a.url, esc(a.label) + " ↗")).join(" · ")}</p>` : ""}
    </article>`;

  function renderIntegrations() {
    const u = t(), I = u.int;
    state.intg = state.intg || { g: "", i: "", q: "" };
    $("#view").innerHTML = `
      ${head(I.title, I.lead)}
      <nav class="chips" aria-label="${esc(I.group)}">${INT_GROUPS.map(g => `<button type="button" class="chipbtn" data-ig="${g.id}" aria-pressed="${state.intg.g === g.id}">${esc(L(g.name))} <span class="num">${INTEGRATIONS.filter(x => x.g === g.id).length}</span></button>`).join("")}</nav>
      <div class="toolbar" style="margin-top:14px">
        <input id="iq" type="search" placeholder="${esc(I.search)}" value="${esc(state.intg.q)}" aria-label="${esc(I.search)}">
        <label>${esc(I.industry)} ${industrySelect("ii", state.intg.i)}</label>
        <span class="mx-count" id="icount"></span>
      </div>
      <div id="ilist"></div>
      <p class="hint" style="margin-top:16px">${esc(I.third)} ${esc(I.source)}</p>`;
    const draw = () => {
      const s = state.intg, q = s.q.toLowerCase();
      const match = x => (!s.g || x.g === s.g) && (!q || x.name.toLowerCase().includes(q) || L(x.d).toLowerCase().includes(q));
      const byGroup = xs => INT_GROUPS.map(g => {
        const gx = xs.filter(x => x.g === g.id);
        return gx.length ? `<section class="igroup"><h2>${esc(L(g.name))}</h2>${g.note ? `<p class="hint">${esc(L(g.note))}</p>` : ""}<div class="igrid">${gx.map(intCard).join("")}</div></section>` : "";
      }).join("");
      let html = "", shown = 0;
      if (!s.i) {
        const rows = INTEGRATIONS.filter(match);
        html = byGroup(rows); shown = rows.length;
      } else {
        const ind = IND[s.i], iname = L(ind.name);
        const spec = INTEGRATIONS.filter(x => (x.ind || []).includes(s.i));
        const feat = (ind.fi || []).map(id => INTEGRATIONS.find(x => x.id === id)).filter(x => x && !spec.includes(x));
        const other = INTEGRATIONS.filter(x => (x.ind || []).length && !x.ind.includes(s.i));
        const rest = INTEGRATIONS.filter(x => !spec.includes(x) && !feat.includes(x) && !other.includes(x));
        const sp = spec.filter(match), fe = feat.filter(match), re = rest.filter(match);
        shown = sp.length + fe.length + re.length;
        html = `<section class="box ind-focus" id="ifocus">
            <h2>${esc(fmt(I.specific, { i: iname }))} <span class="muted num">(${sp.length})</span></h2>
            ${spec.length ? (sp.length ? `<div class="igrid">${sp.map(intCard).join("")}</div>` : `<p class="muted">—</p>`) : `<p class="hint">${esc(fmt(I.noSpecific, { i: iname }))}</p>`}
            <h2 style="margin-top:18px">${esc(fmt(I.featured, { i: iname }))} <span class="muted num">(${fe.length})</span> ${ext(ind.url, "↗")}</h2>
            ${feat.length ? (fe.length ? `<div class="igrid">${fe.map(intCard).join("")}</div>` : `<p class="muted">—</p>`) : `<p class="hint">${esc(fmt(I.noFeatured, { i: iname }))}</p>`}
          </section>
          <h2 style="margin-top:22px">${esc(I.general)}</h2>
          ${byGroup(re)}
          <p class="hint">${esc(fmt(I.hidden, { n: other.length }))}</p>`;
      }
      $("#ilist").innerHTML = html;
      $("#icount").textContent = shown + " " + I.count;
      document.querySelectorAll("[data-ig]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ig === s.g)));
      const il = $("#ilist"); il.classList.remove("updated"); void il.offsetWidth; il.classList.add("updated");
    };
    document.querySelectorAll("[data-ig]").forEach(b => b.addEventListener("click", () => { state.intg.g = state.intg.g === b.dataset.ig ? "" : b.dataset.ig; draw(); }));
    $("#iq").addEventListener("input", e => { state.intg.q = e.target.value; draw(); });
    $("#ii").addEventListener("change", e => { state.intg.i = e.target.value; draw(); });
    draw();
  }

  // ── Knowledge, glossary, logs
  function renderKnowledge() {
    const u = t();
    $("#view").innerHTML = `${head(u.kn.title, u.kn.lead)}
      <div class="cols">${KNOWLEDGE.map(k => `<section class="box"><h3>${esc(L(k.g))}</h3><ul class="links">${k.links.map(l => `<li>${l.v ? "▶ " : ""}${ext(l.u, esc(l.t))}${l.long ? ` <span class="hint">· ${esc(t().video.long)}</span>` : ""}</li>`).join("")}</ul></section>`).join("")}</div>`;
  }

  function renderGlossary() {
    const u = t();
    $("#view").innerHTML = `${head(u.gl.title, u.gl.lead)}
      <div class="toolbar"><input id="gq" type="search" placeholder="${esc(u.gl.search)}" aria-label="${esc(u.gl.search)}"></div>
      <dl class="gl box" id="gll"></dl>`;
    const draw = () => {
      const q = $("#gq").value.toLowerCase();
      $("#gll").innerHTML = GLOSSARY.filter(g => !q || g.term.toLowerCase().includes(q) || L(g.d).toLowerCase().includes(q))
        .map(g => `<div><dt>${esc(g.term)}</dt><dd>${esc(L(g.d))}</dd></div>`).join("");
    };
    $("#gq").addEventListener("input", draw); draw();
  }

  function renderChangelog() {
    const u = t();
    $("#view").innerHTML = `${head(u.ch.title, u.ch.lead)}
      <div class="tbl-wrap"><table><tbody>${CHANGELOG.map(c => `<tr><td class="num" style="width:110px">${c.date}</td><td class="num" style="width:70px">v${c.v}</td><td>${esc(L(c.d))}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function renderDisc() {
    const u = t();
    $("#view").innerHTML = `${head(u.ds.title, u.ds.lead)}
      <div class="tbl-wrap"><table><thead><tr><th>#</th><th>${esc(u.ds.title)}</th><th>${esc(u.ds.where)}</th></tr></thead><tbody>
      ${DISCREPANCIES.map((d, i) => `<tr><td class="num">${i + 1}</td><td>${esc(L(d.d))}</td><td>${ext(d.where, esc(d.where.replace(/^https:\/\/(www\.)?/, "")))}</td></tr>`).join("")}
      </tbody></table></div>`;
  }

  // ── Toast
  function toast(msg) {
    const el = document.createElement("div"); el.className = "toast"; el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.remove(), 2200);
  }

  // ── Analytics with consent (only when an ID is configured)
  function loadAnalytics() {
    if (!SITE.analyticsId) return;
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(SITE.analyticsId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date()); window.gtag("config", SITE.analyticsId, { anonymize_ip: true });
  }
  function cookieBanner() {
    if (!SITE.analyticsId) return;
    const c = store.get("consent", null);
    if (c === "yes") { loadAnalytics(); return; }
    if (c === "no") return;
    const u = t(), el = document.createElement("div");
    el.className = "cookie"; el.setAttribute("role", "region");
    el.innerHTML = `<p>${esc(u.cookies.text)}</p><button class="btn" type="button" data-c="no">${esc(u.cookies.reject)}</button><button class="btn primary" type="button" data-c="yes">${esc(u.cookies.accept)}</button>`;
    el.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (!b) return; store.set("consent", b.dataset.c); if (b.dataset.c === "yes") loadAnalytics(); el.remove(); });
    document.body.appendChild(el);
  }

  // ── Theme
  function applyTheme() {
    const th = store.get("theme", "system");
    if (th === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", th);
  }

  // ── Boot
  document.addEventListener("click", e => {
    const bt = e.target.closest("[data-bill]");
    if (bt) { state.bill = bt.dataset.bill; store.set("bill", state.bill); const y = window.scrollY; route(); window.scrollTo(0, y); return; }
    const d = e.target.closest("[data-detail]");
    if (d) { e.preventDefault(); openDetail(d.dataset.detail); }
  });
  $("#lang").addEventListener("change", e => { lang = e.target.value; store.set("lang", lang); document.documentElement.lang = lang; route(); });
  $("#theme").addEventListener("click", () => {
    const order = ["system", "light", "dark"], cur = store.get("theme", "system");
    store.set("theme", order[(order.indexOf(cur) + 1) % 3]); applyTheme(); renderChrome(($("#nav [aria-current]") || {}).getAttribute ? $("#nav [aria-current]").getAttribute("href").slice(1) : "home");
  });
  window.addEventListener("hashchange", route);
  document.documentElement.lang = lang;
  applyTheme();
  route();
  cookieBanner();
})();
