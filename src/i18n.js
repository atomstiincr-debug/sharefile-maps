/* Interface text. Feature names stay in official English; everything else is translated. */
const UI = {
  es: {
    video: { title: "Video oficial", lang: "en inglés; activa los subtítulos en español", tutorials: "Tutoriales oficiales en YouTube", overview: "Ver qué es ShareFile (en inglés)", long: "video largo" },
    int: { title: "Integraciones", lead: "Integraciones oficiales de ShareFile con herramientas de correo, almacenamiento, identidad, seguridad, CRM y contabilidad, más integraciones por industria. Cada una enlaza a su documentación oficial.", search: "Buscar integración (ej. Salesforce)", plans: "Planes", planCheck: "Tabla de precios: desde Advanced. Documentación del plugin: Premium o superior.", group: "Categoría", industry: "Industria", all: "Todas", third: "Las integraciones de terceros requieren las licencias del proveedor correspondiente; algunas pueden estar limitadas o no disponibles.", source: "Fuentes: sharefile.com/apps-integrations y docs.sharefile.com.", forIndustry: "Integraciones para esta industria", specific: "Específicas de {i}", noSpecific: "ShareFile no publica integraciones específicas para {i}. Las de abajo sirven igual.", featured: "Destacadas en la página oficial de {i}", noFeatured: "La página oficial de {i} no destaca integraciones concretas.", general: "Resto de integraciones, por función (sirven para cualquier industria)", hidden: "Se ocultan {n} integraciones específicas de otras industrias.", count: "integraciones" },
    billing: { label: "Facturación", monthly: "Mensual", annual: "Anual", perUserMonth: "por usuario / mes", minUsers: "Mínimo de {n} usuarios", annualNote: "facturación anual", monthlyNote: "facturación mensual", save: "Ahorra {n}%", explain: "Precios MSRP en USD de sharefile.com/plans. Con facturación anual, el precio mensual por usuario baja." },
    lang: "Español", siteTag: "Mapa de planes ShareFile", unofficial: "Sitio no oficial", skip: "Saltar al contenido",
    nav: { home: "Inicio", map: "Mapa de planes", vdr: "Data Room", recommend: "Recomendador", compare: "Comparador", matrix: "Matriz", calc: "Calculadora", knowledge: "Conocimiento", glossary: "Glosario", changelog: "Cambios", discrepancies: "Discrepancias", integrations: "Integraciones", usecases: "Casos de uso" },
    by: "Por", updated: "Actualizado",
    home: {
      plans: "Planes", industries: "Industrias", sizes: "Tamaño de empresa", tools: "Herramientas", resources: "Recursos",
      allPlans: "Todos", stepup: "step-up", perUser: "por usuario / mes, anual", min: "mín.", users: "usuarios",
      lead: "Qué incluye cada plan de ShareFile, cuál conviene según la industria y el tamaño, y cuánto cuesta. Cada función enlaza a la documentación oficial."
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
      industryPage: "Página oficial de la industria", sizePage: "Página oficial del tamaño", openCalc: "Calcular costo", openCompare: "Comparar con el plan anterior",
      baseReason: "Todas las funciones que destaca la página de {ind} están incluidas desde {plan}.",
      advReason: "Para compartir y guardar archivos sin firma, portal ni flujos, Advanced cubre lo necesario.",
      entReason: "Marcaste señales que sharefile.com asocia a Enterprise: organizaciones grandes o reguladas que necesitan monitoreo, protección de datos e investigación."
    },
    cmp: {
      title: "Comparador", lead: "Elige dos planes y mira qué cambia. Los precios son MSRP en USD.",
      planA: "Plan A", planB: "Plan B", users: "Usuarios", billing: "Facturación", annual: "Anual", monthly: "Mensual",
      onlyA: "Solo en {p}", onlyB: "Solo en {p}", both: "En ambos", diff: "Diferencia", perUser: "por usuario / mes",
      perMonth: "por mes", perYear: "por año", same: "Elige dos planes distintos.", highlight: "Resaltar por industria", relevant: "relevante para la industria",
      count: "{n} funciones", everything: "Todo lo de {p}", plus: "Más estas {k}:", own: "Solo en {p} ({k}):", base: "Base común: {n} funciones que tienen {a} y {b}", seeAll: "Ver las {n} funciones", none: "Ninguna: todo lo de este plan está en el otro.", total: "{p} tiene {n} funciones en total.", upTo: "en {p} sube a {y}", sumSuper: "{b} incluye todo lo de {a} y agrega {k} funciones.", sumSuperUp: "{b} incluye todo lo de {a} ({x} sube a {y}) y agrega {k} funciones.", sumGen: "{a} tiene {na} funciones y {b} tiene {nb}; comparten {n}. Cada uno tiene funciones que el otro no.", seats: "Licencias facturadas con {u} usuarios: {list}", seatsMin: "* {p}: se factura el mínimo de {n} licencias del plan."
    },
    mx: {
      title: "Matriz de funciones", lead: "Todas las funciones de la tabla oficial, en una sola vista. El enlace de la página guarda tus filtros.",
      search: "Buscar función", group: "Grupo", all: "Todos", industry: "Industria", onlyDiff: "Solo diferencias",
      feature: "Función", export: "Exportar CSV", copy: "Copiar enlace", copied: "Enlace copiado", shown: "funciones visibles"
    },
    calc: {
      title: "Calculadora", lead: "Costo de lista y almacenamiento incluido según usuarios y plan.",
      plan: "Plan", users: "Usuarios con licencia", billing: "Facturación", annual: "Anual", monthly: "Mensual",
      perUser: "Precio por usuario / mes", monthTotal: "Total mensual", yearTotal: "Total anual", storage: "Almacenamiento incluido",
      minApplied: "Se aplica el mínimo de {n} licencias del plan.", allPlans: "Todos los planes con tus usuarios",
      usersHint: "Empieza en el mínimo del plan. Escribe tu cantidad o elige:", maxNote: "ShareFile no publica un máximo de licencias por plan; se pueden agregar en cualquier momento. Solo los usuarios empleados llevan licencia: los usuarios cliente son ilimitados en todos los planes.", licenses: "Licencias facturadas", licCol: "Licencias", adjusted: "{p} requiere mínimo {n} licencias: se ajustó de {from} a {n}.",
      minFoot: "* Mínimo de licencias requeridas por plan: {list}. Si tienes menos usuarios, se factura el mínimo.",
      storageNote: "Advanced, Premium y Enterprise: 1 TB por licencia agregado, mínimo 3 TB. VDR: 1 GB por licencia. Se pueden sumar paquetes de 3 TB.",
      priceNote: "Precios MSRP de sharefile.com/plans. El precio final puede variar por canal, volumen o plazo."
    },
    kn: { title: "Conocimiento", lead: "Enlaces oficiales de ShareFile y Progress, agrupados por tema." },
    gl: { title: "Glosario", lead: "Términos que aparecen en planes y conversaciones de venta.", search: "Buscar término" },
    ch: { title: "Registro de cambios", lead: "Qué cambió en este sitio y cuándo." },
    ds: { title: "Discrepancias en la fuente oficial", lead: "Inconsistencias encontradas en sharefile.com o en la documentación, y cómo se tratan aquí.", where: "Dónde" },
    uc: { lead: "Los 5 procesos más comunes por industria, según las páginas oficiales de ShareFile, con las funciones que los resuelven, el plan mínimo y clientes publicados por ShareFile.", all: "Todas", problem: "El problema", how: "Cómo ayuda ShareFile", from: "Desde {p}", customers: "Clientes publicados", source: "Fuente oficial", noCust: "ShareFile no publica historias de clientes recientes para esta industria.", signNote: "La firma electrónica de ShareFile es firma electrónica simple. Para actos que la ley de tu país reserva a la firma digital certificada o a un notario, usa esa vía; ShareFile puede guardar y compartir esos documentos ya firmados.", verify: "Las cifras de clientes son las que publica cada historia en sharefile.com. Verifícalas en la fuente y consulta al representante de ShareFile de tu región.", seeAll: "Ver los casos de uso de {ind}", count: "{n} casos" },
    foot: {
      disclaimer: "Sitio no oficial, mantenido de forma independiente. No representa a Progress Software Corporation. ShareFile y Progress son marcas de Progress Software Corporation.",
      truth: "Fuentes oficiales: {links}. Verifica siempre la información ahí y, antes de cualquier decisión, contacta al representante de ShareFile de tu región o a tu partner.",
      prices: "Precios MSRP en USD tomados de sharefile.com/plans."
    },
    cookies: { text: "Usamos cookies de analítica para saber qué secciones se consultan. No identifican a nadie.", accept: "Aceptar", reject: "Rechazar" },
    theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema", info: "Detalles"
  },

  en: {
    video: { title: "Official video", lang: "English", tutorials: "Official tutorials on YouTube", overview: "See what ShareFile is", long: "long video" },
    int: { title: "Integrations", lead: "Official ShareFile integrations with email, storage, identity, security, CRM and accounting tools, plus industry-specific integrations. Each links to its official documentation.", search: "Search integrations (e.g. Salesforce)", plans: "Plans", planCheck: "Pricing table: from Advanced. Plug-in documentation: Premium or higher.", group: "Category", industry: "Industry", all: "All", third: "Third-party integrations require the vendor's licenses; some may be limited or unavailable.", source: "Sources: sharefile.com/apps-integrations and docs.sharefile.com.", forIndustry: "Integrations for this industry", specific: "Specific to {i}", noSpecific: "ShareFile publishes no integrations specific to {i}. The ones below still apply.", featured: "Featured on the official {i} page", noFeatured: "The official {i} page does not feature specific integrations.", general: "Other integrations, by function (useful for any industry)", hidden: "{n} integrations specific to other industries are hidden.", count: "integrations" },
    billing: { label: "Billing", monthly: "Monthly", annual: "Annual", perUserMonth: "per user / month", minUsers: "Minimum of {n} users", annualNote: "billed annually", monthlyNote: "billed monthly", save: "Save {n}%", explain: "MSRP in USD from sharefile.com/plans. Annual billing lowers the monthly price per user." },
    lang: "English", siteTag: "ShareFile plans map", unofficial: "Unofficial site", skip: "Skip to content",
    nav: { home: "Home", map: "Plans map", vdr: "Data Room", recommend: "Recommender", compare: "Comparator", matrix: "Matrix", calc: "Calculator", knowledge: "Knowledge", glossary: "Glossary", changelog: "Changes", discrepancies: "Discrepancies", integrations: "Integrations", usecases: "Use cases" },
    by: "By", updated: "Updated",
    home: {
      plans: "Plans", industries: "Industries", sizes: "Company size", tools: "Tools", resources: "Resources",
      allPlans: "All", stepup: "step-up", perUser: "per user / month, annual", min: "min.", users: "users",
      lead: "What each ShareFile plan includes, which one fits by industry and size, and what it costs. Every feature links to official documentation."
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
      industryPage: "Official industry page", sizePage: "Official company-size page", openCalc: "Calculate cost", openCompare: "Compare with the plan below",
      baseReason: "Every feature the {ind} page highlights is included from {plan}.",
      advReason: "For secure file sharing and storage without e-signature, portal or workflows, Advanced covers it.",
      entReason: "You checked signals sharefile.com links to Enterprise: larger or regulated organizations that need monitoring, data protection and investigation."
    },
    cmp: {
      title: "Comparator", lead: "Pick two plans and see what changes. Prices are MSRP in USD.",
      planA: "Plan A", planB: "Plan B", users: "Users", billing: "Billing", annual: "Annual", monthly: "Monthly",
      onlyA: "Only in {p}", onlyB: "Only in {p}", both: "In both", diff: "Difference", perUser: "per user / month",
      perMonth: "per month", perYear: "per year", same: "Pick two different plans.", highlight: "Highlight by industry", relevant: "relevant to the industry",
      count: "{n} features", everything: "Everything in {p}", plus: "Plus these {k}:", own: "Only in {p} ({k}):", base: "Shared base: {n} features in both {a} and {b}", seeAll: "See all {n} features", none: "None: everything in this plan is in the other.", total: "{p} has {n} features in total.", upTo: "in {p} upgrades to {y}", sumSuper: "{b} includes everything in {a} and adds {k} features.", sumSuperUp: "{b} includes everything in {a} ({x} upgrades to {y}) and adds {k} features.", sumGen: "{a} has {na} features and {b} has {nb}; they share {n}. Each has features the other lacks.", seats: "Billed licenses for {u} users: {list}", seatsMin: "* {p}: the plan's {n}-license minimum is billed."
    },
    mx: {
      title: "Feature matrix", lead: "Every feature in the official table, in one view. The page link keeps your filters.",
      search: "Search features", group: "Group", all: "All", industry: "Industry", onlyDiff: "Differences only",
      feature: "Feature", export: "Export CSV", copy: "Copy link", copied: "Link copied", shown: "features shown"
    },
    calc: {
      title: "Calculator", lead: "List cost and included storage by users and plan.",
      plan: "Plan", users: "Licensed users", billing: "Billing", annual: "Annual", monthly: "Monthly",
      perUser: "Price per user / month", monthTotal: "Monthly total", yearTotal: "Annual total", storage: "Included storage",
      minApplied: "The plan's {n}-license minimum applies.", allPlans: "Every plan with your users",
      usersHint: "Starts at the plan minimum. Type your number or pick one:", maxNote: "ShareFile publishes no maximum number of licenses per plan; licenses can be added at any time. Only employee users need a license: client users are unlimited on every plan.", licenses: "Billed licenses", licCol: "Licenses", adjusted: "{p} requires at least {n} licenses: adjusted from {from} to {n}.",
      minFoot: "* Minimum licenses required per plan: {list}. With fewer users, the minimum is billed.",
      storageNote: "Advanced, Premium and Enterprise: 1 TB per license pooled, 3 TB minimum. VDR: 1 GB per license. 3 TB packs can be added.",
      priceNote: "MSRP from sharefile.com/plans. Final price may vary by channel, volume or term."
    },
    kn: { title: "Knowledge", lead: "Official ShareFile and Progress links, grouped by topic." },
    gl: { title: "Glossary", lead: "Terms that come up in plans and sales conversations.", search: "Search terms" },
    ch: { title: "Change log", lead: "What changed on this site and when." },
    ds: { title: "Discrepancies in the official source", lead: "Inconsistencies found on sharefile.com or in the documentation, and how this site handles them.", where: "Where" },
    uc: { lead: "The 5 most common processes per industry, from ShareFile's official pages, with the features that solve them, the minimum plan and customers ShareFile has published.", all: "All", problem: "The problem", how: "How ShareFile helps", from: "From {p}", customers: "Published customers", source: "Official source", noCust: "ShareFile publishes no recent customer stories for this industry.", signNote: "ShareFile's e-signature is a simple electronic signature. For acts your country's law reserves for a certified digital signature or a notary, use that route; ShareFile can store and share those signed documents.", verify: "Customer figures are those each story publishes on sharefile.com. Verify them at the source and talk to your regional ShareFile representative.", seeAll: "See the {ind} use cases", count: "{n} cases" },
    foot: {
      disclaimer: "Unofficial site, independently maintained. It does not represent Progress Software Corporation. ShareFile and Progress are trademarks of Progress Software Corporation.",
      truth: "Official sources: {links}. Always verify the information there and, before any decision, contact your regional ShareFile representative or your partner.",
      prices: "MSRP in USD from sharefile.com/plans."
    },
    cookies: { text: "We use analytics cookies to learn which sections are used. They do not identify anyone.", accept: "Accept", reject: "Decline" },
    theme: "Theme", light: "Light", dark: "Dark", system: "System", info: "Details"
  },

  pt: {
    video: { title: "Vídeo oficial", lang: "em inglês; ative as legendas em português", tutorials: "Tutoriais oficiais no YouTube", overview: "Ver o que é o ShareFile (em inglês)", long: "vídeo longo" },
    int: { title: "Integrações", lead: "Integrações oficiais do ShareFile com ferramentas de e-mail, armazenamento, identidade, segurança, CRM e contabilidade, além de integrações por setor. Cada uma leva à documentação oficial.", search: "Buscar integração (ex. Salesforce)", plans: "Planos", planCheck: "Tabela de preços: desde o Advanced. Documentação do plugin: Premium ou superior.", group: "Categoria", industry: "Setor", all: "Todas", third: "Integrações de terceiros exigem as licenças do fornecedor; algumas podem estar limitadas ou indisponíveis.", source: "Fontes: sharefile.com/apps-integrations e docs.sharefile.com.", forIndustry: "Integrações para este setor", specific: "Específicas de {i}", noSpecific: "O ShareFile não publica integrações específicas para {i}. As abaixo também se aplicam.", featured: "Destacadas na página oficial de {i}", noFeatured: "A página oficial de {i} não destaca integrações específicas.", general: "Demais integrações, por função (servem para qualquer setor)", hidden: "{n} integrações específicas de outros setores estão ocultas.", count: "integrações" },
    billing: { label: "Cobrança", monthly: "Mensal", annual: "Anual", perUserMonth: "por usuário / mês", minUsers: "Mínimo de {n} usuários", annualNote: "cobrança anual", monthlyNote: "cobrança mensal", save: "Economize {n}%", explain: "Preços MSRP em USD de sharefile.com/plans. Com cobrança anual, o preço mensal por usuário diminui." },
    lang: "Português", siteTag: "Mapa de planos ShareFile", unofficial: "Site não oficial", skip: "Pular para o conteúdo",
    nav: { home: "Início", map: "Mapa de planos", vdr: "Data Room", recommend: "Recomendador", compare: "Comparador", matrix: "Matriz", calc: "Calculadora", knowledge: "Conhecimento", glossary: "Glossário", changelog: "Mudanças", discrepancies: "Discrepâncias", integrations: "Integrações", usecases: "Casos de uso" },
    by: "Por", updated: "Atualizado",
    home: {
      plans: "Planos", industries: "Setores", sizes: "Porte da empresa", tools: "Ferramentas", resources: "Recursos",
      allPlans: "Todos", stepup: "step-up", perUser: "por usuário / mês, anual", min: "mín.", users: "usuários",
      lead: "O que cada plano do ShareFile inclui, qual convém por setor e porte, e quanto custa. Cada recurso leva à documentação oficial."
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
      industryPage: "Página oficial do setor", sizePage: "Página oficial do porte", openCalc: "Calcular custo", openCompare: "Comparar com o plano anterior",
      baseReason: "Todos os recursos que a página de {ind} destaca estão incluídos a partir do {plan}.",
      advReason: "Para compartilhar e guardar arquivos sem assinatura, portal ou fluxos, o Advanced atende.",
      entReason: "Você marcou sinais que o sharefile.com associa ao Enterprise: organizações maiores ou reguladas que precisam de monitoramento, proteção de dados e investigação."
    },
    cmp: {
      title: "Comparador", lead: "Escolha dois planos e veja o que muda. Os preços são MSRP em USD.",
      planA: "Plano A", planB: "Plano B", users: "Usuários", billing: "Cobrança", annual: "Anual", monthly: "Mensal",
      onlyA: "Só no {p}", onlyB: "Só no {p}", both: "Em ambos", diff: "Diferença", perUser: "por usuário / mês",
      perMonth: "por mês", perYear: "por ano", same: "Escolha dois planos diferentes.", highlight: "Destacar por setor", relevant: "relevante para o setor",
      count: "{n} recursos", everything: "Tudo do {p}", plus: "Mais estes {k}:", own: "Só no {p} ({k}):", base: "Base comum: {n} recursos que {a} e {b} têm", seeAll: "Ver os {n} recursos", none: "Nenhum: tudo deste plano está no outro.", total: "{p} tem {n} recursos no total.", upTo: "no {p} passa a {y}", sumSuper: "{b} inclui tudo do {a} e adiciona {k} recursos.", sumSuperUp: "{b} inclui tudo do {a} ({x} passa a {y}) e adiciona {k} recursos.", sumGen: "{a} tem {na} recursos e {b} tem {nb}; compartilham {n}. Cada um tem recursos que o outro não tem.", seats: "Licenças faturadas com {u} usuários: {list}", seatsMin: "* {p}: fatura-se o mínimo de {n} licenças do plano."
    },
    mx: {
      title: "Matriz de recursos", lead: "Todos os recursos da tabela oficial, em uma só visão. O link da página guarda seus filtros.",
      search: "Buscar recurso", group: "Grupo", all: "Todos", industry: "Setor", onlyDiff: "Só diferenças",
      feature: "Recurso", export: "Exportar CSV", copy: "Copiar link", copied: "Link copiado", shown: "recursos visíveis"
    },
    calc: {
      title: "Calculadora", lead: "Custo de lista e armazenamento incluído por usuários e plano.",
      plan: "Plano", users: "Usuários licenciados", billing: "Cobrança", annual: "Anual", monthly: "Mensal",
      perUser: "Preço por usuário / mês", monthTotal: "Total mensal", yearTotal: "Total anual", storage: "Armazenamento incluído",
      minApplied: "Aplica-se o mínimo de {n} licenças do plano.", allPlans: "Todos os planos com seus usuários",
      usersHint: "Começa no mínimo do plano. Digite sua quantidade ou escolha:", maxNote: "O ShareFile não publica um máximo de licenças por plano; é possível adicionar a qualquer momento. Só os usuários funcionários precisam de licença: os usuários clientes são ilimitados em todos os planos.", licenses: "Licenças faturadas", licCol: "Licenças", adjusted: "{p} exige no mínimo {n} licenças: ajustado de {from} para {n}.",
      minFoot: "* Mínimo de licenças exigidas por plano: {list}. Com menos usuários, fatura-se o mínimo.",
      storageNote: "Advanced, Premium e Enterprise: 1 TB por licença agregado, mínimo de 3 TB. VDR: 1 GB por licença. É possível adicionar pacotes de 3 TB.",
      priceNote: "Preços MSRP de sharefile.com/plans. O preço final pode variar por canal, volume ou prazo."
    },
    kn: { title: "Conhecimento", lead: "Links oficiais do ShareFile e da Progress, agrupados por tema." },
    gl: { title: "Glossário", lead: "Termos que aparecem em planos e conversas de venda.", search: "Buscar termo" },
    ch: { title: "Registro de mudanças", lead: "O que mudou neste site e quando." },
    ds: { title: "Discrepâncias na fonte oficial", lead: "Inconsistências encontradas no sharefile.com ou na documentação, e como são tratadas aqui.", where: "Onde" },
    uc: { lead: "Os 5 processos mais comuns por setor, segundo as páginas oficiais do ShareFile, com os recursos que os resolvem, o plano mínimo e clientes publicados pelo ShareFile.", all: "Todos", problem: "O problema", how: "Como o ShareFile ajuda", from: "A partir do {p}", customers: "Clientes publicados", source: "Fonte oficial", noCust: "O ShareFile não publica histórias recentes de clientes deste setor.", signNote: "A assinatura eletrônica do ShareFile é uma assinatura eletrônica simples. Para atos que a lei do seu país reserva à assinatura digital certificada (como ICP-Brasil) ou ao cartório, use essa via; o ShareFile pode guardar e compartilhar esses documentos já assinados.", verify: "Os números de clientes são os que cada história publica em sharefile.com. Confira na fonte e fale com o representante ShareFile da sua região.", seeAll: "Ver os casos de uso de {ind}", count: "{n} casos" },
    foot: {
      disclaimer: "Site não oficial, mantido de forma independente. Não representa a Progress Software Corporation. ShareFile e Progress são marcas da Progress Software Corporation.",
      truth: "Fontes oficiais: {links}. Verifique sempre as informações ali e, antes de qualquer decisão, fale com o representante ShareFile da sua região ou com seu parceiro.",
      prices: "Preços MSRP em USD de sharefile.com/plans."
    },
    cookies: { text: "Usamos cookies de análise para saber quais seções são consultadas. Eles não identificam ninguém.", accept: "Aceitar", reject: "Recusar" },
    theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema", info: "Detalhes"
  }
};
