export type ServiceDetail = {
  slug: string;
  id: string;
  label: string;
  title: string;
  summary: string;
  intro: string;
  detailIntro: string;
  outcomes: string[];
  stack: string[];
  deliverables: string[];
  fit: string[];
  notFit: string[];
  engagementSteps: string[];
  proofPoints: string[];
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
  problem: string;
  architecture: string[];
  approach: string[];
  outcome: string;
  proof: string[];
  impact: string[];
  relatedServices: string[];
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
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  details: string[];
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
    relatedProjectIds: ["multi-surface-app", "commerce-platform"],
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
    relatedProjectIds: ["sap-salesforce-sync", "commerce-platform"],
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
    relatedProjectIds: ["sap-salesforce-sync"],
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
    value: "Ops clarity",
    label: "Turn scattered tools, manual handoffs, and unclear ownership into one reliable workflow",
  },
  {
    value: "Launch-ready",
    label: "Build MVPs, portals, dashboards, and automations with a foundation that can keep scaling",
  },
  {
    value: "AI + CRM",
    label: "Connect AI workflows, Salesforce, APIs, and reporting so business data moves without busywork",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sap-salesforce-sync",
    slug: "sap-salesforce-ecommerce-sync",
    category: "Enterprise Integration",
    title: "SAP, Salesforce, and ecommerce synchronization platform.",
    clientLabel: "Enterprise integration engineering",
    summary:
      "A distributed sync layer designed to keep enterprise systems aligned without duplicate creation or manual reconciliation work.",
    problem:
      "Business data needed to move reliably between SAP, Salesforce, and a custom ecommerce system without duplicate records or manual reconciliation.",
    architecture: [
      "Node.js ETL services",
      "File-based ingestion plus REST APIs",
      "Source-aware upsert logic",
      "Acknowledgement and outbound payload generation",
    ],
    approach: [
      "Mapped system ownership and sync direction before implementation",
      "Designed idempotent upsert rules around record provenance",
      "Added acknowledgement and outbound payload behavior to support downstream flows",
    ],
    outcome:
      "A bidirectional, idempotent sync layer designed to keep enterprise systems consistent while reducing duplicate creation across distributed flows.",
    proof: ["Salesforce integration", "SAP data sync", "Idempotent pipelines"],
    impact: [
      "Reduced manual reconciliation work between business systems",
      "Improved confidence in CRM-connected operations and reporting",
      "Created a more supportable integration layer with clearer failure visibility",
    ],
    relatedServices: ["salesforce-integrations", "ai-automation"],
  },
  {
    id: "commerce-platform",
    slug: "multi-vendor-commerce-platform",
    category: "Commerce Platform",
    title: "Multi-vendor customizable ecommerce platform with event-driven workflows.",
    clientLabel: "Marketplace product engineering",
    summary:
      "A commerce platform built as a system, not a storefront, with seller workflows, async events, and operational controls.",
    problem:
      "A marketplace needed seller-managed customization, order lifecycle automation, wallet flows, shipping updates, and admin controls without collapsing into one monolith.",
    architecture: [
      "12-service backend architecture",
      "API gateway with auth and RBAC",
      "RabbitMQ event workflows",
      "Razorpay and Shiprocket integrations",
    ],
    approach: [
      "Separated responsibilities across backend services instead of one overloaded app",
      "Used async event flows for order lifecycle, shipping, and wallet logic",
      "Connected platform operations with seller controls and admin visibility",
    ],
    outcome:
      "A production-grade commerce foundation with asynchronous updates, seller wallet credits, shipment status automation, commission snapshots, and audit trails.",
    proof: ["RabbitMQ workflows", "Redis caching", "Payment and shipping webhooks"],
    impact: [
      "Made complex operational workflows easier to scale without manual coordination",
      "Improved platform control through admin tooling and event-driven visibility",
      "Created a stronger foundation for future product growth and feature expansion",
    ],
    relatedServices: ["mvp-development", "ai-automation"],
  },
  {
    id: "multi-surface-app",
    slug: "multi-surface-product-suite",
    category: "Product Surfaces",
    title: "Three independent Next.js applications for customer, seller, and admin users.",
    clientLabel: "Multi-surface product architecture",
    summary:
      "A shared product foundation delivered through separate applications for distinct user groups with different jobs to do.",
    problem:
      "Different user groups needed separate product experiences while sharing design patterns, TypeScript foundations, and consistent data contracts.",
    architecture: [
      "Next.js App Router",
      "SSR and SSG where useful",
      "Reusable UI components",
      "Shared TypeScript patterns",
    ],
    approach: [
      "Split product surfaces by user type while keeping contracts and patterns consistent",
      "Built reusable components and shared TypeScript foundations for faster iteration",
      "Used independent surfaces to reduce complexity for each audience",
    ],
    outcome:
      "Separate product surfaces that can evolve independently while keeping implementation consistent across customer, vendor, and platform operations.",
    proof: ["Customer app", "Seller app", "Admin app"],
    impact: [
      "Improved clarity for each user group through purpose-built interfaces",
      "Made ongoing product iteration easier without coupling every experience together",
      "Created a reusable system foundation for future feature work",
    ],
    relatedServices: ["mvp-development"],
  },
];

export const buildCapabilities = [
  {
    title: "Enterprise data sync",
    text: "SAP, Salesforce, ecommerce, file ingestion, REST APIs, and source-aware upserts.",
  },
  {
    title: "Marketplace platforms",
    text: "Seller workflows, product customization, wallets, commissions, shipping, and admin controls.",
  },
  {
    title: "Multi-surface products",
    text: "Customer, seller, admin, and operations apps built on shared TypeScript foundations.",
  },
  {
    title: "Automation pipelines",
    text: "RabbitMQ workflows, webhooks, notifications, shipment updates, and lifecycle events.",
  },
  {
    title: "Internal tools",
    text: "Dashboards, approvals, reporting views, CRM-connected workflows, and ops control panels.",
  },
  {
    title: "Reliable launch foundations",
    text: "Auth, RBAC, rate limiting, caching, observability, CI/CD, and release-ready infrastructure.",
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
  },
  {
    title: "Enterprise integrations",
    summary:
      "Data movement across SAP, Salesforce, ecommerce, files, REST APIs, and third-party systems with idempotency in mind.",
    capabilities: ["Salesforce APIs", "SAP sync", "FTP/SFTP ingestion", "Source-aware upserts"],
  },
  {
    title: "Async and real-time workflows",
    summary:
      "Event-driven flows for wallet credits, notifications, shipping updates, webhooks, and lifecycle automation.",
    capabilities: ["RabbitMQ", "Redis", "Socket.IO", "Message queues"],
  },
  {
    title: "DevOps and observability",
    summary:
      "Deployment and monitoring foundations that make systems easier to operate after launch, not just easier to demo.",
    capabilities: ["Docker", "GitHub Actions", "Winston logging", "Grafana dashboards"],
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
      "Teams that need real systems: founders launching products, companies replacing manual workflows, and businesses connecting fragmented tools into one operating flow.",
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
