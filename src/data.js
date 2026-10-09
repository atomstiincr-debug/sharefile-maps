/* ShareFile Maps — single source of truth.
   Every product fact comes from sharefile.com or docs.sharefile.com.
   Verified: 2026-10-08. Edit here; everything else is generated from this file. */

const D = "https://docs.sharefile.com/en-us/sharefile/";
const W = "https://www.sharefile.com/";

/* Official videos, verified with YouTube oEmbed (title + channel "Progress ShareFile").
   f: feature ids, i: integration ids. dur: "m:ss" when known. */
const VIDEOS = [
  { id: "MR-Me_hNW30", t: "Stream ShareFile Security Events to Your SIEM in Real Time", f: ["siem"], i: ["sentinel", "splunk"], pl: "demos" },
  { id: "8jr9qGIyBNo", t: "ShareFile Security Center and Threat Detection – From Diagnosis to Response", f: ["security_center", "ueba", "threat_alerts"] },
  { id: "2PV6NdKlig0", t: "Secure Access: Multi-Factor Authentication", f: ["mfa"] },
  { id: "KAg5wUxhFeo", t: "ShareFile Client Workflows: Tasks, Projects & Client Portal", f: ["task_mgmt", "tasks_workspace", "projects", "enhanced_portal"] },
  { id: "p7S04kvfAbc", t: "Simplify Document Collection Workflows with AI", f: ["request_list", "ai_rl_gen", "ai_validation"] },
  { id: "284fXaU7OtY", t: "Mastering ShareFile Admin Settings", long: 1 }
];

const OVERVIEW_VIDEO = { id: "yQkpfDLkCk0", t: "Progress ShareFile - Built For The Way You Work Now—And Where You're Headed Next!" };
const TUTORIALS = "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY9W-cB3G2OTYx00GXZrrzZB";

const SITE = {
  version: "1.10.0",
  updated: "2026-10-08",
  author: "Adrián Bonilla",
  pricingSource: W + "plans",
  analyticsId: "" // GA4 measurement ID (G-XXXXXXX). Empty = no analytics, no cookie banner.
};

/* Plans: MSRP in USD per user per month, from sharefile.com/plans (2026-10-08). */
const PLANS = [
  { id: "A", key: "advanced",   name: "Advanced",          annual: 16.50, monthly: 18.15, min: 3, page: W + "plans",
    tag: { es: "Archivos seguros para equipos", en: "Secure file sharing for teams", pt: "Compartilhamento seguro para equipes" } },
  { id: "P", key: "premium",    name: "Premium",           annual: 26.00, monthly: 28.59, min: 3, page: W + "plans/sharefile-premium",
    tag: { es: "Flujos documentales con clientes", en: "End-to-end document workflows", pt: "Fluxos documentais com clientes" } },
  { id: "E", key: "enterprise", name: "Enterprise",        annual: 35.00, monthly: 42.00, min: 3, page: W + "plans/sharefile-enterprise",
    tag: { es: "Control que escala con la colaboración", en: "Control that scales with collaboration", pt: "Controle que escala com a colaboração" } },
  { id: "V", key: "vdr",        name: "Virtual Data Room", annual: 69.30, monthly: 77.00, min: 5, page: W + "plans/sharefile-virtual-data-room",
    tag: { es: "Data room para operaciones confidenciales", en: "Confidential deal rooms", pt: "Data room para operações confidenciais" } }
];

/* Feature groups follow the section order of the official comparison table. */
const GROUPS = [
  { id: "core",   name: { es: "Siempre incluido", en: "Always included", pt: "Sempre incluído" } },
  { id: "sec",    name: { es: "Confianza y seguridad", en: "Trust and security", pt: "Confiança e segurança" } },
  { id: "ai",     name: { es: "Flujos con IA", en: "AI workflows", pt: "Fluxos com IA" },
    note: { es: "Sujeto a límites de uso y precios aplicables.", en: "Subject to usage limitations and applicable pricing.", pt: "Sujeito a limites de uso e preços aplicáveis." } },
  { id: "flow",   name: { es: "Flujos de trabajo", en: "Workflows", pt: "Fluxos de trabalho" } },
  { id: "sign",   name: { es: "Firma electrónica integrada", en: "Integrated e-signature", pt: "Assinatura eletrônica integrada" } },
  { id: "client", name: { es: "Experiencia del cliente", en: "Client experience", pt: "Experiência do cliente" } },
  { id: "integ",  name: { es: "Integraciones", en: "Integrations", pt: "Integrações" } }
];

/* Badges shown on tiles. */
const BADGES = {
  new:      { es: "Nuevo", en: "New", pt: "Novo" },
  us:       { es: "Solo EE.UU.", en: "U.S. only", pt: "Só EUA" },
  usreg:    { es: "Regulación EE.UU.", en: "U.S. regulation", pt: "Regulação EUA" },
  eu:       { es: "Solo UE", en: "EU only", pt: "Só UE" },
  third:    { es: "Requiere licencia de terceros", en: "Third-party license required", pt: "Requer licença de terceiros" },
  request:  { es: "A solicitud", en: "On request", pt: "Sob solicitação" },
  usage:    { es: "Límites de uso", en: "Usage limits", pt: "Limites de uso" },
  check:    { es: "Revisar fuente", en: "Check source", pt: "Verificar fonte" }
};

/* plans: string of plan ids that include the feature (A P E V).
   badges: keys from BADGES. note: optional caveat. src: where inclusion was verified. */
const FEATURES = [
  // ── Always included
  { id: "anytime_access", g: "core", plans: "APEV", name: "Anytime, Anywhere Access", url: D + "sharefile-app/sharefile-web",
    d: { es: "Acceso seguro a archivos y carpetas desde cualquier dispositivo y lugar.", en: "Secure access to files and folders from any device and location.", pt: "Acesso seguro a arquivos e pastas de qualquer dispositivo e local." } },
  { id: "file_encryption", g: "core", plans: "APEV", name: "File Encryption", url: D + "legal/sharefile-security-faq",
    d: { es: "TLS en tránsito y cifrado de hasta AES de 256 bits.", en: "TLS in transit and up to AES 256-bit encryption.", pt: "TLS em trânsito e criptografia de até AES 256 bits." } },
  { id: "sync_versioning", g: "core", plans: "APEV", name: "File Sync and Versioning", url: D + "sharefile-app/sharefile-web/file-versioning",
    d: { es: "Sincroniza archivos en toda la empresa y conserva versiones anteriores.", en: "Syncs files company-wide and keeps previous versions.", pt: "Sincroniza arquivos em toda a empresa e mantém versões anteriores." } },
  { id: "secure_sharing", g: "core", plans: "APEV", name: "Secure File Sharing", url: D + "sharefile-app/sharefile-web/share",
    d: { es: "Comparte archivos con personas dentro y fuera de la organización.", en: "Share files with people inside and outside the organization.", pt: "Compartilhe arquivos com pessoas dentro e fora da organização." } },
  { id: "hyperlink_sharing", g: "core", plans: "APEV", name: "File Sharing via Hyperlink", url: D + "account_settings/file_settings/share_setting",
    d: { es: "Enlaces únicos para que empleados y clientes vean archivos o carpetas.", en: "Unique links for employees and clients to view files or folders.", pt: "Links exclusivos para funcionários e clientes verem arquivos ou pastas." } },
  { id: "unlimited_clients", g: "core", plans: "APEV", name: "Unlimited Client Users", url: D + "people_settings/client_contacts_users/client_contacts_overview",
    d: { es: "Usuarios cliente externos ilimitados, sin licencias adicionales.", en: "Unlimited external client users at no extra license cost.", pt: "Usuários clientes externos ilimitados, sem licenças adicionais." } },
  { id: "branding", g: "core", plans: "APEV", name: "Custom Branding", url: D + "account_settings/company_branding/edit_company_branding",
    d: { es: "Aplica tu logo y colores a la cuenta.", en: "Apply your logo and colors to the account.", pt: "Aplique seu logotipo e cores à conta." } },
  { id: "apps", g: "core", plans: "APEV", name: "Desktop and Mobile Applications", url: D + "sharefile-downloads",
    d: { es: "Apps para Windows, Mac, iOS y Android.", en: "Apps for Windows, Mac, iOS and Android.", pt: "Apps para Windows, Mac, iOS e Android." } },
  { id: "link_expiration", g: "core", plans: "APEV", name: "File Link Expiration", url: D + "account_settings/file_settings/share_setting",
    d: { es: "Fecha de vencimiento para que un enlace deje de funcionar.", en: "Set a date after which a link stops working.", pt: "Data de expiração para que um link deixe de funcionar." } },
  { id: "device_security", g: "core", plans: "APEV", name: "Device Security", url: D + "account_settings/security/configure-device-security",
    d: { es: "Bloquea y borra a distancia los datos de ShareFile de un equipo perdido o robado.", en: "Remotely lock and wipe ShareFile data on a lost or stolen device.", pt: "Bloqueie e apague remotamente os dados do ShareFile de um dispositivo perdido ou roubado." } },
  { id: "mfa", g: "core", plans: "APEV", name: "Multi-Factor Authentication", url: D + "account_settings/security/multi_factor_authentication",
    d: { es: "Dos pasos o dos factores: SMS, voz, tokens y códigos de respaldo.", en: "Two-step or two-factor: SMS, voice, tokens and backup codes.", pt: "Duas etapas ou dois fatores: SMS, voz, tokens e códigos de backup." } },
  { id: "sso", g: "core", plans: "APEV", name: "Active Directory and Single Sign-on (SSO)", url: D + "account_settings/security/single_sign_on",
    d: { es: "Integración con Active Directory para entrar con credenciales corporativas.", en: "Active Directory integration to sign in with corporate credentials.", pt: "Integração com Active Directory para entrar com credenciais corporativas." } },
  { id: "support", g: "core", plans: "APEV", name: "Dedicated Support", url: "https://support.sharefile.com/s/article/ShareFile-Support-Offerings-and-Coverage",
    d: { es: "Especialistas de onboarding y Customer Care para configuración y soporte.", en: "Onboarding specialists and Customer Care for setup and support.", pt: "Especialistas de onboarding e Customer Care para configuração e suporte." } },
  { id: "storage", g: "core", plans: "APE", name: "All the Storage You Need", url: D + "account_settings/storage/storage-quota",
    d: { es: "1 TB por licencia, agregado en la cuenta; mínimo 3 TB. Paquetes extra de 3 TB.", en: "1 TB per license pooled at account level; 3 TB minimum. Extra 3 TB packs.", pt: "1 TB por licença, agregado na conta; mínimo de 3 TB. Pacotes extras de 3 TB." } },
  { id: "vdr_storage", g: "core", plans: "V", name: "1 GB of Account Storage per License", url: D + "account_settings/storage/storage-quota",
    d: { es: "En VDR: 1 GB por licencia, con mínimo de 5 licencias.", en: "VDR: 1 GB per license, with a 5-license minimum.", pt: "No VDR: 1 GB por licença, com mínimo de 5 licenças." } },
  { id: "umt", g: "core", plans: "APEV", name: "User Management Tool", url: D + "user-management-tool/1-7/sf-umt-overview",
    d: { es: "Crea cuentas de empleados y grupos de distribución desde Active Directory.", en: "Provision employee accounts and distribution groups from Active Directory.", pt: "Provisione contas de funcionários e grupos de distribuição a partir do Active Directory." } },
  { id: "reports", g: "core", plans: "APEV", name: "Activity Logs and Reports", url: D + "account_settings/reporting/reports_overview",
    d: { es: "Reportes programables de uso, acceso, mensajería y almacenamiento.", en: "Schedulable reports on usage, access, messaging and storage.", pt: "Relatórios agendáveis de uso, acesso, mensagens e armazenamento." } },
  { id: "cloud_connectors", g: "core", plans: "APEV", name: "Personal Cloud Connectors", url: D + "account_settings/connectors/connectors_overview",
    d: { es: "Conecta SharePoint Online, OneDrive, Dropbox, Box y Google Drive.", en: "Connect SharePoint Online, OneDrive, Dropbox, Box and Google Drive.", pt: "Conecte SharePoint Online, OneDrive, Dropbox, Box e Google Drive." } },

  // ── Trust and security
  { id: "archiving", g: "sec", plans: "APEV", name: "Archiving", url: D + "configure/archiving", badges: ["request"],
    d: { es: "Archiva archivos y recupéralos cuando se necesiten.", en: "Archive files and retrieve them when needed.", pt: "Arquive arquivos e recupere-os quando necessário." } },
  { id: "encrypted_email", g: "sec", plans: "APE", name: "Encrypted Email", url: D + "account_settings/email_settings/encrypted_email",
    d: { es: "Cifra cuerpo y adjuntos; el destinatario responde cifrado sin tener cuenta.", en: "Encrypts body and attachments; recipients reply encrypted without an account.", pt: "Criptografa corpo e anexos; o destinatário responde criptografado sem ter conta." } },
  { id: "threat_alerts", g: "sec", plans: "APEV", name: "Threat Detection Alerts", url: D + "sharefile-app/sharefile-web/threat-detection-alerts",
    d: { es: "Alertas por inicios de sesión o autenticación inusuales y malware.", en: "Alerts on unusual sign-ins, unusual authentication and malware.", pt: "Alertas de logins ou autenticação incomuns e malware." } },
  { id: "auto_remediation", g: "sec", plans: "APEV", name: "Automated Threat Remediation", url: D + "account_settings/security/auto_remediation",
    d: { es: "Responde a riesgos de seguridad sin intervención manual constante.", en: "Responds to security risks without constant manual work.", pt: "Responde a riscos de segurança sem intervenção manual constante." } },
  { id: "watermark", g: "sec", plans: "PEV", name: "Dynamic Watermarking", url: D + "account_settings/file_settings/watermark",
    d: { es: "Estampa datos del lector (correo, IP, fecha, nombre o texto) en cada archivo visto o descargado.", en: "Stamps viewer details (email, IP, date, name or text) on every viewed or downloaded file.", pt: "Insere dados do leitor (e-mail, IP, data, nome ou texto) em cada arquivo visto ou baixado." } },
  { id: "view_only", g: "sec", plans: "APEV", name: "View-Only Sharing and Access", url: D + "sharefile-app/sharefile-web/view-only-sharing",
    d: { es: "Impide descargar, editar, copiar o redistribuir, con controles para toda la cuenta.", en: "Prevents download, edit, copy or redistribution, with account-wide controls.", pt: "Impede download, edição, cópia ou redistribuição, com controles para toda a conta." } },
  { id: "casb_dlp", g: "sec", plans: "APEV", name: "On-Premises Storage with 3rd Party CASB Integration for DLP", url: D + "storage-zones-controller/6-0/data-loss-prevention",
    d: { es: "DLP on-premises más integración con CASB para entornos híbridos.", en: "On-prem DLP plus CASB integrations for hybrid environments.", pt: "DLP on-premises mais integração com CASB para ambientes híbridos." } },
  { id: "kms", g: "sec", plans: "APEV", name: "Key Management Services (KMS)", url: D + "configure/customer-managed-encryption-keys",
    d: { es: "Cifra archivos de una zona administrada por ShareFile con una llave en Amazon KMS.", en: "Encrypt files in a ShareFile-managed zone with a key in Amazon KMS.", pt: "Criptografe arquivos de uma zona gerenciada pelo ShareFile com uma chave no Amazon KMS." } },
  { id: "folder_qa", g: "sec", plans: "V", name: "Folder Q&A", url: D + "sharefile-vdr/question-and-answer", badges: ["check"],
    note: { es: "La tabla oficial lo marca de forma inconsistente; aquí se trata como exclusivo de VDR.", en: "The official table marks it inconsistently; treated here as VDR-only.", pt: "A tabela oficial o marca de forma inconsistente; aqui é tratado como exclusivo do VDR." },
    d: { es: "Preguntas y respuestas rastreables por carpeta, exportables como registro de auditoría.", en: "Tracked Q&A per folder, exportable as an audit record.", pt: "Perguntas e respostas rastreáveis por pasta, exportáveis como registro de auditoria." } },
  { id: "terms", g: "sec", plans: "APEV", name: "Terms and Conditions for Users", url: D + "account_settings/security/terms_and_conditions",
    d: { es: "Exige aceptar tu NDA o términos antes de iniciar sesión.", en: "Require users to accept your NDA or terms before signing in.", pt: "Exija aceitar seu NDA ou termos antes de entrar." } },
  { id: "checkinout", g: "sec", plans: "APE", name: "File Check In/Out", url: D + "sharefile-app/sharefile-web/check-in-check-out",
    d: { es: "Bloquea un documento mientras se edita y muestra quién lo tiene.", en: "Lock a document while editing and see who has it.", pt: "Bloqueie um documento durante a edição e veja quem está com ele." } },
  { id: "hipaa", g: "sec", plans: "PEV", name: "HIPAA Eligible", url: D + "account_settings/admin_overview/enable_hipaa", badges: ["usreg"],
    note: { es: "Requiere BAA firmado con Progress Software Corporation.", en: "Requires a signed BAA with Progress Software Corporation.", pt: "Requer BAA assinado com a Progress Software Corporation." },
    d: { es: "Apoya el cumplimiento de HIPAA. Algunas funciones pueden estar limitadas.", en: "Supports HIPAA compliance. Some features may be limited.", pt: "Apoia a conformidade com a HIPAA. Alguns recursos podem ser limitados." } },
  { id: "sec_finra", g: "sec", plans: "PEV", name: "SEC+FINRA Eligible", url: D + "learn-more/enterprise-archiving", badges: ["usreg"],
    note: { es: "Requiere adenda SEC firmada con Progress. Uso justo de 200 GB por usuario.", en: "Requires a signed SEC addendum with Progress. 200 GB/user fair use.", pt: "Requer adendo SEC assinado com a Progress. Uso justo de 200 GB por usuário." },
    d: { es: "Archivado para apoyar requisitos de SEC y FINRA.", en: "Archiving to support SEC and FINRA requirements.", pt: "Arquivamento para apoiar requisitos da SEC e FINRA." } },
  { id: "scim", g: "sec", plans: "E", name: "SCIM Provisioning", url: D + "account_settings/user_provisioning/entra_id_scim", badges: ["new", "third"],
    also: [{ label: "User Provisioning (SCIM)", url: D + "account_settings/user_provisioning" }],
    d: { es: "Crea, actualiza y desactiva usuarios automáticamente. Compatible con Microsoft Entra ID.", en: "Automatically provisions, updates and deactivates users. Supports Microsoft Entra ID.", pt: "Provisiona, atualiza e desativa usuários automaticamente. Compatível com Microsoft Entra ID." } },
  { id: "siem", g: "sec", plans: "E", name: "SIEM Integration", url: D + "account_settings/security/sentinel-integration", badges: ["new", "third"],
    also: [{ label: "Splunk", url: D + "account_settings/security/splunk-integration" }],
    d: { es: "Envía bitácoras y alertas a las herramientas del SOC. Compatible con Microsoft Sentinel y Splunk.", en: "Sends activity logs and alerts to SOC tools. Supports Microsoft Sentinel and Splunk.", pt: "Envia logs e alertas às ferramentas do SOC. Compatível com Microsoft Sentinel e Splunk." } },
  { id: "native_dlp", g: "sec", plans: "E", name: "Native Data Loss Prevention (DLP)", url: D + "account_settings/security/native_dlp", badges: ["new"],
    d: { es: "Detecta contenido sensible en texto y alerta o bloquea el compartir y descargar.", en: "Detects sensitive text content and alerts or blocks sharing and downloads.", pt: "Detecta conteúdo sensível em texto e alerta ou bloqueia compartilhamento e download." } },
  { id: "ueba", g: "sec", plans: "E", name: "UEBA Threat Detection", url: D + "sharefile-app/sharefile-web/auto-remediation#understanding-behavioral-alerts", badges: ["new"],
    d: { es: "Detecta comportamiento inusual: descargas anómalas o acceso fuera de horario.", en: "Surfaces unusual behavior such as abnormal downloads or off-hours access.", pt: "Detecta comportamento incomum: downloads anômalos ou acesso fora do horário." } },
  { id: "security_center", g: "sec", plans: "E", name: "Security Center", url: D + "account_settings/security/security-center", badges: ["new"],
    d: { es: "Un solo lugar para alertas, actividad de usuarios y contexto de investigación.", en: "One place for alerts, user activity and investigation context.", pt: "Um só lugar para alertas, atividade de usuários e contexto de investigação." } },
  { id: "click_trails", g: "sec", plans: "V", name: "Click Trails", url: D + "sharefile-vdr/click-trails",
    d: { es: "Línea de tiempo de cada sesión: dónde navegó el usuario y cuánto tiempo.", en: "Timeline of each session: where the user went and for how long.", pt: "Linha do tempo de cada sessão: onde o usuário navegou e por quanto tempo." } },
  { id: "vdr_analytics", g: "sec", plans: "V", name: "Visibility Analytics and Reporting", url: D + "sharefile-vdr/advanced-analytics",
    d: { es: "Usuarios más activos, documentos más vistos, búsquedas y auditoría completa.", en: "Most active users, most viewed documents, searches and full audit trails.", pt: "Usuários mais ativos, documentos mais vistos, buscas e auditoria completa." } },

  // ── AI workflows
  { id: "ai_rename", g: "ai", plans: "PEV", name: "File Renaming", url: D + "ai/ai-file-rename", badges: ["usage"],
    d: { es: "Estandariza nombres de archivo en lote con IA.", en: "Standardizes file names in bulk with AI.", pt: "Padroniza nomes de arquivos em lote com IA." } },
  { id: "ai_validation", g: "ai", plans: "PEV", name: "Document Validation", url: D + "ai/ai-document-validation", badges: ["usage"],
    d: { es: "Verifica que los archivos subidos cumplan lo requerido antes de enviarlos.", en: "Checks uploaded files meet requirements before submission.", pt: "Verifica se os arquivos enviados atendem aos requisitos antes da submissão." } },
  { id: "ai_assistant", g: "ai", plans: "PEV", name: "AI Document Assistant", url: D + "ai/ai-doc-qa", badges: ["usage"],
    also: [{ label: "Document Q&A", url: D + "ai/ai-doc-qa" }],
    d: { es: "Resume, extrae datos clave y responde preguntas sobre documentos.", en: "Summarizes, extracts key details and answers questions about documents.", pt: "Resume, extrai dados-chave e responde perguntas sobre documentos." } },
  { id: "ai_rl_gen", g: "ai", plans: "PEV", name: "Request List Generation", url: D + "ai/ai-request-list-generation", badges: ["usage"],
    d: { es: "Genera listas de solicitud de documentos a la medida.", en: "Generates tailored document request lists.", pt: "Gera listas de solicitação de documentos sob medida." } },
  { id: "ai_share_rec", g: "ai", plans: "PEV", name: "Secure Share Recommendations", url: D + "ai/secure-share-recommender", badges: ["usage"],
    d: { es: "Sugiere cómo compartir de forma segura según el contenido.", en: "Suggests secure sharing settings based on content.", pt: "Sugere como compartilhar com segurança conforme o conteúdo." } },

  // ── Workflows
  { id: "feedback_approval", g: "flow", plans: "APE", name: "Feedback & Approval", url: D + "learn-more/feedback-and-approval-workflow",
    d: { es: "Envía un documento para comentarios en línea o aprobación.", en: "Send a document for inline feedback or approval.", pt: "Envie um documento para comentários ou aprovação." } },
  { id: "automated_workflows", g: "flow", plans: "PE", name: "Automated Workflows", url: D + "sharefile-app/sharefile-web/automated-workflows",
    d: { es: "Crea flujos propios para automatizar procesos documentales repetitivos.", en: "Build your own workflows for repetitive document processes.", pt: "Crie fluxos próprios para processos documentais repetitivos." } },
  { id: "rapid_onboarding", g: "flow", plans: "PE", name: "Rapid Client Onboarding", url: D + "sharefile-app/sharefile-web/accelerated-agreements",
    d: { es: "Acuerdo integrado para empezar a dar servicio a nuevos clientes más rápido.", en: "Built-in agreement to start serving new clients faster.", pt: "Acordo integrado para começar a atender novos clientes mais rápido." } },
  { id: "folder_templates", g: "flow", plans: "APEV", name: "Folder Creation Templates", url: D + "account_settings/folder_templates/folder-templates",
    d: { es: "Estructuras de subcarpetas predefinidas para carpetas nuevas o existentes.", en: "Default subfolder structures for new or existing folders.", pt: "Estruturas de subpastas padrão para pastas novas ou existentes." } },
  { id: "templates", g: "flow", plans: "PEV", name: "Templates", url: D + "templates/templates_overview",
    d: { es: "Plantillas de documentos, proyectos, tareas, listas de solicitud y tablas.", en: "Templates for documents, projects, tasks, request lists and tables.", pt: "Modelos de documentos, projetos, tarefas, listas de solicitação e tabelas." } },
  { id: "data_tables", g: "flow", plans: "PE", name: "Data Tables", url: D + "sharefile-projects/tables/tables_overview",
    d: { es: "Tablas estructuradas para organizar datos de proyectos.", en: "Structured tables to organize project data.", pt: "Tabelas estruturadas para organizar dados de projetos." } },
  { id: "tasks_workspace", g: "flow", plans: "PEV", name: "Tasks Workspace", url: D + "sharefile-tasks/tasks_workspace/tasks_overview",
    d: { es: "Gestiona tareas, listas de solicitud y formularios con responsables y fechas.", en: "Manage tasks, request lists and forms with owners and due dates.", pt: "Gerencie tarefas, listas de solicitação e formulários com responsáveis e prazos." } },

  // ── Integrated e-signature
  { id: "esign", g: "sign", plans: "PEV", name: "All the E-Signatures You Need", url: D + "signatures/signatures",
    also: [{ label: "E-signature legal", url: D + "electronic-signature/legal" }],
    d: { es: "Hasta 100,000 documentos al mes para firma, a nivel de cuenta.", en: "Up to 100,000 documents per month for signature, at account level.", pt: "Até 100.000 documentos por mês para assinatura, no nível da conta." } },
  { id: "kba", g: "sign", plans: "PEV", name: "Knowledge-Based Authentication (KBA)", url: D + "signatures/kba-signature", badges: ["us"],
    note: { es: "La documentación oficial indica que KBA está pensado para verificar identidades de EE.UU.", en: "Official docs state KBA is intended for U.S. identity verification.", pt: "A documentação oficial indica que o KBA é voltado a identidades dos EUA." },
    d: { es: "Verifica la identidad del firmante con preguntas de conocimiento.", en: "Verifies signer identity with knowledge-based questions.", pt: "Verifica a identidade do signatário com perguntas de conhecimento." } },
  { id: "doc_templates", g: "sign", plans: "PEV", name: "Document Templates", url: D + "templates/document_templates",
    d: { es: "Documentos reutilizables listos para enviar a firma.", en: "Reusable documents ready to send for signature.", pt: "Documentos reutilizáveis prontos para assinatura." } },
  { id: "bulk_send", g: "sign", plans: "PEV", name: "Bulk Send", url: D + "signatures/bulk-send",
    d: { es: "Envía el mismo documento a muchos firmantes en un solo paso.", en: "Send the same document to many signers in one step.", pt: "Envie o mesmo documento a vários signatários em uma etapa." } },
  { id: "doc_packager", g: "sign", plans: "PEV", name: "Document Packager", url: D + "electronic-signature/help/document-package",
    d: { es: "Une varios documentos en un solo paquete para firma.", en: "Merge several documents into one package for signature.", pt: "Junte vários documentos em um só pacote para assinatura." } },
  { id: "eidas", g: "sign", plans: "PE", name: "eIDAS-supported E-Signatures", url: D + "signatures/eidas-signature", badges: ["eu", "check"],
    note: { es: "No aparece en la tabla de precios; fuente: documentación. Premium o superior, control plane UE, firmantes de UE y Reino Unido.", en: "Not in the pricing table; source: documentation. Premium or higher, EU control plane, EU/UK signers.", pt: "Não aparece na tabela de preços; fonte: documentação. Premium ou superior, control plane UE, signatários da UE e Reino Unido." },
    d: { es: "Firmas avanzadas (AES) y cualificadas (QES) bajo eIDAS.", en: "Advanced (AES) and Qualified (QES) signatures under eIDAS.", pt: "Assinaturas avançadas (AES) e qualificadas (QES) sob o eIDAS." } },

  // ── Client experience
  { id: "file_drop", g: "client", plans: "APEV", name: "File Drop Links", url: D + "account_settings/file_drops/file-drops",
    d: { es: "Enlace seguro de carga que guarda los archivos en la carpeta elegida.", en: "Secure upload link that saves files to a chosen folder.", pt: "Link seguro de upload que salva os arquivos na pasta escolhida." } },
  { id: "request_list", g: "client", plans: "PEV", name: "Request List", url: D + "sharefile-tasks/request_lists/rl_overview",
    d: { es: "Solicita, recibe y da seguimiento a archivos de clientes en una lista.", en: "Request, collect and track client files in one list.", pt: "Solicite, receba e acompanhe arquivos de clientes em uma lista." } },
  { id: "projects", g: "client", plans: "PEV", name: "Projects", url: D + "sharefile-projects/projects_overview",
    d: { es: "Espacios con archivos, tareas y comentarios por proyecto con el cliente.", en: "Spaces with files, tasks and comments per client engagement.", pt: "Espaços com arquivos, tarefas e comentários por projeto com o cliente." } },
  { id: "task_mgmt", g: "client", plans: "PE", name: "Task Management", url: D + "sharefile-tasks/to_dos/to_dos_overview",
    d: { es: "Crea, asigna y gestiona tareas dentro de un proyecto.", en: "Create, assign and manage tasks within a project.", pt: "Crie, atribua e gerencie tarefas dentro de um projeto." } },
  { id: "full_text_search", g: "client", plans: "APEV", name: "Full Text Search", url: D + "sharefile-app/sharefile-web/full-text-search",
    d: { es: "Busca nombres y también palabras dentro de los documentos.", en: "Search names and words inside documents.", pt: "Pesquise nomes e palavras dentro dos documentos." } },
  { id: "forms", g: "client", plans: "PEV", name: "Forms", url: D + "sharefile-tasks/forms/forms_overview",
    d: { es: "Recoge información de clientes con formularios propios.", en: "Collect client information with custom forms.", pt: "Colete informações de clientes com formulários próprios." } },
  { id: "basic_portal", g: "client", plans: "A", up: "enhanced_portal", name: "Basic Client Portal", url: D + "client_portal/client_portal_faq",
    d: { es: "Portal con contraseña y acceso a archivos y carpetas.", en: "Password-protected portal with file and folder access.", pt: "Portal com senha e acesso a arquivos e pastas." } },
  { id: "enhanced_portal", g: "client", plans: "PEV", name: "Enhanced Client Portal", url: W + "product-feature/client-portal",
    also: [{ label: "Client Portal FAQ", url: D + "client_portal/client_portal_faq" }],
    d: { es: "Suma mensajería, tareas, notificaciones automáticas y acciones rápidas.", en: "Adds messaging, tasks, automated notifications and quick actions.", pt: "Adiciona mensagens, tarefas, notificações automáticas e ações rápidas." } },
  { id: "client_hub", g: "client", plans: "PEV", name: "Client Hub", url: D + "account_settings/client_hub_management/client_hub_overview",
    d: { es: "Gestiona clientes, vincúlalos a carpetas y proyectos y coordina equipos.", en: "Manage clients, link them to folders and projects, coordinate teams.", pt: "Gerencie clientes, vincule-os a pastas e projetos e coordene equipes." } },

  // ── Integrations
  { id: "email_plugins", g: "integ", plans: "APEV", name: "Email Plug-ins for Outlook and Google Workspace", url: D + "sharefile-app/sharefile-for-outlook",
    also: [{ label: "Google Workspace", url: D + "sharefile-app/sharefile-for-google-workspace" }],
    d: { es: "Envía y solicita adjuntos grandes de forma segura desde Outlook o Gmail.", en: "Send and request large attachments securely from Outlook or Gmail.", pt: "Envie e solicite anexos grandes com segurança pelo Outlook ou Gmail." } },
  { id: "api", g: "integ", plans: "APEV", name: "Developer API", url: "https://api.sharefile.com",
    d: { es: "Crea integraciones y aplicaciones sobre ShareFile.", en: "Build integrations and apps on top of ShareFile.", pt: "Crie integrações e aplicativos sobre o ShareFile." } },
  { id: "coediting", g: "integ", plans: "APE", name: "Co-Editing Documents", url: D + "sharefile-app/sharefile-web/co-editing",
    d: { es: "Varios usuarios editan documentos de Microsoft 365 guardados en ShareFile.", en: "Multiple users edit Microsoft 365 documents stored in ShareFile.", pt: "Vários usuários editam documentos do Microsoft 365 no ShareFile." } },
  { id: "sf_docgen", g: "integ", plans: "PE", name: "Salesforce Document Generation", url: W + "apps-integrations", badges: ["us"],
    d: { es: "Genera contratos, acuerdos y cotizaciones con datos de Salesforce.", en: "Generate contracts, agreements and quotes from Salesforce data.", pt: "Gere contratos, acordos e cotações com dados do Salesforce." } },
  { id: "quickbooks", g: "integ", plans: "PE", name: "QuickBooks", url: W + "apps-integrations", badges: ["us"],
    d: { es: "Firma de acuerdos integrada con QuickBooks.", en: "Agreement signing integrated with QuickBooks.", pt: "Assinatura de acordos integrada ao QuickBooks." } },
  { id: "network_connectors", g: "integ", plans: "APE", name: "Network Share Connectors", url: D + "account_settings/connectors/add_onpremises_connectors",
    d: { es: "Accede a archivos en recursos de red conectados, locales o en la nube.", en: "Access files on connected on-premises or cloud network shares.", pt: "Acesse arquivos em compartilhamentos de rede conectados, locais ou na nuvem." } },
  { id: "file_export", g: "integ", plans: "PEV", name: "File Export Integrations", url: D + "catalog/integrations/export", badges: ["us"],
    d: { es: "Exporta archivos a FreshBooks, Pipedrive, QuickBooks, Xero y Salesforce.", en: "Export files to FreshBooks, Pipedrive, QuickBooks, Xero and Salesforce.", pt: "Exporte arquivos para FreshBooks, Pipedrive, QuickBooks, Xero e Salesforce." } }
];

