/* Interface text. Feature names stay in official English; everything else is translated. */
const UI = {
  es: {
    video: { title: "Video oficial", lang: "en inglés; activa los subtítulos en español", tutorials: "Tutoriales oficiales en YouTube", overview: "Ver qué es ShareFile (en inglés)", long: "video largo" },
    int: { title: "Integraciones", lead: "Integraciones oficiales de ShareFile con herramientas de correo, almacenamiento, identidad, seguridad, CRM y contabilidad, más integraciones por industria. Cada una enlaza a su documentación oficial.", search: "Buscar integración (ej. Salesforce)", plans: "Planes", planCheck: "Tabla de planes: desde Advanced. Documentación del plugin: Premium o superior.", group: "Categoría", industry: "Industria", all: "Todas", third: "Las integraciones de terceros requieren las licencias del proveedor correspondiente; algunas pueden estar limitadas o no disponibles.", source: "Fuentes: sharefile.com/apps-integrations y docs.sharefile.com.", forIndustry: "Integraciones para esta industria", specific: "Específicas de {i}", noSpecific: "ShareFile no publica integraciones específicas para {i}. Las de abajo sirven igual.", featured: "Destacadas en la página oficial de {i}", noFeatured: "La página oficial de {i} no destaca integraciones concretas.", general: "Resto de integraciones, por función (sirven para cualquier industria)", hidden: "Se ocultan {n} integraciones específicas de otras industrias.", count: "integraciones" },
    lic: { minUsers: "Mínimo de {n} usuarios", minShort: "mín. {n} licencias", storage: "{s} por licencia, compartido", pricing: "Este sitio no publica precios. Para precios en tu país (impuestos, retenciones y moneda local), contacta a tu partner o al representante de ShareFile de tu región." },
    lang: "Español", siteTag: "Mapa de planes ShareFile", unofficial: "Sitio no oficial", skip: "Saltar al contenido",
    nav: { home: "Inicio", map: "Mapa de planes", vdr: "Data Room", recommend: "Recomendador", compare: "Comparador", matrix: "Matriz", calc: "Calculadora", knowledge: "Conocimiento", glossary: "Glosario", changelog: "Cambios", discrepancies: "Discrepancias", integrations: "Integraciones", usecases: "Casos de uso", adopt: "Aprovecha tu plan", compliance: "Cumplimiento" },
    by: "Por", updated: "Actualizado",
    home: {
      plans: "Planes", industries: "Industrias", sizes: "Tamaño de empresa", tools: "Herramientas", resources: "Recursos",
      allPlans: "Todos", stepup: "step-up", min: "mín.", users: "usuarios",
      lead: "Qué incluye cada plan de ShareFile, cuál conviene según la industria y el tamaño, y cuánto almacenamiento incluye. Cada función enlaza a la documentación oficial."
    },
    map: {
      title: "Mapa de planes ShareFile", vdrTitle: "Virtual Data Room",
      tierA: "Advanced", tierP: "Premium step-up", tierE: "Enterprise step-up",
      tierAHint: "Base", tierPHint: "Agrega a Advanced", tierEHint: "Agrega a Premium", total: "{n} en total",
      highlight: "Resaltar por industria", none: "Ninguna", views: "Vista",
      viewAll: "Completo", viewA: "Advanced", viewP: "Premium step-up", viewE: "Enterprise step-up",
      legend: "Clic en un recuadro abre la documentación oficial. El botón i muestra detalles.",
      vdrOnly: "Exclusivo de VDR", notInVdr: "Funciones de Advanced, Premium o Enterprise que no incluye VDR",
      lead: "Cada columna suma funciones al plan anterior: Premium incluye todo Advanced y Enterprise incluye todo Premium. Usa las vistas step-up para ver solo lo que agrega cada plan.",
      vdrLead: "VDR es un plan aparte, no un nivel superior. Estas son las funciones que incluye.",
      count: "funciones"
    },
    detail: { docs: "Ver documentación oficial", plans: "Incluido en", source: "Fuente de inclusión", also: "También", close: "Cerrar", note: "Nota" },
    rec: {
      resultFor: "Plan recomendado · {who}", stepInd: "Según la industria", stepSig: "Según tus señales", entOnly: "solo en Enterprise", needsFor: "Funciones que destaca la página oficial de {ind}", samePlan: "Según sharefile.com, las 9 industrias se cubren desde Premium. Lo que cambia entre industrias son las funciones clave de abajo. Lo que lleva a Enterprise son las señales de seguridad del paso 3.",
      title: "Recomendador", lead: "Responde tres preguntas. El resultado sale de lo que publica sharefile.com para cada industria y del FAQ oficial del plan Enterprise.",
      q1: "1. Industria", q1b: "Segmento", q2: "2. Tamaño de la empresa", q3: "3. Señales de Enterprise", q3hint: "Marca las que apliquen.",
      other: "Otra / general", otherHint: "Solo compartir y guardar archivos de forma segura",
      result: "Plan recomendado", why: "Por qué", needs: "Funciones que destaca la página oficial de la industria", from: "desde",
      sigAdds: "Las señales marcadas agregan", vdrToo: "Además, considera Virtual Data Room", vdrWhy: "Para M&A, auditorías o litigios, sharefile.com recomienda Virtual Data Room.",
      warnings: "Ten en cuenta", sizeNote: "El tamaño ajusta el mensaje, pero no cambia el plan por sí solo. Lo que justifica Enterprise son las señales de seguridad.",
      industryPage: "Página oficial de la industria", sizePage: "Página oficial del tamaño", openCalc: "Calcular almacenamiento", openCompare: "Comparar con el plan anterior",
      baseReason: "Todas las funciones que destaca la página de {ind} están incluidas desde {plan}.",
      advReason: "Para compartir y guardar archivos sin firma, portal ni flujos, Advanced cubre lo necesario.",
      entReason: "Marcaste señales que sharefile.com asocia a Enterprise: organizaciones grandes o reguladas que necesitan monitoreo, protección de datos e investigación."
    },
    cmp: {
      title: "Comparador", lead: "Elige dos planes y mira qué cambia.",
      planA: "Plan A", planB: "Plan B",
      onlyA: "Solo en {p}", onlyB: "Solo en {p}", both: "En ambos",
      same: "Elige dos planes distintos.", highlight: "Resaltar por industria", relevant: "relevante para la industria",
      count: "{n} funciones", everything: "Todo lo de {p}", plus: "Más estas {k}:", own: "Solo en {p} ({k}):", base: "Base común: {n} funciones que tienen {a} y {b}", seeAll: "Ver las {n} funciones", none: "Ninguna: todo lo de este plan está en el otro.", total: "{p} tiene {n} funciones en total.", upTo: "en {p} sube a {y}", sumSuper: "{b} incluye todo lo de {a} y agrega {k} funciones.", sumSuperUp: "{b} incluye todo lo de {a} ({x} sube a {y}) y agrega {k} funciones.", sumGen: "{a} tiene {na} funciones y {b} tiene {nb}; comparten {n}. Cada uno tiene funciones que el otro no."
    },
    mx: {
      title: "Matriz de funciones", lead: "Todas las funciones de la tabla oficial, en una sola vista. El enlace de la página guarda tus filtros.",
      search: "Buscar función", group: "Grupo", all: "Todos", industry: "Industria", onlyDiff: "Solo diferencias",
      feature: "Función", export: "Exportar CSV", copy: "Copiar enlace", copied: "Enlace copiado", shown: "funciones visibles"
    },
    calc: {
      title: "Calculadora de almacenamiento", lead: "Cuánto almacenamiento en la nube incluye la cuenta según el plan y la cantidad de licencias.",
      plan: "Plan", users: "Licencias (usuarios empleados)", storage: "Almacenamiento de la cuenta", perLicense: "Por licencia", total: "Total compartido",
      formula: "{n} licencias × {per} = {total} para toda la cuenta",
      minApplied: "Se aplica el mínimo de {n} licencias del plan.", allPlans: "Todos los planes con tus licencias",
      usersHint: "Empieza en el mínimo del plan. Escribe tu cantidad o elige:", maxNote: "ShareFile no publica un máximo de licencias por plan; se pueden agregar en cualquier momento. Solo los usuarios empleados llevan licencia: los usuarios cliente son ilimitados en todos los planes.", licenses: "Licencias", licCol: "Licencias", adjusted: "{p} requiere mínimo {n} licencias: se ajustó de {from} a {n}.",
      minFoot: "* Mínimo de licencias requeridas por plan: {list}.",
      poolTitle: "El almacenamiento es compartido",
      pool: "No es una cuota por usuario. El almacenamiento de todas las licencias se suma en una sola bolsa para toda la cuenta, y un usuario puede usar más que su parte mientras la cuenta no llegue a su total.",
      counts: "Cuentan para el total: carpetas personales, carpetas compartidas, File Box y la papelera de reciclaje.",
      full: "Si la cuenta llega al límite, se bloquean las cargas y la creación de documentos nuevos. Los usuarios pueden seguir entrando, viendo y descargando, y el administrador puede comprar más almacenamiento (Add Storage).",
      packs: "Advanced, Premium y Enterprise: se amplía con paquetes de 3 TB. Enterprise también ofrece almacenamiento on-premises o híbrido.",
      quota: "En Enterprise, el administrador puede fijar cuotas por usuario (Storage Quota) si quiere limitar cuánto usa cada uno.",
      sources: "Fuentes oficiales:"
    },
    kn: { title: "Conocimiento", lead: "Enlaces oficiales de ShareFile y Progress, agrupados por tema." },
    gl: { title: "Glosario", lead: "Términos que aparecen en planes y conversaciones de venta.", search: "Buscar término" },
    ch: { title: "Registro de cambios", lead: "Qué cambió en este sitio y cuándo." },
    ds: { title: "Discrepancias en la fuente oficial", lead: "Inconsistencias encontradas en sharefile.com o en la documentación, y cómo se tratan aquí.", where: "Dónde" },
    uc: { lead: "Los procesos más comunes por industria, según las páginas oficiales de ShareFile, con las funciones que los resuelven, el plan mínimo y clientes publicados por ShareFile.", all: "Todas", problem: "El problema", how: "Cómo ayuda ShareFile", from: "Desde {p}", customers: "Clientes publicados", source: "Fuente oficial", noCust: "ShareFile no publica historias de clientes recientes para esta industria.", signNote: "La firma electrónica de ShareFile es firma electrónica simple. Para actos que la ley de tu país reserva a la firma digital certificada o a un notario, usa esa vía; ShareFile puede guardar y compartir esos documentos ya firmados.", verify: "Las cifras de clientes son las que publica cada historia en sharefile.com. Verifícalas en la fuente y consulta al representante de ShareFile de tu región.", seeAll: "Ver los casos de uso de {ind}", count: "{n} casos" },
    adopt: { lead: "Autodiagnóstico: marca qué funciones de tu plan ya usan y descubre por dónde empezar con lo que ya pagan.", step1: "1. Tu plan actual", industry: "Industria (opcional, prioriza mejor)", privacy: "Tus respuestas se guardan solo en este navegador. No se envían a nadie.", step2: "2. ¿Qué funciones usan hoy?", reset: "Borrar respuestas", dataHint: "¿No sabes qué se usa? El administrador puede verlo con el reporte oficial de uso y actividad:", yes: "La usamos", no: "No la usamos", unknown: "No sé", adoption: "Adopción del plan", ofTotal: "{n} funciones activables en {p}.", startHere: "Empieza por aquí", why: "Funciones sin usar o sin confirmar que más casos de uso habilitan.", whyInd: "Funciones sin usar o sin confirmar que más casos de uso de {ind} habilitan.", enables: "Habilita", copy: "Copiar resumen", copied: "Resumen copiado", allUsed: "¡Usan todas las funciones activables de su plan!", sumHead: "Plan {p}: adopción {pct}% ({y} de {n} funciones).", sumFoot: "Fuente: guías oficiales de docs.sharefile.com. Para ayuda, contacta al representante de ShareFile de tu región o a tu partner." },
    comp: { lead: "Normas públicas de cada país y dónde encaja ShareFile en cada requisito, con el texto oficial y lo que le corresponde a la empresa.", principleTitle: "Quién cumple:", principle: "la empresa que usa ShareFile. Muchas obligaciones recaen directamente en ella, y el cumplimiento depende de cómo implementa, configura, gobierna y usa la solución. ShareFile ofrece capacidades y evidencia que apoyan esos requisitos; no los cumple por el cliente.", notLegal: "Información general, no asesoría legal: valida con tu asesor legal y con el representante de ShareFile de tu región.", country: "País", more: "Más países en preparación.", verified: "Verificado el", residency: "Dónde quedan los datos", authority: "Autoridad", applies: "Aplica a", official: "Texto oficial", ok: "Verificado", check: "Confirmar vigencia en SCIJ", checkGaceta: "Confirmar numeración en la Gaceta Oficial", checkAmended: "Modificada: confirmar texto vigente", pendingTitle: "Pendiente de verificar", res_none: "ShareFile no tiene zona de almacenamiento gestionada en {c}: sus zonas están en EE. UU., Canadá, Brasil, Unión Europea, Japón, Australia, Singapur, Emiratos e India. Usar una zona gestionada implica guardar los datos fuera de {c}. Para mantenerlos en el país existe Storage Zones Controller, una zona que el cliente opera en su propia infraestructura (con versión soportada y parches al día). El Trust Center lista además los subprocesadores de ShareFile y sus países.", res_br: "ShareFile tiene una zona gestionada en Brasil (ShareFile Brazil), la única de la región: los archivos pueden guardarse en el país. Confirma con tu representante qué otros datos del servicio se procesan fuera; el Trust Center lista los subprocesadores de ShareFile y sus países.", extract: "extracto del texto oficial", sf: "Dónde encaja ShareFile", you: "Le corresponde a la empresa", foot: "Para cuestionarios regulatorios o de seguridad, pide la revisión a tu representante de ShareFile. Algunos documentos del Trust Center requieren solicitar acceso:" },
    foot: {
      disclaimer: "Sitio no oficial, mantenido de forma independiente. No representa a Progress Software Corporation. ShareFile y Progress son marcas de Progress Software Corporation.",
      truth: "Fuentes oficiales: {links}. Verifica siempre la información ahí y, antes de cualquier decisión, contacta al representante de ShareFile de tu región o a tu partner."
    },
    cookies: { text: "Usamos cookies de analítica para saber qué secciones se consultan. No identifican a nadie.", accept: "Aceptar", reject: "Rechazar" },
    theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema", info: "Detalles"
  },

  en: {
    video: { title: "Official video", lang: "English", tutorials: "Official tutorials on YouTube", overview: "See what ShareFile is", long: "long video" },
    int: { title: "Integrations", lead: "Official ShareFile integrations with email, storage, identity, security, CRM and accounting tools, plus industry-specific integrations. Each links to its official documentation.", search: "Search integrations (e.g. Salesforce)", plans: "Plans", planCheck: "Plans table: from Advanced. Plug-in documentation: Premium or higher.", group: "Category", industry: "Industry", all: "All", third: "Third-party integrations require the vendor's licenses; some may be limited or unavailable.", source: "Sources: sharefile.com/apps-integrations and docs.sharefile.com.", forIndustry: "Integrations for this industry", specific: "Specific to {i}", noSpecific: "ShareFile publishes no integrations specific to {i}. The ones below still apply.", featured: "Featured on the official {i} page", noFeatured: "The official {i} page does not feature specific integrations.", general: "Other integrations, by function (useful for any industry)", hidden: "{n} integrations specific to other industries are hidden.", count: "integrations" },
    lic: { minUsers: "Minimum of {n} users", minShort: "min. {n} licenses", storage: "{s} per license, pooled", pricing: "This site does not publish prices. For pricing in your country (taxes, withholding and local currency), contact your partner or your regional ShareFile representative." },
    lang: "English", siteTag: "ShareFile plans map", unofficial: "Unofficial site", skip: "Skip to content",
    nav: { home: "Home", map: "Plans map", vdr: "Data Room", recommend: "Recommender", compare: "Comparator", matrix: "Matrix", calc: "Calculator", knowledge: "Knowledge", glossary: "Glossary", changelog: "Changes", discrepancies: "Discrepancies", integrations: "Integrations", usecases: "Use cases", adopt: "Get more from your plan", compliance: "Compliance" },
    by: "By", updated: "Updated",
    home: {
      plans: "Plans", industries: "Industries", sizes: "Company size", tools: "Tools", resources: "Resources",
      allPlans: "All", stepup: "step-up", min: "min.", users: "users",
      lead: "What each ShareFile plan includes, which one fits by industry and size, and how much storage it includes. Every feature links to official documentation."
    },
    map: {
      title: "ShareFile plans map", vdrTitle: "Virtual Data Room",
      tierA: "Advanced", tierP: "Premium step-up", tierE: "Enterprise step-up",
      tierAHint: "Base", tierPHint: "Adds to Advanced", tierEHint: "Adds to Premium", total: "{n} in total",
      highlight: "Highlight by industry", none: "None", views: "View",
      viewAll: "Full", viewA: "Advanced", viewP: "Premium step-up", viewE: "Enterprise step-up",
      legend: "Click a tile to open the official documentation. The i button shows details.",
      vdrOnly: "VDR only", notInVdr: "Advanced, Premium or Enterprise features that VDR does not include",
      lead: "Each column adds features to the plan before it: Premium includes all of Advanced and Enterprise includes all of Premium. Use the step-up views to see only what each plan adds.",
      vdrLead: "VDR is a separate plan, not a higher tier. These are the features it includes.",
      count: "features"
    },
    detail: { docs: "Open official documentation", plans: "Included in", source: "Inclusion source", also: "Also", close: "Close", note: "Note" },
    rec: {
      resultFor: "Recommended plan · {who}", stepInd: "By industry", stepSig: "By your signals", entOnly: "Enterprise only", needsFor: "Features the official {ind} page highlights", samePlan: "Per sharefile.com, all 9 industries are covered from Premium. What changes between industries are the key features below. What leads to Enterprise are the security signals in step 3.",
      title: "Recommender", lead: "Answer three questions. The result comes from what sharefile.com publishes for each industry and from the official Enterprise plan FAQ.",
      q1: "1. Industry", q1b: "Segment", q2: "2. Company size", q3: "3. Enterprise signals", q3hint: "Check all that apply.",
      other: "Other / general", otherHint: "Only secure file sharing and storage",
      result: "Recommended plan", why: "Why", needs: "Features the official industry page highlights", from: "from",
      sigAdds: "The checked signals add", vdrToo: "Also consider Virtual Data Room", vdrWhy: "For M&A, audits or litigation, sharefile.com recommends Virtual Data Room.",
      warnings: "Keep in mind", sizeNote: "Size shapes the message but does not change the plan by itself. Security signals are what justify Enterprise.",
      industryPage: "Official industry page", sizePage: "Official company-size page", openCalc: "Calculate storage", openCompare: "Compare with the plan below",
      baseReason: "Every feature the {ind} page highlights is included from {plan}.",
      advReason: "For secure file sharing and storage without e-signature, portal or workflows, Advanced covers it.",
      entReason: "You checked signals sharefile.com links to Enterprise: larger or regulated organizations that need monitoring, data protection and investigation."
    },
    cmp: {
      title: "Comparator", lead: "Pick two plans and see what changes.",
      planA: "Plan A", planB: "Plan B",
      onlyA: "Only in {p}", onlyB: "Only in {p}", both: "In both",
      same: "Pick two different plans.", highlight: "Highlight by industry", relevant: "relevant to the industry",
      count: "{n} features", everything: "Everything in {p}", plus: "Plus these {k}:", own: "Only in {p} ({k}):", base: "Shared base: {n} features in both {a} and {b}", seeAll: "See all {n} features", none: "None: everything in this plan is in the other.", total: "{p} has {n} features in total.", upTo: "in {p} upgrades to {y}", sumSuper: "{b} includes everything in {a} and adds {k} features.", sumSuperUp: "{b} includes everything in {a} ({x} upgrades to {y}) and adds {k} features.", sumGen: "{a} has {na} features and {b} has {nb}; they share {n}. Each has features the other lacks."
    },
    mx: {
      title: "Feature matrix", lead: "Every feature in the official table, in one view. The page link keeps your filters.",
      search: "Search features", group: "Group", all: "All", industry: "Industry", onlyDiff: "Differences only",
      feature: "Feature", export: "Export CSV", copy: "Copy link", copied: "Link copied", shown: "features shown"
    },
    calc: {
      title: "Storage calculator", lead: "How much cloud storage the account includes, by plan and number of licenses.",
      plan: "Plan", users: "Licenses (employee users)", storage: "Account storage", perLicense: "Per license", total: "Pooled total",
      formula: "{n} licenses × {per} = {total} for the whole account",
      minApplied: "The plan's {n}-license minimum applies.", allPlans: "Every plan with your licenses",
      usersHint: "Starts at the plan minimum. Type your number or pick one:", maxNote: "ShareFile publishes no maximum number of licenses per plan; you can add them anytime. Only employee users need a license: client users are unlimited on every plan.", licenses: "Licenses", licCol: "Licenses", adjusted: "{p} requires at least {n} licenses: adjusted from {from} to {n}.",
      minFoot: "* Minimum licenses required per plan: {list}.",
      poolTitle: "Storage is pooled",
      pool: "It is not a per-user quota. Storage from every license adds up to one pool for the whole account, and a user can use more than their share as long as the account stays within its total.",
      counts: "What counts toward the total: personal folders, shared folders, File Box and the Recycle Bin.",
      full: "If the account reaches its limit, uploads and new documents are blocked. Users can still sign in, view and download, and the admin can buy more storage (Add Storage).",
      packs: "Advanced, Premium and Enterprise: expandable with 3 TB packs. Enterprise also offers on-premises or hybrid storage.",
      quota: "On Enterprise, admins can set per-user quotas (Storage Quota) to limit how much each user consumes.",
      sources: "Official sources:"
    },
    kn: { title: "Knowledge", lead: "Official ShareFile and Progress links, grouped by topic." },
    gl: { title: "Glossary", lead: "Terms that come up in plans and sales conversations.", search: "Search terms" },
    ch: { title: "Change log", lead: "What changed on this site and when." },
    ds: { title: "Discrepancies in the official source", lead: "Inconsistencies found on sharefile.com or in the documentation, and how this site handles them.", where: "Where" },
    uc: { lead: "The most common processes per industry, from ShareFile's official pages, with the features that solve them, the minimum plan and customers ShareFile has published.", all: "All", problem: "The problem", how: "How ShareFile helps", from: "From {p}", customers: "Published customers", source: "Official source", noCust: "ShareFile publishes no recent customer stories for this industry.", signNote: "ShareFile's e-signature is a simple electronic signature. For acts your country's law reserves for a certified digital signature or a notary, use that route; ShareFile can store and share those signed documents.", verify: "Customer figures are those each story publishes on sharefile.com. Verify them at the source and talk to your regional ShareFile representative.", seeAll: "See the {ind} use cases", count: "{n} cases" },
    adopt: { lead: "Self-diagnosis: mark which features of your plan you already use and find where to start with what you already pay for.", step1: "1. Your current plan", industry: "Industry (optional, better priorities)", privacy: "Your answers are stored only in this browser. Nothing is sent to anyone.", step2: "2. Which features do you use today?", reset: "Clear answers", dataHint: "Not sure what's used? The admin can check it with the official usage and activity report:", yes: "We use it", no: "We don't", unknown: "Not sure", adoption: "Plan adoption", ofTotal: "{n} features you can turn on in {p}.", startHere: "Start here", why: "Unused or unconfirmed features that enable the most use cases.", whyInd: "Unused or unconfirmed features that enable the most {ind} use cases.", enables: "Enables", copy: "Copy summary", copied: "Summary copied", allUsed: "You use every feature you can turn on in your plan!", sumHead: "{p} plan: {pct}% adoption ({y} of {n} features).", sumFoot: "Source: official docs.sharefile.com guides. For help, contact your regional ShareFile representative or your partner." },
    comp: { lead: "Each country's public regulations and where ShareFile fits each requirement, with the official text and what falls to the company.", principleTitle: "Who complies:", principle: "the company using ShareFile. Many obligations fall directly on it, and compliance depends on how it implements, configures, governs and uses the solution. ShareFile provides capabilities and evidence that support those requirements; it does not comply on the customer's behalf.", notLegal: "General information, not legal advice: validate with your legal advisor and your regional ShareFile representative.", country: "Country", more: "More countries in progress.", verified: "Verified on", residency: "Where the data lives", authority: "Authority", applies: "Applies to", official: "Official text", ok: "Verified", check: "Confirm current status in SCIJ", checkGaceta: "Confirm article numbering in the Official Gazette", checkAmended: "Amended: confirm current text", pendingTitle: "Pending verification", res_none: "ShareFile has no managed storage zone in {c}: its zones are in the US, Canada, Brazil, the European Union, Japan, Australia, Singapore, the UAE and India. Using a managed zone means storing data outside {c}. To keep data in the country there is Storage Zones Controller, a zone the customer runs on its own infrastructure (on a supported, patched version). The Trust Center also lists ShareFile's subprocessors and their countries.", res_br: "ShareFile has a managed zone in Brazil (ShareFile Brazil), the only one in the region: files can be stored in the country. Confirm with your representative which other service data is processed abroad; the Trust Center lists ShareFile's subprocessors and their countries.", extract: "extract of the official text", sf: "Where ShareFile fits", you: "What falls to the company", foot: "For regulatory or security questionnaires, ask your ShareFile representative for a review. Some Trust Center documents require requesting access:" },
    foot: {
      disclaimer: "Unofficial site, independently maintained. It does not represent Progress Software Corporation. ShareFile and Progress are trademarks of Progress Software Corporation.",
      truth: "Official sources: {links}. Always verify the information there and, before any decision, contact your regional ShareFile representative or your partner."
    },
    cookies: { text: "We use analytics cookies to learn which sections are used. They do not identify anyone.", accept: "Accept", reject: "Decline" },
    theme: "Theme", light: "Light", dark: "Dark", system: "System", info: "Details"
  },

  pt: {
    video: { title: "Vídeo oficial", lang: "em inglês; ative as legendas em português", tutorials: "Tutoriais oficiais no YouTube", overview: "Ver o que é o ShareFile (em inglês)", long: "vídeo longo" },
    int: { title: "Integrações", lead: "Integrações oficiais do ShareFile com ferramentas de e-mail, armazenamento, identidade, segurança, CRM e contabilidade, além de integrações por setor. Cada uma leva à documentação oficial.", search: "Buscar integração (ex. Salesforce)", plans: "Planos", planCheck: "Tabela de planos: desde o Advanced. Documentação do plugin: Premium ou superior.", group: "Categoria", industry: "Setor", all: "Todas", third: "Integrações de terceiros exigem as licenças do fornecedor; algumas podem estar limitadas ou indisponíveis.", source: "Fontes: sharefile.com/apps-integrations e docs.sharefile.com.", forIndustry: "Integrações para este setor", specific: "Específicas de {i}", noSpecific: "O ShareFile não publica integrações específicas para {i}. As abaixo também se aplicam.", featured: "Destacadas na página oficial de {i}", noFeatured: "A página oficial de {i} não destaca integrações específicas.", general: "Demais integrações, por função (servem para qualquer setor)", hidden: "{n} integrações específicas de outros setores estão ocultas.", count: "integrações" },
    lic: { minUsers: "Mínimo de {n} usuários", minShort: "mín. {n} licenças", storage: "{s} por licença, compartilhado", pricing: "Este site não publica preços. Para preços no seu país (impostos, retenções e moeda local), contate seu parceiro ou o representante do ShareFile da sua região." },
    lang: "Português", siteTag: "Mapa de planos ShareFile", unofficial: "Site não oficial", skip: "Pular para o conteúdo",
    nav: { home: "Início", map: "Mapa de planos", vdr: "Data Room", recommend: "Recomendador", compare: "Comparador", matrix: "Matriz", calc: "Calculadora", knowledge: "Conhecimento", glossary: "Glossário", changelog: "Mudanças", discrepancies: "Discrepâncias", integrations: "Integrações", usecases: "Casos de uso", adopt: "Aproveite seu plano", compliance: "Conformidade" },
    by: "Por", updated: "Atualizado",
    home: {
      plans: "Planos", industries: "Setores", sizes: "Porte da empresa", tools: "Ferramentas", resources: "Recursos",
      allPlans: "Todos", stepup: "step-up", min: "mín.", users: "usuários",
      lead: "O que cada plano do ShareFile inclui, qual convém por setor e porte, e quanto armazenamento inclui. Cada recurso leva à documentação oficial."
    },
    map: {
      title: "Mapa de planos ShareFile", vdrTitle: "Virtual Data Room",
      tierA: "Advanced", tierP: "Premium step-up", tierE: "Enterprise step-up",
      tierAHint: "Base", tierPHint: "Adiciona ao Advanced", tierEHint: "Adiciona ao Premium", total: "{n} no total",
      highlight: "Destacar por setor", none: "Nenhum", views: "Visão",
      viewAll: "Completo", viewA: "Advanced", viewP: "Premium step-up", viewE: "Enterprise step-up",
      legend: "Clique em um bloco para abrir a documentação oficial. O botão i mostra detalhes.",
      vdrOnly: "Exclusivo do VDR", notInVdr: "Recursos de Advanced, Premium ou Enterprise que o VDR não inclui",
      lead: "Cada coluna soma recursos ao plano anterior: o Premium inclui todo o Advanced e o Enterprise inclui todo o Premium. Use as visões step-up para ver só o que cada plano adiciona.",
      vdrLead: "O VDR é um plano à parte, não um nível superior. Estes são os recursos que ele inclui.",
      count: "recursos"
    },
    detail: { docs: "Abrir documentação oficial", plans: "Incluído em", source: "Fonte da inclusão", also: "Também", close: "Fechar", note: "Nota" },
    rec: {
      resultFor: "Plano recomendado · {who}", stepInd: "Pelo setor", stepSig: "Pelos seus sinais", entOnly: "só no Enterprise", needsFor: "Recursos que a página oficial de {ind} destaca", samePlan: "Segundo o sharefile.com, os 9 setores são atendidos a partir do Premium. O que muda entre setores são os recursos-chave abaixo. O que leva ao Enterprise são os sinais de segurança da etapa 3.",
      title: "Recomendador", lead: "Responda três perguntas. O resultado vem do que o sharefile.com publica para cada setor e do FAQ oficial do plano Enterprise.",
      q1: "1. Setor", q1b: "Segmento", q2: "2. Porte da empresa", q3: "3. Sinais de Enterprise", q3hint: "Marque os que se aplicam.",
      other: "Outro / geral", otherHint: "Só compartilhar e guardar arquivos com segurança",
      result: "Plano recomendado", why: "Por quê", needs: "Recursos que a página oficial do setor destaca", from: "a partir do",
      sigAdds: "Os sinais marcados adicionam", vdrToo: "Considere também o Virtual Data Room", vdrWhy: "Para M&A, auditorias ou litígios, o sharefile.com recomenda o Virtual Data Room.",
      warnings: "Atenção", sizeNote: "O porte ajusta a mensagem, mas não muda o plano sozinho. O que justifica o Enterprise são os sinais de segurança.",
      industryPage: "Página oficial do setor", sizePage: "Página oficial do porte", openCalc: "Calcular armazenamento", openCompare: "Comparar com o plano anterior",
      baseReason: "Todos os recursos que a página de {ind} destaca estão incluídos a partir do {plan}.",
      advReason: "Para compartilhar e guardar arquivos sem assinatura, portal ou fluxos, o Advanced atende.",
      entReason: "Você marcou sinais que o sharefile.com associa ao Enterprise: organizações maiores ou reguladas que precisam de monitoramento, proteção de dados e investigação."
    },
    cmp: {
      title: "Comparador", lead: "Escolha dois planos e veja o que muda.",
      planA: "Plano A", planB: "Plano B",
      onlyA: "Só no {p}", onlyB: "Só no {p}", both: "Em ambos",
      same: "Escolha dois planos diferentes.", highlight: "Destacar por setor", relevant: "relevante para o setor",
      count: "{n} recursos", everything: "Tudo do {p}", plus: "Mais estes {k}:", own: "Só no {p} ({k}):", base: "Base comum: {n} recursos que {a} e {b} têm", seeAll: "Ver os {n} recursos", none: "Nenhum: tudo deste plano está no outro.", total: "{p} tem {n} recursos no total.", upTo: "no {p} passa a {y}", sumSuper: "{b} inclui tudo do {a} e adiciona {k} recursos.", sumSuperUp: "{b} inclui tudo do {a} ({x} passa a {y}) e adiciona {k} recursos.", sumGen: "{a} tem {na} recursos e {b} tem {nb}; compartilham {n}. Cada um tem recursos que o outro não tem."
    },
    mx: {
      title: "Matriz de recursos", lead: "Todos os recursos da tabela oficial, em uma só visão. O link da página guarda seus filtros.",
      search: "Buscar recurso", group: "Grupo", all: "Todos", industry: "Setor", onlyDiff: "Só diferenças",
      feature: "Recurso", export: "Exportar CSV", copy: "Copiar link", copied: "Link copiado", shown: "recursos visíveis"
    },
    calc: {
      title: "Calculadora de armazenamento", lead: "Quanto armazenamento em nuvem a conta inclui, por plano e quantidade de licenças.",
      plan: "Plano", users: "Licenças (usuários funcionários)", storage: "Armazenamento da conta", perLicense: "Por licença", total: "Total compartilhado",
      formula: "{n} licenças × {per} = {total} para toda a conta",
      minApplied: "Aplica-se o mínimo de {n} licenças do plano.", allPlans: "Todos os planos com suas licenças",
      usersHint: "Começa no mínimo do plano. Digite sua quantidade ou escolha:", maxNote: "O ShareFile não publica um máximo de licenças por plano; é possível adicioná-las a qualquer momento. Só usuários funcionários precisam de licença: usuários cliente são ilimitados em todos os planos.", licenses: "Licenças", licCol: "Licenças", adjusted: "{p} exige no mínimo {n} licenças: ajustado de {from} para {n}.",
      minFoot: "* Mínimo de licenças exigido por plano: {list}.",
      poolTitle: "O armazenamento é compartilhado",
      pool: "Não é uma cota por usuário. O armazenamento de todas as licenças soma uma única reserva para toda a conta, e um usuário pode usar mais que sua parte enquanto a conta não atingir o total.",
      counts: "Contam para o total: pastas pessoais, pastas compartilhadas, File Box e a lixeira.",
      full: "Se a conta atingir o limite, uploads e novos documentos ficam bloqueados. Os usuários continuam podendo entrar, ver e baixar, e o administrador pode comprar mais armazenamento (Add Storage).",
      packs: "Advanced, Premium e Enterprise: ampliável com pacotes de 3 TB. O Enterprise também oferece armazenamento on-premises ou híbrido.",
      quota: "No Enterprise, o administrador pode definir cotas por usuário (Storage Quota) para limitar quanto cada um consome.",
      sources: "Fontes oficiais:"
    },
    kn: { title: "Conhecimento", lead: "Links oficiais do ShareFile e da Progress, agrupados por tema." },
    gl: { title: "Glossário", lead: "Termos que aparecem em planos e conversas de venda.", search: "Buscar termo" },
    ch: { title: "Registro de mudanças", lead: "O que mudou neste site e quando." },
    ds: { title: "Discrepâncias na fonte oficial", lead: "Inconsistências encontradas no sharefile.com ou na documentação, e como são tratadas aqui.", where: "Onde" },
    uc: { lead: "Os processos mais comuns por setor, segundo as páginas oficiais do ShareFile, com os recursos que os resolvem, o plano mínimo e clientes publicados pelo ShareFile.", all: "Todos", problem: "O problema", how: "Como o ShareFile ajuda", from: "A partir do {p}", customers: "Clientes publicados", source: "Fonte oficial", noCust: "O ShareFile não publica histórias recentes de clientes deste setor.", signNote: "A assinatura eletrônica do ShareFile é uma assinatura eletrônica simples. Para atos que a lei do seu país reserva à assinatura digital certificada (como ICP-Brasil) ou ao cartório, use essa via; o ShareFile pode guardar e compartilhar esses documentos já assinados.", verify: "Os números de clientes são os que cada história publica em sharefile.com. Confira na fonte e fale com o representante ShareFile da sua região.", seeAll: "Ver os casos de uso de {ind}", count: "{n} casos" },
    adopt: { lead: "Autodiagnóstico: marque quais recursos do seu plano vocês já usam e descubra por onde começar com o que já pagam.", step1: "1. Seu plano atual", industry: "Setor (opcional, prioriza melhor)", privacy: "Suas respostas ficam só neste navegador. Nada é enviado a ninguém.", step2: "2. Quais recursos vocês usam hoje?", reset: "Apagar respostas", dataHint: "Não sabe o que é usado? O administrador pode ver no relatório oficial de uso e atividade:", yes: "Usamos", no: "Não usamos", unknown: "Não sei", adoption: "Adoção do plano", ofTotal: "{n} recursos ativáveis no {p}.", startHere: "Comece por aqui", why: "Recursos não usados ou não confirmados que mais habilitam casos de uso.", whyInd: "Recursos não usados ou não confirmados que mais habilitam casos de uso de {ind}.", enables: "Habilita", copy: "Copiar resumo", copied: "Resumo copiado", allUsed: "Vocês usam todos os recursos ativáveis do plano!", sumHead: "Plano {p}: adoção de {pct}% ({y} de {n} recursos).", sumFoot: "Fonte: guias oficiais de docs.sharefile.com. Para ajuda, fale com o representante ShareFile da sua região ou com seu parceiro." },
    comp: { lead: "Normas públicas de cada país e onde o ShareFile se encaixa em cada requisito, com o texto oficial e o que cabe à empresa.", principleTitle: "Quem cumpre:", principle: "a empresa que usa o ShareFile. Muitas obrigações recaem diretamente sobre ela, e a conformidade depende de como implementa, configura, governa e usa a solução. O ShareFile oferece recursos e evidências que apoiam esses requisitos; não os cumpre pelo cliente.", notLegal: "Informação geral, não é assessoria jurídica: valide com seu assessor jurídico e com o representante ShareFile da sua região.", country: "País", more: "Mais países em preparação.", verified: "Verificado em", residency: "Onde ficam os dados", authority: "Autoridade", applies: "Aplica-se a", official: "Texto oficial", ok: "Verificado", check: "Confirmar vigência no SCIJ", checkGaceta: "Confirmar numeração na Gaceta Oficial", checkAmended: "Modificada: confirmar texto vigente", pendingTitle: "Pendente de verificação", res_none: "O ShareFile não tem zona de armazenamento gerenciada em {c}: suas zonas ficam nos EUA, Canadá, Brasil, União Europeia, Japão, Austrália, Singapura, Emirados e Índia. Usar uma zona gerenciada implica guardar os dados fora de {c}. Para mantê-los no país existe o Storage Zones Controller, uma zona que o cliente opera em sua própria infraestrutura (com versão suportada e patches em dia). O Trust Center lista ainda os subprocessadores do ShareFile e seus países.", res_br: "O ShareFile tem uma zona gerenciada no Brasil (ShareFile Brazil), a única da região: os arquivos podem ser guardados no país. Confirme com seu representante quais outros dados do serviço são processados fora; o Trust Center lista os subprocessadores do ShareFile e seus países.", extract: "trecho do texto oficial", sf: "Onde o ShareFile se encaixa", you: "O que cabe à empresa", foot: "Para questionários regulatórios ou de segurança, peça a revisão ao seu representante ShareFile. Alguns documentos do Trust Center exigem solicitar acesso:" },
    foot: {
      disclaimer: "Site não oficial, mantido de forma independente. Não representa a Progress Software Corporation. ShareFile e Progress são marcas da Progress Software Corporation.",
      truth: "Fontes oficiais: {links}. Verifique sempre as informações ali e, antes de qualquer decisão, fale com o representante ShareFile da sua região ou com seu parceiro."
    },
    cookies: { text: "Usamos cookies de análise para saber quais seções são consultadas. Eles não identificam ninguém.", accept: "Aceitar", reject: "Recusar" },
    theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema", info: "Detalhes"
  }
};
