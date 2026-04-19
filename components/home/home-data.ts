export type ServiceDetail = {
  slug: string;
  id: string;
  label: string;
  title: string;
  summary: string;
  intro: string;
  outcomes: string[];
  stack: string[];
  deliverables: string[];
  fit: string[];
  results: string[];
  seoTitle: string;
  seoDescription: string;
};

export type FeaturedProject = {
  id: string;
  category: string;
  title: string;
  clientLabel: string;
  problem: string;
  architecture: string[];
  outcome: string;
  proof: string[];
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
    category: "Enterprise Integration",
    title: "SAP, Salesforce, and ecommerce synchronization platform.",
    clientLabel: "Enterprise integration engineering",
    problem:
      "Business data needed to move reliably between SAP, Salesforce, and a custom ecommerce system without duplicate records or manual reconciliation.",
    architecture: [
      "Node.js ETL services",
      "File-based ingestion plus REST APIs",
      "Source-aware upsert logic",
      "Acknowledgement and outbound payload generation",
    ],
    outcome:
      "A bidirectional, idempotent sync layer designed to keep enterprise systems consistent while reducing duplicate creation across distributed flows.",
    proof: ["Salesforce integration", "SAP data sync", "Idempotent pipelines"],
  },
  {
    id: "commerce-platform",
    category: "Commerce Platform",
    title: "Multi-vendor customizable ecommerce platform with event-driven workflows.",
    clientLabel: "Marketplace product engineering",
    problem:
      "A marketplace needed seller-managed customization, order lifecycle automation, wallet flows, shipping updates, and admin controls without collapsing into one monolith.",
    architecture: [
      "12-service backend architecture",
      "API gateway with auth and RBAC",
      "RabbitMQ event workflows",
      "Razorpay and Shiprocket integrations",
    ],
    outcome:
      "A production-grade commerce foundation with asynchronous updates, seller wallet credits, shipment status automation, commission snapshots, and audit trails.",
    proof: ["RabbitMQ workflows", "Redis caching", "Payment and shipping webhooks"],
  },
  {
    id: "multi-surface-app",
    category: "Product Surfaces",
    title: "Three independent Next.js applications for customer, seller, and admin users.",
    clientLabel: "Multi-surface product architecture",
    problem:
      "Different user groups needed separate product experiences while sharing design patterns, TypeScript foundations, and consistent data contracts.",
    architecture: [
      "Next.js App Router",
      "SSR and SSG where useful",
      "Reusable UI components",
      "Shared TypeScript patterns",
    ],
    outcome:
      "Separate product surfaces that can evolve independently while keeping implementation consistent across customer, vendor, and platform operations.",
    proof: ["Customer app", "Seller app", "Admin app"],
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
  { href: "#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "#engineering", label: "Engineering" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function getServiceBySlug(slug: string) {
  return primaryServices.find((service) => service.slug === slug);
}