/* Industries: capabilities each official industry page highlights, mapped to features.
   Plan minimum is computed, never typed by hand. */
// fi = integrations featured in the "Integrate with your favorite tools" block of each official sharefile.com/industry page (checked 2026-10-08). Empty = the page names none.
const INDUSTRIES = [
  { id: "accounting", fi: [], url: W + "industry/accounting", video: { id: "Y7nXmY5P5F8", t: "See How ShareFile Makes Work Flow" }, name: { es: "Contabilidad", en: "Accounting", pt: "Contabilidade" },
    f: ["esign", "request_list", "ai_rl_gen", "rapid_onboarding", "enhanced_portal", "view_only", "reports", "threat_alerts", "auto_remediation"],
    warn: { es: "La solución de declaraciones de impuestos y el programa AICPA que menciona la página son de EE.UU.", en: "The tax return solution and AICPA program on this page are U.S.-specific.", pt: "A solução de declaração de impostos e o programa AICPA citados são dos EUA." } },
  { id: "construction", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier", "app_mobile"], url: W + "industry/construction", name: { es: "Construcción", en: "Construction", pt: "Construção" },
    f: ["rapid_onboarding", "projects", "enhanced_portal", "encrypted_email", "view_only", "mfa", "sso"] },
  { id: "finance", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier"], url: W + "industry/finance", video: { id: "DNzmtMCnhWU", t: "ShareFile for Banking, Wealth Management and Investment Services" }, name: { es: "Finanzas", en: "Finance", pt: "Finanças" },
    f: ["request_list", "rapid_onboarding", "esign", "enhanced_portal", "encrypted_email", "view_only", "sec_finra"],
    subs: [
      { id: "banking", name: { es: "Banca y crédito", en: "Banking & Lending", pt: "Bancos e crédito" } },
      { id: "wealth",  name: { es: "Gestión patrimonial", en: "Wealth Management", pt: "Gestão de patrimônio" } },
      { id: "invest",  name: { es: "Firmas de inversión", en: "Investment Firms", pt: "Firmas de investimento" }, vdr: true }
    ],
    warn: { es: "SEC y FINRA son regulación de EE.UU.", en: "SEC and FINRA are U.S. regulations.", pt: "SEC e FINRA são regulações dos EUA." } },
  { id: "healthcare", fi: [], url: W + "industry/healthcare", name: { es: "Salud", en: "Healthcare", pt: "Saúde" },
    f: ["esign", "hipaa", "view_only", "encrypted_email", "email_plugins"],
    warn: { es: "HIPAA es regulación de EE.UU. y requiere BAA firmado.", en: "HIPAA is a U.S. regulation and requires a signed BAA.", pt: "HIPAA é regulação dos EUA e requer BAA assinado." } },
  { id: "insurance", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier", "app_mobile"], url: W + "industry/insurance", name: { es: "Seguros", en: "Insurance", pt: "Seguros" },
    f: ["enhanced_portal", "esign", "projects", "rapid_onboarding", "request_list", "encrypted_email"] },
  { id: "legal", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier"], url: W + "industry/legal", video: { id: "BDohGSWVCWs", t: "Legal document management with ShareFile" }, name: { es: "Legal", en: "Legal", pt: "Jurídico" },
    f: ["esign", "projects", "automated_workflows", "rapid_onboarding", "enhanced_portal", "request_list", "threat_alerts", "view_only"] },
  { id: "manufacturing", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier", "app_mobile"], url: W + "industry/manufacturing", name: { es: "Manufactura", en: "Manufacturing", pt: "Manufatura" },
    f: ["esign", "projects", "automated_workflows", "enhanced_portal", "rapid_onboarding", "watermark", "reports", "view_only", "encrypted_email"] },
  { id: "realestate", fi: ["outlook", "onedrive", "gmail", "gdrive", "quickbooks_int", "salesforce", "zapier"], url: W + "industry/real-estate", name: { es: "Bienes raíces", en: "Real Estate", pt: "Imobiliário" },
    f: ["request_list", "automated_workflows", "esign", "enhanced_portal", "forms", "mfa", "encrypted_email"],
    warn: { es: "La integración con QuickBooks que menciona la página solo opera en control plane de EE.UU.", en: "The QuickBooks integration on this page works only on U.S. control planes.", pt: "A integração com QuickBooks citada só funciona em control plane dos EUA." } },
  { id: "hr", fi: ["outlook", "gmail", "gdrive", "salesforce", "zapier", "app_mobile"], url: W + "industry/human-resources", name: { es: "Recursos humanos", en: "Human Resources", pt: "Recursos humanos" },
    f: ["esign", "rapid_onboarding", "encrypted_email", "view_only", "projects"] }
];

const SIZES = [
  { id: "small", url: W + "small-business", video: { id: "MHB4IKcWtT0", t: "Hear from small businesses that use ShareFile" }, name: { es: "Pequeña", en: "Small", pt: "Pequena" },
    hint: { es: "Hasta 350 empleados, según sharefile.com", en: "Up to 350 employees, per sharefile.com", pt: "Até 350 funcionários, segundo sharefile.com" } },
  { id: "mid", url: W + "mid-size-business", name: { es: "Mediana", en: "Mid-size", pt: "Média" },
    hint: { es: "De 100 a 10,000 clientes atendidos", en: "Serving 100 to 10,000 clients", pt: "De 100 a 10.000 clientes atendidos" } },
  { id: "large", url: W + "enterprise", name: { es: "Grande", en: "Large", pt: "Grande" },
    hint: { es: "Organizaciones de gran escala", en: "Enterprise-scale organizations", pt: "Organizações de grande escala" } }
];

/* Enterprise signals: wording follows the FAQ on sharefile.com/plans/sharefile-enterprise. */
const SIGNALS = [
  { id: "soc", f: ["siem", "security_center"],
    t: { es: "Tienen un SOC o SIEM (Microsoft Sentinel o Splunk)", en: "They run a SOC or SIEM (Microsoft Sentinel or Splunk)", pt: "Têm um SOC ou SIEM (Microsoft Sentinel ou Splunk)" } },
  { id: "entra", f: ["scim"],
    t: { es: "Gestionan identidades en Microsoft Entra ID y quieren automatizar altas y bajas", en: "They manage identities in Microsoft Entra ID and want automated joiners and leavers", pt: "Gerenciam identidades no Microsoft Entra ID e querem automatizar entradas e saídas" } },
  { id: "dlp", f: ["native_dlp"],
    t: { es: "Deben impedir que se compartan o descarguen datos sensibles", en: "They must stop sensitive data from being shared or downloaded", pt: "Precisam impedir que dados sensíveis sejam compartilhados ou baixados" } },
  { id: "regulated", f: ["ueba", "security_center", "native_dlp"],
    t: { es: "Su regulación exige monitoreo, protección de datos e investigación", en: "Their regulation requires monitoring, data protection and investigation", pt: "Sua regulação exige monitoramento, proteção de dados e investigação" } },
  { id: "growth", f: ["scim", "ueba"],
    t: { es: "Están creciendo rápido en usuarios", en: "They are adding users quickly", pt: "Estão crescendo rápido em usuários" } },
  { id: "dealroom", vdr: true, f: ["click_trails", "vdr_analytics", "folder_qa"],
    t: { es: "Necesitan un espacio para M&A, auditorías o litigios", en: "They need a space for M&A, audits or litigation", pt: "Precisam de um espaço para M&A, auditorias ou litígios" } }
];

