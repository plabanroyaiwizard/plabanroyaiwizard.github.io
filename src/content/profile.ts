/**
 * All portfolio copy lives here. Edit this file to update the site.
 *
 * Sourced from Plaban's resume (Nov 2026) and his public Medium and GitHub.
 * Internal employer system names, sites and security specifics are deliberately
 * described generically because this site is public.
 * Anything marked `// CONFIRM:` still needs Plaban's sign-off. README.md mirrors this list.
 */

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://plabanroyaiwizard.github.io",
  title: "Plaban Roy · Senior Data & AI Engineer, AI Solution Architecture",
  description:
    "Plaban Roy is a Toronto-based Senior Data & AI Engineer at Sanofi with 9+ years across pharma, banking and healthcare, designing agentic AI workflows, hybrid RAG and NL-to-SQL systems, and the secure data platforms behind them.",
  keywords: [
    "Plaban Roy",
    "Senior Data and AI Engineer",
    "AI Solution Architect",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "RAG architecture",
    "Snowflake Cortex Analyst",
    "Snowflake SnowPro Core",
    "Apache Airflow",
    "Toronto",
  ],
};

export const person = {
  name: "Plaban Roy",
  initials: "PR",
  role: "Senior Data & AI Engineer · AI Solution Architecture",
  location: "Toronto, Canada",
  email: "plaban1407@gmail.com",
  // CONFIRM: availability wording
  availability: "Open to AI solution architecture opportunities",
  links: {
    linkedin: "https://www.linkedin.com/in/plabanroyai/",
    medium: "https://medium.com/@plabroy",
    github: "https://github.com/plabanroyaiwizard",
  },
};

export const hero = {
  eyebrow: "Data & AI Solution Architecture",
  headline: "Turning generative AI into systems regulated enterprises can",
  headlineAccent: "trust.",
  subheadline:
    "Senior Data & AI Engineer at Sanofi with 9+ years across pharma, banking and healthcare. I design the agentic workflows, hybrid retrieval and data platforms that put LLMs to work on real enterprise data, with the security, reliability and auditability regulated teams require.",
  primaryCta: { label: "See the work", href: "#solutions" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "9+", label: "Years in data, AI and integration" },
    { value: "22", label: "Daily manufacturing data pipelines" },
    { value: "7,000+", label: "Procurement records ingested per day" },
    { value: "2023", label: "Sanofi Data Hero award" },
  ],
};

export const about = {
  title: "Data engineer by trade, architect by necessity, builder by instinct.",
  paragraphs: [
    "At Sanofi I own solution designs on an enterprise source-to-pay data platform and am a major contributor to an agentic document workflow for manufacturing-science and quality reports. The hard part is rarely the model. It is the retrieval, the integrations, the security boundaries and the failure modes around it.",
    "Before Sanofi I built an anomaly-detection application with BigQuery ML and an NLP expense classifier at Scotiabank, and spent five years building healthcare software: HL7/CCDA interoperability, HEDIS logic and EHR immunization features integrated with U.S. state registries. I hold a graduate certificate in AI & Machine Learning and a Master of Computer Applications.",
    "Outside work I learn by shipping: small health-AI tools on GitHub first, then writing up what actually worked, from agentic RAG to stateful NL-to-SQL sessions and network-based medication safety.",
  ],
  principles: [
    {
      title: "Retrieval before generation",
      body: "Route structured questions to SQL and unstructured ones to vector search. Most bad answers are retrieval failures, not model failures.",
    },
    {
      title: "Isolate failure domains",
      body: "A slow upstream system should never delay unrelated workloads or page the wrong team. Pipelines get their own blast radius.",
    },
    {
      title: "Fail closed, secure by default",
      body: "Guards that refuse to truncate production data, customer-managed encryption and key-based auth are design decisions, made up front.",
    },
  ],
};

