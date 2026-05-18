export type ServiceDetail = {
  slug: string;
  id: string;
  label: string;
  title: string;
  summary: string;
  visual: VisualAsset;
  intro: string;
  detailIntro: string;
  outcomes: string[];
  stack: string[];
  deliverables: string[];
  fit: string[];
  notFit: string[];
  engagementSteps: string[];
  proofPoints: string[];
  examples: string[];
  timeline: string;
  artifacts: string[];
  keyQuestions: {
    question: string;
    answer: string;
  }[];
  relatedProjectIds: string[];
  results: string[];
  seoTitle: string;
  seoDescription: string;
};

export type FeaturedProject = {
  id: string;
  slug: string;
  category: string;
  title: string;
  clientLabel: string;
  summary: string;
  visual: VisualAsset;
  problem: string;
  architecture: string[];
  approach: string[];
  outcome: string;
  proof: string[];
  impact: string[];
  relatedServices: string[];
  metrics: string[];
  confidentialityNote: string;
  proofAssets: string[];
};

export type ReviewSlot = {
  id: string;
  title: string;
  guidance: string;
  placeholderName: string;
  placeholderRole: string;
};

export type EngineeringPillar = {
  title: string;
  summary: string;
  capabilities: string[];
  riskReduction: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  details: string[];
};

export type VisualAsset = {
  src: string;
  alt: string;
  label: string;
  signal: string;
  hoverTitle: string;
  hoverText: string;
  trustSignal: string;
};

export type ProofExample = {
  label: string;
  title: string;
  summary: string;
  facts: string[];
  serviceSlug: string;
};

export type EngagementModel = {
  title: string;
  bestFor: string;
  output: string;
};

const serviceOrder = [
  "salesforce-integrations",
  "ai-automation",
  "mvp-development",
];