// Use cases by industry (5 each). Source rule: every case comes from an official sharefile.com page (src);
// customers are published ShareFile customer stories, figures quoted as the story states them (verified 2026-10-08).
// Legacy stories (Sync, Outlook plug-in, RightSignature, citrix.com links) are deliberately not used.
const CS = W + "resource/customer-story/";
const USECASES = [
  // ── Accounting
  { id: "acc-onboard", ind: "accounting", f: ["rapid_onboarding", "forms", "esign"], src: W + "product-feature/income-tax-return-solution",
    t: { es: "Alta de clientes nuevos", en: "New client onboarding", pt: "Cadastro de novos clientes" },
    p: { es: "Dar de alta a cada cliente exige correos, formularios en papel y seguimiento manual.", en: "Onboarding each client takes emails, paper forms and manual follow-up.", pt: "Cadastrar cada cliente exige e-mails, formulários em papel e acompanhamento manual." },
    s: { es: "Formularios de ingreso, carta de compromiso con firma electrónica y onboarding automatizado, incluso en lote.", en: "Intake forms, an engagement letter with e-signature and automated onboarding, even in bulk.", pt: "Formulários de entrada, carta de contratação com assinatura eletrônica e onboarding automatizado, inclusive em lote." },
    cust: [{ n: "Numerical CPA", u: CS + "numerical-cpa", r: { es: "Redujo en más de 50% el tiempo de alta de clientes.", en: "Decreased time spent onboarding clients by over 50%.", pt: "Reduziu em mais de 50% o tempo de cadastro de clientes." } }] },
  { id: "acc-collect", ind: "accounting", f: ["request_list", "ai_rl_gen", "templates"], src: W + "industry/accounting",
    t: { es: "Recolección de documentos en temporada fiscal", en: "Tax-season document collection", pt: "Coleta de documentos na temporada fiscal" },
    p: { es: "Perseguir documentos por correo y recibirlos incompletos o fuera de plazo.", en: "Chasing documents by email and receiving them incomplete or late.", pt: "Correr atrás de documentos por e-mail e recebê-los incompletos ou atrasados." },
    s: { es: "Listas de solicitud con plantillas (que la IA puede generar), recordatorios automáticos y seguimiento en tiempo real.", en: "Templated request lists (which AI can generate), automatic reminders and real-time tracking.", pt: "Listas de solicitação com modelos (que a IA pode gerar), lembretes automáticos e acompanhamento em tempo real." } },
  { id: "acc-sign", ind: "accounting", f: ["esign", "kba", "doc_templates"], src: W + "product-feature/income-tax-return-solution",
    t: { es: "Firma de cartas de compromiso y declaraciones", en: "Signing engagement letters and returns", pt: "Assinatura de cartas de contratação e declarações" },
    p: { es: "Imprimir, firmar y escanear retrasa cada entrega.", en: "Printing, signing and scanning slows every engagement.", pt: "Imprimir, assinar e digitalizar atrasa cada entrega." },
    s: { es: "Firma electrónica integrada con autenticación por preguntas (KBA); el documento firmado vuelve a la carpeta del cliente.", en: "Integrated e-signature with knowledge-based authentication (KBA); the signed document returns to the client folder.", pt: "Assinatura eletrônica integrada com autenticação por perguntas (KBA); o documento assinado volta à pasta do cliente." },
    cust: [{ n: "McKee CPA", u: CS + "how-mckee-cpa-centralized-tax-collaboration-and-client-workflows-with-sharefile-projects-and-e-signature", r: { es: "Ahorra cerca de USD 5 por declaración firmada.", en: "Saves about $5 per signed return.", pt: "Economiza cerca de US$ 5 por declaração assinada." } }] },
  { id: "acc-engage", ind: "accounting", f: ["projects", "task_mgmt", "enhanced_portal", "client_hub"], src: W + "industry/accounting",
    t: { es: "Un espacio por encargo con el cliente", en: "One workspace per client engagement", pt: "Um espaço por trabalho com o cliente" },
    p: { es: "Archivos, tareas y mensajes de cada encargo quedan dispersos entre correo y herramientas.", en: "Files, tasks and messages for each engagement are scattered across email and tools.", pt: "Arquivos, tarefas e mensagens de cada trabalho ficam espalhados entre e-mail e ferramentas." },
    s: { es: "Projects reúne tareas, solicitudes y archivos; el cliente entra por su portal o por Client Hub.", en: "Projects brings tasks, requests and files together; the client works through the portal or Client Hub.", pt: "Projects reúne tarefas, solicitações e arquivos; o cliente acessa pelo portal ou pelo Client Hub." },
    cust: [{ n: "CryptoTaxAudit", u: CS + "cryptotaxaudit", r: { es: "Ahorró más de USD 30.000 al año al eliminar herramientas dispersas.", en: "Saved more than $30,000 per year by eliminating disparate tools.", pt: "Economizou mais de US$ 30.000 por ano ao eliminar ferramentas dispersas." } }] },
  { id: "acc-email", ind: "accounting", f: ["email_plugins", "file_drop", "sync_versioning", "reports"], src: CS + "how-lbmc-modernizes-accounting-with-sharefile-software-and-an-ai-forward-approach",
    t: { es: "Intercambio seguro desde el correo, con trazabilidad", en: "Secure exchange from email, with an audit trail", pt: "Troca segura a partir do e-mail, com rastreabilidade" },
    p: { es: "Adjuntos con datos financieros viajan por correo sin control.", en: "Attachments with financial data travel by email without control.", pt: "Anexos com dados financeiros circulam por e-mail sem controle." },
    s: { es: "Enviar y recibir archivos grandes sin salir de Outlook, enlaces de solicitud en la firma de correo, historial de versiones y registros de auditoría.", en: "Send and receive large files without leaving Outlook, request links in the email signature, version history and audit trails.", pt: "Enviar e receber arquivos grandes sem sair do Outlook, links de solicitação na assinatura de e-mail, histórico de versões e trilhas de auditoria." },
    cust: [{ n: "LBMC", u: CS + "how-lbmc-modernizes-accounting-with-sharefile-software-and-an-ai-forward-approach", r: { es: "Gestiona de forma segura decenas de miles de documentos sensibles.", en: "Securely manages tens of thousands of sensitive documents.", pt: "Gerencia com segurança dezenas de milhares de documentos sensíveis." } }] },

  // ── Construction
  { id: "con-subs", ind: "construction", f: ["rapid_onboarding", "automated_workflows", "templates"], src: W + "industry/construction",
    t: { es: "Alta de subcontratistas", en: "Subcontractor onboarding", pt: "Cadastro de subcontratados" },
    p: { es: "Cada subcontratista exige documentos, aprobaciones internas y seguimiento por correo.", en: "Each subcontractor needs documents, internal approvals and email follow-up.", pt: "Cada subcontratado exige documentos, aprovações internas e acompanhamento por e-mail." },
    s: { es: "Flujos de trabajo integrados y plantillas propias para incorporar subcontratistas y aprobar internamente.", en: "Built-in workflows and your own templates to onboard subcontractors and approve internally.", pt: "Fluxos de trabalho integrados e modelos próprios para cadastrar subcontratados e aprovar internamente." } },
  { id: "con-project", ind: "construction", f: ["projects", "folder_templates"], src: W + "industry/construction",
    t: { es: "Un espacio por obra", en: "One space per project", pt: "Um espaço por obra" },
    p: { es: "Planos, cronogramas y facturas de cada obra viven en lugares distintos.", en: "Each project's designs, timelines and invoices live in different places.", pt: "Plantas, cronogramas e faturas de cada obra ficam em lugares diferentes." },
    s: { es: "Espacios dedicados por proyecto, con estructura de carpetas estándar, para guardar y compartir todo.", en: "Dedicated project spaces with a standard folder structure to store and share everything.", pt: "Espaços dedicados por projeto, com estrutura de pastas padrão, para guardar e compartilhar tudo." } },
  { id: "con-portal", ind: "construction", f: ["enhanced_portal", "request_list", "esign"], src: W + "industry/construction",
    t: { es: "Portal para clientes y proveedores", en: "Client and vendor portal", pt: "Portal para clientes e fornecedores" },
    p: { es: "Clientes y proveedores envían y firman documentos por canales distintos.", en: "Clients and vendors send and sign documents through different channels.", pt: "Clientes e fornecedores enviam e assinam documentos por canais diferentes." },
    s: { es: "Un portal seguro donde cada cliente y proveedor sube y firma documentos.", en: "A secure portal where every client and vendor uploads and e-signs documents.", pt: "Um portal seguro onde cada cliente e fornecedor envia e assina documentos." } },
  { id: "con-field", ind: "construction", f: ["apps", "anytime_access", "view_only"], src: W + "industry/construction",
    t: { es: "Acceso en obra desde cualquier dispositivo", en: "Field access from any device", pt: "Acesso na obra de qualquer dispositivo" },
    p: { es: "Trabajadores y subcontratistas en campo no tienen la última versión de los documentos.", en: "Field workers and subcontractors lack the latest version of documents.", pt: "Trabalhadores e subcontratados em campo não têm a última versão dos documentos." },
    s: { es: "Apps móviles y de escritorio, con permisos granulares para dar acceso seguro a subcontratistas y proveedores.", en: "Mobile and desktop apps, with granular permissions to give subcontractors and vendors secure access.", pt: "Apps móveis e de desktop, com permissões granulares para dar acesso seguro a subcontratados e fornecedores." } },
  { id: "con-files", ind: "construction", f: ["encrypted_email", "view_only", "link_expiration", "mfa"], src: W + "industry/construction",
    t: { es: "Intercambio seguro de planos y archivos grandes", en: "Secure exchange of plans and large files", pt: "Troca segura de plantas e arquivos grandes" },
    p: { es: "Planos pesados por FTP o correo, sin control de quién los ve.", en: "Heavy plans over FTP or email, with no control over who sees them.", pt: "Plantas pesadas por FTP ou e-mail, sem controle de quem as vê." },
    s: { es: "Correo cifrado, permisos de enlace granulares, autenticación de usuarios y políticas de contraseña.", en: "Encrypted email, granular link permissions, user authentication and password policies.", pt: "E-mail criptografado, permissões de link granulares, autenticação de usuários e políticas de senha." },
    cust: [{ n: "Eggemeyer Associates Architects", u: CS + "eggemeyer-associates-architects", r: { es: "Ahorra más de USD 1.000 al mes al dejar su herramienta FTP propia.", en: "Saves over $1,000 per month by moving from a self-hosted FTP tool.", pt: "Economiza mais de US$ 1.000 por mês ao deixar sua ferramenta FTP própria." } }] },

  // ── Finance
  { id: "fin-loan", ind: "finance", f: ["request_list", "automated_workflows"], src: W + "industry/finance",
    t: { es: "Solicitudes de crédito y recolección de documentos", en: "Loan applications and document collection", pt: "Pedidos de crédito e coleta de documentos" },
    p: { es: "Expedientes de crédito incompletos, armados a mano por correo.", en: "Incomplete loan files assembled by hand over email.", pt: "Dossiês de crédito incompletos, montados à mão por e-mail." },
    s: { es: "Automatizar la solicitud y recolección de documentos, y acelerar el ingreso y la aprobación.", en: "Automate loan applications and document collection, and speed up intake and approvals.", pt: "Automatizar o pedido e a coleta de documentos, e acelerar a entrada e a aprovação." },
    cust: [{ n: "Golden Plains Credit Union", u: CS + "golden-plains-credit-union", r: { es: "Redujo al menos 1 día el tiempo de gestión de créditos indirectos.", en: "Decreased indirect loan servicing time by at least 1 day.", pt: "Reduziu em pelo menos 1 dia o tempo de gestão de crédito indireto." } },
      { n: "Innovative Edge Processing", u: CS + "innovative-edge-processing--transforming-chaos-into-confidence", r: { es: "Reúne en un solo espacio los documentos de prestatarios y brokers hipotecarios.", en: "Keeps borrower and mortgage broker documents in one shared space.", pt: "Reúne em um só espaço os documentos de mutuários e corretores hipotecários." } }] },
  { id: "fin-wealth", ind: "finance", f: ["rapid_onboarding", "esign", "enhanced_portal", "apps"], src: W + "industry/finance",
    t: { es: "Onboarding de clientes de gestión patrimonial", en: "Wealth management client onboarding", pt: "Onboarding de clientes de gestão de patrimônio" },
    p: { es: "El alta del cliente y el intercambio de documentos son lentos y poco seguros.", en: "Client onboarding and document exchange are slow and insecure.", pt: "O cadastro do cliente e a troca de documentos são lentos e pouco seguros." },
    s: { es: "Onboarding rápido, firma electrónica centralizada y portal seguro con app móvil.", en: "Fast onboarding, centralized e-signature and a secure portal with a mobile app.", pt: "Onboarding rápido, assinatura eletrônica centralizada e portal seguro com app móvel." } },
  { id: "fin-deal", ind: "finance", f: ["click_trails", "vdr_analytics", "folder_qa", "watermark"], src: W + "industry/finance",
    t: { es: "Due diligence de M&A y levantamiento de capital", en: "M&A due diligence and fundraising", pt: "Due diligence de M&A e captação de recursos" },
    p: { es: "Documentación confidencial compartida con muchos terceros, sin saber quién vio qué.", en: "Confidential documents shared with many third parties, without knowing who saw what.", pt: "Documentação confidencial compartilhada com muitos terceiros, sem saber quem viu o quê." },
    s: { es: "Virtual Data Room con control de acceso y registro de quién vio y quién descargó cada archivo.", en: "Virtual Data Room with access control and a record of who viewed and downloaded each file.", pt: "Virtual Data Room com controle de acesso e registro de quem viu e quem baixou cada arquivo." },
    cust: [{ n: "Statesman Business Advisors", u: CS + "statesman-business-advisors", r: { es: "Usa data rooms desde el interés inicial hasta la due diligence, con auditoría de vistas y descargas.", en: "Uses data rooms from initial interest through due diligence, with an audit of views and downloads.", pt: "Usa data rooms do interesse inicial até a due diligence, com auditoria de visualizações e downloads." } }] },
  { id: "fin-sign", ind: "finance", f: ["esign", "doc_templates", "kba"], src: CS + "farmers-state-bank",
    t: { es: "Firma de documentos de crédito y cierre", en: "Signing loan and closing documents", pt: "Assinatura de documentos de crédito e fechamento" },
    p: { es: "Firmas en papel retrasan hipotecas, préstamos y cierres.", en: "Wet signatures delay mortgages, loans and closings.", pt: "Assinaturas em papel atrasam hipotecas, empréstimos e fechamentos." },
    s: { es: "Firma electrónica integrada en documentos de hipoteca, préstamo y cierre.", en: "Integrated e-signature on mortgage, loan and closing documents.", pt: "Assinatura eletrônica integrada em documentos de hipoteca, empréstimo e fechamento." },
    cust: [{ n: "Farmers State Bank", u: CS + "farmers-state-bank", r: { es: "Usa la firma electrónica en sus áreas de hipotecas y préstamos.", en: "Uses e-signatures on loan documents in its mortgage and loan departments.", pt: "Usa a assinatura eletrônica nas áreas de hipotecas e empréstimos." } },
      { n: "Strategic Treasurer", u: CS + "strategic-treasurer", r: { es: "La firma electrónica integrada le ahorra al menos 1.000 horas al año.", en: "The integrated e-signature has saved at least 1,000 hours a year.", pt: "A assinatura eletrônica integrada economiza pelo menos 1.000 horas por ano." } }] },
  { id: "fin-third", ind: "finance", f: ["file_encryption", "view_only", "reports", "threat_alerts"], src: W + "industry/finance",
    t: { es: "Colaboración con terceros bajo control", en: "Controlled collaboration with third parties", pt: "Colaboração com terceiros sob controle" },
    p: { es: "Socios y proveedores externos reciben información sensible sin trazabilidad.", en: "External partners and vendors receive sensitive information without traceability.", pt: "Parceiros e fornecedores externos recebem informações sensíveis sem rastreabilidade." },
    s: { es: "Cifrado, control granular para terceros, alertas de amenazas y registros de actividad.", en: "Encryption, granular control for outside parties, threat alerts and activity logs.", pt: "Criptografia, controle granular para terceiros, alertas de ameaças e registros de atividade." },
    cust: [{ n: "GreenSky", u: CS + "how-greensky-strengthened-governance-and-secure-file-sharing-with-sharefile-software", r: { es: "Comparte con socios externos y recolecta la documentación de alta de comercios con gobierno y trazabilidad.", en: "Shares with external partners and collects merchant onboarding documents with governance and tracking.", pt: "Compartilha com parceiros externos e coleta a documentação de cadastro de lojistas com governança e rastreabilidade." } }] },

  // ── Healthcare
  { id: "hc-records", ind: "healthcare", f: ["secure_sharing", "encrypted_email", "hipaa"], src: W + "industry/healthcare",
    t: { es: "Intercambio de expedientes con otras clínicas, pacientes y aseguradoras", en: "Exchanging records with referring practices, patients and insurers", pt: "Troca de prontuários com outras clínicas, pacientes e seguradoras" },
    p: { es: "Fax y mensajería para mover información de pacientes.", en: "Fax machines and couriers to move patient information.", pt: "Fax e mensageiros para mover informações de pacientes." },
    s: { es: "Compartir y solicitar archivos clínicos de forma cifrada; apoya el cumplimiento de HIPAA (EE. UU.).", en: "Share and request clinical files with encryption; supports HIPAA compliance (US).", pt: "Compartilhar e solicitar arquivos clínicos com criptografia; apoia a conformidade com a HIPAA (EUA)." } },
  { id: "hc-intake", ind: "healthcare", f: ["esign", "doc_templates"], src: CS + "new-england-community-medical-services",
    t: { es: "Paquetes de ingreso de pacientes con firma electrónica", en: "Patient onboarding packets with e-signature", pt: "Pacotes de admissão de pacientes com assinatura eletrônica" },
    p: { es: "Paquetes de ingreso en papel que se imprimen, firman y archivan a mano.", en: "Paper onboarding packets printed, signed and filed by hand.", pt: "Pacotes de admissão em papel impressos, assinados e arquivados à mão." },
    s: { es: "Plantillas de firma electrónica para enviar y firmar los paquetes de ingreso.", en: "E-signature templates to send and sign onboarding packets.", pt: "Modelos de assinatura eletrônica para enviar e assinar os pacotes de admissão." },
    cust: [{ n: "New England Community Medical Services", u: CS + "new-england-community-medical-services", r: { es: "Gestiona más de 100 paquetes de ingreso de pacientes por semana con firma electrónica.", en: "Streamlines more than 100 patient onboarding packets a week with e-signature workflows.", pt: "Gerencia mais de 100 pacotes de admissão de pacientes por semana com assinatura eletrônica." } }] },
  { id: "hc-approvals", ind: "healthcare", f: ["esign", "doc_templates", "feedback_approval"], src: CS + "truecare",
    t: { es: "Aprobaciones administrativas", en: "Administrative approvals", pt: "Aprovações administrativas" },
    p: { es: "Facturas, presupuestos y altas de proveedores se aprueban en papel.", en: "Invoices, budgets and vendor onboarding are approved on paper.", pt: "Faturas, orçamentos e cadastros de fornecedores são aprovados em papel." },
    s: { es: "Aprobaciones con firma electrónica y plantillas, con los documentos guardados en un solo lugar.", en: "Approvals with e-signature and templates, with documents stored in one place.", pt: "Aprovações com assinatura eletrônica e modelos, com os documentos guardados em um só lugar." },
    cust: [{ n: "TrueCare", u: CS + "truecare", r: { es: "Redujo hasta 80% algunos tiempos de aprobación; más de 500 firmas enviadas al mes en promedio.", en: "Reduced certain approval times by 80%; over 500 signatures sent per month on average.", pt: "Reduziu em até 80% alguns tempos de aprovação; mais de 500 assinaturas enviadas por mês em média." } }] },
  { id: "hc-large", ind: "healthcare", f: ["secure_sharing", "hyperlink_sharing", "link_expiration"], src: W + "industry/healthcare",
    t: { es: "Archivos grandes sin límite de tamaño", en: "Large files without size limits", pt: "Arquivos grandes sem limite de tamanho" },
    p: { es: "El correo rechaza estudios e imágenes por su tamaño.", en: "Email rejects studies and images because of their size.", pt: "O e-mail rejeita exames e imagens pelo tamanho." },
    s: { es: "Compartir archivos sin límite de tamaño mediante enlaces seguros que expiran.", en: "Share files without size limits through secure, expiring links.", pt: "Compartilhar arquivos sem limite de tamanho por links seguros que expiram." } },
  { id: "hc-inbox", ind: "healthcare", f: ["email_plugins", "encrypted_email", "file_drop"], src: W + "industry/healthcare",
    t: { es: "Enviar y solicitar archivos desde la bandeja de entrada", en: "Send and request files from the inbox", pt: "Enviar e solicitar arquivos pela caixa de entrada" },
    p: { es: "Los profesionales no quieren salir del correo para compartir información sensible.", en: "Providers don't want to leave email to share sensitive information.", pt: "Os profissionais não querem sair do e-mail para compartilhar informações sensíveis." },
    s: { es: "Cifrar correos y enviar o solicitar archivos directamente desde el correo.", en: "Encrypt emails and send or request files right from the inbox.", pt: "Criptografar e-mails e enviar ou solicitar arquivos direto do e-mail." } },

  // ── Insurance
  { id: "ins-claims", ind: "insurance", f: ["enhanced_portal", "request_list", "task_mgmt"], src: W + "industry/insurance",
    t: { es: "Documentos de reclamos en un solo portal", en: "Claim documents in one portal", pt: "Documentos de sinistros em um só portal" },
    p: { es: "El asegurado envía documentos del reclamo por correo, incompletos y sin seguimiento.", en: "Policyholders email claim documents, incomplete and untracked.", pt: "O segurado envia documentos do sinistro por e-mail, incompletos e sem acompanhamento." },
    s: { es: "Una herramienta donde el cliente sube documentos, accede a archivos, firma y completa tareas.", en: "One tool where clients upload claim documents, access files, e-sign and complete tasks.", pt: "Uma ferramenta onde o cliente envia documentos, acessa arquivos, assina e conclui tarefas." } },
  { id: "ins-onboard", ind: "insurance", f: ["rapid_onboarding", "request_list", "encrypted_email"], src: W + "industry/insurance",
    t: { es: "Alta de clientes con flujos predefinidos", en: "Client onboarding with pre-built workflows", pt: "Cadastro de clientes com fluxos predefinidos" },
    p: { es: "Tareas repetitivas y correos riesgosos en cada alta.", en: "Routine tasks and risky emails in every onboarding.", pt: "Tarefas repetitivas e e-mails arriscados em cada cadastro." },
    s: { es: "Flujos predefinidos para dar de alta clientes o pedir listas de documentos en una sola solución segura.", en: "Pre-built workflows to onboard clients or request document lists in one secure solution.", pt: "Fluxos predefinidos para cadastrar clientes ou pedir listas de documentos em uma solução segura." } },
  { id: "ins-sign", ind: "insurance", f: ["esign", "automated_workflows"], src: W + "industry/insurance",
    t: { es: "Pólizas y reclamos con firma electrónica", en: "Policies and claims with e-signature", pt: "Apólices e sinistros com assinatura eletrônica" },
    p: { es: "Los agentes pierden tiempo en flujos de pólizas y reclamos manuales.", en: "Agents lose time on manual policy and claim workflows.", pt: "Os corretores perdem tempo em fluxos manuais de apólices e sinistros." },
    s: { es: "Completar flujos de pólizas o reclamos con automatización y firma electrónica integrada.", en: "Complete policy or claim workflows with automation and integrated e-signatures.", pt: "Concluir fluxos de apólices ou sinistros com automação e assinatura eletrônica integrada." } },
  { id: "ins-organize", ind: "insurance", f: ["projects", "task_mgmt"], src: W + "industry/insurance",
    t: { es: "Todo organizado por reclamo o póliza", en: "Everything organized by claim or policy", pt: "Tudo organizado por sinistro ou apólice" },
    p: { es: "Solicitudes, archivos y tareas de un mismo caso quedan dispersos.", en: "Requests, files and tasks for one case end up scattered.", pt: "Solicitações, arquivos e tarefas de um mesmo caso ficam espalhados." },
    s: { es: "Organizar solicitudes de documentos, archivos y tareas por reclamo o póliza.", en: "Organize document requests, files and tasks by claim or policy.", pt: "Organizar solicitações de documentos, arquivos e tarefas por sinistro ou apólice." } },
  { id: "ins-audit", ind: "insurance", f: ["file_encryption", "secure_sharing"], src: CS + "insurance-services-group-southeast",
    t: { es: "Auditorías remotas con transferencia cifrada", en: "Remote audits with encrypted transfer", pt: "Auditorias remotas com transferência criptografada" },
    p: { es: "Las auditorías dependen de visitas presenciales y de enviar archivos sensibles.", en: "Audits depend on site visits and on sending sensitive files.", pt: "As auditorias dependem de visitas presenciais e do envio de arquivos sensíveis." },
    s: { es: "Transferencia de archivos cifrada para trabajar auditorías a distancia.", en: "Encrypted file transfer to run audits remotely.", pt: "Transferência de arquivos criptografada para fazer auditorias a distância." },
    cust: [{ n: "Insurance Services Group of the Southeast", u: CS + "insurance-services-group-southeast", r: { es: "Ofrece a sus clientes una transferencia de archivos cifrada; hoy la mayor parte de su negocio es remoto.", en: "Offers clients a seamless, encrypted file transfer; most of its business now takes place remotely.", pt: "Oferece aos clientes uma transferência de arquivos criptografada; hoje a maior parte do negócio é remota." } }] },

  // ── Legal
  { id: "leg-intake", ind: "legal", f: ["rapid_onboarding", "forms", "esign"], src: W + "industry/legal",
    t: { es: "Ingreso de clientes", en: "Client intake", pt: "Entrada de clientes" },
    p: { es: "El alta de cada cliente consume horas no facturables.", en: "Each client intake eats non-billable hours.", pt: "A entrada de cada cliente consome horas não faturáveis." },
    s: { es: "Onboarding automatizado con formularios y firma electrónica.", en: "Automated onboarding with forms and e-signature.", pt: "Onboarding automatizado com formulários e assinatura eletrônica." },
    cust: [{ n: "ADVOS legal", u: CS + "advos-legal-advos-pro", r: { es: "Automatizó el alta de clientes y ahorra más de una hora de trabajo manual por cliente.", en: "Automated client onboarding, saving over an hour of manual work per client.", pt: "Automatizou o cadastro de clientes e economiza mais de uma hora de trabalho manual por cliente." } }] },
  { id: "leg-sign", ind: "legal", f: ["esign", "doc_templates", "kba"], src: W + "industry/legal",
    t: { es: "Documentos del caso y firmas", en: "Case documents and signatures", pt: "Documentos do caso e assinaturas" },
    p: { es: "Cartas de compromiso y autorizaciones en papel tardan semanas.", en: "Paper engagement letters and authorizations take weeks.", pt: "Cartas de contratação e autorizações em papel levam semanas." },
    s: { es: "Crear documentos del caso y recolectar firmas electrónicas más rápido.", en: "Create case documents and collect e-signatures faster.", pt: "Criar documentos do caso e coletar assinaturas eletrônicas mais rápido." },
    cust: [{ n: "aequum", u: CS + "aequum", r: { es: "La carta de compromiso se firma en 15 minutos, frente a una a dos semanas en papel.", en: "It can all happen in 15 minutes, versus one to two weeks on paper.", pt: "A carta de contratação é assinada em 15 minutos, contra uma a duas semanas em papel." } }] },
  { id: "leg-evidence", ind: "legal", f: ["request_list", "file_drop"], src: W + "industry/legal",
    t: { es: "Recolección de evidencia", en: "Evidence collection", pt: "Coleta de provas" },
    p: { es: "Pedir evidencia a clientes y terceros por correo es lento y desordenado.", en: "Requesting evidence from clients and third parties by email is slow and messy.", pt: "Pedir provas a clientes e terceiros por e-mail é lento e desorganizado." },
    s: { es: "Listas de solicitud y enlaces de carga para recibir evidencia ordenada y segura.", en: "Request lists and upload links to receive evidence organized and secure.", pt: "Listas de solicitação e links de envio para receber provas organizadas e seguras." } },
  { id: "leg-matter", ind: "legal", f: ["projects", "sync_versioning", "full_text_search"], src: W + "industry/legal",
    t: { es: "Expedientes organizados por caso o asunto", en: "Files organized by case or matter", pt: "Processos organizados por caso ou assunto" },
    p: { es: "Versiones de documentos y correos del caso imposibles de rastrear.", en: "Untraceable document versions and case emails.", pt: "Versões de documentos e e-mails do caso impossíveis de rastrear." },
    s: { es: "Construir y organizar los documentos de cada caso, con versiones y búsqueda de texto completo.", en: "Build and organize case and matter documents, with versioning and full-text search.", pt: "Montar e organizar os documentos de cada caso, com versões e busca de texto completo." } },
  { id: "leg-security", ind: "legal", f: ["threat_alerts", "auto_remediation", "view_only"], src: W + "industry/legal",
    t: { es: "Seguridad y control de acceso", en: "Security and access control", pt: "Segurança e controle de acesso" },
    p: { es: "Información confidencial del cliente expuesta a accesos indebidos.", en: "Confidential client information exposed to improper access.", pt: "Informações confidenciais do cliente expostas a acessos indevidos." },
    s: { es: "Alertas de amenazas con pasos de remediación y control del acceso interno y externo.", en: "Threat detection alerts with remediation steps and control of internal and external access.", pt: "Alertas de ameaças com passos de remediação e controle do acesso interno e externo." } },

  // ── Manufacturing
  { id: "man-suppliers", ind: "manufacturing", f: ["rapid_onboarding", "automated_workflows"], src: W + "industry/manufacturing",
    t: { es: "Alta de proveedores", en: "Supplier onboarding", pt: "Cadastro de fornecedores" },
    p: { es: "Incorporar proveedores exige documentos y aprobaciones manuales.", en: "Onboarding suppliers takes manual documents and approvals.", pt: "Cadastrar fornecedores exige documentos e aprovações manuais." },
    s: { es: "Acelerar el alta de proveedores con automatización de flujos.", en: "Fast-track supplier onboarding with workflow automation.", pt: "Acelerar o cadastro de fornecedores com automação de fluxos." } },
  { id: "man-approvals", ind: "manufacturing", f: ["feedback_approval", "automated_workflows"], src: W + "industry/manufacturing",
    t: { es: "Aprobación de diseños", en: "Design approvals", pt: "Aprovação de projetos" },
    p: { es: "Las aprobaciones de diseño se pierden en correos y versiones.", en: "Design approvals get lost in emails and versions.", pt: "As aprovações de projeto se perdem em e-mails e versões." },
    s: { es: "Revisión y aprobación de documentos con flujos automatizados.", en: "Document feedback and approval with automated workflows.", pt: "Revisão e aprovação de documentos com fluxos automatizados." },
    cust: [{ n: "Trademark Threads", u: CS + "trademark-threads", r: { es: "Redujo los errores en pedidos casi a cero con la revisión y aprobación de documentos.", en: "Reduced order errors to nearly zero with document feedback and approvals.", pt: "Reduziu os erros em pedidos quase a zero com a revisão e aprovação de documentos." } }] },
  { id: "man-design", ind: "manufacturing", f: ["watermark", "view_only", "link_expiration"], src: W + "industry/manufacturing",
    t: { es: "Compartir diseños con proveedores nacionales e internacionales", en: "Sharing designs with national and international suppliers", pt: "Compartilhar projetos com fornecedores nacionais e internacionais" },
    p: { es: "Archivos de diseño grandes y valiosos circulan sin control.", en: "Large, valuable design files circulate without control.", pt: "Arquivos de projeto grandes e valiosos circulam sem controle." },
    s: { es: "Compartir archivos grandes con marcas de agua, solo lectura y acceso con fecha de vencimiento.", en: "Share large files with watermarks, view-only access and expiring access.", pt: "Compartilhar arquivos grandes com marca d'água, somente leitura e acesso com prazo." },
    cust: [{ n: "Swiss Sustainable Yachts", u: CS + "swiss-sustainable-yachts", r: { es: "Equipos de varios países ven planos técnicos sin poder descargarlos, con marcas de agua y acceso limitado en el tiempo.", en: "Teams in several countries view technical drawings without downloading them, with watermarks and time-limited access.", pt: "Equipes de vários países veem desenhos técnicos sem poder baixá-los, com marca d'água e acesso limitado no tempo." } }] },
  { id: "man-portal", ind: "manufacturing", f: ["enhanced_portal", "projects"], src: W + "industry/manufacturing",
    t: { es: "Portales para proveedores y clientes", en: "Portals for suppliers and clients", pt: "Portais para fornecedores e clientes" },
    p: { es: "Diseños críticos y mensajes dispersos entre canales.", en: "Critical designs and messages scattered across channels.", pt: "Projetos críticos e mensagens espalhados entre canais." },
    s: { es: "Portales seguros con acceso rápido a diseños, mensajes y actividad del proyecto.", en: "Secure portals with quick access to designs, messages and project activity.", pt: "Portais seguros com acesso rápido a projetos, mensagens e atividade do projeto." } },
  { id: "man-trace", ind: "manufacturing", f: ["esign", "reports", "encrypted_email"], src: W + "industry/manufacturing",
    t: { es: "Firmas y trazabilidad", en: "Signatures and audit trails", pt: "Assinaturas e rastreabilidade" },
    p: { es: "Firmas manuales y sin registro de quién hizo qué.", en: "Manual signatures and no record of who did what.", pt: "Assinaturas manuais e sem registro de quem fez o quê." },
    s: { es: "Firmas electrónicas, registros de auditoría y cifrado de documentos y correos.", en: "E-signatures, audit trails and encryption of documents and emails.", pt: "Assinaturas eletrônicas, trilhas de auditoria e criptografia de documentos e e-mails." } },

  // ── Real estate
  { id: "re-requests", ind: "realestate", f: ["request_list", "automated_workflows"], src: W + "industry/real-estate",
    t: { es: "Solicitudes de documentos de principio a fin", en: "File requests from start to finish", pt: "Solicitações de documentos do início ao fim" },
    p: { es: "Cada operación exige perseguir documentos de compradores, vendedores y bancos.", en: "Every deal means chasing documents from buyers, sellers and lenders.", pt: "Cada negócio exige correr atrás de documentos de compradores, vendedores e bancos." },
    s: { es: "Gestionar las solicitudes de archivos de principio a fin, con recordatorios.", en: "Manage file requests from start to finish, with reminders.", pt: "Gerenciar as solicitações de arquivos do início ao fim, com lembretes." } },
  { id: "re-portal", ind: "realestate", f: ["enhanced_portal", "branding", "forms"], src: W + "industry/real-estate",
    t: { es: "Portal con tu marca y formularios prellenados", en: "Branded portal with pre-fill forms", pt: "Portal com sua marca e formulários pré-preenchidos" },
    p: { es: "La experiencia del cliente depende de correos y PDF sueltos.", en: "The client experience depends on loose emails and PDFs.", pt: "A experiência do cliente depende de e-mails e PDFs soltos." },
    s: { es: "Portal seguro con tu marca, formularios prellenados y firma integrada.", en: "Secure, custom-branded portal with pre-fill forms and integrated e-signature.", pt: "Portal seguro com sua marca, formulários pré-preenchidos e assinatura integrada." } },
  { id: "re-sign", ind: "realestate", f: ["esign", "kba"], src: W + "industry/real-estate",
    t: { es: "Firma de documentos de la operación", en: "Signing deal documents", pt: "Assinatura de documentos do negócio" },
    p: { es: "Reunir firmas de todas las partes retrasa la operación.", en: "Gathering every party's signature delays the deal.", pt: "Reunir as assinaturas de todas as partes atrasa o negócio." },
    s: { es: "Firma electrónica integrada para documentos privados; los actos que la ley local reserva a notario o firma oficial siguen ese camino.", en: "Integrated e-signature for private documents; acts that local law reserves for a notary or official signature follow that path.", pt: "Assinatura eletrônica integrada para documentos privados; atos que a lei local reserva ao cartório ou à assinatura oficial seguem esse caminho." } },
  { id: "re-approvals", ind: "realestate", f: ["automated_workflows", "templates", "feedback_approval"], src: W + "industry/real-estate",
    t: { es: "Aprobaciones internas con plantillas de flujo", en: "Internal approvals with workflow templates", pt: "Aprovações internas com modelos de fluxo" },
    p: { es: "Aprobaciones internas lentas y sin seguimiento.", en: "Slow, untracked internal approvals.", pt: "Aprovações internas lentas e sem acompanhamento." },
    s: { es: "Seguir aprobaciones internas y crear plantillas de flujo propias.", en: "Track internal approvals and build your own workflow templates.", pt: "Acompanhar aprovações internas e criar modelos de fluxo próprios." } },
  { id: "re-secure", ind: "realestate", f: ["encrypted_email", "mfa", "view_only"], src: W + "industry/real-estate",
    t: { es: "Envíos cifrados de ofertas y planos", en: "Encrypted sending of offers and plans", pt: "Envio criptografado de ofertas e plantas" },
    p: { es: "Adjuntos con datos de clientes y operaciones viajan sin protección.", en: "Attachments with client and deal data travel unprotected.", pt: "Anexos com dados de clientes e negócios circulam sem proteção." },
    s: { es: "Cifrar cada envío, archivo compartido y adjunto de correo, con autenticación de usuarios.", en: "Encrypt every send, share and email attachment, with user authentication.", pt: "Criptografar cada envio, compartilhamento e anexo de e-mail, com autenticação de usuários." } },

  // ── Human resources
  { id: "hr-onboard", ind: "hr", f: ["rapid_onboarding", "esign", "request_list"], src: W + "industry/human-resources",
    t: { es: "Alta de nuevos empleados", en: "New hire onboarding", pt: "Admissão de novos funcionários" },
    p: { es: "Cada ingreso exige reunir documentos y firmas por correo.", en: "Every new hire means gathering documents and signatures by email.", pt: "Cada admissão exige reunir documentos e assinaturas por e-mail." },
    s: { es: "Compartir y recolectar información confidencial, organizar documentos y pedir firmas en una herramienta segura.", en: "Share and collect confidential information, organize documents and request signatures in one secure tool.", pt: "Compartilhar e coletar informações confidenciais, organizar documentos e pedir assinaturas em uma ferramenta segura." } },
  { id: "hr-benefits", ind: "hr", f: ["request_list", "encrypted_email"], src: W + "industry/human-resources",
    t: { es: "Documentos de inscripción a beneficios", en: "Benefits enrollment documents", pt: "Documentos de adesão a benefícios" },
    p: { es: "Los periodos de inscripción saturan el correo con datos personales.", en: "Enrollment periods flood email with personal data.", pt: "Os períodos de adesão lotam o e-mail com dados pessoais." },
    s: { es: "Recolectar los documentos de inscripción de forma organizada y cifrada.", en: "Collect enrollment documents in an organized, encrypted way.", pt: "Coletar os documentos de adesão de forma organizada e criptografada." } },
  { id: "hr-agreements", ind: "hr", f: ["esign", "encrypted_email", "view_only"], src: W + "industry/human-resources",
    t: { es: "Acuerdos con candidatos, reclutadores y proveedores de beneficios", en: "Agreements with candidates, recruiters and benefit providers", pt: "Acordos com candidatos, recrutadores e fornecedores de benefícios" },
    p: { es: "Ofertas y contratos con terceros sin control de acceso.", en: "Offers and contracts with third parties without access control.", pt: "Ofertas e contratos com terceiros sem controle de acesso." },
    s: { es: "Iniciar acuerdos con firma electrónica, cifrado y control de acceso.", en: "Initiate agreements with e-signature, encryption and access control.", pt: "Iniciar acordos com assinatura eletrônica, criptografia e controle de acesso." } },
  { id: "hr-records", ind: "hr", f: ["folder_templates", "view_only", "reports"], src: W + "industry/human-resources",
    t: { es: "Expedientes de empleados con acceso controlado", en: "Employee records with controlled access", pt: "Prontuários de funcionários com acesso controlado" },
    p: { es: "Información confidencial de empleados dispersa y sin control de quién la ve.", en: "Confidential employee information scattered, with no control over who sees it.", pt: "Informações confidenciais de funcionários espalhadas e sem controle de quem as vê." },
    s: { es: "Espacios dedicados con estructura estándar, permisos y registros de actividad.", en: "Dedicated spaces with a standard structure, permissions and activity logs.", pt: "Espaços dedicados com estrutura padrão, permissões e registros de atividade." } },
  { id: "hr-sign", ind: "hr", f: ["esign", "doc_templates"], src: W + "industry/human-resources",
    t: { es: "Recolección de firmas de RR. HH.", en: "HR signature collection", pt: "Coleta de assinaturas de RH" },
    p: { es: "Políticas y formularios firmados en papel, difíciles de archivar.", en: "Policies and forms signed on paper, hard to file.", pt: "Políticas e formulários assinados em papel, difíceis de arquivar." },
    s: { es: "Firma electrónica con plantillas para los documentos recurrentes de RR. HH.", en: "E-signature with templates for recurring HR documents.", pt: "Assinatura eletrônica com modelos para os documentos recorrentes de RH." } },
  // ── Added in v1.8.0 (sources re-verified 2026-10-08)
  { id: "acc-team", ind: "accounting", f: ["task_mgmt", "tasks_workspace", "projects"], src: W + "product-feature/income-tax-return-solution",
    t: { es: "Coordinación del equipo en cada encargo", en: "Team coordination on every engagement", pt: "Coordenação da equipe em cada trabalho" },
    p: { es: "Nadie sabe quién tiene cada tarea del encargo ni en qué va.", en: "No one knows who owns each engagement task or where it stands.", pt: "Ninguém sabe quem cuida de cada tarefa do trabalho nem em que ponto está." },
    s: { es: "Delegar tareas, colaborar con el equipo y gestionar los encargos de clientes en un solo lugar.", en: "Delegate tasks, collaborate with team members and manage client engagements in a single location.", pt: "Delegar tarefas, colaborar com a equipe e gerenciar os trabalhos de clientes em um só lugar." } },
  { id: "acc-pbc", ind: "accounting", f: ["forms", "request_list", "templates"], src: W + "product-feature/income-tax-return-solution",
    t: { es: "Cuestionarios y listas PBC", en: "Questionnaires and PBC lists", pt: "Questionários e listas PBC" },
    p: { es: "Los datos del cliente llegan por correo, en formatos distintos y sin estructura.", en: "Client data arrives by email, in different formats and unstructured.", pt: "Os dados do cliente chegam por e-mail, em formatos diferentes e sem estrutura." },
    s: { es: "Recolectar documentos y datos con listas de solicitud, cuestionarios y formularios digitales con plantillas.", en: "Collect client documents and data with templated request lists, questionnaires and digital forms.", pt: "Coletar documentos e dados com listas de solicitação, questionários e formulários digitais com modelos." } },
  { id: "acc-approvals", ind: "accounting", f: ["esign", "reports"], src: CS + "empowering-nonprofits--how-jitasa-scales-impact-with-sharefile",
    t: { es: "Aprobaciones de nómina, impuestos y auditoría", en: "Payroll, tax and audit approvals", pt: "Aprovações de folha, impostos e auditoria" },
    p: { es: "Las aprobaciones viajan por correo y hay que perseguirlas a mano.", en: "Approvals travel by email and have to be chased by hand.", pt: "As aprovações circulam por e-mail e é preciso cobrá-las à mão." },
    s: { es: "Enviar documentos a firma desde ShareFile, con recordatorios automáticos y registro de auditoría.", en: "Send documents for signature from ShareFile, with automatic reminders and an audit trail.", pt: "Enviar documentos para assinatura pelo ShareFile, com lembretes automáticos e trilha de auditoria." },
    cust: [{ n: "Jitasa", u: CS + "empowering-nonprofits--how-jitasa-scales-impact-with-sharefile", r: { es: "Agiliza las aprobaciones de nómina, impuestos y auditoría con firma electrónica integrada.", en: "Streamlines payroll, tax and audit approvals with built-in e-signature workflows.", pt: "Agiliza as aprovações de folha, impostos e auditoria com assinatura eletrônica integrada." } }] },
  { id: "con-planroom", ind: "construction", f: ["secure_sharing", "file_drop"], src: CS + "eggemeyer-associates-architects",
    t: { es: "Sala de planos en línea", en: "Online plan room", pt: "Sala de plantas on-line" },
    p: { es: "Compartir planos con muchos interesados exige envíos uno por uno.", en: "Sharing plans with many parties means sending them one by one.", pt: "Compartilhar plantas com muitos interessados exige envios um a um." },
    s: { es: "Una sala de planos en línea, integrada al sitio web de la firma.", en: "An online plan room integrated with the firm's website.", pt: "Uma sala de plantas on-line, integrada ao site da empresa." },
    cust: [{ n: "Eggemeyer Associates Architects", u: CS + "eggemeyer-associates-architects", r: { es: "Usa ShareFile para su sala de planos en línea, integrada a su sitio web.", en: "Uses ShareFile for its online plan room, integrated with its website.", pt: "Usa o ShareFile para sua sala de plantas on-line, integrada ao site." } }] },
  { id: "con-changes", ind: "construction", f: ["esign", "doc_templates"], src: CS + "eggemeyer-associates-architects",
    t: { es: "Contratos y órdenes de cambio con firma", en: "Contracts and change orders with e-signature", pt: "Contratos e ordens de mudança com assinatura" },
    p: { es: "Contratos y órdenes de cambio esperan firmas de varias partes.", en: "Contracts and change orders wait for several parties' signatures.", pt: "Contratos e ordens de mudança aguardam assinaturas de várias partes." },
    s: { es: "Enviar contratos, órdenes de cambio y otros documentos para que varias partes los firmen y devuelvan.", en: "Send contracts, change orders and other documents to be signed and returned by multiple parties.", pt: "Enviar contratos, ordens de mudança e outros documentos para várias partes assinarem e devolverem." },
    cust: [{ n: "Eggemeyer Associates Architects", u: CS + "eggemeyer-associates-architects", r: { es: "La firma electrónica hace que sus proyectos y aprobaciones avancen días más rápido.", en: "E-signature capabilities help its projects and approvals move faster by days.", pt: "A assinatura eletrônica faz seus projetos e aprovações avançarem dias mais rápido." } }] },
  { id: "fin-dealteam", ind: "finance", f: ["coediting", "projects"], src: W + "industry/finance",
    t: { es: "Colaboración en tiempo real del equipo de la transacción", en: "Real-time collaboration across deal teams", pt: "Colaboração em tempo real da equipe da transação" },
    p: { es: "Versiones cruzadas del mismo documento entre los miembros del equipo.", en: "Crossed versions of the same document among team members.", pt: "Versões cruzadas do mesmo documento entre os membros da equipe." },
    s: { es: "Colaboración en tiempo real sobre los documentos, en un espacio por transacción.", en: "Real-time collaboration on documents, in one space per deal.", pt: "Colaboração em tempo real nos documentos, em um espaço por transação." } },
  { id: "fin-ops", ind: "finance", f: ["automated_workflows", "templates"], src: W + "industry/finance",
    t: { es: "Eficiencia operativa con flujos automatizados", en: "Operational efficiency with automated workflows", pt: "Eficiência operacional com fluxos automatizados" },
    p: { es: "Solicitudes, firmas y recordatorios repetidos a mano con cada cliente.", en: "Requests, signatures and reminders repeated by hand for every client.", pt: "Solicitações, assinaturas e lembretes repetidos à mão com cada cliente." },
    s: { es: "Plantillas de automatización para pedir documentos, recolectar firmas y enviar recordatorios.", en: "Automation templates to request documents, collect e-signatures and send reminders.", pt: "Modelos de automação para pedir documentos, coletar assinaturas e enviar lembretes." } },
  { id: "fin-vault", ind: "finance", f: ["request_list", "enhanced_portal", "secure_sharing"], src: CS + "strategic-treasurer",
    t: { es: "Bóveda segura de documentos del cliente", en: "Secure client document vault", pt: "Cofre seguro de documentos do cliente" },
    p: { es: "La documentación del cliente se pierde entre correos a lo largo de los años.", en: "Client documentation gets lost in email over the years.", pt: "A documentação do cliente se perde entre e-mails ao longo dos anos." },
    s: { es: "Una bóveda segura a la que el cliente accede con el tiempo, donde se responden solicitudes arrastrando archivos.", en: "A secure vault customers can access over time, where requests are answered by dragging files in.", pt: "Um cofre seguro que o cliente acessa ao longo do tempo, onde as solicitações são respondidas arrastando arquivos." },
    cust: [{ n: "Strategic Treasurer", u: CS + "strategic-treasurer", r: { es: "Construyó una bóveda segura a la que sus clientes acceden con el tiempo.", en: "Built a secure vault that customers can access over time.", pt: "Construiu um cofre seguro que seus clientes acessam ao longo do tempo." } }] },
  { id: "hc-credential", ind: "healthcare", f: ["esign", "request_list"], src: CS + "new-england-community-medical-services",
    t: { es: "Acuerdos de servicio y acreditación con aseguradoras", en: "Service agreements and insurance credentialing", pt: "Acordos de serviço e credenciamento com seguradoras" },
    p: { es: "Acuerdos y trámites de acreditación lentos y en papel.", en: "Slow, paper-based agreements and credentialing paperwork.", pt: "Acordos e trâmites de credenciamento lentos e em papel." },
    s: { es: "Flujos con firma electrónica y solicitudes de documentos para acuerdos de servicio y acreditación.", en: "E-signature and document request workflows for service agreements and credentialing.", pt: "Fluxos com assinatura eletrônica e solicitações de documentos para acordos de serviço e credenciamento." },
    cust: [{ n: "New England Community Medical Services", u: CS + "new-england-community-medical-services", r: { es: "Mejoró sus flujos de acuerdos de servicio y de acreditación con aseguradoras.", en: "Improved its workflows around appointment service agreements and insurance credentialing.", pt: "Melhorou seus fluxos de acordos de serviço e de credenciamento com seguradoras." } }] },
  { id: "hc-orders", ind: "healthcare", f: ["request_list", "file_drop"], src: CS + "new-england-community-medical-services",
    t: { es: "Solicitudes de expedientes y órdenes en un solo lugar", en: "Record requests and orders in one place", pt: "Solicitações de prontuários e pedidos em um só lugar" },
    p: { es: "El estado de cada solicitud u orden se reparte entre correos y llamadas.", en: "The status of each request or order is spread across emails and calls.", pt: "O status de cada solicitação ou pedido fica espalhado entre e-mails e ligações." },
    s: { es: "Recibir y completar solicitudes de expedientes y órdenes en ShareFile, con una sola fuente de verdad.", en: "Receive and complete record requests and orders in ShareFile, with one source of truth.", pt: "Receber e concluir solicitações de prontuários e pedidos no ShareFile, com uma única fonte de verdade." },
    cust: [{ n: "New England Community Medical Services", u: CS + "new-england-community-medical-services", r: { es: "Las órdenes se envían y completan en ShareFile, con una sola fuente de verdad sobre su estado.", en: "Order requests are submitted and completed through ShareFile, one source of truth for order status.", pt: "Os pedidos são enviados e concluídos no ShareFile, com uma única fonte de verdade sobre o status." } }] },
  { id: "ins-team", ind: "insurance", f: ["secure_sharing", "email_plugins", "reports"], src: W + "industry/insurance",
    t: { es: "Transferencias seguras sin pasos extra para el equipo", en: "Secure transfers with no extra steps for the team", pt: "Transferências seguras sem passos extras para a equipe" },
    p: { es: "Las medidas de seguridad agregan pasos y el equipo busca atajos.", en: "Security measures add steps and the team looks for shortcuts.", pt: "As medidas de segurança acrescentam passos e a equipe procura atalhos." },
    s: { es: "Que todos los empleados transfieran y guarden datos de forma segura sin agregar pasos a su trabajo.", en: "Ensure all employees can securely transfer and store data without adding steps to their workflows.", pt: "Que todos os funcionários transfiram e guardem dados com segurança sem acrescentar passos ao trabalho." } },
  { id: "ins-master", ind: "insurance", f: ["file_drop", "request_list"], src: CS + "insurance-services-group-southeast",
    t: { es: "Archivos maestros de clientes corporativos", en: "Master files from large clients", pt: "Arquivos mestres de grandes clientes" },
    p: { es: "Los clientes grandes envían archivos enormes y sensibles por canales inseguros.", en: "Large clients send huge, sensitive files through insecure channels.", pt: "Grandes clientes enviam arquivos enormes e sensíveis por canais inseguros." },
    s: { es: "Un protocolo de carga en ShareFile para que el cliente suba su archivo maestro.", en: "An upload protocol in ShareFile so the client can upload its master file.", pt: "Um protocolo de envio no ShareFile para o cliente subir seu arquivo mestre." },
    cust: [{ n: "Insurance Services Group of the Southeast", u: CS + "insurance-services-group-southeast", r: { es: "Creó un protocolo en ShareFile para que un cliente nacional suba su archivo maestro.", en: "Set up a ShareFile protocol so a major national client can upload a super-master file.", pt: "Criou um protocolo no ShareFile para um cliente nacional enviar seu arquivo mestre." } }] },
  { id: "leg-dataroom", ind: "legal", f: ["enhanced_portal", "folder_templates", "esign"], src: CS + "advos-legal-advos-pro",
    t: { es: "Un espacio de datos por cliente", en: "One data room per client", pt: "Uma sala de dados por cliente" },
    p: { es: "Acuerdos firmados y documentos clave del cliente dispersos.", en: "Signed agreements and key client documents scattered.", pt: "Acordos assinados e documentos-chave do cliente espalhados." },
    s: { es: "Un espacio por cliente donde cliente y equipo agregan los acuerdos firmados y los documentos clave.", en: "One space per client where client and team add signed agreements and key documents.", pt: "Um espaço por cliente onde cliente e equipe adicionam os acordos assinados e os documentos-chave." },
    cust: [{ n: "ADVOS legal", u: CS + "advos-legal-advos-pro", r: { es: "Crea un client data room por cliente; el acuerdo de incorporación y confidencialidad se firma por enlace.", en: "Creates a client data room for each client; the membership/onboarding and non-disclosure agreement is signed via a link.", pt: "Cria um client data room por cliente; o acordo de adesão e confidencialidade é assinado por link." } }] },
  { id: "leg-trial", ind: "legal", f: ["secure_sharing", "hyperlink_sharing", "file_drop"], src: CS + "naegeli-deposition-trial",
    t: { es: "Archivos pesados durante el juicio", en: "Large files during trial", pt: "Arquivos pesados durante o julgamento" },
    p: { es: "Videos y transcripciones pesadas se mueven en tarjetas de memoria o envíos físicos.", en: "Heavy videos and transcripts move on memory cards or physical shipments.", pt: "Vídeos e transcrições pesadas circulam em cartões de memória ou envios físicos." },
    s: { es: "Recibir archivos de equipos remotos y enviarlos a los abogados en el momento.", en: "Receive files from remote teams and send them to attorneys on the spot.", pt: "Receber arquivos de equipes remotas e enviá-los aos advogados na hora." },
    cust: [{ n: "NAEGELI Deposition & Trial", u: CS + "naegeli-deposition-trial", r: { es: "Recibe video de camarógrafos remotos y lo envía a los abogados durante el juicio.", en: "Receives raw video from remote videographers and sends it to attorneys during trial.", pt: "Recebe vídeo de cinegrafistas remotos e o envia aos advogados durante o julgamento." } }] },
  { id: "leg-links", ind: "legal", f: ["file_drop", "enhanced_portal"], src: CS + "aequum",
    t: { es: "Recibir archivos desde la web y la firma de correo", en: "Receiving files from the website and email signature", pt: "Receber arquivos pelo site e pela assinatura de e-mail" },
    p: { es: "Clientes y aliados no saben por dónde enviar documentos sensibles.", en: "Clients and partners don't know where to send sensitive documents.", pt: "Clientes e parceiros não sabem por onde enviar documentos sensíveis." },
    s: { es: "Un portal en el sitio web para arrastrar documentos y un enlace de carga en la firma de correo de cada empleado.", en: "A portal on the website to drag and drop documents, and an upload link in each employee's email signature.", pt: "Um portal no site para arrastar documentos e um link de envio na assinatura de e-mail de cada funcionário." },
    cust: [{ n: "aequum", u: CS + "aequum", r: { es: "Sus clientes y aliados suben documentos por un portal en su sitio web o por el enlace en la firma de correo.", en: "Clients and partners upload documents through a portal on its website or a link in each employee's email signature.", pt: "Clientes e parceiros enviam documentos por um portal no site ou pelo link na assinatura de e-mail." } }] },
  { id: "man-mobile", ind: "manufacturing", f: ["apps", "anytime_access"], src: W + "industry/manufacturing",
    t: { es: "Colaborar desde cualquier dispositivo y lugar", en: "Collaborate from any device and location", pt: "Colaborar de qualquer dispositivo e lugar" },
    p: { es: "En planta y en viaje no hay acceso a los archivos ni a los mensajes del proyecto.", en: "On the shop floor or traveling there is no access to project files or messages.", pt: "Na fábrica ou em viagem não há acesso aos arquivos nem às mensagens do projeto." },
    s: { es: "Intercambiar archivos y mensajes entre dispositivos y desde cualquier lugar.", en: "Exchange files and messages across devices and from any location.", pt: "Trocar arquivos e mensagens entre dispositivos e de qualquer lugar." } }
];