export const expertise = [
  {
    id: "llm-apps",
    title: "LLM applications & NL-to-SQL",
    summary:
      "LLM services that answer questions over governed enterprise data, with deliberate state and production-grade APIs.",
    points: [
      "Snowflake Cortex Analyst natural-language-to-SQL over modeled data",
      "Stateful multi-turn sessions on top of stateless LLM APIs",
      "FastAPI services with async job tracking and durable results",
    ],
  },
  {
    id: "rag",
    title: "Hybrid retrieval (RAG)",
    summary:
      "Retrieval that picks the right path per question: SQL for structured facts, vector search for documents.",
    points: [
      "Cortex Analyst for structured data plus Pinecone for documents",
      "Ingestion from regulated document management systems",
      "Grounded answers traceable back to source records",
    ],
  },
  {
    id: "agents",
    title: "Agentic systems",
    summary:
      "Orchestrators that plan, delegate to sub-agents and call tools, with bounded autonomy and observable steps.",
    points: [
      "LangGraph orchestration with planner, sub-agents and tools",
      "Document workflows for quality and manufacturing-science reports",
      "Human review built into high-stakes steps",
    ],
  },
  {
    id: "cloud-mlops",
    title: "Cloud, data & MLOps architecture",
    summary:
      "The platform layer that keeps AI fed with fresh, modeled data and deploys it repeatably.",
    points: [
      "Apache Airflow on Amazon MWAA, dbt and Argo Workflows",
      "Snowflake and Snowpark, with watermark-based incremental loads",
      "AWS, GCP, Terraform and GitHub Actions delivery",
    ],
  },
  {
    id: "governance",
    title: "Security, governance & responsible AI",
    summary:
      "AI in GxP-regulated pharma, where every answer and every data movement has to be defensible.",
    points: [
      "Customer-managed AWS KMS encryption with annual rotation",
      "Key-pair authentication injected at deploy time, no key files",
      "Least-privilege IAM and fail-closed production guards",
    ],
  },
];

export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Agentic document workflow for manufacturing quality",
    context: "Sanofi Vaccines · Manufacturing science & quality",
    problem:
      "Qualification, manufacturing-science and product-quality reports depend on protocols, raw data packages, non-conformities and change requests scattered across systems.",
    approach: [
      "Hybrid retrieval: NL-to-SQL for structured data, vector search for documents",
      "LangGraph orchestrator that plans, calls sub-agents and uses tools",
      "FastAPI resolution service with async jobs, TTL job store and S3 results",
      "Customer-managed KMS encryption across secrets, storage and alerting",
    ],
    // CONFIRM: add a shareable outcome metric (e.g. review time saved, documents processed)
    outcome:
      "One workflow that answers both structured and document questions for report authors, on encrypted, auditable infrastructure.",
    stack: ["LangGraph", "Snowflake Cortex", "Pinecone", "FastAPI", "AWS"],
  },
  {
    title: "Procurement data platform ingestion",
    context: "Sanofi · Enterprise source-to-pay",
    problem:
      "A procurement workflow platform needed fresh purchase orders, goods receipts and approval chains from Coupa and Oracle, without webhooks and within strict API rate limits.",
    approach: [
      "12-hour incremental batch on Airflow (Amazon MWAA) with watermark upserts into Snowflake",
      "Keyset pagination, batched writes, backoff and a fail-closed guard on production tables",
      "Separate DAG for Oracle approvals so a hang cannot delay ~106 unrelated models",
      "Explicit rate budget against Coupa's 25 requests/second ceiling",
    ],
    outcome:
      "Designed and shipped; live twice daily across dev, UAT and prod, sized for about 2,000 purchase orders and 5,000+ goods receipts a day.",
    stack: ["Apache Airflow", "Amazon MWAA", "Snowflake", "dbt", "Python"],
  },
  {
    title: "Manufacturing batch genealogy at scale",
    context: "Sanofi Vaccines · Manufacturing analytics",
    problem:
      "Batch, genealogy and process-parameter data from global manufacturing sites had to land daily in one place for analytics and apps.",
    approach: [
      "Daily ELT orchestrated by Argo across 22 site and product pipelines",
      "Batch genealogy logic: forward-fill from inputs to outputs, tree-level adjustment, de-duplication",
      "Snowflake tasks reserved for downstream refreshes only",
    ],
    outcome:
      "Reliable daily manufacturing data for the analytics app and Power BI. Recognized with the Sanofi Data Hero award in May 2023.",
    stack: ["Argo Workflows", "Snowflake", "SQL", "Python", "Power BI"],
  },
  {
    title: "Multi-turn conversational analytics",
    context: "Architecture write-up · Snowflake Cortex Analyst",
    problem:
      "Cortex Analyst translates natural language to SQL but is stateless, so users cannot ask follow-up questions.",
    approach: [
      "Session Management Layer between client and Cortex Analyst",
      "Recency-first context injection with a 4,000-token history budget",
      "SQL payload compression and result-set context injection",
    ],
    outcome:
      "Persistent multi-turn analytics without modifying the model infrastructure, with roughly 60% smaller history payloads.",
    stack: ["Snowflake Cortex", "FastAPI", "Python"],
    link: {
      label: "Read the write-up",
      href: "https://medium.com/@plabroy/architecting-persistent-multi-turn-conversations-on-stateless-nl-to-sql-apis-c4632ab535d4",
    },
  },
];