export const primaryServices: ServiceDetail[] = [
  {
    slug: "mvp-development",
    id: "mvp",
    label: "MVP Development",
    title: "Launch a real product foundation without creating a rebuild problem.",
    summary:
      "We build MVPs, SaaS platforms, portals, and internal products with auth, roles, dashboards, payments, and clean architecture from day one.",
    visual: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      alt: "Laptop showing a digital product workspace on a focused desk setup",
      label: "Product foundation",
      signal: "From idea to usable operating surface",
      hoverTitle: "Clients need more than a launch screen.",
      hoverText:
        "This work turns the first release into a real product base: roles, dashboards, data ownership, payments, and admin control from day one.",
      trustSignal: "Best for founders who want speed without a rebuild trap.",
    },
    intro:
      "This offer is for founders and teams who need speed, but not a throwaway prototype. The goal is a focused first version that can onboard users and keep evolving.",
    detailIntro:
      "The work starts by narrowing the first release to the highest-leverage user flow, then building the product foundation so new features, roles, billing logic, and reporting can be added without a rebuild.",
    outcomes: [
      "Launch a focused version in weeks",
      "Include the core product primitives from day one",
      "Avoid rebuilding the foundation after validation",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Prisma"],
    deliverables: [
      "MVP scope map with must-have flows, roles, and launch risks",
      "Customer-facing product surface with responsive UI and reusable components",
      "Backend services for auth, roles, data models, admin controls, and integrations",
      "Deployment-ready foundation with logging, environments, and handoff notes",
    ],
    fit: [
      "Startup founders validating a new product",
      "Businesses replacing spreadsheet-driven internal workflows",
      "Teams rebuilding an unstable MVP into a scalable product base",
    ],
    notFit: [
      "Teams looking for a no-code prototype with no plan for production",
      "Projects where the product direction is still too vague to define a first critical workflow",
      "Engagements that only need a marketing site instead of a product system",
    ],
    engagementSteps: [
      "Clarify the launch constraint, user roles, and first high-value workflow",
      "Define scope boundaries, product architecture, and release assumptions",
      "Build the customer-facing surface and backend foundation together",
      "Ship with deployment notes, handoff context, and a clear next iteration path",
    ],
    proofPoints: [
      "Multi-surface product architecture for customer, seller, and admin users",
      "Role-aware dashboards, auth, and reusable UI patterns from the first release",
      "Launch foundations designed for iteration instead of throwaway validation",
    ],
    examples: [
      "Customer, seller, and admin applications for a customizable commerce marketplace",
      "Private couple-based SaaS with chat, memories, letters, watch-together, and admin-managed onboarding",
      "Windows desktop AI utility with global hotkey recording, transcription, cleanup, and paste automation",
    ],
    timeline:
      "Most focused builds start with a 1-2 week product architecture and scope phase before implementation sprints.",
    artifacts: [
      "Scope map and user-role model",
      "Clickable product flow or interface map",
      "Architecture notes, deployment context, and handoff plan",
    ],
    keyQuestions: [
      {
        question: "Can this start as a lean MVP without becoming fragile later?",
        answer:
          "Yes. The scope stays lean, but the architecture still accounts for roles, data ownership, and future iteration so the first launch does not create a rebuild trap.",
      },
      {
        question: "Do you help shape the first release, not just code what is requested?",
        answer:
          "Yes. The engagement is strongest when we refine the first release around the actual business risk, user workflow, and operational constraint instead of just implementing a feature list.",
      },
    ],
    relatedProjectIds: ["commerce-platform", "forever-yours", "bayanflow-desktop"],
    results: [
      "Cleaner launch path with fewer rebuilds later",
      "Faster iteration after the first release",
      "A product system investors, operators, and users can trust",
    ],
    seoTitle: "MVP Development Services",
    seoDescription:
      "Niyyah Labs builds MVPs, SaaS products, portals, and internal tools with scalable architecture, fast launches, and production-ready foundations.",
  },
  {
    slug: "ai-automation",
    id: "automation",
    label: "AI Automation",
    title: "AI workflows that connect to real tools, data, and operations.",
    summary:
      "We design AI assistants, agents, and workflow automation systems that reduce repetitive work and connect to business systems.",
    visual: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Analytics dashboard with charts and operational data on screen",
      label: "Automation loop",
      signal: "AI connected to decisions, tools, and reporting",
      hoverTitle: "AI should reduce operational drag.",
      hoverText:
        "The value is not the chatbot. It is the workflow around it: retrieval, permissions, human review, CRM updates, escalation, and measurement.",
      trustSignal: "Built for teams that want AI inside real operations.",
    },
    intro:
      "This is not chatbot theater. It is for teams that want AI embedded inside real workflows, permissions, business rules, and reporting.",
    detailIntro:
      "The focus is operational usefulness: where the assistant gets context, which systems it can touch, when a human must review, and how the workflow is measured after launch.",
    outcomes: [
      "Internal knowledge assistants",
      "Lead qualification and operational reporting flows",
      "Tool-using agents with business logic",
    ],
    stack: ["LLM APIs", "RAG", "Agents", "RabbitMQ", "Webhooks"],
    deliverables: [
      "Use-case mapping and automation architecture",
      "Knowledge retrieval or business-data integration layer",
      "AI assistants or agents connected to tools, forms, CRMs, or internal apps",
      "Monitoring, prompt controls, and handoff paths for edge cases",
    ],
    fit: [
      "Teams drowning in repetitive support or internal questions",
      "Operators who want AI connected to CRM, reporting, or approvals",
      "Businesses exploring agents but needing guardrails and real value",
    ],
    notFit: [
      "Teams looking for a generic chatbot with no operational integration",
      "Use cases without a clear workflow, source of truth, or owner",
      "Projects that treat prompts as a substitute for system design and monitoring",
    ],
    engagementSteps: [
      "Map the repetitive workflow, source systems, and approval boundaries",
      "Design the retrieval, tool-use, and fallback paths around real operations",
      "Implement the assistant or automation layer with monitoring and guardrails",
      "Review performance, failure modes, and the next automation opportunities",
    ],
    proofPoints: [
      "Workflow-first automation instead of isolated AI demos",
      "Assistants and agents connected to CRM, forms, internal tools, and reporting",
      "Monitoring, prompt controls, and escalation paths for edge cases",
    ],
    examples: [
      "Insurance document pipeline that turns uploads into extracted facts, recommended ACORD forms, quality scores, and generated PDFs",
      "Desktop dictation workflow that records speech, transcribes with Groq, optionally cleans text, and pastes into the active app",
      "Operational automation patterns around lead routing, CRM updates, reporting, human review, and fallbacks",
    ],
    timeline:
      "AI automation usually starts with a workflow audit and proof-of-value build before production hardening.",
    artifacts: [
      "Use-case map with source systems and human review points",
      "Prompt, retrieval, fallback, and monitoring notes",
      "Workflow diagram showing inputs, tool actions, approvals, and outputs",
    ],
    keyQuestions: [
      {
        question: "How do you keep AI work from becoming a fragile demo?",
        answer:
          "By designing the surrounding system, not just the prompt. We define the data source, permissions, handoff rules, and operational monitoring so the automation can survive real use.",
      },
      {
        question: "Can AI be combined with existing business tools?",
        answer:
          "Yes. The strongest use cases usually connect assistants or automation to CRM records, knowledge sources, forms, internal tools, approvals, or reporting flows.",
      },
    ],
    relatedProjectIds: ["acord-automation", "bayanflow-desktop", "sap-salesforce-sync"],
    results: [
      "Reduced operational drag",
      "Faster response cycles across internal or customer workflows",
      "AI systems that actually integrate instead of living in a demo bubble",
    ],
    seoTitle: "AI Automation Services",
    seoDescription:
      "Niyyah Labs builds AI assistants, agents, and workflow automation systems connected to business tools, CRMs, knowledge bases, and operations.",
  },
  {
    slug: "salesforce-integrations",
    id: "integration",
    label: "Salesforce Integrations",
    title: "Make Salesforce part of the system, not another disconnected tool.",
    summary:
      "We connect Salesforce with ecommerce, internal apps, SAP-style systems, files, APIs, dashboards, and automation workflows.",
    visual: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Networked data visualization suggesting connected business systems",
      label: "System sync",
      signal: "CRM data moving with ownership and control",
      hoverTitle: "Disconnected systems create silent revenue leaks.",
      hoverText:
        "We map source of truth, duplicate risk, object ownership, retry behavior, and failure visibility before touching the sync layer.",
      trustSignal: "Designed for Salesforce teams tired of manual reconciliation.",
    },
    intro:
      "This offer fits teams using Salesforce but still moving critical data manually between commerce, operations, reporting, and back-office systems.",
    detailIntro:
      "The job is to make Salesforce reliable inside the wider system: clear ownership, source-aware writes, duplicate prevention, failure visibility, and predictable data movement across business tools.",
    outcomes: [
      "Salesforce data sync with external systems",
      "Source-aware upsert logic that avoids duplicate records",
      "Operational dashboards, workflows, and reporting feeds",
    ],
    stack: ["Salesforce APIs", "Node.js", "REST APIs", "ETL Pipelines", "SFTP"],
    deliverables: [
      "Salesforce integration map across objects, systems, ownership, and data flow",
      "Middleware or ETL services for bidirectional synchronization",
      "Source-aware upserts, acknowledgement flows, and duplicate-prevention logic",
      "Operational visibility with logs, validation checks, and failure handling",
    ],
    fit: [
      "Salesforce teams needing ecommerce or ERP-style data sync",
      "Ops teams stuck reconciling records between multiple systems",
      "Organizations that need reliable CRM-connected automation",
    ],
    notFit: [
      "Teams that only need a basic one-time CSV import",
      "Organizations without clarity on which system owns which records",
      "Projects expecting integrations without validation, logging, or failure handling",
    ],
    engagementSteps: [
      "Map systems, object ownership, sync direction, and duplicate risk",
      "Define middleware behavior, validation rules, and edge-case handling",
      "Implement the sync layer, upserts, and operational visibility",
      "Stabilize the flows with logs, checks, and support-ready handoff notes",
    ],
    proofPoints: [
      "Bidirectional sync across Salesforce, ecommerce, and ERP-style systems",
      "Source-aware upserts designed to reduce duplicate creation",
      "Operational reporting and failure handling for ongoing reliability",
    ],
    examples: [
      "SAP-style FTP, Salesforce, and ecommerce ETL layer with object-specific handlers and acknowledgement files",
      "Salesforce/ecommerce outbound sync with OAuth clients, enriched errors, archive folders, and operational logs",
      "Insurance workflow exports prepared for agency management systems after structured document processing",
    ],
    timeline:
      "Integration work usually begins with a system map and data ownership pass before middleware or API implementation.",
    artifacts: [
      "Object ownership and sync-direction map",
      "Payload examples, error states, and acknowledgement rules",
      "Operational runbook for logs, retries, archive folders, and support handoff",
    ],
    keyQuestions: [
      {
        question: "Can you work with messy existing integrations and duplicate data risk?",
        answer:
          "Yes. That is often the starting point. The integration work focuses on object ownership, idempotent behavior, validation, and the practical rules required to stop duplicate creation and manual reconciliation.",
      },
      {
        question: "Do you only work inside Salesforce?",
        answer:
          "No. The work usually spans Salesforce plus ecommerce systems, internal apps, ETL services, file ingestion, APIs, dashboards, and automation layers around the CRM.",
      },
    ],
    relatedProjectIds: ["sap-salesforce-sync", "acord-automation"],
    results: [
      "Cleaner CRM data and fewer duplicate records",
      "Reliable handoff between Salesforce and business systems",
      "Better operational visibility without replacing every existing tool",
    ],
    seoTitle: "Salesforce Integration Services",
    seoDescription:
      "Niyyah Labs builds Salesforce integrations, ETL services, CRM sync layers, and API workflows that connect Salesforce with business systems.",
  },
].sort(
  (a, b) => serviceOrder.indexOf(a.slug) - serviceOrder.indexOf(b.slug)
);