// Regulatory fit by country (pilot: Costa Rica). Rules: law text only from official government copies; ShareFile
// facts only from sharefile.com, docs.sharefile.com or trust.sharefile.com; never "ShareFile complies with";
// the obligation stays with the customer. Verified 2026-10-08; items that could not be verified are omitted.
const TRUST = "https://trust.sharefile.com/";
const ZONES = D + "account_settings/storage/sharefile-managed-storage-zones";
const SZC = D + "storage-zones-controller/6-0/about";
// ── Reusable building blocks for the remaining countries (same rules as the Costa Rica pilot)
const T3 = (es, en, pt) => ({ es, en, pt });
const TOP = {
  sec: T3("Seguridad de los datos", "Data security", "Segurança dos dados"),
  transfer: T3("Transferencia y almacenamiento fuera del país", "Transfer and storage outside the country", "Transferência e armazenamento fora do país"),
  breach: T3("Aviso de vulneraciones de seguridad", "Notice of security breaches", "Aviso de incidentes de segurança"),
  enc: T3("Cifrado de información confidencial", "Encryption of confidential information", "Criptografia de informação confidencial"),
  third: T3("Proveedores, nube y acceso del supervisor", "Providers, cloud and supervisor access", "Fornecedores, nuvem e acesso do supervisor"),
  incident: T3("Gestión y reporte de incidentes", "Incident management and reporting", "Gestão e reporte de incidentes"),
  sign: T3("Firma oficial vs. firma de ShareFile", "Official signature vs. ShareFile e-signature", "Assinatura oficial vs. assinatura do ShareFile"),
  keep: T3("Conservación de documentos electrónicos", "Retention of electronic records", "Conservação de documentos eletrônicos")
};
const FIT = {
  sec: { f: ["file_encryption", "mfa", "sso", "view_only", "reports"], links: [[W + "product-feature/regulatory-compliance-support", "sharefile.com · Regulatory compliance support"]],
    sf: T3("Cifrado en tránsito y en reposo, autenticación multifactor, inicio de sesión único, permisos granulares y registros de actividad.", "Encryption in transit and at rest, multi-factor authentication, single sign-on, granular permissions and activity logs.", "Criptografia em trânsito e em repouso, autenticação multifator, login único, permissões granulares e registros de atividade.") },
  transfer: { f: [], links: [[ZONES, "docs.sharefile.com · Managed storage zones"], [SZC, "docs.sharefile.com · Storage Zones Controller"], [TRUST, "trust.sharefile.com"]],
    sf: T3("El cliente elige la zona de almacenamiento o usa Storage Zones Controller para guardar los archivos en su propia infraestructura. El Trust Center indica que ShareFile firma un acuerdo de procesamiento de datos (DPA) y lista sus subprocesadores.", "The customer chooses the storage zone or uses Storage Zones Controller to keep files on its own infrastructure. The Trust Center states ShareFile will enter into a data processing agreement (DPA) and lists its subprocessors.", "O cliente escolhe a zona de armazenamento ou usa o Storage Zones Controller para guardar os arquivos em sua própria infraestrutura. O Trust Center indica que o ShareFile firma um acordo de processamento de dados (DPA) e lista seus subprocessadores.") },
  breach: { f: ["threat_alerts", "reports", "security_center", "siem"], links: [],
    sf: T3("Alertas de detección de amenazas y registros de actividad para investigar; en Enterprise, Security Center e integración con SIEM.", "Threat detection alerts and activity logs to investigate; on Enterprise, Security Center and SIEM integration.", "Alertas de detecção de ameaças e registros de atividade para investigar; no Enterprise, Security Center e integração com SIEM.") },
  enc: { f: ["file_encryption", "kms", "umt", "sso", "mfa"], links: [],
    sf: T3("Cifrado en tránsito (TLS) y en reposo, con opción de llave en AWS KMS; la entidad administra usuarios, permisos, SSO y MFA.", "Encryption in transit (TLS) and at rest, with an AWS KMS key option; the entity administers users, permissions, SSO and MFA.", "Criptografia em trânsito (TLS) e em repouso, com opção de chave no AWS KMS; a entidade administra usuários, permissões, SSO e MFA.") },
  third: { f: ["reports"], links: [[TRUST, "trust.sharefile.com"], ["https://status.sharefile.com/", "status.sharefile.com"]],
    sf: T3("El Trust Center publica ISO 27001, SOC 2 Type II, informes de auditoría, plan de recuperación ante desastres y subprocesadores (algunos documentos requieren solicitar acceso); los registros de actividad se pueden programar y exportar.", "The Trust Center publishes ISO 27001, SOC 2 Type II, audit reports, a disaster recovery plan and subprocessors (some documents require requesting access); activity reports can be scheduled and exported.", "O Trust Center publica ISO 27001, SOC 2 Type II, relatórios de auditoria, plano de recuperação de desastres e subprocessadores (alguns documentos exigem solicitar acesso); os relatórios de atividade podem ser agendados e exportados.") },
  incident: { f: ["threat_alerts", "auto_remediation", "security_center", "ueba", "siem"], links: [],
    sf: T3("Alertas de amenazas y remediación automática en todos los planes; en Enterprise, Security Center, UEBA e integración con SIEM para alimentar el proceso de incidentes.", "Threat alerts and automated remediation on every plan; on Enterprise, Security Center, UEBA and SIEM integration to feed the incident process.", "Alertas de ameaças e remediação automática em todos os planos; no Enterprise, Security Center, UEBA e integração com SIEM para alimentar o processo de incidentes.") },
  sign: { f: ["esign", "secure_sharing"], links: [],
    sf: T3("La firma electrónica integrada de ShareFile sirve para documentos privados con evidencia (registro y certificado de firma), pero no usa certificados de la jerarquía oficial del país. ShareFile puede guardar y compartir documentos ya firmados con la firma oficial.", "ShareFile's integrated e-signature works for private documents with evidence (audit trail and signature certificate), but it does not use certificates from the country's official hierarchy. ShareFile can store and share documents already signed with the official signature.", "A assinatura eletrônica integrada do ShareFile serve para documentos privados com evidência (registro e certificado de assinatura), mas não usa certificados da hierarquia oficial do país. O ShareFile pode guardar e compartilhar documentos já assinados com a assinatura oficial.") },
  keep: { f: ["sync_versioning", "archiving", "reports"], links: [],
    sf: T3("ShareFile guarda los documentos con versiones, archivado y registros de actividad, pero no emite constancias de conservación de un prestador acreditado.", "ShareFile stores documents with versioning, archiving and activity logs, but does not issue retention certificates from an accredited provider.", "O ShareFile guarda os documentos com versões, arquivamento e registros de atividade, mas não emite constâncias de conservação de um prestador credenciado.") }
};
const PT = (cite, quote, topic, fit, you, qlang) => Object.assign({ cite, quote, topic: TOP[topic], you, qlang: qlang || "es" }, { sf: FIT[fit].sf, f: FIT[fit].f, links: FIT[fit].links });
const YOU = {
  sec: T3("Definir y documentar sus medidas; activar y configurar esos controles en su cuenta.", "Define and document its measures; turn on and configure those controls in its account.", "Definir e documentar suas medidas; ativar e configurar esses controles na conta.")
};
const COMPLIANCE = [
  { id: "cr", name: { es: "Costa Rica", en: "Costa Rica", pt: "Costa Rica" }, verified: "2026-10-08",
    residency: { es: "ShareFile no tiene zona de almacenamiento gestionada en Costa Rica ni en Centroamérica: sus zonas están en EE. UU., Canadá, Brasil, Unión Europea, Japón, Australia, Singapur, Emiratos e India. Usar una zona gestionada implica guardar los datos fuera del país. Para mantenerlos en Costa Rica existe Storage Zones Controller, una zona que el cliente opera en su propia infraestructura (y que debe mantener en versión soportada y con parches al día).", en: "ShareFile has no managed storage zone in Costa Rica or Central America: its zones are in the US, Canada, Brazil, the European Union, Japan, Australia, Singapore, the UAE and India. Using a managed zone means storing data outside the country. To keep data in Costa Rica there is Storage Zones Controller, a zone the customer runs on its own infrastructure (and must keep on a supported, patched version).", pt: "O ShareFile não tem zona de armazenamento gerenciada na Costa Rica nem na América Central: suas zonas ficam nos EUA, Canadá, Brasil, União Europeia, Japão, Austrália, Singapura, Emirados e Índia. Usar uma zona gerenciada implica guardar os dados fora do país. Para mantê-los na Costa Rica existe o Storage Zones Controller, uma zona que o cliente opera em sua própria infraestrutura (e deve manter em versão suportada e com patches em dia)." },
    norms: [
      { id: "cr-8968", name: "Ley N.º 8968", title: { es: "Protección de la Persona frente al Tratamiento de sus Datos Personales (2011)", en: "Protection of Individuals regarding the Processing of their Personal Data (2011)", pt: "Proteção da Pessoa frente ao Tratamento de seus Dados Pessoais (2011)" },
        authority: "PRODHAB", url: "https://www.micitt.go.cr/sites/default/files/marco_juridico_legal/08.%20Ley%20n.%C2%B0%208968%20Ley%20de%20Protecci%C3%B3n%20de%20la%20Persona%20frente%20al%20tratamiento%20de%20sus%20datos%20personales..pdf",
        applies: { es: "Responsables de bases de datos con datos personales en Costa Rica.", en: "Controllers of databases holding personal data in Costa Rica.", pt: "Responsáveis por bases de dados com dados pessoais na Costa Rica." },
        points: [
          { cite: "Art. 10", quote: "El responsable de la base de datos deberá adoptar las medidas de índole técnica y de organización necesarias para garantizar la seguridad de los datos de carácter personal…",
            topic: { es: "Seguridad de los datos", en: "Data security", pt: "Segurança dos dados" },
            sf: { es: "Cifrado en tránsito y en reposo, autenticación multifactor, inicio de sesión único, permisos granulares y registros de actividad.", en: "Encryption in transit and at rest, multi-factor authentication, single sign-on, granular permissions and activity logs.", pt: "Criptografia em trânsito e em repouso, autenticação multifator, login único, permissões granulares e registros de atividade." },
            f: ["file_encryption", "mfa", "sso", "view_only", "reports"], links: [[W + "product-feature/regulatory-compliance-support", "sharefile.com · Regulatory compliance support"]],
            you: { es: "Definir y documentar sus medidas; activar y configurar esos controles en su cuenta.", en: "Define and document its measures; turn on and configure those controls in its account.", pt: "Definir e documentar suas medidas; ativar e configurar esses controles na conta." } },
          { cite: "Art. 14 · Art. 31(f)", quote: "…solo podrán transferir datos contenidos en ellas cuando el titular del derecho haya autorizado expresa y válidamente… (Art. 31 f, falta gravísima:) Transferir, a las bases de datos de terceros países, información de carácter personal… sin el consentimiento de sus titulares.",
            topic: { es: "Transferencia y almacenamiento fuera del país", en: "Transfer and storage outside the country", pt: "Transferência e armazenamento fora do país" },
            sf: { es: "El cliente elige la zona de almacenamiento (ninguna está en Costa Rica) o usa Storage Zones Controller para guardar los archivos en su propia infraestructura. El Trust Center indica que ShareFile firma un acuerdo de procesamiento de datos (DPA).", en: "The customer chooses the storage zone (none is in Costa Rica) or uses Storage Zones Controller to keep files on its own infrastructure. The Trust Center states ShareFile will enter into a data processing agreement (DPA).", pt: "O cliente escolhe a zona de armazenamento (nenhuma fica na Costa Rica) ou usa o Storage Zones Controller para guardar os arquivos em sua própria infraestrutura. O Trust Center indica que o ShareFile firma um acordo de processamento de dados (DPA)." },
            f: [], links: [[ZONES, "docs.sharefile.com · Managed storage zones"], [SZC, "docs.sharefile.com · Storage Zones Controller"], [TRUST, "trust.sharefile.com"]],
            you: { es: "Obtener el consentimiento expreso de los titulares si los datos se guardan fuera de Costa Rica; elegir la zona; firmar el DPA o contrato que corresponda.", en: "Obtain data subjects' express consent if data is stored outside Costa Rica; choose the zone; sign the applicable DPA or contract.", pt: "Obter o consentimento expresso dos titulares se os dados forem guardados fora da Costa Rica; escolher a zona; assinar o DPA ou contrato correspondente." } }
        ] },
      { id: "cr-37554", name: "Decreto Ejecutivo 37554-JP", check: true, title: { es: "Reglamento a la Ley 8968 (2013)", en: "Regulation of Law 8968 (2013)", pt: "Regulamento da Lei 8968 (2013)" },
        authority: "PRODHAB", url: "https://www.tse.go.cr/pdf/normativa/reglamentoleyproteccionpersona.pdf",
        applies: { es: "Responsables de bases de datos personales.", en: "Controllers of personal databases.", pt: "Responsáveis por bases de dados pessoais." },
        points: [
          { cite: "Art. 39", quote: "El responsable deberá informar al titular y a la Agencia, en caso de vulnerabilidades de seguridad…",
            topic: { es: "Aviso de vulneraciones de seguridad", en: "Notice of security breaches", pt: "Aviso de violações de segurança" },
            sf: { es: "Alertas de detección de amenazas y registros de actividad para investigar; en Enterprise, Security Center e integración con SIEM.", en: "Threat detection alerts and activity logs to investigate; on Enterprise, Security Center and SIEM integration.", pt: "Alertas de detecção de ameaças e registros de atividade para investigar; no Enterprise, Security Center e integração com SIEM." },
            f: ["threat_alerts", "reports", "security_center", "siem"], links: [],
            you: { es: "Informar al titular y a PRODHAB. Los plazos y la vigencia del reglamento deben confirmarse en el texto oficial vigente (SCIJ).", en: "Notify the data subject and PRODHAB. Deadlines and the regulation's current status must be confirmed in the official consolidated text (SCIJ).", pt: "Informar o titular e a PRODHAB. Os prazos e a vigência do regulamento devem ser confirmados no texto oficial vigente (SCIJ)." } }
        ] },
      { id: "cr-conassif", name: "CONASSIF 5-24", title: { es: "Reglamento General de Gobierno y Gestión de la Tecnología de Información (2024; versión vigente 15-jul-2025)", en: "General Regulation on IT Governance and Management (2024; current version 15 Jul 2025)", pt: "Regulamento Geral de Governança e Gestão de TI (2024; versão vigente 15-jul-2025)" },
        authority: "CONASSIF · SUGEF · SUGEVAL · SUPEN · SUGESE", url: "https://www.sugef.fi.cr/normativa/normativa_transversal/documentos/CONASSIF%205-24%20(v03%2015%20julio%202025).pdf",
        applies: { es: "Entidades supervisadas por SUGEF, SUGEVAL, SUPEN y SUGESE, y grupos y conglomerados financieros.", en: "Entities supervised by SUGEF, SUGEVAL, SUPEN and SUGESE, and financial groups and conglomerates.", pt: "Entidades supervisionadas pela SUGEF, SUGEVAL, SUPEN e SUGESE, e grupos e conglomerados financeiros." },
        points: [
          { cite: "Art. 23 c", quote: "…[el proveedor] tenga y conserve vigente, al menos, la certificación ISO 27001.",
            topic: { es: "Certificación del proveedor de nube", en: "Cloud provider certification", pt: "Certificação do provedor de nuvem" },
            sf: { es: "El Trust Center de ShareFile publica ISO 27001 y SOC 2 Type II, con sus certificados e informes (algunos documentos requieren solicitar acceso).", en: "The ShareFile Trust Center publishes ISO 27001 and SOC 2 Type II, with certificates and reports (some documents require requesting access).", pt: "O Trust Center do ShareFile publica ISO 27001 e SOC 2 Type II, com certificados e relatórios (alguns documentos exigem solicitar acesso)." },
            f: [], links: [[TRUST, "trust.sharefile.com"]],
            you: { es: "Obtener la evidencia vigente, verificar su alcance y mantenerla a disposición de la Superintendencia (Art. 24).", en: "Obtain current evidence, check its scope and keep it available to the Superintendency (Art. 24).", pt: "Obter a evidência vigente, verificar seu escopo e mantê-la à disposição da Superintendência (Art. 24)." } },
          { cite: "Art. 23 g · h", quote: "Mantener cifrada la información, cuyo uso o acceso esté clasificado como confidencial y sensible… Tener bajo su control la administración de usuarios y privilegios.",
            topic: { es: "Cifrado y control de usuarios", en: "Encryption and user control", pt: "Criptografia e controle de usuários" },
            sf: { es: "Cifrado en tránsito (TLS) y en reposo, con opción de llave en AWS KMS; la administración de usuarios, permisos, SSO y MFA queda en manos de la entidad (SCIM en Enterprise).", en: "Encryption in transit (TLS) and at rest, with an AWS KMS key option; user, permission, SSO and MFA administration stays with the entity (SCIM on Enterprise).", pt: "Criptografia em trânsito (TLS) e em repouso, com opção de chave no AWS KMS; a administração de usuários, permissões, SSO e MFA fica com a entidade (SCIM no Enterprise)." },
            f: ["file_encryption", "kms", "umt", "sso", "mfa", "scim"], links: [],
            you: { es: "Clasificar la información, definir qué se cifra y administrar usuarios y privilegios.", en: "Classify information, decide what is encrypted and administer users and privileges.", pt: "Classificar a informação, definir o que é criptografado e administrar usuários e privilégios." } },
          { cite: "Art. 25 · 26 · 29 · 30", quote: "…responsables del gobierno, la gestión, la seguridad de la información y la seguridad cibernética… [contratos con] cláusulas que aseguren la continuidad de los bienes y servicios de TI críticos… que las Superintendencias tengan acceso a los registros, datos e información.",
            topic: { es: "Terceros, contratos y acceso del supervisor", en: "Third parties, contracts and supervisor access", pt: "Terceiros, contratos e acesso do supervisor" },
            sf: { es: "El Trust Center publica informes de auditoría, plan de recuperación ante desastres, subprocesadores y página de estado; los registros de actividad se pueden programar y exportar.", en: "The Trust Center publishes audit reports, a disaster recovery plan, subprocessors and a status page; activity reports can be scheduled and exported.", pt: "O Trust Center publica relatórios de auditoria, plano de recuperação de desastres, subprocessadores e página de status; os relatórios de atividade podem ser agendados e exportados." },
            f: ["reports"], links: [[TRUST, "trust.sharefile.com"], ["https://status.sharefile.com/", "status.sharefile.com"]],
            you: { es: "Analizar el riesgo del proveedor y negociar las cláusulas de continuidad y de acceso de la Superintendencia; la responsabilidad sigue siendo de la entidad.", en: "Assess the provider's risk and negotiate continuity and supervisor-access clauses; responsibility remains with the entity.", pt: "Analisar o risco do provedor e negociar as cláusulas de continuidade e de acesso da Superintendência; a responsabilidade continua sendo da entidade." } },
          { cite: "Art. 36", quote: "…deben diseñar e implementar un proceso para la gestión de incidentes de seguridad de la información y seguridad cibernética.",
            topic: { es: "Gestión de incidentes", en: "Incident management", pt: "Gestão de incidentes" },
            sf: { es: "Alertas de amenazas y remediación automática en todos los planes; en Enterprise, Security Center, UEBA e integración con SIEM.", en: "Threat alerts and automated remediation on every plan; on Enterprise, Security Center, UEBA and SIEM integration.", pt: "Alertas de ameaças e remediação automática em todos os planos; no Enterprise, Security Center, UEBA e integração com SIEM." },
            f: ["threat_alerts", "auto_remediation", "security_center", "ueba", "siem"], links: [],
            you: { es: "Diseñar el proceso y reportar a la Superintendencia según el reglamento (los plazos de reporte se consultan en el texto oficial).", en: "Design the process and report to the Superintendency per the regulation (check reporting deadlines in the official text).", pt: "Desenhar o processo e reportar à Superintendência conforme o regulamento (os prazos de reporte estão no texto oficial)." } }
        ] },
      { id: "cr-8454", name: "Ley N.º 8454", title: { es: "Certificados, Firmas Digitales y Documentos Electrónicos (2005)", en: "Certificates, Digital Signatures and Electronic Documents (2005)", pt: "Certificados, Assinaturas Digitais e Documentos Eletrônicos (2005)" },
        authority: "MICITT · BCCR (Firma Digital)", url: "https://www.micitt.go.cr/sites/default/files/marco_juridico_legal/05.%20Ley%20n.%C2%B0%208454%20Ley%20de%20Certificados%2C%20Firmas%20Digitales%20y%20Documentos%20Electr%C3%B3nicos..pdf",
        applies: { es: "Documentos y actos firmados electrónicamente.", en: "Electronically signed documents and acts.", pt: "Documentos e atos assinados eletronicamente." },
        points: [
          { cite: "Art. 9", quote: "…tendrán el mismo valor y la eficacia probatoria de su equivalente firmado en manuscrito… Los documentos públicos electrónicos deberán llevar la firma digital certificada.",
            topic: { es: "Firma digital certificada vs. firma de ShareFile", en: "Certified digital signature vs. ShareFile e-signature", pt: "Assinatura digital certificada vs. assinatura do ShareFile" },
            sf: { es: "La firma electrónica integrada de ShareFile sirve para documentos privados con evidencia (registro y certificado de firma), pero no es la Firma Digital certificada del sistema nacional (BCCR). ShareFile puede guardar y compartir documentos ya firmados con Firma Digital.", en: "ShareFile's integrated e-signature works for private documents with evidence (audit trail and signature certificate), but it is not the national certified Firma Digital (BCCR). ShareFile can store and share documents already signed with Firma Digital.", pt: "A assinatura eletrônica integrada do ShareFile serve para documentos privados com evidência (registro e certificado de assinatura), mas não é a Firma Digital certificada do sistema nacional (BCCR). O ShareFile pode guardar e compartilhar documentos já assinados com Firma Digital." },
            f: ["esign", "secure_sharing"], links: [["https://www.bccr.fi.cr/cr/es/firma-digital.html", "bccr.fi.cr · Firma Digital"]],
            you: { es: "Usar Firma Digital certificada (BCCR) en documentos públicos electrónicos y en actos que la exijan.", en: "Use certified Firma Digital (BCCR) for public electronic documents and acts that require it.", pt: "Usar Firma Digital certificada (BCCR) em documentos públicos eletrônicos e em atos que a exijam." } }
        ] }
    ] },
  // ── México
  { id: "mx", name: T3("México", "Mexico", "México"), verified: "2026-10-09", residency: "none",
    pending: T3("Disposiciones de la CNBV para instituciones de crédito (contratación de servicios tecnológicos y nube): pendientes de verificar en el texto oficial.", "CNBV rules for credit institutions (technology services and cloud): pending verification in the official text.", "Disposições da CNBV para instituições de crédito (serviços tecnológicos e nuvem): pendentes de verificação no texto oficial."),
    norms: [
      { id: "mx-lfpdppp", name: "LFPDPPP 2025", title: T3("Ley Federal de Protección de Datos Personales en Posesión de los Particulares (DOF 20-mar-2025)", "Federal Law on Protection of Personal Data Held by Private Parties (DOF 20 Mar 2025)", "Lei Federal de Proteção de Dados Pessoais em Posse de Particulares (DOF 20-mar-2025)"),
        authority: "Secretaría Anticorrupción y Buen Gobierno", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
        applies: T3("Particulares (personas y empresas) que tratan datos personales.", "Private parties (individuals and companies) that process personal data.", "Particulares (pessoas e empresas) que tratam dados pessoais."),
        points: [
          PT("Art. 18", "Todo responsable deberá establecer y mantener medidas de seguridad administrativas, técnicas y físicas… contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado…", "sec", "sec", YOU.sec),
          PT("Art. 2 fr. XII · Art. 35", "(Encargado:) Persona física o jurídica que sola o conjuntamente con otras trate datos personales… (Art. 35:) Cuando el responsable pretenda transferir los datos personales a terceros nacionales o extranjeros,…", "transfer", "transfer",
            T3("La ley distingue al encargado (quien trata datos por cuenta del responsable) de las transferencias a terceros. Definir el papel de ShareFile, documentarlo en el contrato y el aviso de privacidad, y elegir la zona: ninguna está en México.", "The law separates the processor (who handles data on the controller's behalf) from transfers to third parties. Define ShareFile's role, document it in the contract and privacy notice, and choose the zone: none is in Mexico.", "A lei distingue o encarregado (quem trata dados por conta do responsável) das transferências a terceiros. Definir o papel do ShareFile, documentá-lo no contrato e no aviso de privacidade, e escolher a zona: nenhuma fica no México.")),
          PT("Art. 19", "Las vulneraciones de seguridad ocurridas en cualquier fase del tratamiento de datos personales… [deben informarse al titular] de forma inmediata…", "breach", "breach",
            T3("Informar de forma inmediata a los titulares cuando la vulneración afecte significativamente sus derechos.", "Inform data subjects immediately when the breach significantly affects their rights.", "Informar imediatamente os titulares quando o incidente afetar significativamente seus direitos."))
        ] },
      { id: "mx-ccom", name: "Código de Comercio · NOM-151-SCFI-2016", title: T3("Firma electrónica y conservación de mensajes de datos", "Electronic signature and retention of data messages", "Assinatura eletrônica e conservação de mensagens de dados"),
        authority: "Secretaría de Economía · SAT (e.firma)", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf",
        applies: T3("Actos de comercio y comerciantes.", "Commercial acts and merchants.", "Atos de comércio e comerciantes."),
        points: [
          PT("Art. 89 · Art. 97", "(Firma Electrónica:) …que produce los mismos efectos jurídicos que la firma autógrafa, siendo admisible como prueba en juicio. (Art. 97:) La Firma Electrónica se considerará Avanzada o Fiable si cumple por lo menos los siguientes requisitos:", "sign", "sign",
            T3("Usar la e.firma (SAT) en trámites fiscales y con el gobierno (Ley de Firma Electrónica Avanzada) y la firma avanzada de un prestador acreditado cuando se requiera; la firma de ShareFile, en contratos privados.", "Use e.firma (SAT) for tax and government procedures (Advanced Electronic Signature Law) and an accredited provider's advanced signature where required; ShareFile's e-signature for private contracts.", "Usar a e.firma (SAT) em trâmites fiscais e com o governo (Lei de Assinatura Eletrônica Avançada) e a assinatura avançada de um prestador credenciado quando exigida; a assinatura do ShareFile em contratos privados.")),
          Object.assign(PT("NOM-151 §6.2", "La constancia emitida por el Prestador de Servicios de Certificación, acreditado para tales efectos…", "keep", "keep",
            T3("Cuando se requiera conservar mensajes de datos conforme a la NOM-151, obtener la constancia de un Prestador de Servicios de Certificación acreditado. ShareFile no se posiciona como cumplimiento de la NOM-151.", "Where data messages must be retained under NOM-151, obtain the certificate from an accredited Certification Service Provider. ShareFile is not positioned as NOM-151 compliance.", "Quando for preciso conservar mensagens de dados conforme a NOM-151, obter a constância de um Prestador de Serviços de Certificação credenciado. O ShareFile não se posiciona como conformidade com a NOM-151.")), { links: [["https://sidof.segob.gob.mx/notas/docFuente/5478024", "DOF · NOM-151-SCFI-2016"]] })
        ] }
    ] },
  // ── Colombia
  { id: "co", name: T3("Colombia", "Colombia", "Colômbia"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "co-1581", name: "Ley 1581 de 2012", title: T3("Protección de datos personales (reglamentada por el Decreto 1074 de 2015)", "Personal data protection (regulated by Decree 1074 of 2015)", "Proteção de dados pessoais (regulamentada pelo Decreto 1074 de 2015)"),
        authority: "SIC · Delegatura para la Protección de Datos Personales", url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1581_2012.htm",
        applies: T3("Responsables y encargados del tratamiento de datos personales en Colombia.", "Controllers and processors of personal data in Colombia.", "Responsáveis e encarregados do tratamento de dados pessoais na Colômbia."),
        points: [
          PT("Art. 4 lit. g", "…se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;", "sec", "sec", YOU.sec),
          Object.assign(PT("Art. 26 · Decreto 1074/2015 art. 2.2.2.25.5.2", "Se prohíbe la transferencia de datos personales de cualquier tipo a países que no proporcionen niveles adecuados de protección de datos… (Decreto:) El contrato que suscriba el Responsable con los encargados para el tratamiento de datos personales…", "transfer", "transfer",
            T3("Verificar que el destino cumpla los estándares de la SIC o aplicar una excepción (por ejemplo, autorización expresa del titular); con ShareFile como encargado, firmar el contrato de transmisión que exige el decreto. Ninguna zona está en Colombia.", "Check that the destination meets SIC standards or apply an exception (for example, the data subject's express authorization); with ShareFile as processor, sign the transmission contract the decree requires. No zone is in Colombia.", "Verificar se o destino cumpre os padrões da SIC ou aplicar uma exceção (por exemplo, autorização expressa do titular); com o ShareFile como encarregado, firmar o contrato de transmissão exigido pelo decreto. Nenhuma zona fica na Colômbia.")), { links: FIT.transfer.links.concat([["https://cancilleria.gov.co/sites/default/files/Normograma/docs/pdf/decreto_1074_2015_pr026.pdf", "Decreto 1074 de 2015"]]) }),
          PT("Art. 17 lit. n", "Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad…", "breach", "breach",
            T3("Informar a la SIC cuando haya violaciones a los códigos de seguridad y riesgos para los titulares (los plazos se consultan en la normativa de la SIC).", "Inform the SIC of security-code violations that put data subjects at risk (check deadlines in SIC rules).", "Informar a SIC quando houver violações dos códigos de segurança e riscos aos titulares (os prazos estão na normativa da SIC)."))
        ] },
      { id: "co-sfc", name: "SFC · Circular Básica Jurídica", title: T3("Computación en la nube (CE 005 de 2019) y ciberseguridad (CE 007 de 2018)", "Cloud computing (CE 005 of 2019) and cybersecurity (CE 007 of 2018)", "Computação em nuvem (CE 005 de 2019) e cibersegurança (CE 007 de 2018)"),
        authority: "Superintendencia Financiera de Colombia", url: "https://www.superfinanciera.gov.co/publicaciones/10099659/normativanormativa-generalcirculares-externas-cartas-circulares-y-resoluciones-desde-el-ano-circulares-externascirculares-externas-10099659/",
        applies: T3("Entidades vigiladas por la Superintendencia Financiera.", "Entities supervised by the Financial Superintendency.", "Entidades supervisionadas pela Superintendência Financeira."),
        points: [
          PT("CE 005/2019 · num. 3.10", "Mantener cifrada la información clasificada como confidencial en tránsito o en reposo", "enc", "enc",
            T3("Clasificar la información y asegurar el cifrado de la confidencial.", "Classify information and ensure confidential information is encrypted.", "Classificar a informação e garantir a criptografia da confidencial.")),
          PT("CE 005/2019 · num. 6", "Dentro de los 15 días anteriores al inicio del procesamiento de información en la nube…", "third", "third",
            T3("Enviar a la SFC la información requerida dentro de los 15 días anteriores a empezar a procesar en la nube, e incluir el riesgo en su SARO.", "Send the SFC the required information within the 15 days before starting cloud processing, and include the risk in its operational risk system (SARO).", "Enviar à SFC as informações exigidas nos 15 dias anteriores ao início do processamento na nuvem, e incluir o risco no seu SARO.")),
          Object.assign(PT("CE 007/2018 · num. 3.7.1", "…haciendo una breve descripción del incidente, su impacto y las medidas adoptadas para gestionarlo.", "incident", "incident",
            T3("Reportar a la SFC los incidentes de ciberseguridad significativos e informar a los consumidores afectados.", "Report significant cybersecurity incidents to the SFC and inform affected consumers.", "Reportar à SFC os incidentes de cibersegurança significativos e informar os consumidores afetados.")), { links: [["https://www.superfinanciera.gov.co/publicaciones/10096745/normativanormativa-generalcirculares-externas-cartas-circulares-y-resoluciones-desde-el-ano-circulares-externascirculares-externas-10096745/", "SFC · CE 007 de 2018"]] })
        ] },
      { id: "co-527", name: "Ley 527 de 1999", title: T3("Mensajes de datos y firma digital", "Data messages and digital signature", "Mensagens de dados e assinatura digital"),
        authority: "ONAC (entidades de certificación digital)", url: "https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_0527_1999.htm",
        applies: T3("Documentos y firmas electrónicas.", "Electronic documents and signatures.", "Documentos e assinaturas eletrônicas."),
        points: [
          PT("Art. 28", "El uso de una firma digital tendrá la misma fuerza y efectos que el uso de una firma manuscrita,…", "sign", "sign",
            T3("Usar firma digital de una entidad de certificación acreditada por ONAC cuando el acto la exija; la firma de ShareFile, en documentos privados donde baste un método confiable y apropiado (Art. 7).", "Use a digital signature from an ONAC-accredited certification entity when the act requires it; ShareFile's e-signature for private documents where a reliable, appropriate method suffices (Art. 7).", "Usar assinatura digital de uma entidade certificadora acreditada pela ONAC quando o ato exigir; a assinatura do ShareFile em documentos privados onde baste um método confiável e apropriado (Art. 7)."))
        ] }
    ] },
  // ── Chile
  { id: "cl", name: T3("Chile", "Chile", "Chile"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "cl-19628", name: "Ley 19.628", title: T3("Protección de la vida privada (vigente hoy)", "Protection of private life (in force today)", "Proteção da vida privada (vigente hoje)"),
        authority: "—", url: "https://www.bcn.cl/leychile/navegar?idNorma=141599",
        applies: T3("Responsables de registros o bases de datos personales.", "Controllers of personal data registries or databases.", "Responsáveis por registros ou bases de dados pessoais."),
        points: [ PT("Art. 11", "El responsable de los registros o bases donde se almacenen datos personales con posterioridad a su recolección deberá cuidar de ellos con la debida diligencia, haciéndose responsable de los daños.", "sec", "sec", YOU.sec) ] },
      { id: "cl-21719", name: "Ley 21.719", title: T3("Nueva ley de protección de datos personales (modifica la Ley 19.628)", "New personal data protection law (amends Law 19,628)", "Nova lei de proteção de dados pessoais (modifica a Lei 19.628)"),
        authority: "Agencia de Protección de Datos Personales", url: "https://www.diariooficial.interior.gob.cl/publicaciones/2024/12/13/44023/01/2583630.pdf",
        note: T3("Entra en vigencia el 1-dic-2026 (Decreto 12/2025). Un proyecto de ley del Gobierno (Boletín 18.623-07, en primer trámite en el Senado) propone postergarla al 1-dic-2027.", "Takes effect 1 Dec 2026 (Decree 12/2025). A government bill (Bulletin 18.623-07, first stage in the Senate) proposes postponing it to 1 Dec 2027.", "Entra em vigor em 1-dez-2026 (Decreto 12/2025). Um projeto de lei do Governo (Boletim 18.623-07, em primeiro trâmite no Senado) propõe adiá-la para 1-dez-2027."),
        applies: T3("Responsables del tratamiento de datos personales.", "Controllers of personal data.", "Responsáveis pelo tratamento de dados pessoais."),
        points: [
          PT("Art. 14 quinquies", "Las medidas aplicadas por el responsable deben asegurar la confidencialidad, integridad, disponibilidad y resiliencia…", "sec", "sec", YOU.sec),
          PT("Arts. 27 · 28", "(Art. 28:) Se entiende que el ordenamiento jurídico de un país posee niveles adecuados de protección de datos,…", "transfer", "transfer",
            T3("Revisar si el destino tiene nivel adecuado o aplicar las garantías que exige la ley; elegir la zona: ninguna está en Chile.", "Check whether the destination has an adequate level or apply the safeguards the law requires; choose the zone: none is in Chile.", "Verificar se o destino tem nível adequado ou aplicar as garantias exigidas pela lei; escolher a zona: nenhuma fica no Chile.")),
          PT("Art. 14 sexies", "El responsable deberá reportar a la Agencia, por los medios más expeditos posibles y sin dilaciones indebidas,…", "breach", "breach",
            T3("Reportar a la Agencia por los medios más expeditos y sin dilaciones indebidas.", "Report to the Agency by the fastest means and without undue delay.", "Reportar à Agência pelos meios mais expeditos e sem demoras indevidas."))
        ] },
      { id: "cl-21663", name: "Ley 21.663", title: T3("Ley Marco de Ciberseguridad", "Cybersecurity Framework Law", "Lei-Quadro de Cibersegurança"),
        authority: "ANCI · CSIRT Nacional", url: "https://www.bcn.cl/leychile/navegar?idNorma=1202434",
        applies: T3("Servicios esenciales (incluye banca, pagos y servicios de TI gestionados por terceros) y operadores de importancia vital.", "Essential services (including banking, payments and third-party-managed IT services) and operators of vital importance.", "Serviços essenciais (inclui bancos, pagamentos e serviços de TI geridos por terceiros) e operadores de importância vital."),
        points: [
          PT("Art. 9", "Dentro del plazo máximo de tres horas contado desde que se tiene conocimiento… Dentro del plazo máximo de setenta y dos horas, una actualización… Dentro del plazo máximo de quince días corridos…", "incident", "incident",
            T3("Reportar al CSIRT Nacional: alerta temprana en 3 horas, actualización en 72 horas (24 horas para operadores de importancia vital con su servicio afectado) e informe final en 15 días corridos.", "Report to the National CSIRT: early warning within 3 hours, update within 72 hours (24 hours for operators of vital importance whose service is affected) and final report within 15 calendar days.", "Reportar ao CSIRT Nacional: alerta precoce em 3 horas, atualização em 72 horas (24 horas para operadores de importância vital com o serviço afetado) e relatório final em 15 dias corridos."))
        ] },
      { id: "cl-cmf", name: "CMF · RAN 20-10", title: T3("Gestión de la seguridad de la información y ciberseguridad (Circular 2.261)", "Information security and cybersecurity management (Circular 2,261)", "Gestão da segurança da informação e cibersegurança (Circular 2.261)"),
        authority: "Comisión para el Mercado Financiero", url: "https://www.cmfchile.cl/portal/normativa/624/articles-29310_doc_pdf.pdf",
        applies: T3("Bancos y entidades fiscalizadas por la CMF.", "Banks and entities supervised by the CMF.", "Bancos e entidades fiscalizadas pela CMF."),
        points: [
          PT("RAN 20-10", "…un proceso de verificación periódica de la aplicación y cumplimiento de sus políticas de seguridad…", "third", "third",
            T3("Verificar periódicamente a sus proveedores; para servicios externalizados en la nube rige además el Capítulo 20-7 de la RAN.", "Periodically verify its providers; for outsourced cloud services RAN Chapter 20-7 also applies.", "Verificar periodicamente seus fornecedores; para serviços terceirizados em nuvem vale também o Capítulo 20-7 da RAN."))
        ] },
      { id: "cl-19799", name: "Ley 19.799", title: T3("Documentos electrónicos y firma electrónica", "Electronic documents and electronic signature", "Documentos eletrônicos e assinatura eletrônica"),
        authority: "Entidad Acreditadora (prestadores acreditados)", url: "https://www.bcn.cl/leychile/navegar?idNorma=196640",
        applies: T3("Actos y contratos con firma electrónica.", "Acts and contracts with electronic signature.", "Atos e contratos com assinatura eletrônica."),
        points: [
          PT("Art. 4", "Los documentos electrónicos que tengan la calidad de instrumento público, deberán suscribirse mediante firma electrónica avanzada.", "sign", "sign",
            T3("Usar firma electrónica avanzada de un prestador acreditado en instrumentos públicos y donde la ley la exija; la firma de ShareFile, en documentos privados.", "Use an accredited provider's advanced electronic signature for public instruments and where the law requires it; ShareFile's e-signature for private documents.", "Usar assinatura eletrônica avançada de um prestador credenciado em instrumentos públicos e onde a lei exigir; a assinatura do ShareFile em documentos privados."))
        ] }
    ] },
  // ── Perú
  { id: "pe", name: T3("Perú", "Peru", "Peru"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "pe-29733", name: "Ley 29733 · D.S. 016-2024-JUS", title: T3("Protección de datos personales y su nuevo reglamento", "Personal data protection and its new regulation", "Proteção de dados pessoais e seu novo regulamento"),
        authority: "Autoridad Nacional de Protección de Datos Personales (MINJUSDH)", url: "https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ley_29733.pdf",
        applies: T3("Titulares de bancos de datos y responsables del tratamiento.", "Database owners and controllers.", "Titulares de bancos de dados e responsáveis pelo tratamento."),
        points: [
          PT("Ley · Art. 9", "…las medidas técnicas, organizativas y legales necesarias para garantizar…", "sec", "sec", YOU.sec),
          Object.assign(PT("Ley · Art. 15 · Reglamento Arts. 18, 20, 21", "…solo si el país destinatario mantiene niveles de protección adecuados conforme a la presente Ley. (Reglamento:) …cláusulas contractuales modelo u otros instrumentos jurídicos…", "transfer", "transfer",
            T3("Asegurar nivel adecuado o garantías (por ejemplo, cláusulas contractuales modelo) y notificar el flujo transfronterizo a la autoridad. Ninguna zona está en Perú.", "Ensure an adequate level or safeguards (for example, model contractual clauses) and notify the cross-border flow to the authority. No zone is in Peru.", "Garantir nível adequado ou salvaguardas (por exemplo, cláusulas contratuais-modelo) e notificar o fluxo transfronteiriço à autoridade. Nenhuma zona fica no Peru.")), { links: FIT.transfer.links.concat([["https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_016-2024-jus.pdf", "D.S. 016-2024-JUS"]]) }),
          PT("Reglamento · Art. 34.1", "…debe notificar a la Autoridad Nacional de Protección de Datos Personales como máximo dentro de las 48 horas posteriores a haber tomado conocimiento o constancia de ello.", "breach", "breach",
            T3("En los incidentes que el reglamento indica, notificar a la Autoridad en máximo 48 horas, comunicar a los titulares y, si es digital, al Centro Nacional de Seguridad Digital.", "For the incidents the regulation specifies, notify the Authority within 48 hours, inform data subjects and, if digital, the National Digital Security Center.", "Nos incidentes indicados pelo regulamento, notificar a Autoridade em até 48 horas, comunicar os titulares e, se for digital, o Centro Nacional de Segurança Digital."))
        ] },
      { id: "pe-sbs", name: "SBS · Res. 504-2021", title: T3("Gestión de la seguridad de la información y ciberseguridad (art. 24 modificado por Res. SBS 01515-2021)", "Information security and cybersecurity management (art. 24 as amended by SBS Res. 01515-2021)", "Gestão da segurança da informação e cibersegurança (art. 24 modificado pela Res. SBS 01515-2021)"),
        authority: "Superintendencia de Banca, Seguros y AFP", url: "https://busquedas.elperuano.pe/dispositivo/NL/1955432-1",
        applies: T3("Empresas supervisadas por la SBS.", "Companies supervised by the SBS.", "Empresas supervisionadas pela SBS."),
        points: [
          PT("Art. 24.2 · 24.3", "…servicio significativo provisto por terceros para el procesamiento de datos, que incluye servicios en nube… como máximo treinta (30) días calendario después de iniciar la provisión del procesamiento de datos.", "third", "third",
            T3("Tratar la nube como servicio significativo: estrategia de salida y comunicación a la SBS dentro de los 30 días calendario siguientes al inicio.", "Treat cloud as a significant service: exit strategy and notice to the SBS within 30 calendar days after starting.", "Tratar a nuvem como serviço significativo: estratégia de saída e comunicação à SBS em até 30 dias corridos após o início."))
        ] },
      { id: "pe-27269", name: "Ley 27269 · D.S. 052-2008-PCM", title: T3("Firmas y certificados digitales (IOFE)", "Digital signatures and certificates (IOFE)", "Assinaturas e certificados digitais (IOFE)"),
        authority: "INDECOPI · RENIEC (DNIe)", url: "https://portal.ingemmet.gob.pe/documents/59082/1380545/DS-052-2008-pcm.pdf",
        applies: T3("Documentos firmados electrónicamente.", "Electronically signed documents.", "Documentos assinados eletronicamente."),
        points: [
          PT("Reglamento · Art. 6", "…tiene la misma validez y eficacia jurídica que el uso de una firma manuscrita…", "sign", "sign",
            T3("Usar firma digital de un prestador acreditado en la IOFE (o el DNIe) donde se requiera esa equivalencia; la firma de ShareFile, en documentos privados.", "Use a digital signature from an IOFE-accredited provider (or the DNIe) where that equivalence is required; ShareFile's e-signature for private documents.", "Usar assinatura digital de um prestador credenciado na IOFE (ou o DNIe) onde essa equivalência for exigida; a assinatura do ShareFile em documentos privados."))
        ] }
    ] },
  // ── Argentina
  { id: "ar", name: T3("Argentina", "Argentina", "Argentina"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "ar-25326", name: "Ley 25.326", title: T3("Protección de los datos personales (Decreto 1558/2001)", "Personal data protection (Decree 1558/2001)", "Proteção de dados pessoais (Decreto 1558/2001)"),
        authority: "AAIP", url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/texact.htm",
        note: T3("La ley no establece un deber general de notificar vulneraciones; la AAIP publicó medidas de seguridad recomendadas (Res. 47/2018).", "The law sets no general breach-notification duty; the AAIP published recommended security measures (Res. 47/2018).", "A lei não estabelece um dever geral de notificar incidentes; a AAIP publicou medidas de segurança recomendadas (Res. 47/2018)."),
        applies: T3("Responsables de archivos, registros o bancos de datos personales.", "Controllers of personal data files, registries or databases.", "Responsáveis por arquivos, registros ou bancos de dados pessoais."),
        points: [
          PT("Art. 9", "…adoptar las medidas técnicas y organizativas que resulten necesarias…", "sec", "sec", YOU.sec),
          Object.assign(PT("Art. 12 · Disp. 60-E/2016", "Es prohibida la transferencia de datos personales de cualquier tipo con países u organismos internacionales… que no propocionen niveles de protección adecuados. (Disp. 60-E:) Apruébanse las cláusulas contractuales tipo de transferencia internacional…", "transfer", "transfer",
            T3("EE. UU. y Brasil no figuran en la lista de países adecuados de la AAIP: usar las cláusulas contractuales tipo (o presentar el contrato a la AAIP en 30 días) o contar con consentimiento expreso. Ninguna zona está en Argentina.", "The US and Brazil are not on the AAIP's adequate-country list: use the model contractual clauses (or submit the contract to the AAIP within 30 days) or obtain express consent. No zone is in Argentina.", "EUA e Brasil não estão na lista de países adequados da AAIP: usar as cláusulas contratuais-tipo (ou apresentar o contrato à AAIP em 30 dias) ou obter consentimento expresso. Nenhuma zona fica na Argentina.")), { links: FIT.transfer.links.concat([["https://www.argentina.gob.ar/normativa/nacional/norma-267922/actualizacion", "Disposición 60-E/2016"]]) })
        ] },
      { id: "ar-bcra", name: "BCRA · Com. \"A\" 7724", title: T3("Gestión de riesgos de tecnología y seguridad de la información (texto ordenado vigente)", "Technology risk and information security management (current consolidated text)", "Gestão de riscos de tecnologia e segurança da informação (texto consolidado vigente)"),
        authority: "Banco Central de la República Argentina", url: "https://www.bcra.gob.ar/archivos/Pdfs/Texord/t-rmgcti.pdf",
        applies: T3("Entidades financieras.", "Financial institutions.", "Entidades financeiras."),
        points: [
          PT("Sección 10", "Previo al inicio de la relación, las entidades deberán informar las características del proceso… a delegar a la Gerencia de Auditoría Externa de Sistemas de la Superintendencia…", "third", "third",
            T3("Informar a la Superintendencia antes de delegar y asegurar en el contrato el acceso irrestricto del supervisor.", "Inform the Superintendency before delegating and secure unrestricted supervisor access in the contract.", "Informar a Superintendência antes de delegar e garantir no contrato o acesso irrestrito do supervisor.")),
          PT("Secc. 8.1.3", "Mecanismos para la comunicación con terceras partes, para la gestión y el reporte de ciberincidentes a las autoridades.", "incident", "incident",
            T3("Definir las políticas y mecanismos de reporte de ciberincidentes a las autoridades.", "Define policies and mechanisms for reporting cyber incidents to the authorities.", "Definir as políticas e os mecanismos de reporte de ciberincidentes às autoridades."))
        ] },
      { id: "ar-25506", name: "Ley 25.506", title: T3("Firma digital (modificada por Ley 27.446)", "Digital signature (amended by Law 27,446)", "Assinatura digital (modificada pela Lei 27.446)"),
        authority: "Certificadores licenciados", url: "https://www.argentina.gob.ar/normativa/nacional/ley-25506-70749/actualizacion",
        applies: T3("Documentos firmados digital o electrónicamente.", "Digitally or electronically signed documents.", "Documentos assinados digital ou eletronicamente."),
        points: [
          PT("Art. 5 · Art. 7", "En caso de ser desconocida la firma electrónica corresponde a quien la invoca acreditar su validez. (Art. 7:) Se presume, salvo prueba en contrario, que toda firma digital pertenece al titular del certificado digital…", "sign", "sign",
            T3("Usar firma digital de un certificador licenciado cuando se necesite la presunción de autoría; con la firma de ShareFile (firma electrónica), quien la invoca debe probar su validez.", "Use a licensed certifier's digital signature when the presumption of authorship is needed; with ShareFile's (electronic) signature, whoever invokes it must prove its validity.", "Usar assinatura digital de um certificador licenciado quando for necessária a presunção de autoria; com a assinatura do ShareFile (eletrônica), quem a invoca deve provar sua validade."))
        ] }
    ] },
  // ── Panamá
  { id: "pa", name: T3("Panamá", "Panama", "Panamá"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "pa-81", name: "Ley 81 de 2019", check: "gaceta", title: T3("Protección de datos personales (reglamentada por el Decreto Ejecutivo 285 de 2021)", "Personal data protection (regulated by Executive Decree 285 of 2021)", "Proteção de dados pessoais (regulamentada pelo Decreto Executivo 285 de 2021)"),
        authority: "ANTAI", url: "https://www.sinaproc.gob.pa/wp-content/uploads/2026/08/Ley-81-de-26-de-marzo-de-2019.pdf",
        applies: T3("Responsables y custodios de bases de datos personales.", "Controllers and custodians of personal databases.", "Responsáveis e custodiantes de bases de dados pessoais."),
        points: [
          PT("Ley 81", "…adoptar las medidas de índole técnica y organizativa necesarias…", "sec", "sec", YOU.sec),
          PT("Ley 81", "Que el país u organismo internacional o supranacional receptor proporcione un nivel de protección equivalente o superior.", "transfer", "transfer",
            T3("Verificar que el destino tenga un nivel de protección equivalente o aplicar las garantías del reglamento; elegir la zona: ninguna está en Panamá.", "Check that the destination has an equivalent protection level or apply the regulation's safeguards; choose the zone: none is in Panama.", "Verificar se o destino tem nível de proteção equivalente ou aplicar as garantias do regulamento; escolher a zona: nenhuma fica no Panamá."))
        ] },
      { id: "pa-sbp", name: "SBP · Acuerdos 9-2005, 3-2012 y 1-2022", title: T3("Tercerización, riesgo tecnológico y protección de datos en bancos", "Outsourcing, technology risk and data protection at banks", "Terceirização, risco tecnológico e proteção de dados em bancos"),
        authority: "Superintendencia de Bancos de Panamá", url: "https://www.superbancos.gob.pa/documentos/leyes_y_regulaciones/acuerdos/2005/Acuerdo_9-2005.pdf",
        applies: T3("Bancos supervisados por la SBP.", "Banks supervised by the SBP.", "Bancos supervisionados pela SBP."),
        points: [
          Object.assign(PT("Ac. 9-2005 art. 4 · Ac. 3-2012 art. 14", "…todo contrato de tercerización requerirá autorización de la Superintendencia de Bancos. (Ac. 3-2012:) La obligación de la empresa contratada de permitir a la Superintendencia de Bancos…", "third", "third",
            T3("Solicitar la autorización de la SBP, indicar en el contrato el lugar donde se presta el servicio y asegurar el acceso del supervisor.", "Request SBP authorization, state in the contract where the service is provided and secure supervisor access.", "Solicitar a autorização da SBP, indicar no contrato o local de prestação do serviço e garantir o acesso do supervisor.")), { links: FIT.third.links.concat([["https://www.superbancos.gob.pa/documentos/leyes_y_regulaciones/acuerdos/2012/Acuerdo_3-2012.pdf", "SBP · Acuerdo 3-2012"]]) }),
          Object.assign(PT("Ac. 1-2022 art. 26", "…a la Superintendencia de Bancos, a través de su oficial de Seguridad de la Información…", "breach", "breach",
            T3("Informar los incidentes al titular y a la SBP; el banco mantiene la responsabilidad aunque use encargados (art. 14).", "Report incidents to the data subject and the SBP; the bank remains responsible even when using processors (art. 14).", "Informar os incidentes ao titular e à SBP; o banco mantém a responsabilidade mesmo usando encarregados (art. 14).")), { links: [["https://www.superbancos.gob.pa/documentos/leyes_y_regulaciones/acuerdos/2022/Acuerdo_01-2022.pdf", "SBP · Acuerdo 1-2022"]] })
        ] },
      { id: "pa-82", name: "Ley 51 de 2008 · Ley 82 de 2012", title: T3("Documentos y firmas electrónicas", "Electronic documents and signatures", "Documentos e assinaturas eletrônicas"),
        authority: "Dirección Nacional de Firma Electrónica (Registro Público)", url: "https://registro-publico.gob.pa/images/stories/Ley82de2012atribucionesalRPPparaserAutoridadRegistradoraycertificadoraraiz.pdf",
        applies: T3("Documentos firmados electrónicamente.", "Electronically signed documents.", "Documentos assinados eletronicamente."),
        points: [
          PT("Ley 82 art. 14", "…se presumirán de pleno derecho en el caso de que se esté en presencia de una firma electrónica calificada…", "sign", "sign",
            T3("Usar firma electrónica calificada cuando se necesite esa presunción o la ley la exija; la firma de ShareFile, en documentos privados.", "Use a qualified electronic signature when that presumption is needed or the law requires it; ShareFile's e-signature for private documents.", "Usar assinatura eletrônica qualificada quando essa presunção for necessária ou a lei exigir; a assinatura do ShareFile em documentos privados."))
        ] }
    ] },
  // ── Guatemala
  { id: "gt", name: T3("Guatemala", "Guatemala", "Guatemala"), verified: "2026-10-09", residency: "none",
    note: T3("No identificamos una ley general de protección de datos personales vigente; hay iniciativas en el Congreso. Las normas aplicables son sectoriales.", "We found no general personal data protection law in force; there are bills in Congress. Applicable rules are sector-specific.", "Não identificamos uma lei geral de proteção de dados pessoais vigente; há projetos no Congresso. As normas aplicáveis são setoriais."),
    pending: T3("Junta Monetaria JM-104-2021 (riesgo tecnológico en bancos): el texto oficial publicado es una imagen escaneada; pendiente de verificar.", "Monetary Board JM-104-2021 (technology risk at banks): the published official text is a scanned image; pending verification.", "Junta Monetária JM-104-2021 (risco tecnológico em bancos): o texto oficial publicado é uma imagem digitalizada; pendente de verificação."),
    norms: [
      { id: "gt-47", name: "Decreto 47-2008", title: T3("Reconocimiento de las comunicaciones y firmas electrónicas", "Recognition of electronic communications and signatures", "Reconhecimento das comunicações e assinaturas eletrônicas"),
        authority: "RPSC (Ministerio de Economía)", url: "https://rpsc.gob.gt/storage/multimedia/0zRtN03kIk11eBKXxa5CbgIEfnlHrLBYARcyNS26.pdf",
        applies: T3("Comunicaciones y firmas electrónicas.", "Electronic communications and signatures.", "Comunicações e assinaturas eletrônicas."),
        points: [
          PT("Art. 33", "…el mismo valor jurídico que la firma manuscrita en relación con los consignados en papel…", "sign", "sign",
            T3("Usar firma electrónica avanzada de un prestador inscrito en el RPSC cuando se requiera; la firma de ShareFile, en documentos privados.", "Use an advanced electronic signature from an RPSC-registered provider when required; ShareFile's e-signature for private documents.", "Usar assinatura eletrônica avançada de um prestador inscrito no RPSC quando exigido; a assinatura do ShareFile em documentos privados."))
        ] }
    ] },
  // ── El Salvador
  { id: "sv", name: T3("El Salvador", "El Salvador", "El Salvador"), verified: "2026-10-09", residency: "none",
    norms: [
      { id: "sv-144", name: "D.L. 144 (2024)", title: T3("Ley para la Protección de Datos Personales", "Personal Data Protection Law", "Lei de Proteção de Dados Pessoais"),
        authority: "Agencia de Ciberseguridad del Estado (ACE)", url: "https://www.jurisprudencia.gob.sv/DocumentosBoveda/D/2/2020-2029/2024/11/10660E.PDF",
        note: T3("Reformada por el D.L. 659 (Diario Oficial 18-sep-2026); los artículos citados aquí no figuran entre los reformados.", "Amended by D.L. 659 (Official Gazette 18 Sep 2026); the articles cited here are not among those amended.", "Reformada pelo D.L. 659 (Diário Oficial 18-set-2026); os artigos citados aqui não estão entre os reformados."),
        applies: T3("Responsables del tratamiento de datos personales.", "Controllers of personal data.", "Responsáveis pelo tratamento de dados pessoais."),
        points: [
          PT("Art. 36", "El responsable deberá acatar y mantener las medidas de seguridad establecidas por la Entidad Rectora…", "sec", "sec", YOU.sec),
          PT("Art. 44", "…solamente cuando el país receptor o importador de datos personales cumpla como mínimo con los principios de protección de datos personales… En todo caso deberá mediar el consentimiento previo del titular…", "transfer", "transfer",
            T3("Obtener el consentimiento previo del titular y verificar que el destino cumpla los principios de la ley; elegir la zona: ninguna está en El Salvador.", "Obtain the data subject's prior consent and check that the destination meets the law's principles; choose the zone: none is in El Salvador.", "Obter o consentimento prévio do titular e verificar se o destino cumpre os princípios da lei; escolher a zona: nenhuma fica em El Salvador.")),
          PT("Art. 25", "…notificará a la Agencia de Ciberseguridad del Estado, a la Fiscalía General de la República y a los titulares afectados… plazo máximo de setenta y dos horas desde que se tuvo conocimiento de la vulneración de seguridad.", "breach", "breach",
            T3("Notificar a la ACE, a la Fiscalía y a los titulares en un máximo de 72 horas.", "Notify the ACE, the Attorney General's Office and data subjects within 72 hours at most.", "Notificar a ACE, a Procuradoria-Geral e os titulares em no máximo 72 horas."))
        ] },
      { id: "sv-143", name: "D.L. 143 (2024)", title: T3("Ley de Ciberseguridad y de la Seguridad de la Información", "Cybersecurity and Information Security Law", "Lei de Cibersegurança e Segurança da Informação"),
        authority: "Agencia de Ciberseguridad del Estado (ACE)", url: "https://ace.gob.sv/page/documentos/decretos/decreto_143_ciberseguridad.pdf",
        applies: T3("Órganos del Gobierno y entidades con incidencia en infraestructuras críticas.", "Government bodies and entities that affect critical infrastructure.", "Órgãos do Governo e entidades com incidência em infraestruturas críticas."),
        points: [
          PT("Art. 6", "…un sistema de gestión de ciberseguridad y seguridad de la información permanente…", "incident", "incident",
            T3("Mantener un sistema de gestión de ciberseguridad y responder a incidentes de manera inmediata y eficaz.", "Maintain a cybersecurity management system and respond to incidents immediately and effectively.", "Manter um sistema de gestão de cibersegurança e responder a incidentes de forma imediata e eficaz."))
        ] },
      { id: "sv-firma", name: "Ley de Firma Electrónica", title: T3("D.L. 133/2015, reformada por D.L. 100/2021", "D.L. 133/2015, amended by D.L. 100/2021", "D.L. 133/2015, reformada pelo D.L. 100/2021"),
        authority: "Unidad de Firma Electrónica (Ministerio de Economía)", url: "https://www.jurisprudencia.gob.sv/DocumentosBoveda/R/2/2010-2019/2015/10/E8EC9.HTML",
        applies: T3("Documentos firmados electrónicamente.", "Electronically signed documents.", "Documentos assinados eletronicamente."),
        points: [
          PT("Art. 1 lit. a · Art. 6 (reformados)", "Equiparar la firma electrónica simple y firma electrónica certificada con la firma autógrafa… (Art. 6, firma simple:) no tendrá validez probatoria en los mismos términos…", "sign", "sign",
            T3("Usar firma electrónica certificada cuando se necesite su valor probatorio; la firma de ShareFile (simple), en documentos privados.", "Use a certified electronic signature when its evidentiary value is needed; ShareFile's (simple) e-signature for private documents.", "Usar assinatura eletrônica certificada quando for necessário seu valor probatório; a assinatura do ShareFile (simples) em documentos privados."))
        ] }
    ] },
  // ── Honduras
  { id: "hn", name: T3("Honduras", "Honduras", "Honduras"), verified: "2026-10-09", residency: "none",
    note: T3("No identificamos una ley general de protección de datos personales vigente; la Ley de Transparencia (Decreto 170-2006) reconoce el hábeas data y protege los datos personales.", "We found no general personal data protection law in force; the Transparency Law (Decree 170-2006) recognizes habeas data and protects personal data.", "Não identificamos uma lei geral de proteção de dados pessoais vigente; a Lei de Transparência (Decreto 170-2006) reconhece o habeas data e protege os dados pessoais."),
    norms: [
      { id: "hn-cnbs", name: "CNBS · Res. GRD 793/2022", title: T3("Gestión de TI, ciberseguridad y continuidad del negocio", "IT management, cybersecurity and business continuity", "Gestão de TI, cibersegurança e continuidade do negócio"),
        authority: "Comisión Nacional de Bancos y Seguros", url: "https://circulares.cnbs.gob.hn/Archivo/Viewer/2530/Gaceta36111_Resolucion%20GRD%20793-16-12-2022.pdf",
        applies: T3("Instituciones supervisadas por la CNBS.", "Institutions supervised by the CNBS.", "Instituições supervisionadas pela CNBS."),
        points: [
          PT("Arts. 13 · 16", "…debe ser notificada a esta Comisión, treinta (30) días calendario previos a la suscripción del contrato… Facultades suficientes para que la actividad del proveedor de servicios para la institución pueda ser auditada…", "third", "third",
            T3("Notificar a la CNBS 30 días calendario antes de firmar una tercerización significativa y asegurar en el contrato que el proveedor pueda ser auditado.", "Notify the CNBS 30 calendar days before signing a significant outsourcing and ensure in the contract that the provider can be audited.", "Notificar a CNBS 30 dias corridos antes de firmar uma terceirização significativa e garantir no contrato que o fornecedor possa ser auditado.")),
          PT("Art. 21", "…plazo máximo de dos (2) horas luego de identificado el incidente…", "incident", "incident",
            T3("Primer aviso a la CNBS en máximo 2 horas, informe preliminar en 2 días hábiles (actualizado cada 5) e informe final en 15 días hábiles tras la resolución.", "First notice to the CNBS within 2 hours, preliminary report within 2 business days (updated every 5) and final report within 15 business days after resolution.", "Primeiro aviso à CNBS em até 2 horas, relatório preliminar em 2 dias úteis (atualizado a cada 5) e relatório final em 15 dias úteis após a resolução."))
        ] },
      { id: "hn-149", name: "Decreto 149-2013", title: T3("Ley sobre Firmas Electrónicas", "Electronic Signatures Law", "Lei sobre Assinaturas Eletrônicas"),
        authority: "Dirección General de Propiedad Intelectual (Instituto de la Propiedad)", url: "https://www.tsc.gob.hn/web/leyes/Ley_firmas_electronicas_2013.pdf",
        applies: T3("Documentos firmados electrónicamente.", "Electronically signed documents.", "Documentos assinados eletronicamente."),
        points: [
          PT("Art. 6", "La firma electrónica, cualquiera sea su naturaleza, se tendrá como firma manuscrita para todos los efectos legales.", "sign", "sign",
            T3("La ley reconoce cualquier firma electrónica; para actos que requieran firma avanzada de un prestador acreditado, usar esa firma.", "The law recognizes any electronic signature; for acts requiring an accredited provider's advanced signature, use that signature.", "A lei reconhece qualquer assinatura eletrônica; para atos que exijam assinatura avançada de um prestador credenciado, usar essa assinatura."))
        ] }
    ] },
  // ── Brasil
  { id: "br", name: T3("Brasil", "Brazil", "Brasil"), verified: "2026-10-09", residency: "br",
    norms: [
      { id: "br-lgpd", name: "LGPD · Lei 13.709/2018", title: T3("Ley General de Protección de Datos Personales", "General Personal Data Protection Law", "Lei Geral de Proteção de Dados Pessoais"),
        authority: "ANPD", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
        applies: T3("Agentes de tratamiento (controlador y operador) de datos personales.", "Processing agents (controller and processor) of personal data.", "Agentes de tratamento (controlador e operador) de dados pessoais."),
        points: [
          PT("Art. 46", "Os agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados…", "sec", "sec", YOU.sec, "pt"),
          Object.assign(PT("Art. 33 · Res. CD/ANPD 19/2024", "A transferência internacional de dados pessoais somente é permitida nos seguintes casos:… (Res. 19:) As cláusulas-padrão contratuais, elaboradas e aprovadas pela ANPD…", "transfer", "transfer",
            T3("Con la zona ShareFile Brazil, los archivos pueden quedarse en el país. Si se guardan o procesan fuera, aplicar una base del art. 33 (por ejemplo, las cláusulas estándar de la ANPD). Confirmar con el representante qué datos del servicio se procesan fuera.", "With the ShareFile Brazil zone, files can stay in the country. If stored or processed abroad, apply an art. 33 basis (for example, the ANPD standard clauses). Confirm with the representative which service data is processed abroad.", "Com a zona ShareFile Brazil, os arquivos podem ficar no país. Se forem guardados ou processados fora, aplicar uma base do art. 33 (por exemplo, as cláusulas-padrão da ANPD). Confirmar com o representante quais dados do serviço são processados fora."), "pt"), { links: FIT.transfer.links.concat([["https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024", "Res. CD/ANPD 19/2024"]]) }),
          Object.assign(PT("Art. 48 · Res. CD/ANPD 15/2024 art. 6", "A comunicação de incidente de segurança à ANPD deverá ser realizada pelo controlador no prazo de três dias úteis…", "breach", "breach",
            T3("Comunicar a la ANPD y a los titulares en 3 días hábiles los incidentes que puedan causar riesgo o daño relevante (el doble para agentes de pequeño porte).", "Notify the ANPD and data subjects within 3 business days of incidents that may cause relevant risk or harm (double for small agents).", "Comunicar à ANPD e aos titulares em 3 dias úteis os incidentes que possam causar risco ou dano relevante (em dobro para agentes de pequeno porte)."), "pt"), { links: [["https://bibliotecadigital.mj.gov.br/bitstream/1/12879/2/RES_ANPD_2024_15.html", "Res. CD/ANPD 15/2024"]] })
        ] },
      { id: "br-cmn", name: "Res. CMN 4.893/2021", check: "amended", title: T3("Seguridad cibernética y contratación de nube (Banco Central do Brasil)", "Cybersecurity and cloud contracting (Central Bank of Brazil)", "Segurança cibernética e contratação de nuvem (Banco Central do Brasil)"),
        authority: "Conselho Monetário Nacional · Banco Central do Brasil", url: "https://www.bcb.gov.br/content/about/legislation_norms_docs/CMN_Resolution_No_4,893_2021.pdf",
        note: T3("Extractos de la traducción oficial al inglés del BCB. La norma fue modificada en 2025: confirmar el texto vigente.", "Extracts from the BCB's official English translation. The rule was amended in 2025: confirm the current text.", "Trechos da tradução oficial em inglês do BCB. A norma foi modificada em 2025: confirmar o texto vigente."),
        applies: T3("Instituciones autorizadas por el Banco Central do Brasil.", "Institutions authorized by the Central Bank of Brazil.", "Instituições autorizadas pelo Banco Central do Brasil."),
        points: [
          PT("Arts. 15 · 16 · 17", "The communication mentioned in the heading must be made within ten days after contracting the services… an indication of the countries and the regions in each country where services may be provided…", "third", "third",
            T3("Comunicar la contratación al BCB en 10 días, indicar en el contrato los países y regiones donde se presta el servicio y, si es en el exterior, verificar el convenio entre supervisores o pedir autorización.", "Notify the BCB within 10 days of contracting, state in the contract the countries and regions where the service is provided and, if abroad, check the supervisors' agreement or request authorization.", "Comunicar a contratação ao BCB em 10 dias, indicar no contrato os países e regiões de prestação do serviço e, se no exterior, verificar o convênio entre supervisores ou pedir autorização."), "en")
        ] },
      { id: "br-sign", name: "MP 2.200-2/2001 · Lei 14.063/2020", title: T3("ICP-Brasil y niveles de firma electrónica", "ICP-Brasil and electronic signature levels", "ICP-Brasil e níveis de assinatura eletrônica"),
        authority: "ITI (ICP-Brasil)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm",
        applies: T3("Documentos firmados electrónicamente, incluso ante entes públicos.", "Electronically signed documents, including with public bodies.", "Documentos assinados eletronicamente, inclusive perante entes públicos."),
        points: [
          PT("Lei 14.063 art. 4 · art. 5 §1", "…utiliza certificado digital, nos termos do § 1º do art. 10 da Medida Provisória… [a assinatura qualificada] será admitida em qualquer interação eletrônica com ente público", "sign", "sign",
            T3("Usar firma calificada ICP-Brasil (o avanzada gov.br donde se admita) en actos que la exijan; la firma de ShareFile (simple), en contratos privados.", "Use an ICP-Brasil qualified signature (or gov.br advanced where accepted) for acts that require it; ShareFile's (simple) e-signature for private contracts.", "Usar assinatura qualificada ICP-Brasil (ou avançada gov.br onde admitida) em atos que a exijam; a assinatura do ShareFile (simples) em contratos privados."), "pt")
        ] }
    ] }
];