export type JourneyChapter = {
  id: string;
  period: string;
  theme: string;
  org: string;
  role: string;
  story: string;
  lesson: string;
  proof: { value: string; label: string }[];
  tools: string[];
};

export const journey: JourneyChapter[] = [
  {
    id: "interop",
    period: "2015 – 2020",
    theme: "Making health data talk",
    org: "Aptsource Software · Kolkata",
    role: "Software Engineer (Data)",
    story:
      "I started in the plumbing of U.S. healthcare: HL7 and CCDA document exchange, HEDIS quality logic, EHR immunization features wired into state registries, and the API and data model behind doctor search and appointment booking.",
    lesson: "Interoperability is the real product. A model is only as useful as the data contracts that feed it.",
    proof: [
      { value: "5 yrs", label: "building U.S. healthcare software" },
      { value: "HL7 · CCDA", label: "interoperability standards shipped" },
    ],
    tools: ["Python", "Flask", "SQL", "HL7", "TDD"],
  },
  {
    id: "first-ml",
    period: "2022",
    theme: "Models meet money",
    org: "Scotiabank · Toronto",
    role: "Data Analytics Associate (Lead Developer) and Co-op",
    story:
      "My first production machine learning: a BigQuery ML anomaly-detection application for financial security, an NLP classifier for employee expense claims, and payment forecasting that finance leaders actually used.",
    lesson: "Accuracy is a number; adoption is the outcome. Automate the pipeline, or the model dies in a notebook.",
    proof: [
      { value: "60% → 85%+", label: "expense classifier accuracy" },
      { value: "Daily", label: "automated ETL into stakeholder dashboards" },
    ],
    tools: ["BigQuery ML", "GCP", "NLP", "scikit-learn", "Oracle Analytics"],
  },
  {
    id: "manufacturing",
    period: "2022 – 2026",
    theme: "Data a vaccine plant can trust",
    org: "Sanofi Vaccines · Toronto",
    role: "Senior Data Engineer, ML Solution Engineering",
    story:
      "I helped land batch, genealogy and process-parameter data from manufacturing sites worldwide into one daily platform, including genealogy logic that traces every output back to its inputs.",
    lesson: "In regulated industries, lineage is a feature. If you cannot trace a number, nobody can act on it.",
    proof: [
      { value: "22", label: "site and product pipelines, every day" },
      { value: "Data Hero", label: "Sanofi award, May 2023" },
    ],
    tools: ["Argo Workflows", "Snowflake", "SQL", "Power BI"],
  },
  {
    id: "agents",
    period: "2022 – 2026",
    theme: "Agents for quality documents",
    org: "Sanofi Vaccines · Toronto",
    role: "Senior Data Engineer, ML Solution Engineering",
    story:
      "I was a major contributor to an AI document workflow for qualification, manufacturing-science and product-quality reports: NL-to-SQL for structured questions, a LangGraph agent with vector search for documents, behind a FastAPI service.",
    lesson: "Agents are services with judgment. Give them the same boundaries, encryption and observability as any other service.",
    proof: [
      { value: "2-path", label: "hybrid retrieval: SQL plus agentic RAG" },
      { value: "0", label: "key files on disk after the auth rework" },
    ],
    tools: ["LangGraph", "Cortex Analyst", "Pinecone", "FastAPI", "AWS KMS"],
  },
  {
    id: "workflow",
    period: "2026 → now",
    theme: "Architecting the workflow layer",
    org: "Sanofi Aventis · Toronto",
    role: "Senior Data and AI Engineer, AI Workflow Team",
    story:
      "I now own solution designs for the data platform behind an enterprise procurement workflow product. I designed and shipped the Coupa ingestion and the Oracle approval pipeline, from volume sizing to production guards.",
    lesson: "Sizing is a design decision. Know your volumes, rate limits and blast radius before you choose the architecture.",
    proof: [
      { value: "7,000+", label: "purchase orders and receipts a day" },
      { value: "~106", label: "models shielded from upstream failures" },
    ],
    tools: ["Airflow on MWAA", "Snowflake", "dbt", "Coupa", "Oracle"],
  },
];