export const trustMetrics = [
  {
    value: "5 proof tracks",
    label: "Marketplace platform, ACORD automation, ETL sync, real-time SaaS, and AI desktop utility",
  },
  {
    value: "3 surfaces",
    label: "Customer, seller, and admin applications built for separate user jobs, not one crowded app",
  },
  {
    value: "AI + CRM + ops",
    label: "Document extraction, Salesforce sync, payments, delivery, queues, and desktop automation",
  },
];

export const proofExamples: ProofExample[] = [
  {
    label: "Marketplace platform",
    title: "A customizable commerce system with customer, seller, and admin surfaces.",
    summary:
      "A large monorepo product with separate apps, service-oriented backend domains, event-driven order/payment/delivery workflows, and seller/admin operations.",
    facts: [
      "Next.js customer, seller, and admin UIs",
      "Order, payment, product, delivery, notification, chat, and wallet domains",
      "Razorpay, Shiprocket, RabbitMQ, Redis, Prisma, MongoDB, ImageKit",
    ],
    serviceSlug: "mvp-development",
  },
  {
    label: "Enterprise integration",
    title: "SAP-style files, Salesforce, and ecommerce kept in sync through ETL middleware.",
    summary:
      "A Node.js integration hub with FTP file drops, folder watchers, object-specific handlers, REST endpoints, acknowledgements, archives, and error visibility.",
    facts: [
      "Salesforce and ecommerce API clients",
      "SAP-style inbound, outbound, success, error, and archive folders",
      "Handlers for accounts, orders, payments, invoices, stock, complaints, and pricebooks",
    ],
    serviceSlug: "salesforce-integrations",
  },
  {
    label: "AI workflow automation",
    title: "Insurance documents turned into structured facts, form recommendations, and generated PDFs.",
    summary:
      "An ACORD automation platform combining OCR, LLM-assisted extraction, schema validation, form matching, quality scoring, ARQ questions, audit logs, and billing gates.",
    facts: [
      "OCR -> extraction -> validation -> recommendation -> PDF generation",
      "Rate limits, MIME checks, virus scan, trace IDs, and audit logging",
      "Stripe billing, signatures, sessions, and async processing paths",
    ],
    serviceSlug: "ai-automation",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sap-salesforce-sync",
    slug: "sap-salesforce-ecommerce-sync",
    category: "Enterprise Integration",
    title: "SAP, Salesforce, and ecommerce synchronization layer.",
    clientLabel: "Enterprise integration engineering",
    summary:
      "A distributed sync layer designed to keep enterprise systems aligned without duplicate creation or manual reconciliation work.",
    visual: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
      alt: "Connected global data network representing enterprise system sync",
      label: "Integration map",
      signal: "SAP + Salesforce + ecommerce alignment",
      hoverTitle: "The business risk was duplicate, stale, or conflicting records.",
      hoverText:
        "The solution focus was idempotent sync behavior, source-aware writes, acknowledgements, and operational visibility across distributed systems.",
      trustSignal: "Proof of deep integration thinking, not simple API wiring.",
    },
    problem:
      "Business data needed to move reliably between SAP, Salesforce, and a custom ecommerce system without duplicate records or manual reconciliation.",
    architecture: [
      "Node.js + Express ETL middleware",
      "Embedded FTP server and file-system watcher",
      "Object-specific inbound/outbound handlers",
      "Success/error acknowledgements with archive folders",
    ],
    approach: [
      "Routed SAP file drops by folder and object type",
      "Connected Salesforce and ecommerce through OAuth-backed API clients",
      "Separated inbound, outbound, success, error, and archive flows for visibility",
    ],
    outcome:
      "A bidirectional integration layer that made record movement, acknowledgements, and error handling explicit across enterprise systems.",
    proof: ["Salesforce integration", "SAP-style FTP", "Acknowledgements"],
    impact: [
      "Reduced manual reconciliation work between business systems",
      "Improved confidence in CRM-connected operations and reporting",
      "Created a more supportable integration layer with clearer failure visibility",
    ],
    relatedServices: ["salesforce-integrations", "ai-automation"],
    metrics: [
      "14+ business object flows",
      "Inbound, outbound, success, error, and archive paths",
      "Salesforce + ecommerce + SAP-style file workflow",
    ],
    confidentialityNote:
      "Payloads and system details are anonymized; the architecture pattern is public-safe.",
    proofAssets: [
      "Folder workflow diagram",
      "Sanitized JSON payload examples",
      "Object handler matrix",
    ],
  },
  {
    id: "commerce-platform",
    slug: "multi-vendor-commerce-platform",
    category: "Commerce Platform",
    title: "Multi-vendor customizable commerce platform with event-driven operations.",
    clientLabel: "Marketplace product engineering",
    summary:
      "A commerce platform built as a system, not a storefront, with seller workflows, async events, and operational controls.",
    visual: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
      alt: "Commerce operations workspace with digital ordering and payment context",
      label: "Commerce ops",
      signal: "Orders, wallets, shipping, and admin control",
      hoverTitle: "Marketplace growth breaks when workflows stay manual.",
      hoverText:
        "The architecture separated seller workflows, order events, payment webhooks, wallet credits, shipping updates, and admin visibility.",
      trustSignal: "Shows ability to turn commerce complexity into a system.",
    },
    problem:
      "A marketplace needed seller-managed customization, order lifecycle automation, wallet flows, shipping updates, and admin controls without collapsing into one monolith.",
    architecture: [
      "Three frontend apps for customer, seller, and admin users",
      "Service-oriented backend with gateway-routed domains",
      "RabbitMQ workflows for payment, order, delivery, and notifications",
      "Razorpay, Shiprocket, Redis, Prisma, MongoDB, ImageKit",
    ],
    approach: [
      "Separated customer shopping, seller operations, and admin governance",
      "Grouped orders by shop/seller after payment and stored order-time snapshots",
      "Connected checkout, delivery, notifications, wallet, and dashboard operations",
    ],
    outcome:
      "A marketplace foundation with role-specific interfaces and operational workflows for product, payment, order, delivery, notification, chat, and wallet domains.",
    proof: ["3 role-specific UIs", "RabbitMQ workflows", "Razorpay + Shiprocket"],
    impact: [
      "Made complex operational workflows easier to scale without manual coordination",
      "Improved platform control through admin tooling and event-driven visibility",
      "Created a stronger foundation for future product growth and feature expansion",
    ],
    relatedServices: ["mvp-development", "ai-automation"],
    metrics: [
      "3 frontend applications",
      "12+ backend service domains",
      "Payment, delivery, media, email, chat, and wallet workflows",
    ],
    confidentialityNote:
      "Shown as an anonymized platform architecture example; production maturity claims are kept conservative.",
    proofAssets: [
      "Customer, seller, and admin screenshots",
      "Payment-to-order event diagram",
      "Service ownership map",
    ],
  },
  {
    id: "acord-automation",
    slug: "acord-insurance-automation-platform",
    category: "AI Document Automation",
    title: "AI-assisted ACORD workflow platform for insurance documents.",
    clientLabel: "Document automation engineering",
    summary:
      "A document workflow platform that turns uploaded insurance files into structured facts, form recommendations, quality checks, and generated PDFs.",
    visual: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
      alt: "Insurance and financial documents arranged on a desk",
      label: "Document pipeline",
      signal: "OCR, extraction, validation, forms, and scoring",
      hoverTitle: "AI only works when the workflow around it is controlled.",
      hoverText:
        "The system validates uploads, extracts facts, checks conflicts, recommends forms, generates PDFs, audits changes, and keeps human review paths visible.",
      trustSignal: "Proof of AI workflow engineering beyond prompt demos.",
    },
    problem:
      "Insurance submissions required turning messy uploaded declarations into structured facts, recommended ACORD forms, editable PDFs, and quality guidance.",
    architecture: [
      "FastAPI backend with React/Vite frontend",
      "OCR and LLM-assisted extraction pipeline",
      "Deterministic ACORD form matching and field coverage scoring",
      "Audit logs, billing gates, signatures, and security middleware",
    ],
    approach: [
      "Separated OCR, extraction, validation, form matching, and PDF generation into a controlled pipeline",
      "Added schema guards before extracted data reached persistence",
      "Built quality scoring, ARQ questions, and audit trails around generated output",
    ],
    outcome:
      "A workflow that uses AI inside validation, scoring, review, and generation controls instead of treating the model as the whole product.",
    proof: ["OCR pipeline", "ACORD PDFs", "Audit + scoring"],
    impact: [
      "Reduced manual document interpretation work",
      "Made form selection and missing-field visibility easier to review",
      "Created a safer AI-assisted workflow with validation, rate limits, and auditability",
    ],
    relatedServices: ["ai-automation", "mvp-development"],
    metrics: [
      "OCR -> extraction -> validation -> recommendation -> PDF generation",
      "Multiple ACORD form schemas and templates",
      "Upload limits, MIME checks, virus scan, trace IDs, and audit logs",
    ],
    confidentialityNote:
      "Insurance data and form examples must remain sanitized; supported-form claims should be verified before publication.",
    proofAssets: [
      "Upload and recommendation screenshots",
      "Pipeline architecture diagram",
      "Generated PDF/editor screenshot with private data removed",
    ],
  },
  {
    id: "bayanflow-desktop",
    slug: "ai-dictation-desktop-utility",
    category: "AI Desktop Utility",
    title: "Windows AI dictation app that pastes into any active input.",
    clientLabel: "Focused AI product engineering",
    summary:
      "A tray-based desktop utility that records speech through a global hotkey, transcribes with Groq, optionally cleans the result, and pastes or copies into the active app.",
    visual: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      alt: "Desktop workspace with laptop and audio gear",
      label: "Desktop automation",
      signal: "Speak, transcribe, clean, paste",
      hoverTitle: "Small tools still need product-grade reliability.",
      hoverText:
        "The app protects paste targets, restores clipboard state, handles cleanup fallback, exports diagnostics, and keeps the workflow available from the tray.",
      trustSignal: "Proof of desktop AI utility engineering.",
    },
    problem:
      "Users wanted to speak naturally and place cleaned text into any desktop input without being trapped inside one editor or web app.",
    architecture: [
      "Electron and TypeScript desktop app",
      "Global hotkeys and microphone recording",
      "Groq transcription with optional cleanup provider",
      "Clipboard paste automation with active-window protection",
    ],
    approach: [
      "Built a tray-first workflow with settings, status overlay, and single-instance behavior",
      "Captured the active target before recording and verified it before paste",
      "Added cleanup fallback, diagnostics export, temp audio cleanup, and regression tests",
    ],
    outcome:
      "A focused AI productivity tool that turns speech into usable text and safely places it into the user's current desktop workflow.",
    proof: ["Electron", "Groq transcription", "Global hotkey"],
    impact: [
      "Reduced friction for writing into existing apps",
      "Showed AI value through a complete local workflow, not a chat screen",
      "Created supportability with logs, diagnostics, and test coverage around core behavior",
    ],
    relatedServices: ["ai-automation", "mvp-development"],
    metrics: [
      "Tray app, settings, hotkey, overlay, transcription, cleanup, paste, diagnostics",
      "Tests for dictation, insertion, hotkey, config, renderer security, and observability",
      "Windows packaging configured; installer asset issue noted for release polish",
    ],
    confidentialityNote:
      "Public demo should show sanitized logs and no API keys.",
    proofAssets: [
      "Tray/settings screenshots",
      "Speak-to-paste demo video",
      "Diagnostics export example",
    ],
  },
  {
    id: "forever-yours",
    slug: "private-couple-realtime-platform",
    category: "Real-Time SaaS",
    title: "Private couple-based SaaS platform with real-time shared experiences.",
    clientLabel: "Consumer SaaS and real-time product engineering",
    summary:
      "A private emotional product that moved from user-owned data toward couple-owned spaces with chat, memories, letters, watch-together, voice signaling, subscription gates, and admin onboarding.",
    visual: {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Warm shared digital communication setting",
      label: "Private space",
      signal: "Couple-owned data, real-time connection, strict isolation",
      hoverTitle: "Privacy and real-time UX have to be designed together.",
      hoverText:
        "The product centers a coupleId model, room-level socket checks, partner-only chat, memory and letter surfaces, watch sync, voice signaling, and admin-created access paths.",
      trustSignal: "Proof of consumer SaaS and real-time isolation thinking.",
    },
    problem:
      "A user-centric emotional app needed to become a private shared space where each couple owns the experience and cannot see another couple's data.",
    architecture: [
      "Next.js App Router frontend with multi-page product surfaces",
      "Express and MongoDB backend with JWT auth",
      "Socket.IO rooms with participant checks",
      "WebRTC signaling for voice and watch-together experiences",
    ],
    approach: [
      "Shifted the product model from user-owned data to couple-owned spaces",
      "Added participant checks across REST and socket room joins",
      "Connected chat, letters, memories, watch sync, subscription limits, and admin-created couples",
    ],
    outcome:
      "A privacy-first real-time SaaS foundation where chat, memories, letters, and shared viewing can evolve around strict couple isolation.",
    proof: ["Socket.IO", "WebRTC signaling", "Couple isolation"],
    impact: [
      "Made privacy and ownership central to the product architecture",
      "Improved product scalability by moving from one scroll page to route-specific experiences",
      "Created monetization and admin-control foundations for private onboarding",
    ],
    relatedServices: ["mvp-development"],
    metrics: [
      "Couple-owned spaces with partner1, partner2, access codes, and subscription plan",
      "Chat, memories, letters, watch-together, voice signaling, and admin surfaces",
      "Backend participant checks for rooms, messages, and socket events",
    ],
    confidentialityNote:
      "Relationship content and private media must be replaced with demo data before screenshots are public.",
    proofAssets: [
      "Home/chat/memories/watch screenshots",
      "Couple isolation diagram",
      "Admin onboarding screenshot",
    ],
  },
];