const GLOSSARY = [
  { term: "Employee user", d: { es: "Usuario interno con licencia. Administra la cuenta, envía y solicita archivos.", en: "Licensed internal user. Manages the account and sends and requests files.", pt: "Usuário interno licenciado. Administra a conta e envia e solicita arquivos." } },
  { term: "Client user", d: { es: "Usuario externo sin costo de licencia. Sube y descarga archivos. Ilimitados en todos los planes.", en: "External user with no license cost. Uploads and downloads files. Unlimited on all plans.", pt: "Usuário externo sem custo de licença. Envia e baixa arquivos. Ilimitados em todos os planos." } },
  { term: "Storage zone", d: { es: "Ubicación donde se guardan los archivos. Puede ser administrada por ShareFile (por ejemplo EE.UU., UE, Brasil o Canadá) o por el cliente.", en: "Where files are stored. Either ShareFile-managed (for example U.S., EU, Brazil or Canada) or customer-managed.", pt: "Onde os arquivos ficam. Pode ser gerenciada pelo ShareFile (por exemplo EUA, UE, Brasil ou Canadá) ou pelo cliente." } },
  { term: "Storage Zones Controller", d: { es: "Software para guardar los datos de ShareFile en la infraestructura propia del cliente, on-premises o en su nube.", en: "Software to keep ShareFile data in the customer's own infrastructure, on-premises or in their cloud.", pt: "Software para manter os dados do ShareFile na infraestrutura do próprio cliente, local ou na nuvem dele." } },
  { term: "Control plane", d: { es: "Región que aloja la cuenta y sus servicios. Algunas funciones dependen de ella (por ejemplo eIDAS en la UE o QuickBooks en EE.UU.).", en: "Region hosting the account and its services. Some features depend on it (eIDAS in the EU, QuickBooks in the U.S.).", pt: "Região que hospeda a conta e seus serviços. Alguns recursos dependem dela (eIDAS na UE, QuickBooks nos EUA)." } },
  { term: "SSO", d: { es: "Single Sign-On: entrar con las credenciales corporativas, por ejemplo de Active Directory.", en: "Single Sign-On: sign in with corporate credentials, for example Active Directory.", pt: "Single Sign-On: entrar com as credenciais corporativas, por exemplo do Active Directory." } },
  { term: "MFA", d: { es: "Autenticación multifactor: un segundo paso además de la contraseña.", en: "Multi-factor authentication: a second step beyond the password.", pt: "Autenticação multifator: uma segunda etapa além da senha." } },
  { term: "SCIM", d: { es: "Estándar para crear, actualizar y desactivar usuarios automáticamente desde el directorio de identidades.", en: "Standard to create, update and deactivate users automatically from the identity directory.", pt: "Padrão para criar, atualizar e desativar usuários automaticamente a partir do diretório de identidades." } },
  { term: "SIEM", d: { es: "Plataforma donde el equipo de seguridad centraliza bitácoras y alertas, como Microsoft Sentinel o Splunk.", en: "Platform where security teams centralize logs and alerts, such as Microsoft Sentinel or Splunk.", pt: "Plataforma onde a equipe de segurança centraliza logs e alertas, como Microsoft Sentinel ou Splunk." } },
  { term: "SOC", d: { es: "Centro de operaciones de seguridad: el equipo que monitorea e investiga incidentes.", en: "Security operations center: the team that monitors and investigates incidents.", pt: "Centro de operações de segurança: a equipe que monitora e investiga incidentes." } },
  { term: "UEBA", d: { es: "Análisis del comportamiento de usuarios y entidades para detectar actividad inusual.", en: "User and entity behavior analytics to detect unusual activity.", pt: "Análise de comportamento de usuários e entidades para detectar atividade incomum." } },
  { term: "DLP", d: { es: "Prevención de pérdida de datos: detecta contenido sensible y controla cómo se comparte.", en: "Data loss prevention: detects sensitive content and controls how it is shared.", pt: "Prevenção de perda de dados: detecta conteúdo sensível e controla como é compartilhado." } },
  { term: "CASB", d: { es: "Cloud Access Security Broker: herramienta que aplica seguridad y DLP sobre servicios en la nube.", en: "Cloud Access Security Broker: applies security and DLP to cloud services.", pt: "Cloud Access Security Broker: aplica segurança e DLP a serviços em nuvem." } },
  { term: "KMS", d: { es: "Servicio de administración de llaves de cifrado. ShareFile admite llaves en Amazon KMS.", en: "Key management service. ShareFile supports keys held in Amazon KMS.", pt: "Serviço de gerenciamento de chaves. O ShareFile aceita chaves no Amazon KMS." } },
  { term: "KBA", d: { es: "Autenticación basada en conocimiento para verificar al firmante. Pensada para identidades de EE.UU.", en: "Knowledge-based authentication to verify the signer. Intended for U.S. identities.", pt: "Autenticação baseada em conhecimento para verificar o signatário. Voltada a identidades dos EUA." } },
  { term: "eIDAS · AES · QES", d: { es: "Marco europeo de firma electrónica. AES es firma avanzada y QES cualificada. En ShareFile: control plane UE.", en: "EU e-signature framework. AES is advanced, QES is qualified. In ShareFile: EU control plane.", pt: "Marco europeu de assinatura eletrônica. AES é avançada e QES qualificada. No ShareFile: control plane UE." } },
  { term: "BAA", d: { es: "Business Associate Agreement: contrato requerido por HIPAA con Progress para manejar información de salud.", en: "Business Associate Agreement: HIPAA contract with Progress required to handle health information.", pt: "Business Associate Agreement: contrato exigido pela HIPAA com a Progress para tratar dados de saúde." } },
  { term: "VDR", d: { es: "Virtual Data Room: espacio para documentos confidenciales de M&A, auditorías o litigios.", en: "Virtual Data Room: space for confidential documents in M&A, audits or litigation.", pt: "Virtual Data Room: espaço para documentos confidenciais de M&A, auditorias ou litígios." } },
  { term: "Request List", d: { es: "Lista para pedir, recibir y dar seguimiento a documentos de un cliente.", en: "List to request, collect and track a client's documents.", pt: "Lista para pedir, receber e acompanhar documentos de um cliente." } },
  { term: "Client Hub", d: { es: "Directorio central de clientes vinculado a carpetas, proyectos y equipos.", en: "Central client directory linked to folders, projects and teams.", pt: "Diretório central de clientes vinculado a pastas, projetos e equipes." } },
  { term: "MSRP", d: { es: "Precio de lista sugerido por el fabricante. El precio final puede variar por canal, volumen o plazo.", en: "Manufacturer's suggested list price. Final price may vary by channel, volume or term.", pt: "Preço de lista sugerido pelo fabricante. O preço final pode variar por canal, volume ou prazo." } }
];