export const certifications = [
  { name: "Snowflake SnowPro Core Certification", issuer: "Snowflake", date: "Nov 2025" },
];

export const awards = [
  { name: "Sanofi Data Hero Award", issuer: "Sanofi", date: "May 2023" },
  { name: "Dean's Honor List", issuer: "Lambton College", date: "2022" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Solution architecture",
    items: ["End-to-end solution design", "Workflow discovery", "System & API integration", "Data architecture", "Security & access design", "Reliability", "Technical leadership"],
  },
  {
    group: "AI / ML",
    items: ["LLMs", "LangGraph", "Agentic orchestration", "Cortex Analyst (NL-to-SQL)", "Pinecone", "NLP", "spaCy", "scikit-learn", "XGBoost", "BigQuery ML"],
  },
  {
    group: "Data platforms",
    items: ["Snowflake", "Snowpark", "dbt", "Apache Airflow", "Argo Workflows", "PostgreSQL", "SQL Server", "Oracle", "BigQuery"],
  },
  {
    group: "Cloud & delivery",
    items: ["AWS", "GCP", "Terraform", "GitHub Actions", "Power BI"],
  },
  {
    group: "Languages & APIs",
    items: ["Python", "SQL", "Java", "FastAPI", "Flask", "Spring Boot", "REST"],
  },
];

export const writing = [
  {
    title: "How to Build RAG That Handles 1M PDFs: The 2026 Production Playbook",
    date: "May 2026",
    href: "https://medium.com/@plabroy/how-to-build-rag-that-handles-1m-pdfs-the-2026-production-playbook-f4b995bcf26c",
  },
  {
    title: "Polypharmacy Is a Network Problem — So Why Are We Still Checking Drugs in Pairs?",
    date: "Mar 2026",
    href: "https://medium.com/@plabroy",
  },
  {
    title: "Architecting Persistent Multi-Turn Conversations on Stateless NL-to-SQL APIs",
    date: "Feb 2026",
    href: "https://medium.com/@plabroy/architecting-persistent-multi-turn-conversations-on-stateless-nl-to-sql-apis-c4632ab535d4",
  },
];

export const contact = {
  title: "Building something with generative AI?",
  body: "Whether you are taking an AI prototype to production, designing an agentic workflow, or putting governance around LLMs in a regulated environment, I am happy to compare notes.",
};