export const buildCapabilities = [
  {
    title: "Enterprise data sync",
    text: "SAP-style files, Salesforce, ecommerce, FTP watchers, REST APIs, acknowledgements, and error visibility.",
  },
  {
    title: "Marketplace platforms",
    text: "Customer, seller, and admin surfaces with product customization, checkout, delivery, wallet, and admin controls.",
  },
  {
    title: "Multi-surface products",
    text: "Role-specific apps for customers, sellers, admins, couples, operators, and desktop users.",
  },
  {
    title: "Automation pipelines",
    text: "RabbitMQ workflows, OCR/LLM pipelines, webhooks, notifications, shipment updates, and lifecycle events.",
  },
  {
    title: "Internal tools",
    text: "Dashboards, approvals, reporting views, CRM-connected workflows, project intake, and ops control panels.",
  },
  {
    title: "Reliable launch foundations",
    text: "Auth, RBAC, rate limiting, upload validation, caching, observability, diagnostics, and release handoff.",
  },
];

export const reviewSlots: ReviewSlot[] = [
  {
    id: "review-1",
    title: "Outcome Review Slot",
    guidance:
      "Replace this with a real quote about launch speed, reliability, reduced manual work, or better operational visibility.",
    placeholderName: "Verified client name",
    placeholderRole: "Founder / Ops lead / Product owner",
  },
  {
    id: "review-2",
    title: "Engineering Review Slot",
    guidance:
      "Use this for a quote about architecture quality, communication, debugging depth, or confidence during delivery.",
    placeholderName: "Verified client name",
    placeholderRole: "Operations / Growth / RevOps lead",
  },
];