const KNOWLEDGE = [
  { g: { es: "Planes y producto", en: "Plans and product", pt: "Planos e produto" }, links: [
    { t: "Plans & Pricing", u: W + "plans" },
    { t: "ShareFile Enterprise Plan", u: W + "plans/sharefile-enterprise" },
    { t: "Enterprise plan documentation", u: D + "learn-more/sf-enterprise-plan" },
    { t: "Virtual Data Room", u: W + "plans/sharefile-virtual-data-room" },
    { t: "What's new", u: D + "whats-new" }
  ]},
  { g: { es: "Documentación", en: "Documentation", pt: "Documentação" }, links: [
    { t: "ShareFile documentation", u: D + "welcome" },
    { t: "Resource library", u: D + "learn-more/resource-library" },
    { t: "Admin guide", u: D + "get-started/sharefile-admin-guide" },
    { t: "Mastering ShareFile Admin Settings", u: "https://www.youtube.com/watch?v=284fXaU7OtY", v: 1, long: 1 },
    { t: "Client user guide", u: D + "client-resources/client-help-guide" },
    { t: "Previewing higher-tier features", u: D + "learn-more/faq-previewing-higher-tiered-features" }
  ]},
  { g: { es: "Seguridad, datos y cumplimiento", en: "Security, data and compliance", pt: "Segurança, dados e conformidade" }, links: [
    { t: "ShareFile Trust Center", u: "https://trust.sharefile.com" },
    { t: "Security FAQ", u: D + "legal/sharefile-security-faq" },
    { t: "Service availability by country", u: D + "sf-geo" },
    { t: "ShareFile-managed storage zones", u: D + "account_settings/storage/sharefile-managed-storage-zones" },
    { t: "Storage Zones Controller 6.0", u: D + "storage-zones-controller/6-0/about" },
    { t: "AI-Assisted products (legal)", u: D + "legal/sharefile-ai/sf-ai" },
    { t: "AI Principles", u: W + "ai-principles" }
  ]},
  { g: { es: "Firma electrónica", en: "E-signature", pt: "Assinatura eletrônica" }, links: [
    { t: "E-signature legal overview", u: D + "electronic-signature/legal" },
    { t: "eIDAS-supported e-signatures", u: D + "signatures/eidas-signature" },
    { t: "E-signature security", u: D + "electronic-signature/security" }
  ]},
  { g: { es: "Soporte y estado", en: "Support and status", pt: "Suporte e status" }, links: [
    { t: "Help Center", u: "https://support.sharefile.com/s/" },
    { t: "Support offerings and coverage", u: "https://support.sharefile.com/s/article/ShareFile-Support-Offerings-and-Coverage" },
    { t: "How to chat with Support", u: "https://www.youtube.com/watch?v=_Wj9R9hDpwU", v: 1 },
    { t: "How to contact your Success Engineer", u: "https://www.youtube.com/watch?v=iDRSdUWDYRY", v: 1 },
    { t: "ShareFile status", u: "https://status.sharefile.com/" },
    { t: "Feature requests (Ideas portal, ShareFile sign-in)", u: "https://sharefile.ideas.aha.io/" }
  ]},
  { g: { es: "Aprender y partners", en: "Learn and partners", pt: "Aprender e parceiros" }, links: [
    { t: "ShareFile Training (Product Hubs)", u: "https://support.sharefile.com/s/sharefile-product-hubs" },
    { t: "Webinars: live and on demand (English)", u: W + "webinars" },
    { t: "Progress ShareFile: Tutorials (playlist)", u: "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY9W-cB3G2OTYx00GXZrrzZB", v: 1 },
    { t: "Progress ShareFile: Demos (playlist)", u: "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY8wmEjjJxq5I-0SIPjlI3oi", v: 1 },
    { t: "ShareFile YouTube", u: "https://www.youtube.com/@progresssharefile" },
    { t: "Customer stories", u: W + "customer-stories" },
    { t: "ROI calculator", u: W + "client-coordination-cost-calculator" },
    { t: "Partner overview", u: W + "partners" },
    { t: "Partner login", u: "https://partnercommunity.sharefile.com/s/login/" }
  ]}
];

