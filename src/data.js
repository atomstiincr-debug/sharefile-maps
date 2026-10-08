/* ShareFile Maps — single source of truth.
   Every product fact comes from sharefile.com or docs.sharefile.com.
   Verified: 2026-10-08. Edit here; everything else is generated from this file. */

const D = "https://docs.sharefile.com/en-us/sharefile/";
const W = "https://www.sharefile.com/";

/* Official videos, verified with YouTube oEmbed (title + channel "Progress ShareFile").
   f: feature ids, i: integration ids. dur: "m:ss" when known. */
const VIDEOS = [
  { id: "MR-Me_hNW30", t: "Stream ShareFile Security Events to Your SIEM in Real Time", f: ["siem"], i: ["sentinel", "splunk"] },
  { id: "8jr9qGIyBNo", t: "ShareFile Security Center and Threat Detection – From Diagnosis to Response", f: ["security_center", "ueba", "threat_alerts"] },
  { id: "2PV6NdKlig0", t: "Secure Access: Multi-Factor Authentication", f: ["mfa"] },
  { id: "KAg5wUxhFeo", t: "ShareFile Client Workflows: Tasks, Projects & Client Portal", f: ["task_mgmt", "tasks_workspace", "projects", "enhanced_portal"] },
  { id: "p7S04kvfAbc", t: "Simplify Document Collection Workflows with AI", f: ["request_list", "ai_rl_gen", "ai_validation"] }
];

const OVERVIEW_VIDEO = { id: "yQkpfDLkCk0", t: "Progress ShareFile - Built For The Way You Work Now—And Where You're Headed Next!" };
const TUTORIALS = "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY9W-cB3G2OTYx00GXZrrzZB";