export const engineeringPillars: EngineeringPillar[] = [
  {
    title: "Backend architecture",
    summary:
      "Node.js and Express systems designed around services, API boundaries, RBAC, rate limiting, and clean request routing.",
    capabilities: ["Microservices", "API gateways", "Auth and RBAC", "TypeScript services"],
    riskReduction:
      "Keeps complex products from becoming one fragile app where every feature touches everything else.",
  },
  {
    title: "Enterprise integrations",
    summary:
      "Data movement across SAP, Salesforce, ecommerce, files, REST APIs, and third-party systems with idempotency in mind.",
    capabilities: ["Salesforce APIs", "SAP sync", "FTP/SFTP ingestion", "Source-aware upserts"],
    riskReduction:
      "Reduces duplicate records, manual reconciliation, and hidden sync failures across business tools.",
  },
  {
    title: "Async and real-time workflows",
    summary:
      "Event-driven flows for wallet credits, notifications, shipping updates, webhooks, and lifecycle automation.",
    capabilities: ["RabbitMQ", "Redis", "Socket.IO", "Message queues"],
    riskReduction:
      "Moves slow, failure-prone, or fan-out work out of the request path so core actions can keep moving.",
  },
  {
    title: "DevOps and observability",
    summary:
      "Deployment and monitoring foundations that make systems easier to operate after launch, not just easier to demo.",
    capabilities: ["Docker", "GitHub Actions", "Winston logging", "Grafana dashboards"],
    riskReduction:
      "Makes handoff, debugging, and post-launch support less dependent on memory or tribal knowledge.",
  },
];