const DISCREPANCIES = [
  { where: W + "plans", d: { es: "La fila Folder Q&A dice \"Included in Virtual Data Room\" en las cuatro columnas. Aquí se trata como exclusivo de VDR.", en: "The Folder Q&A row reads \"Included in Virtual Data Room\" in all four columns. Treated here as VDR-only.", pt: "A linha Folder Q&A diz \"Included in Virtual Data Room\" nas quatro colunas. Aqui é tratada como exclusiva do VDR." } },
  { where: W + "plans", d: { es: "La fila Feedback & Approval aparece duplicada dentro de Workflows.", en: "The Feedback & Approval row appears twice under Workflows.", pt: "A linha Feedback & Approval aparece duplicada em Workflows." } },
  { where: W + "plans", d: { es: "HIPAA Eligible dice \"Available only in ShareFile Premium\", pero la tabla lo marca también en Enterprise y VDR.", en: "HIPAA Eligible says \"Available only in ShareFile Premium\", yet the table also marks Enterprise and VDR.", pt: "HIPAA Eligible diz \"Available only in ShareFile Premium\", mas a tabela também marca Enterprise e VDR." } },
  { where: D + "signatures/eidas-signature", d: { es: "Las firmas eIDAS están documentadas para Premium y superiores, pero no aparecen en la tabla de precios.", en: "eIDAS signatures are documented for Premium and higher but are missing from the pricing table.", pt: "As assinaturas eIDAS estão documentadas para Premium e superiores, mas não aparecem na tabela de preços." } },
  { where: W + "enterprise", d: { es: "La página de tamaño \"Large\" (/enterprise) no menciona las funciones del plan Enterprise, y el menú la llama a veces \"Large\" y a veces \"Enterprise\".", en: "The \"Large\" company-size page (/enterprise) does not mention Enterprise plan features, and the menu labels it \"Large\" or \"Enterprise\" inconsistently.", pt: "A página de porte \"Large\" (/enterprise) não cita os recursos do plano Enterprise, e o menu a chama ora de \"Large\", ora de \"Enterprise\"." } },
  { where: W + "industry/finance", d: { es: "Algunas páginas (Finance, Healthcare, Real Estate, Small Business, /enterprise) todavía muestran \"Industry Advantage\" en el menú, aunque ya no aparece en /plans.", en: "Some pages (Finance, Healthcare, Real Estate, Small Business, /enterprise) still list \"Industry Advantage\" in the menu, though it is gone from /plans.", pt: "Algumas páginas (Finance, Healthcare, Real Estate, Small Business, /enterprise) ainda mostram \"Industry Advantage\" no menu, embora não esteja mais em /plans." } },
  { where: D + "sharefile-app/sharefile-for-outlook", d: { es: "La tabla de precios incluye los plugins de correo desde Advanced, pero la documentación del plugin de Outlook pide ShareFile Premium o superior.", en: "The pricing table includes email plug-ins from Advanced, but the Outlook plug-in documentation requires ShareFile Premium or higher.", pt: "A tabela de preços inclui os plugins de e-mail desde o Advanced, mas a documentação do plugin do Outlook exige ShareFile Premium ou superior." } }
];