const SITE = {
  version: "1.4.0",
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
  { id: "ai_assistant", g: "ai", plans: "PEV", name: "AI Document Assistant", url: D + "sharefile-app/sharefile-web/ai-powered-doc-summarization", badges: ["usage"],
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
  { id: "basic_portal", g: "client", plans: "A", name: "Basic Client Portal", url: D + "client_portal/client_portal_faq",
    d: { es: "Portal con contraseña y acceso a archivos y carpetas.", en: "Password-protected portal with file and folder access.", pt: "Portal com senha e acesso a arquivos e pastas." } },
  { id: "enhanced_portal", g: "client", plans: "PEV", name: "Enhanced Client Portal", url: W + "product-feature/client-portal",
    also: [{ label: "Client Portal FAQ", url: D + "client_portal/client_portal_faq" }],
    d: { es: "Suma mensajería, tareas, notificaciones automáticas y acciones rápidas.", en: "Adds messaging, tasks, automated notifications and quick actions.", pt: "Adiciona mensagens, tarefas, notificações automáticas e ações rápidas." } },
  { id: "client_hub", g: "client", plans: "PEV", name: "Client Hub", url: D + "client_hub/client_hub_overview",
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
const INDUSTRIES = [
  { id: "accounting", url: W + "industry/accounting", video: { id: "Y7nXmY5P5F8", t: "See How ShareFile Makes Work Flow" }, name: { es: "Contabilidad", en: "Accounting", pt: "Contabilidade" },
    f: ["esign", "request_list", "ai_rl_gen", "rapid_onboarding", "enhanced_portal", "view_only", "reports", "threat_alerts", "auto_remediation"],
    warn: { es: "La solución de declaraciones de impuestos y el programa AICPA que menciona la página son de EE.UU.", en: "The tax return solution and AICPA program on this page are U.S.-specific.", pt: "A solução de declaração de impostos e o programa AICPA citados são dos EUA." } },
  { id: "construction", url: W + "industry/construction", name: { es: "Construcción", en: "Construction", pt: "Construção" },
    f: ["rapid_onboarding", "projects", "enhanced_portal", "encrypted_email", "view_only", "mfa", "sso"] },
  { id: "finance", url: W + "industry/finance", video: { id: "DNzmtMCnhWU", t: "ShareFile for Banking, Wealth Management and Investment Services" }, name: { es: "Finanzas", en: "Finance", pt: "Finanças" },
    f: ["request_list", "rapid_onboarding", "esign", "enhanced_portal", "encrypted_email", "view_only", "sec_finra"],
    subs: [
      { id: "banking", name: { es: "Banca y crédito", en: "Banking & Lending", pt: "Bancos e crédito" } },
      { id: "wealth",  name: { es: "Gestión patrimonial", en: "Wealth Management", pt: "Gestão de patrimônio" } },
      { id: "invest",  name: { es: "Firmas de inversión", en: "Investment Firms", pt: "Firmas de investimento" }, vdr: true }
    ],
    warn: { es: "SEC y FINRA son regulación de EE.UU.", en: "SEC and FINRA are U.S. regulations.", pt: "SEC e FINRA são regulações dos EUA." } },
  { id: "healthcare", url: W + "industry/healthcare", name: { es: "Salud", en: "Healthcare", pt: "Saúde" },
    f: ["esign", "hipaa", "view_only", "encrypted_email", "email_plugins"],
    warn: { es: "HIPAA es regulación de EE.UU. y requiere BAA firmado.", en: "HIPAA is a U.S. regulation and requires a signed BAA.", pt: "HIPAA é regulação dos EUA e requer BAA assinado." } },
  { id: "insurance", url: W + "industry/insurance", name: { es: "Seguros", en: "Insurance", pt: "Seguros" },
    f: ["enhanced_portal", "esign", "projects", "rapid_onboarding", "request_list", "encrypted_email"] },
  { id: "legal", url: W + "industry/legal", video: { id: "BDohGSWVCWs", t: "Legal document management with ShareFile" }, name: { es: "Legal", en: "Legal", pt: "Jurídico" },
    f: ["esign", "projects", "automated_workflows", "rapid_onboarding", "enhanced_portal", "request_list", "threat_alerts", "view_only"] },
  { id: "manufacturing", url: W + "industry/manufacturing", name: { es: "Manufactura", en: "Manufacturing", pt: "Manufatura" },
    f: ["esign", "projects", "automated_workflows", "enhanced_portal", "rapid_onboarding", "watermark", "reports", "view_only", "encrypted_email"] },
  { id: "realestate", url: W + "industry/real-estate", name: { es: "Bienes raíces", en: "Real Estate", pt: "Imobiliário" },
    f: ["request_list", "automated_workflows", "esign", "enhanced_portal", "forms", "mfa", "encrypted_email"],
    warn: { es: "La integración con QuickBooks que menciona la página solo opera en control plane de EE.UU.", en: "The QuickBooks integration on this page works only on U.S. control planes.", pt: "A integração com QuickBooks citada só funciona em control plane dos EUA." } },
  { id: "hr", url: W + "industry/human-resources", name: { es: "Recursos humanos", en: "Human Resources", pt: "Recursos humanos" },
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
    { t: "Client user guide", u: D + "client-resources/client-help-guide" },
    { t: "Previewing higher-tier features", u: D + "learn-more/faq-previewing-higher-tiered-features" }
  ]},
  { g: { es: "Seguridad, datos y cumplimiento", en: "Security, data and compliance", pt: "Segurança, dados e conformidade" }, links: [
    { t: "ShareFile Trust Center", u: "https://trust.sharefile.com" },
    { t: "Security FAQ", u: D + "legal/sharefile-security-faq" },
    { t: "Service availability by country", u: D + "sf-geo" },
    { t: "ShareFile-managed storage zones", u: D + "account_settings/storage/sharefile-managed-storage-zones" },
    { t: "Storage Zones Controller 6.0", u: D + "storage-zones-controller/6-0" },
    { t: "AI-Assisted products (legal)", u: D + "legal/sharefile-ai/sf-ai" },
    { t: "AI Principles", u: W + "ai-principles" }
  ]},
  { g: { es: "Firma electrónica", en: "E-signature", pt: "Assinatura eletrônica" }, links: [
    { t: "E-signature legal overview", u: D + "electronic-signature/legal" },
    { t: "eIDAS-supported e-signatures", u: D + "signatures/eidas-signature" },
    { t: "E-signature security", u: D + "electronic-signature/security" }
  ]},
  { g: { es: "Soporte y estado", en: "Support and status", pt: "Suporte e status" }, links: [
    { t: "Help Center", u: "https://support.sharefile.com/" },
    { t: "Support offerings and coverage", u: "https://support.sharefile.com/s/article/ShareFile-Support-Offerings-and-Coverage" },
    { t: "How to chat with Support", u: "https://www.youtube.com/watch?v=_Wj9R9hDpwU", v: 1 },
    { t: "How to contact your Success Engineer", u: "https://www.youtube.com/watch?v=iDRSdUWDYRY", v: 1 },
    { t: "ShareFile status", u: "https://status.sharefile.com/" },
    { t: "Feature requests (Ideas portal)", u: "https://sharefile.ideas.aha.io/" }
  ]},
  { g: { es: "Aprender y partners", en: "Learn and partners", pt: "Aprender e parceiros" }, links: [
    { t: "ShareFile Training", u: W + "training" },
    { t: "Progress ShareFile: Tutorials (34 videos)", u: "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY9W-cB3G2OTYx00GXZrrzZB", v: 1 },
    { t: "Progress ShareFile: Demos (38 videos)", u: "https://www.youtube.com/playlist?list=PLSKW9Jc-tCY8wmEjjJxq5I-0SIPjlI3oi", v: 1 },
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
  { id: "m365",   name: { es: "Microsoft 365", en: "Microsoft 365", pt: "Microsoft 365" } },
  { id: "google", name: { es: "Google Workspace", en: "Google Workspace", pt: "Google Workspace" } },
  { id: "cloud",  name: { es: "Otros almacenamientos en la nube", en: "Other cloud storage", pt: "Outros armazenamentos em nuvem" } },
  { id: "secit",  name: { es: "Seguridad, identidad y TI", en: "Security, identity and IT", pt: "Segurança, identidade e TI" } },
  { id: "biz",    name: { es: "CRM, contabilidad y automatización", en: "CRM, accounting and automation", pt: "CRM, contabilidade e automação" } },
  { id: "ind",    name: { es: "Especializadas por industria", en: "Industry-specific", pt: "Especializadas por setor" } },
  { id: "apps",   name: { es: "Apps de ShareFile", en: "ShareFile apps", pt: "Apps do ShareFile" } }
];

const INTEGRATIONS = [
  // Microsoft 365
  { id: "outlook", g: "m365", name: "ShareFile for Microsoft Outlook", url: D + "sharefile-app/sharefile-for-outlook", plan: "check",
    d: { es: "Reemplaza adjuntos por enlaces seguros, salta el límite de tamaño de Outlook, solicita archivos y avisa cuando alguien abre un archivo.", en: "Replaces attachments with secure links, bypasses Outlook's size limit, requests files and alerts you when a file is opened.", pt: "Substitui anexos por links seguros, contorna o limite de tamanho do Outlook, solicita arquivos e avisa quando alguém abre um arquivo." },
    n: { es: "Outlook clásico para Windows. No es compatible con el nuevo Outlook para Windows: para ese caso existe la versión en línea.", en: "Classic Outlook for Windows. Not compatible with the new Outlook for Windows; use the online version instead.", pt: "Outlook clássico para Windows. Não é compatível com o novo Outlook para Windows; nesse caso, use a versão online." } },
  { id: "outlook_online", g: "m365", name: "ShareFile for Microsoft Outlook Online", url: D + "sharefile-app/sharefile-for-outlook-online",
    also: [{ label: "Microsoft AppSource", url: "https://appsource.microsoft.com/en-us/product/office/wa200007922?tab=overview" }],
    d: { es: "Complemento para Outlook en la web: adjuntos seguros sin límite de tamaño y solicitudes de archivos.", en: "Add-in for Outlook on the web: secure attachments without size limits and file requests.", pt: "Suplemento para o Outlook na web: anexos seguros sem limite de tamanho e solicitações de arquivos." } },
  { id: "outlook_encrypt", g: "m365", name: "Encrypted email from Outlook", url: D + "sharefile-app/sharefile-for-outlook/encrypt-emails", plan: "APE",
    d: { es: "Envía correos cifrados directamente desde Outlook; el destinatario no necesita cuenta de ShareFile.", en: "Send encrypted email straight from Outlook; recipients don't need a ShareFile account.", pt: "Envie e-mails criptografados direto do Outlook; o destinatário não precisa de conta ShareFile." } },
  { id: "coedit", g: "m365", name: "Co-editing with Microsoft 365", url: D + "sharefile-app/sharefile-web/co-editing", plan: "APE",
    d: { es: "Varias personas editan al mismo tiempo documentos de Word, Excel y PowerPoint guardados en ShareFile.", en: "Several people edit Word, Excel and PowerPoint files stored in ShareFile at the same time.", pt: "Várias pessoas editam ao mesmo tempo arquivos de Word, Excel e PowerPoint guardados no ShareFile." },
    n: { es: "Requiere licencia comercial de Microsoft 365 (Business Standard o superior, E3, E5, entre otras). No disponible con los planes de archivado FINRA o Enterprise.", en: "Requires a commercial Microsoft 365 license (Business Standard or higher, E3, E5 and others). Not available with FINRA or Enterprise Archiving plans.", pt: "Requer licença comercial do Microsoft 365 (Business Standard ou superior, E3, E5, entre outras). Indisponível com os planos de arquivamento FINRA ou Enterprise." } },
  { id: "sharepoint", g: "m365", name: "SharePoint Online connector", url: D + "account_settings/connectors/enable_sharepoint_online", plan: "APEV",
    d: { es: "Conecta una biblioteca de SharePoint Online para ver, descargar y compartir sus archivos desde ShareFile.", en: "Connects a SharePoint Online library to preview, download and share its files from ShareFile.", pt: "Conecta uma biblioteca do SharePoint Online para visualizar, baixar e compartilhar seus arquivos pelo ShareFile." },
    n: { es: "Se agrega en Configuración de la cuenta → Conectores. El administrador da su consentimiento una sola vez para todos los usuarios.", en: "Added in Account settings → Connectors. An admin grants consent once for all users.", pt: "É adicionado em Configurações da conta → Conectores. O administrador dá consentimento uma única vez para todos os usuários." } },
  { id: "onedrive", g: "m365", name: "OneDrive for Business connector", url: D + "account_settings/connectors/one_drive_for_business_recommendations", plan: "APEV",
    d: { es: "Accede a OneDrive for Business desde la app ShareFile para Windows y comparte esos archivos de forma segura.", en: "Access OneDrive for Business from the ShareFile for Windows app and share those files securely.", pt: "Acesse o OneDrive for Business pelo app ShareFile para Windows e compartilhe esses arquivos com segurança." },
    n: { es: "Se agrega en Configuración de la cuenta → Conectores. La carpeta personal del usuario debe estar en almacenamiento administrado por ShareFile.", en: "Added in Account settings → Connectors. The user's personal folder must be on ShareFile-managed storage.", pt: "É adicionado em Configurações da conta → Conectores. A pasta pessoal do usuário deve estar em armazenamento gerenciado pelo ShareFile." } },
  { id: "onedrive_personal", g: "m365", name: "OneDrive connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su propia cuenta de OneDrive y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their own OneDrive account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua própria conta do OneDrive e acesse esses arquivos pelo ShareFile." },
    n: { es: "El administrador lo activa en Configuración de la cuenta → Conectores.", en: "The admin enables it in Account settings → Connectors.", pt: "O administrador ativa em Configurações da conta → Conectores." } },
  { id: "word_addin", g: "m365", name: "Microsoft Word add-in", url: D + "templates/microsoft_word_add_in", plan: "PE",
    d: { es: "Diseña plantillas de documentos en Word, con campos de firma y variables, listas para enviar a firma electrónica.", en: "Design document templates in Word, with signature fields and variables, ready to send for e-signature.", pt: "Crie modelos de documentos no Word, com campos de assinatura e variáveis, prontos para assinatura eletrônica." } },
  { id: "entra_sso", g: "m365", name: "Microsoft Entra ID · SSO", url: D + "account_settings/security/single_sign_on", plan: "APEV",
    d: { es: "Inicio de sesión único con las credenciales corporativas.", en: "Single sign-on with corporate credentials.", pt: "Login único com as credenciais corporativas." } },
  { id: "entra_scim", g: "m365", name: "Microsoft Entra ID · SCIM provisioning", url: D + "account_settings/user_provisioning/entra_id_scim", plan: "E", badges: ["third"],
    d: { es: "Crea, actualiza y desactiva usuarios de ShareFile automáticamente desde Entra ID.", en: "Creates, updates and deactivates ShareFile users automatically from Entra ID.", pt: "Cria, atualiza e desativa usuários do ShareFile automaticamente a partir do Entra ID." } },
  { id: "sentinel", g: "m365", name: "Microsoft Sentinel", url: D + "account_settings/security/sentinel-integration", plan: "E", badges: ["third"],
    d: { es: "Envía bitácoras y alertas de seguridad de ShareFile al SIEM de Microsoft.", en: "Sends ShareFile activity logs and security alerts to Microsoft's SIEM.", pt: "Envia logs e alertas de segurança do ShareFile ao SIEM da Microsoft." } },

  // Google Workspace
  { id: "gmail", g: "google", name: "ShareFile for Gmail / Google Workspace", url: D + "sharefile-app/sharefile-for-google-workspace", plan: "APEV",
    also: [{ label: "Google Workspace Marketplace", url: "https://workspace.google.com/marketplace/app/sharefile/578628970478" }],
    d: { es: "Envía enlaces seguros a carpetas y documentos de ShareFile, y solicita archivos, desde Gmail.", en: "Send secure links to ShareFile folders and documents, and request files, from Gmail.", pt: "Envie links seguros para pastas e documentos do ShareFile, e solicite arquivos, pelo Gmail." } },
  { id: "gdrive", g: "google", name: "Google Drive connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Google Drive y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Google Drive account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Google Drive e acesse esses arquivos pelo ShareFile." },
    n: { es: "El administrador lo activa en Configuración de la cuenta → Conectores.", en: "The admin enables it in Account settings → Connectors.", pt: "O administrador ativa em Configurações da conta → Conectores." } },

  // Other cloud storage
  { id: "box", g: "cloud", name: "Box connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Box y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Box account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Box e acesse esses arquivos pelo ShareFile." },
    n: { es: "El administrador lo activa en Configuración de la cuenta → Conectores.", en: "The admin enables it in Account settings → Connectors.", pt: "O administrador ativa em Configurações da conta → Conectores." } },
  { id: "dropbox", g: "cloud", name: "Dropbox connector", url: D + "account_settings/connectors/connectors_overview", plan: "APEV",
    d: { es: "Permite que cada usuario conecte su cuenta de Dropbox y acceda a esos archivos desde ShareFile.", en: "Lets each user connect their Dropbox account and access those files from ShareFile.", pt: "Permite que cada usuário conecte sua conta do Dropbox e acesse esses arquivos pelo ShareFile." },
    n: { es: "El administrador lo activa en Configuración de la cuenta → Conectores.", en: "The admin enables it in Account settings → Connectors.", pt: "O administrador ativa em Configurações da conta → Conectores." } },

  // Security, identity and IT
  { id: "splunk", g: "secit", name: "Splunk", url: D + "account_settings/security/splunk-integration", plan: "E", badges: ["third"],
    d: { es: "Envía bitácoras y alertas de ShareFile a Splunk para monitoreo e investigación.", en: "Sends ShareFile logs and alerts to Splunk for monitoring and investigation.", pt: "Envia logs e alertas do ShareFile ao Splunk para monitoramento e investigação." } },
  { id: "casb", g: "secit", name: "CASB and on-premises DLP", url: D + "storage-zones-controller/6-0/data-loss-prevention", plan: "APEV", badges: ["third"],
    d: { es: "Integra DLP on-premises y herramientas CASB líderes para entornos híbridos.", en: "Integrates on-premises DLP and leading CASB tools for hybrid environments.", pt: "Integra DLP on-premises e ferramentas CASB líderes para ambientes híbridos." } },
  { id: "aws_kms", g: "secit", name: "Amazon KMS", url: D + "configure/customer-managed-encryption-keys", plan: "APEV",
    d: { es: "Cifra los archivos con llaves que el cliente administra en Amazon KMS.", en: "Encrypts files with keys the customer manages in Amazon KMS.", pt: "Criptografa os arquivos com chaves que o cliente gerencia no Amazon KMS." } },
  { id: "api", g: "secit", name: "ShareFile API", url: "https://api.sharefile.com", plan: "APEV",
    d: { es: "API para integrar ShareFile con sistemas propios o de terceros.", en: "API to integrate ShareFile with in-house or third-party systems.", pt: "API para integrar o ShareFile com sistemas próprios ou de terceiros." } },
  { id: "powershell", g: "secit", name: "ShareFile PowerShell", url: D + "configure/sharefile-powershell",
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
  { id: "zapier", g: "biz", name: "Zapier", url: D + "catalog/integrations/sf-zapier-integration", badges: ["third"],
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