export const processSignals = [
  "Architecture before implementation",
  "Source-aware data and idempotent writes",
  "Async queues where workflows need resilience",
  "Monitoring, logs, and rollback-safe releases",
];

export const deliveryArtifacts = [
  {
    label: "System map",
    text: "Roles, flows, integrations, and data ownership before screens are finalized.",
  },
  {
    label: "Build contract",
    text: "API boundaries, webhook behavior, queue events, and failure handling defined early.",
  },
  {
    label: "Release layer",
    text: "Environment config, CI/CD checks, logs, and rollback-safe delivery practices.",
  },
  {
    label: "Proof package",
    text: "Screens, diagrams, payload examples, and notes that can later become public-safe case-study material.",
  },
  {
    label: "Risk register",
    text: "Known technical risks, unresolved assumptions, and what should be hardened before wider launch.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Discovery and architecture sprint",
    bestFor:
      "Teams with a real problem but unclear system shape, data ownership, or launch sequence.",
    output:
      "System map, recommended scope, technical risk notes, first build plan, and proof assets to collect.",
  },
  {
    title: "Focused product build",
    bestFor:
      "Founders or operators who need an MVP, portal, dashboard, internal tool, or desktop utility shipped with a maintainable foundation.",
    output:
      "Working product surface, backend foundation, integrations, deployment context, and handoff notes.",
  },
  {
    title: "Integration or automation build",
    bestFor:
      "Teams fighting manual reconciliation, disconnected tools, CRM drift, document workflows, or repetitive operations.",
    output:
      "Integration map, middleware/API layer, automation workflow, logs, fallbacks, and operating runbook.",
  },
  {
    title: "Stabilization and proof packaging",
    bestFor:
      "Teams with existing code that works in pieces but needs credibility, cleanup, documentation, or launch readiness.",
    output:
      "Audit notes, remediation roadmap, architecture docs, screenshots/diagrams, and safer next-release plan.",
  },
];