const CHANGELOG = [
  { v: "1.10.0", date: "2026-10-09", d: { es: "Cumplimiento: se agregan México, Guatemala, El Salvador, Honduras, Panamá, Colombia, Perú, Chile, Argentina y Brasil (32 normas en total), cada una con enlace al texto oficial del gobierno. Lo que no se pudo verificar en la fuente oficial aparece como pendiente.", en: "Compliance: adds Mexico, Guatemala, El Salvador, Honduras, Panama, Colombia, Peru, Chile, Argentina and Brazil (32 norms in total), each linked to the official government text. What could not be verified at the official source is shown as pending.", pt: "Conformidade: adiciona México, Guatemala, El Salvador, Honduras, Panamá, Colômbia, Peru, Chile, Argentina e Brasil (32 normas no total), cada uma com link para o texto oficial do governo. O que não pôde ser verificado na fonte oficial aparece como pendente." } },
  { v: "1.9.0", date: "2026-10-08", d: { es: "Nueva página «Cumplimiento» (piloto Costa Rica): Ley 8968 y su reglamento, CONASSIF 5-24 y Ley 8454, con extractos del texto oficial, dónde encaja ShareFile en cada requisito, lo que le corresponde a la empresa y dónde quedan los datos. Principio: quien cumple es la empresa que usa ShareFile.", en: "New “Compliance” page (Costa Rica pilot): Law 8968 and its regulation, CONASSIF 5-24 and Law 8454, with official text extracts, where ShareFile fits each requirement, what falls to the company and where the data lives. Principle: the company using ShareFile is the one that complies.", pt: "Nova página «Conformidade» (piloto Costa Rica): Lei 8968 e seu regulamento, CONASSIF 5-24 e Lei 8454, com trechos do texto oficial, onde o ShareFile se encaixa em cada requisito, o que cabe à empresa e onde ficam os dados. Princípio: quem cumpre é a empresa que usa o ShareFile." } },
  { v: "1.8.1", date: "2026-10-09", d: { es: "El sitio muestra su ícono (los cuatro cuadros de la marca) en la pestaña del navegador y al guardarlo en la pantalla de inicio del celular.", en: "The site shows its icon (the four brand squares) on the browser tab and when saved to a phone's home screen.", pt: "O site mostra seu ícone (os quatro quadrados da marca) na aba do navegador e ao salvá-lo na tela inicial do celular." } },
  { v: "1.8.0", date: "2026-10-08", d: { es: "Casos de uso: de 45 a 61. Contabilidad, Finanzas y Legal llegan a 8; Construcción, Salud y Seguros a 7; Manufactura a 6. Bienes raíces y RR. HH. se mantienen en 5 porque el material oficial no da para más. Cada caso nuevo se verificó contra su fuente. Los enlaces «Habilita» de «Aprovecha tu plan» llevan al caso exacto.", en: "Use cases: from 45 to 61. Accounting, Finance and Legal reach 8; Construction, Healthcare and Insurance 7; Manufacturing 6. Real estate and HR stay at 5 because official material supports no more. Each new case was checked against its source. The “Enables” links in “Get more from your plan” open the exact case.", pt: "Casos de uso: de 45 para 61. Contabilidade, Finanças e Jurídico chegam a 8; Construção, Saúde e Seguros a 7; Manufatura a 6. Imobiliário e RH ficam em 5 porque o material oficial não permite mais. Cada caso novo foi verificado contra a fonte. Os links «Habilita» de «Aproveite seu plano» levam ao caso exato." } },
  { v: "1.7.0", date: "2026-10-08", d: { es: "Nueva página «Aprovecha tu plan»: autodiagnóstico de las funciones que el cliente ya paga (La usamos / No la usamos / No sé), porcentaje de adopción, las 5 funciones por las que conviene empezar según los casos de uso de su industria, guía oficial y videos, y resumen para copiar. Las respuestas quedan solo en el navegador. En computadora, el menú superior ahora muestra todas las secciones.", en: "New “Get more from your plan” page: self-diagnosis of the features the customer already pays for (We use it / We don't / Not sure), adoption rate, the 5 features to start with based on their industry's use cases, official guide and videos, and a summary to copy. Answers stay in the browser. On desktop the top menu now shows every section.", pt: "Nova página «Aproveite seu plano»: autodiagnóstico dos recursos que o cliente já paga (Usamos / Não usamos / Não sei), taxa de adoção, os 5 recursos para começar segundo os casos de uso do setor, guia oficial e vídeos, e resumo para copiar. As respostas ficam só no navegador. No computador, o menu superior agora mostra todas as seções." } },
  { v: "1.6.2", date: "2026-10-08", d: { es: "Precios con la redacción oficial de sharefile.com/plans («por usuario / mes» y «Mínimo de 3 usuarios», VDR 5) en Inicio, Mapa, Data Room y Matriz. Corrige un desborde horizontal en la página Data Room en celulares pequeños.", en: "Prices use the official sharefile.com/plans wording (“per user / month” and “Minimum of 3 users”, VDR 5) on Home, Map, Data Room and Matrix. Fixes a horizontal overflow on the Data Room page on small phones.", pt: "Preços com a redação oficial de sharefile.com/plans («por usuário / mês» e «Mínimo de 3 usuários», VDR 5) em Início, Mapa, Data Room e Matriz. Corrige um transbordamento horizontal na página Data Room em celulares pequenos." } },
  { v: "1.6.1", date: "2026-10-08", d: { es: "Mapa, Data Room y Matriz: cada precio indica «por usuario / mes», el tipo de facturación y el mínimo de usuarios del plan. Las columnas Premium y Enterprise del mapa muestran lo que agregan y el total del plan (ej. +28 funciones, 62 en total). En celulares, el mapa muestra el precio y el mínimo que antes quedaban ocultos.", en: "Map, Data Room and Matrix: every price states “per user / month”, the billing type and the plan's minimum users. The Premium and Enterprise map columns show what they add and the plan total (e.g. +28 features, 62 in total). On phones the map now shows the price and minimum that were hidden.", pt: "Mapa, Data Room e Matriz: cada preço indica «por usuário / mês», o tipo de faturamento e o mínimo de usuários do plano. As colunas Premium e Enterprise do mapa mostram o que adicionam e o total do plano (ex. +28 recursos, 62 no total). Em celulares, o mapa mostra o preço e o mínimo que antes ficavam ocultos." } },
  { v: "1.6.0", date: "2026-10-08", d: { es: "Nueva página «Casos de uso»: 5 procesos por cada una de las 9 industrias, con funciones enlazadas, plan mínimo calculado, clientes publicados por ShareFile (cifras tal como las publica cada historia) y fuente oficial. El Recomendador enlaza a los casos de su industria. El pie de página invita a verificar en sharefile.com, docs.sharefile.com y trust.sharefile.com y a contactar al representante de ShareFile de cada región.", en: "New “Use cases” page: 5 processes for each of the 9 industries, with linked features, computed minimum plan, customers published by ShareFile (figures as each story states them) and official source. The Recommender links to its industry's cases. The footer invites readers to verify on sharefile.com, docs.sharefile.com and trust.sharefile.com and to contact their regional ShareFile representative.", pt: "Nova página «Casos de uso»: 5 processos para cada um dos 9 setores, com recursos vinculados, plano mínimo calculado, clientes publicados pelo ShareFile (números como cada história os publica) e fonte oficial. O Recomendador leva aos casos do seu setor. O rodapé convida a verificar em sharefile.com, docs.sharefile.com e trust.sharefile.com e a falar com o representante ShareFile da região." } },
  { v: "1.5.9", date: "2026-10-08", d: { es: "Conocimiento: se agregan los webinars oficiales de ShareFile (en vivo y bajo demanda, en inglés).", en: "Knowledge: adds the official ShareFile webinars (live and on demand, in English).", pt: "Conhecimento: adiciona os webinars oficiais do ShareFile (ao vivo e sob demanda, em inglês)." } },
  { v: "1.5.8", date: "2026-10-08", d: { es: "Auditoría completa: corrige el desborde horizontal del Recomendador en celulares y el enlace «Saltar al contenido» (ahora traducido y sin cambiar de página). Enlaces actualizados a su dirección final (AI Document Assistant, Client Hub, Storage Zones, Help Center, Training). El chequeo semanal de enlaces ahora sí alerta cuando algo falla y detecta páginas redirigidas al inicio.", en: "Full audit: fixes the Recommender's horizontal overflow on phones and the “Skip to content” link (now translated and no longer changes page). Links updated to their final address (AI Document Assistant, Client Hub, Storage Zones, Help Center, Training). The weekly link check now actually alerts on failures and detects pages redirected to a home page.", pt: "Auditoria completa: corrige o transbordamento horizontal do Recomendador em celulares e o link «Pular para o conteúdo» (agora traduzido e sem trocar de página). Links atualizados para o endereço final (AI Document Assistant, Client Hub, Storage Zones, Help Center, Training). A verificação semanal de links agora alerta de fato quando algo falha e detecta páginas redirecionadas para a página inicial." } },
  { v: "1.5.7", date: "2026-10-08", d: { es: "Comparador en columnas completas: cuando un plan contiene al otro, el menor muestra todas sus funciones y el mayor muestra «Todo lo de…» más lo que agrega.", en: "Comparator in full columns: when one plan contains the other, the smaller one lists all its features and the larger shows “Everything in…” plus what it adds.", pt: "Comparador em colunas completas: quando um plano contém o outro, o menor lista todos os seus recursos e o maior mostra «Tudo do…» mais o que adiciona." } },
  { v: "1.5.6", date: "2026-10-08", d: { es: "Comparador: resumen en una frase, bloque con la base común de funciones por categoría (desplegable), diferencias agrupadas por categoría con su nombre y el Basic Client Portal marcado como mejora a Enhanced Client Portal.", en: "Comparator: one-line summary, shared-base block with feature counts by category (expandable), differences grouped under named categories, and Basic Client Portal marked as upgrading to Enhanced Client Portal.", pt: "Comparador: resumo em uma frase, bloco com a base comum de recursos por categoria (expansível), diferenças agrupadas por categoria com nome e o Basic Client Portal indicado como evolução para o Enhanced Client Portal." } },
  { v: "1.5.5", date: "2026-10-08", d: { es: "El comparador abre por defecto con Advanced vs Premium.", en: "The comparator opens with Advanced vs Premium by default.", pt: "O comparador abre por padrão com Advanced vs Premium." } },
  { v: "1.5.4", date: "2026-10-08", d: { es: "Calculadora: botón rápido de 3 licencias y nota oficial: no hay máximo publicado de licencias por plan y los usuarios cliente son ilimitados.", en: "Calculator: 3-license quick pick and official note: no published maximum licenses per plan, and client users are unlimited.", pt: "Calculadora: botão rápido de 3 licenças e nota oficial: não há máximo publicado de licenças por plano e os usuários clientes são ilimitados." } },
  { v: "1.5.3", date: "2026-10-08", d: { es: "Calculadora y comparador: el campo de usuarios empieza en el mínimo oficial del plan y lo sigue al cambiar de plan hasta que escribes tu cantidad; botones rápidos (5 a 250); nunca muestra 0.", en: "Calculator and comparator: the users field starts at the plan's official minimum and follows it when you switch plans until you type your number; quick picks (5 to 250); never shows 0.", pt: "Calculadora e comparador: o campo de usuários começa no mínimo oficial do plano e o acompanha ao trocar de plano até você digitar sua quantidade; botões rápidos (5 a 250); nunca mostra 0." } },
  { v: "1.5.2", date: "2026-10-08", d: { es: "Integraciones: el filtro por industria ahora reorganiza toda la página: arriba las específicas de la industria y las que destaca su página oficial en sharefile.com; abajo el resto por función; se ocultan las específicas de otras industrias.", en: "Integrations: the industry filter now reorganizes the whole page: the industry's specific integrations and those featured on its official sharefile.com page on top; the rest by function below; other industries' specific integrations are hidden.", pt: "Integrações: o filtro por setor agora reorganiza a página inteira: no topo as específicas do setor e as destacadas na sua página oficial em sharefile.com; abaixo as demais por função; as específicas de outros setores ficam ocultas." } },
  { v: "1.5.1", date: "2026-10-08", d: { es: "Calculadora y comparador muestran las licencias facturadas por plan y el mínimo de cada uno (VDR 5, resto 3); el campo de usuarios se ajusta al mínimo del plan. El recomendador muestra el camino de decisión: industria → plan base, necesidades → Enterprise.", en: "Calculator and comparator show billed licenses per plan and each plan's minimum (VDR 5, others 3); the users field adjusts to the plan minimum. The recommender shows its decision path: industry → base plan, needs → Enterprise.", pt: "Calculadora e comparador mostram as licenças faturadas por plano e o mínimo de cada um (VDR 5, demais 3); o campo de usuários se ajusta ao mínimo do plano. O recomendador mostra o caminho de decisão: setor → plano base, necessidades → Enterprise." } },
  { v: "1.5.0", date: "2026-10-08", d: { es: "Integraciones organizadas por función y no por proveedor, con buscador. Se elimina el bloque que daba a entender que solo Premium permite trabajar con externos.", en: "Integrations organized by function instead of vendor, with search. Removes the block that implied only Premium supports working with external people.", pt: "Integrações organizadas por função e não por fornecedor, com busca. Remove o bloco que dava a entender que só o Premium permite trabalhar com externos." } },
  { v: "1.4.0", date: "2026-10-08", d: { es: "Videos oficiales por función: ícono ▶ en el mapa, en el panel de detalle y en Integraciones. Videos: SIEM, Security Center y detección de amenazas.", en: "Official videos per feature: ▶ icon on the map, in the detail panel and in Integrations. Videos: SIEM, Security Center and threat detection.", pt: "Vídeos oficiais por recurso: ícone ▶ no mapa, no painel de detalhes e em Integrações. Vídeos: SIEM, Security Center e detecção de ameaças." } },
  { v: "1.3.2", date: "2026-10-08", d: { es: "Video oficial de presentación de ShareFile en el Inicio y lista oficial de demos en Conocimiento.", en: "Official ShareFile overview video on Home and official demos playlist in Knowledge.", pt: "Vídeo oficial de apresentação do ShareFile no Início e playlist oficial de demos em Conhecimento." } },
  { v: "1.3.1", date: "2026-10-08", d: { es: "Se agrega la lista oficial de tutoriales de ShareFile en YouTube.", en: "Adds the official ShareFile tutorials playlist on YouTube.", pt: "Adiciona a playlist oficial de tutoriais do ShareFile no YouTube." } },
  { v: "1.3.0", date: "2026-10-08", d: { es: "Revisión de coherencia: se eliminan repeticiones entre Inicio, Mapa y Conocimiento; Integraciones pasa a Recursos. Videos oficiales por industria en el recomendador y videos de soporte en Conocimiento.", en: "Coherence review: removes repetition between Home, Map and Knowledge; Integrations moves to Resources. Official industry videos in the recommender and support videos in Knowledge.", pt: "Revisão de coerência: remove repetições entre Início, Mapa e Conhecimento; Integrações passa para Recursos. Vídeos oficiais por setor no recomendador e vídeos de suporte em Conhecimento." } },
  { v: "1.2.1", date: "2026-10-08", d: { es: "Integraciones: se agregan los conectores de OneDrive, Box y Dropbox y la ruta de activación para el administrador.", en: "Integrations: adds OneDrive, Box and Dropbox connectors and the admin path to enable them.", pt: "Integrações: adiciona os conectores OneDrive, Box e Dropbox e o caminho de ativação para o administrador." } },
  { v: "1.2.0", date: "2026-10-08", d: { es: "Nueva página de Integraciones: Microsoft 365, Google Workspace, seguridad, CRM y contabilidad, e integraciones por industria. Nueva discrepancia sobre el plugin de Outlook.", en: "New Integrations page: Microsoft 365, Google Workspace, security, CRM and accounting, and industry-specific integrations. New discrepancy on the Outlook plug-in.", pt: "Nova página de Integrações: Microsoft 365, Google Workspace, segurança, CRM e contabilidade, e integrações por setor. Nova discrepância sobre o plugin do Outlook." } },
  { v: "1.1.0", date: "2026-10-08", d: { es: "Selector Mensual / Anual en todo el sitio, con precio mensual tachado y porcentaje de ahorro. Paleta de marca ShareFile.", en: "Monthly / Annual billing toggle across the site, with struck-through monthly price and savings percentage. ShareFile brand palette.", pt: "Seletor Mensal / Anual em todo o site, com preço mensal riscado e porcentagem de economia. Paleta da marca ShareFile." } },
  { v: "1.0.0", date: "2026-10-08", d: { es: "Primera versión: mapas de planes, VDR, recomendador, comparador, matriz, calculadora, conocimiento y glosario en ES, EN y PT.", en: "First release: plan maps, VDR, recommender, comparator, matrix, calculator, knowledge and glossary in ES, EN and PT.", pt: "Primeira versão: mapas de planos, VDR, recomendador, comparador, matriz, calculadora, conhecimento e glossário em ES, EN e PT." } }
];

/* Integrations: catalog from sharefile.com/apps-integrations and docs.sharefile.com/catalog/integrations (2026-10-08).
   plan: only when official documentation states it. ind: industries the integration is built for. */
const INT_GROUPS = [
  { id: "prod",    name: { es: "Correo y productividad", en: "Email and productivity", pt: "E-mail e produtividade" },
    note: { es: "Trabaja con ShareFile desde el correo y las herramientas de oficina que ya usa tu equipo.", en: "Work with ShareFile from the email and office tools your team already uses.", pt: "Trabalhe com o ShareFile pelo e-mail e pelas ferramentas de escritório que sua equipe já usa." } },
  { id: "storage", name: { es: "Almacenamiento en la nube", en: "Cloud storage", pt: "Armazenamento em nuvem" },
    note: { es: "Los conectores permiten acceder desde ShareFile a archivos que ya están en otros servicios. El administrador los activa en Configuración de la cuenta → Conectores.", en: "Connectors give access from ShareFile to files already stored in other services. Admins enable them in Account settings → Connectors.", pt: "Os conectores dão acesso pelo ShareFile a arquivos que já estão em outros serviços. O administrador ativa em Configurações da conta → Conectores." } },
  { id: "idsec",   name: { es: "Identidad y seguridad", en: "Identity and security", pt: "Identidade e segurança" } },
  { id: "biz",     name: { es: "CRM y contabilidad", en: "CRM and accounting", pt: "CRM e contabilidade" } },
  { id: "auto",    name: { es: "Automatización y desarrolladores", en: "Automation and developers", pt: "Automação e desenvolvedores" } },
  { id: "ind",     name: { es: "Especializadas por industria", en: "Industry-specific", pt: "Especializadas por setor" } },
  { id: "apps",    name: { es: "Apps de ShareFile", en: "ShareFile apps", pt: "Apps do ShareFile" } }
];

const INTEGRATIONS = [
  { id: "outlook", g: "prod", name: "ShareFile for Microsoft Outlook", url: D + "sharefile-app/sharefile-for-outlook", plan: "check",
    d: { es: "Reemplaza adjuntos por enlaces seguros, salta el límite de tamaño de Outlook, solicita archivos y avisa cuando alguien abre un archivo.", en: "Replaces attachments with secure links, bypasses Outlook's size limit, requests files and alerts you when a file is opened.", pt: "Substitui anexos por links seguros, contorna o limite de tamanho do Outlook, solicita arquivos e avisa quando alguém abre um arquivo." },
    n: { es: "Outlook clásico para Windows. No es compatible con el nuevo Outlook para Windows: para ese caso existe la versión en línea.", en: "Classic Outlook for Windows. Not compatible with the new Outlook for Windows; use the online version instead.", pt: "Outlook clássico para Windows. Não é compatível com o novo Outlook para Windows; nesse caso, use a versão online." } },
  { id: "outlook_online", g: "prod", name: "ShareFile for Microsoft Outlook Online", url: D + "sharefile-app/sharefile-for-outlook-online",
    also: [{ label: "Microsoft AppSource", url: "https://appsource.microsoft.com/en-us/product/office/wa200007922?tab=overview" }],
    d: { es: "Complemento para Outlook en la web: adjuntos seguros sin límite de tamaño y solicitudes de archivos.", en: "Add-in for Outlook on the web: secure attachments without size limits and file requests.", pt: "Suplemento para o Outlook na web: anexos seguros sem limite de tamanho e solicitações de arquivos." } },
  { id: "outlook_encrypt", g: "prod", name: "Encrypted email from Outlook", url: D + "sharefile-app/sharefile-for-outlook/encrypt-emails", plan: "APE",
    d: { es: "Envía correos cifrados directamente desde Outlook; el destinatario no necesita cuenta de ShareFile.", en: "Send encrypted email straight from Outlook; recipients don't need a ShareFile account.", pt: "Envie e-mails criptografados direto do Outlook; o destinatário não precisa de conta ShareFile." } },
  { id: "coedit", g: "prod", name: "Co-editing with Microsoft 365", url: D + "sharefile-app/sharefile-web/co-editing", plan: "APE",
    d: { es: "Varias personas editan al mismo tiempo documentos de Word, Excel y PowerPoint guardados en ShareFile.", en: "Several people edit Word, Excel and PowerPoint files stored in ShareFile at the same time.", pt: "Várias pessoas editam ao mesmo tempo arquivos de Word, Excel e PowerPoint guardados no ShareFile." },
    n: { es: "Requiere licencia comercial de Microsoft 365 (Business Standard o superior, E3, E5, entre otras). No disponible con los planes de archivado FINRA o Enterprise.", en: "Requires a commercial Microsoft 365 license (Business Standard or higher, E3, E5 and others). Not available with FINRA or Enterprise Archiving plans.", pt: "Requer licença comercial do Microsoft 365 (Business Standard ou superior, E3, E5, entre outras). Indisponível com os planos de arquivamento FINRA ou Enterprise." } },
  { id: "sharepoint", g: "storage", name: "SharePoint Online connector", url: D + "account_settings/connectors/enable_sharepoint_online", plan: "APEV",
    d: { es: "Conecta una biblioteca de SharePoint Online para ver, descargar y compartir sus archivos desde ShareFile.", en: "Connects a SharePoint Online library to preview, download and share its files from ShareFile.", pt: "Conecta uma biblioteca do SharePoint Online para visualizar, baixar e compartilhar seus arquivos pelo ShareFile." },
    n: { es: "El administrador da su consentimiento una sola vez para todos los usuarios.", en: "An admin grants consent once for all users.", pt: "O administrador dá consentimento uma única vez para todos os usuários." } },
  { id: "onedrive", g: "storage", name: "OneDrive for Business connector", url: D + "account_settings/connectors/one_drive_for_business_recommendations", plan: "APEV",
    d: { es: "Accede a OneDrive for Business desde la app ShareFile para Windows y comparte esos archivos de forma segura.", en: "Access OneDrive for Business from the ShareFile for Windows app and share those files securely.", pt: "Acesse o OneDrive for Business pelo app ShareFile para Windows e compartilhe esses arquivos com segurança." },
    n: { es: "La carpeta personal del usuario debe estar en almacenamiento administrado por ShareFile.", en: "The user's personal folder must be on ShareFile-managed storage.", pt: "A pasta pessoal do usuário deve estar em armazenamento gerenciado pelo ShareFile." } },
  { id: "onedrive_personal", g: "storage", name: "OneDrive connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su propia cuenta de OneDrive y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their own OneDrive account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua própria conta do OneDrive e acesse esses arquivos pelo ShareFile." }, },
  { id: "word_addin", g: "prod", name: "Microsoft Word add-in", url: D + "templates/microsoft_word_add_in", plan: "PE",
    d: { es: "Diseña plantillas de documentos en Word, con campos de firma y variables, listas para enviar a firma electrónica.", en: "Design document templates in Word, with signature fields and variables, ready to send for e-signature.", pt: "Crie modelos de documentos no Word, com campos de assinatura e variáveis, prontos para assinatura eletrônica." } },
  { id: "entra_sso", g: "idsec", name: "Microsoft Entra ID · SSO", url: D + "account_settings/security/single_sign_on", plan: "APEV",
    d: { es: "Inicio de sesión único con las credenciales corporativas.", en: "Single sign-on with corporate credentials.", pt: "Login único com as credenciais corporativas." } },
  { id: "entra_scim", g: "idsec", name: "Microsoft Entra ID · SCIM provisioning", url: D + "account_settings/user_provisioning/entra_id_scim", plan: "E", badges: ["third"],
    d: { es: "Crea, actualiza y desactiva usuarios de ShareFile automáticamente desde Entra ID.", en: "Creates, updates and deactivates ShareFile users automatically from Entra ID.", pt: "Cria, atualiza e desativa usuários do ShareFile automaticamente a partir do Entra ID." } },
  { id: "sentinel", g: "idsec", name: "Microsoft Sentinel", url: D + "account_settings/security/sentinel-integration", plan: "E", badges: ["third"],
    d: { es: "Envía bitácoras y alertas de seguridad de ShareFile al SIEM de Microsoft.", en: "Sends ShareFile activity logs and security alerts to Microsoft's SIEM.", pt: "Envia logs e alertas de segurança do ShareFile ao SIEM da Microsoft." } },

  // Google Workspace
  { id: "gmail", g: "prod", name: "ShareFile for Gmail / Google Workspace", url: D + "sharefile-app/sharefile-for-google-workspace", plan: "APEV",
    also: [{ label: "Google Workspace Marketplace", url: "https://workspace.google.com/marketplace/app/sharefile/578628970478" }],
    d: { es: "Envía enlaces seguros a carpetas y documentos de ShareFile, y solicita archivos, desde Gmail.", en: "Send secure links to ShareFile folders and documents, and request files, from Gmail.", pt: "Envie links seguros para pastas e documentos do ShareFile, e solicite arquivos, pelo Gmail." } },
  { id: "gdrive", g: "storage", name: "Google Drive connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Google Drive y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Google Drive account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Google Drive e acesse esses arquivos pelo ShareFile." }, },

  // Other cloud storage
  { id: "box", g: "storage", name: "Box connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Box y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Box account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Box e acesse esses arquivos pelo ShareFile." }, },
  { id: "dropbox", g: "storage", name: "Dropbox connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Dropbox y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Dropbox account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Dropbox e acesse esses arquivos pelo ShareFile." }, },

  // Security, identity and IT
  { id: "splunk", g: "idsec", name: "Splunk", url: D + "account_settings/security/splunk-integration", plan: "E", badges: ["third"],
    d: { es: "Envía bitácoras y alertas de ShareFile a Splunk para monitoreo e investigación.", en: "Sends ShareFile logs and alerts to Splunk for monitoring and investigation.", pt: "Envia logs e alertas do ShareFile ao Splunk para monitoramento e investigação." } },
  { id: "casb", g: "idsec", name: "CASB and on-premises DLP", url: D + "storage-zones-controller/6-0/data-loss-prevention", plan: "APEV", badges: ["third"],
    d: { es: "Integra DLP on-premises y herramientas CASB líderes para entornos híbridos.", en: "Integrates on-premises DLP and leading CASB tools for hybrid environments.", pt: "Integra DLP on-premises e ferramentas CASB líderes para ambientes híbridos." } },
  { id: "aws_kms", g: "idsec", name: "Amazon KMS", url: D + "configure/customer-managed-encryption-keys", plan: "APEV",
    d: { es: "Cifra los archivos con llaves que el cliente administra en Amazon KMS.", en: "Encrypts files with keys the customer manages in Amazon KMS.", pt: "Criptografa os arquivos com chaves que o cliente gerencia no Amazon KMS." } },
  { id: "api", g: "auto", name: "ShareFile API", url: "https://api.sharefile.com", plan: "APEV",
    d: { es: "API para integrar ShareFile con sistemas propios o de terceros.", en: "API to integrate ShareFile with in-house or third-party systems.", pt: "API para integrar o ShareFile com sistemas próprios ou de terceiros." } },
  { id: "powershell", g: "auto", name: "ShareFile PowerShell", url: D + "configure/sharefile-powershell",
    d: { es: "Automatiza tareas de administración de ShareFile con scripts de PowerShell.", en: "Automates ShareFile administration tasks with PowerShell scripts.", pt: "Automatiza tarefas de administração do ShareFile com scripts PowerShell." } },

  // CRM, accounting and automation
  { id: "salesforce", g: "biz", name: "Salesforce", url: D + "sharefile-app/sharefile-web/integrations#integrating-salesforce", badges: ["us"],
    d: { es: "Importa leads de Salesforce, exporta archivos y genera documentos con datos de Salesforce.", en: "Imports Salesforce leads, exports files and generates documents from Salesforce data.", pt: "Importa leads do Salesforce, exporta arquivos e gera documentos com dados do Salesforce." },
    n: { es: "La generación de documentos y la exportación funcionan solo en control plane de EE.UU.", en: "Document generation and export work only on U.S. control planes.", pt: "A geração de documentos e a exportação funcionam só em control plane dos EUA." } },
  { id: "quickbooks_int", g: "biz", name: "QuickBooks", url: D + "sharefile-app/sharefile-web/integrations#integrating-quickbooks", badges: ["us"],
    d: { es: "Importa clientes de QuickBooks, exporta archivos y firma acuerdos integrados.", en: "Imports QuickBooks customers, exports files and supports integrated agreement signing.", pt: "Importa clientes do QuickBooks, exporta arquivos e permite assinatura de acordos integrada." } },
  { id: "xero", g: "biz", name: "Xero", url: D + "catalog/integrations/export", badges: ["us"],
    d: { es: "Exporta archivos de carpetas de ShareFile a Xero.", en: "Exports files from ShareFile folders to Xero.", pt: "Exporta arquivos de pastas do ShareFile para o Xero." } },
  { id: "freshbooks", g: "biz", name: "FreshBooks", url: D + "catalog/integrations/export", badges: ["us"],
    d: { es: "Exporta archivos de proyectos y carpetas a FreshBooks.", en: "Exports project and folder files to FreshBooks.", pt: "Exporta arquivos de projetos e pastas para o FreshBooks." } },
  { id: "pipedrive", g: "biz", name: "Pipedrive", url: D + "catalog/integrations/export", badges: ["us"],
    d: { es: "Exporta y sincroniza archivos de proyectos con Pipedrive.", en: "Exports and syncs project files to Pipedrive.", pt: "Exporta e sincroniza arquivos de projetos com o Pipedrive." } },
  { id: "zapier", g: "auto", name: "Zapier", url: D + "catalog/integrations/sf-zapier-integration", badges: ["third"],
    d: { es: "Conecta ShareFile con más de 4,000 aplicaciones sin programar.", en: "Connects ShareFile with 4,000+ apps without code.", pt: "Conecta o ShareFile a mais de 4.000 aplicativos sem programar." } },

  // Industry-specific
  { id: "redtail", g: "ind", ind: ["finance"], name: "Redtail CRM", url: D + "catalog/integrations/redtail-crm", badges: ["third"],
    d: { es: "Vincula carpetas de ShareFile con contactos del CRM de asesores financieros.", en: "Links ShareFile folders to contacts in the financial-advisor CRM.", pt: "Vincula pastas do ShareFile a contatos do CRM de assessores financeiros." } },
  { id: "orion", g: "ind", ind: ["finance"], name: "Orion", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Genera reportes y los guarda en carpetas específicas de ShareFile.", en: "Generates reports and stores them in specific ShareFile folders.", pt: "Gera relatórios e os guarda em pastas específicas do ShareFile." } },
  { id: "trumpet", g: "ind", ind: ["finance", "legal"], name: "Trumpet Publisher", url: D + "catalog/integrations/trumpet-publisher", badges: ["third"],
    d: { es: "Publica directorios de documentos de clientes en carpetas de ShareFile, para firmas financieras y legales.", en: "Publishes client document directories to ShareFile folders, for financial and law firms.", pt: "Publica diretórios de documentos de clientes em pastas do ShareFile, para firmas financeiras e jurídicas." } },
  { id: "hubdoc", g: "ind", ind: ["accounting"], name: "Hubdoc", url: D + "catalog/integrations/hubdoc", badges: ["third"],
    d: { es: "Sincroniza estados de cuenta, cheques y comprobantes de Hubdoc a ShareFile.", en: "Syncs bank statements, check images and deposit slips from Hubdoc to ShareFile.", pt: "Sincroniza extratos, cheques e comprovantes do Hubdoc para o ShareFile." } },
  { id: "smartbid", g: "ind", ind: ["construction"], name: "SmartBid", url: D + "catalog/integrations/smartbid", badges: ["third"],
    d: { es: "Comparte archivos de proyectos con subcontratistas mediante el plan room de SmartBid.", en: "Shares project files with subcontractors through the SmartBid plan room.", pt: "Compartilha arquivos de projetos com subcontratados pelo plan room do SmartBid." } },
  { id: "bidplanroom", g: "ind", ind: ["construction"], name: "BidPlanroom", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Comparte documentos de ShareFile en un plan room con contratistas.", en: "Shares ShareFile documents in a plan room with contractors.", pt: "Compartilha documentos do ShareFile em um plan room com empreiteiros." } },
  { id: "applied", g: "ind", ind: ["insurance"], name: "Applied Systems", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Firma electrónica dentro de Applied Epic.", en: "E-signature inside Applied Epic.", pt: "Assinatura eletrônica dentro do Applied Epic." } },
  { id: "sfax", g: "ind", ind: ["healthcare"], name: "Scrypt Sfax", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Envío seguro de faxes de salud protegiendo información del paciente.", en: "Secure healthcare faxing that protects patient information.", pt: "Envio seguro de fax na saúde, protegendo informações do paciente." } },
  { id: "trialpad", g: "ind", ind: ["legal"], name: "TrialPad", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Accede a declaraciones, audiencias y transcripciones de juicios desde ShareFile.", en: "Access depositions, hearings and trial transcripts from ShareFile.", pt: "Acesse depoimentos, audiências e transcrições de julgamentos pelo ShareFile." } },
  { id: "prontoforms", g: "ind", ind: ["construction", "manufacturing", "insurance"], name: "ProntoForms", url: W + "apps-integrations", badges: ["third"],
    d: { es: "Sincroniza datos de ShareFile para completar formularios de campo más rápido.", en: "Syncs ShareFile data to complete field forms faster.", pt: "Sincroniza dados do ShareFile para preencher formulários de campo mais rápido." } },

  // ShareFile apps
  { id: "app_win", g: "apps", name: "ShareFile for Windows", url: D + "sharefile-app/sharefile-for-windows", plan: "APEV",
    d: { es: "Accede a ShareFile como una unidad en el Explorador de archivos.", en: "Access ShareFile as a drive in File Explorer.", pt: "Acesse o ShareFile como uma unidade no Explorador de Arquivos." } },
  { id: "app_mac", g: "apps", name: "ShareFile for Mac", url: D + "sharefile-app/sharefile-for-mac", plan: "APEV",
    d: { es: "Accede a ShareFile desde Finder en Mac.", en: "Access ShareFile from Finder on Mac.", pt: "Acesse o ShareFile pelo Finder no Mac." } },
  { id: "app_mobile", g: "apps", name: "ShareFile for iOS and Android", url: D + "sharefile-app/sharefile-for-ios", plan: "APEV",
    also: [{ label: "Android", url: D + "sharefile-app/sharefile-for-android" }],
    d: { es: "Archivos, solicitudes y firmas desde el teléfono.", en: "Files, requests and signatures from your phone.", pt: "Arquivos, solicitações e assinaturas pelo celular." } }
];