export const proofAssets = [
  "Architecture diagrams for integrations, services, and data flow",
  "API contracts, webhook maps, and event payload examples",
  "Screenshots of customer, seller, admin, and operations surfaces",
  "Before/after workflow maps showing manual work removed",
  "Observability snapshots: logs, queue health, latency, errors",
  "Verified testimonials and anonymized client outcome notes",
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Map the real operating problem",
    text: "We start with constraints, workflows, team bottlenecks, and the business outcome that actually matters.",
    details: ["User roles and permissions", "Current tools and handoffs", "Success metrics and risks"],
  },
  {
    step: "02",
    title: "Design the system, not just the interface",
    text: "We define product flows, integrations, architecture, and what needs to be automated before code starts.",
    details: ["Data model and service boundaries", "API and webhook contracts", "Automation and queue design"],
  },
  {
    step: "03",
    title: "Build the production-ready core",
    text: "We implement the foundation with clean structure so features, teams, and automations can keep growing on top.",
    details: ["Next.js product surfaces", "Node.js backend services", "Redis, RabbitMQ, and integrations"],
  },
  {
    step: "04",
    title: "Iterate with visibility",
    text: "You get a working system, clear next steps, and a path for expansion instead of a black-box handoff.",
    details: ["CI/CD and environments", "Logging and monitoring", "Release notes and next-scope planning"],
  },
];

export const stackGroups = [
  {
    title: "Product Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Hook Form"],
  },
  {
    title: "Backend Systems",
    items: ["Node.js", "Express.js", "Microservices", "REST APIs", "API Gateway"],
  },
  {
    title: "Data & Integrations",
    items: ["MongoDB", "Prisma ORM", "Redis", "Salesforce APIs", "ETL Pipelines"],
  },
  {
    title: "Async & Observability",
    items: ["RabbitMQ", "Webhooks", "Docker", "Prometheus", "Grafana", "Winston"],
  },
];

export const faqItems = [
  {
    question: "What kind of clients is Niyyah Labs best suited for?",
    answer:
      "B2B founders, operators, service businesses, and Salesforce-heavy teams that need custom products, AI workflows, integrations, internal tools, or operational platforms instead of another disconnected website or spreadsheet.",
  },
  {
    question: "Do you only build AI products?",
    answer:
      "No. AI is one capability inside the wider system. We also build MVPs, internal tools, SaaS platforms, integrations, and Salesforce-connected workflows.",
  },
  {
    question: "How do you decide what to build first?",
    answer:
      "We start with the business bottleneck, user roles, current tools, and success metric. From there, we define the smallest reliable system that can create value quickly without forcing a rebuild later.",
  },
  {
    question: "What do we receive besides the code?",
    answer:
      "You get the working product or integration plus the supporting context: architecture notes, release guidance, environment details, key decisions, and a clear path for the next iteration.",
  },
  {
    question: "Can you work without public case studies?",
    answer:
      "Yes. Some work is confidential, so we use anonymized architecture patterns, workflow maps, screenshots where allowed, sanitized payload examples, and implementation details that demonstrate the depth of the work without exposing client data.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. We can audit, stabilize, document, or extend an existing product. The first step is usually mapping current architecture, risk areas, data flows, and what should be fixed before new feature work continues.",
  },
  {
    question: "How do you handle AI safety and reliability?",
    answer:
      "We design AI as part of a workflow, not as the whole product. That means source-of-truth rules, validation, fallback behavior, human review points, monitoring, prompt controls, and clear boundaries around what the system is allowed to do.",
  },
  {
    question: "Who owns the code and technical material?",
    answer:
      "The client owns the delivered code and project artifacts unless a different agreement is made. We aim to leave behind architecture notes, handoff context, and operational guidance so the work is not a black box.",
  },
  {
    question: "Can you support Salesforce or ERP-style integrations?",
    answer:
      "Yes. We can map objects, sync direction, duplicate risk, source-of-truth ownership, acknowledgement flows, API behavior, file ingestion, and operational visibility before building the integration layer.",
  },
  {
    question: "What happens after launch?",
    answer:
      "That depends on the engagement, but the build should leave a clear next path: support notes, risks to monitor, backlog recommendations, deployment context, and the next iteration or hardening priorities.",
  },
];

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/engineering", label: "Engineering" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function getServiceBySlug(slug: string) {
  return primaryServices.find((service) => service.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
