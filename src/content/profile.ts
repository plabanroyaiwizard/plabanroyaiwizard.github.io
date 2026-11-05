/**
 * All portfolio copy lives here. Edit this file to update the site.
 *
 * Facts sourced from public pages (about.me/plaban_roy, medium.com/@plabroy,
 * github.com/plabanroyaiwizard, Corporations Canada registry) are used as-is.
 * Anything marked `// CONFIRM:` is inferred or a placeholder and needs
 * Plaban's sign-off before the site goes live. README.md mirrors this list.
 */

export const site = {
  // CONFIRM: production domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://plabanroy.ai",
  title: "Plaban Roy · Generative AI Solution Architect",
  description:
    "Plaban Roy designs production generative AI systems for regulated enterprises: RAG at scale, agentic workflows, conversational analytics, and the cloud, MLOps and governance foundations that keep them reliable.",
  keywords: [
    "Plaban Roy",
    "Generative AI Solution Architect",
    "GenAI architect Toronto",
    "RAG architecture",
    "Agentic AI",
    "LLM applications",
    "Snowflake Cortex",
    "MLOps",
    "Responsible AI",
    "Healthcare AI",
  ],
};

export const person = {
  name: "Plaban Roy",
  initials: "PR",
  // CONFIRM: headline title. Medium byline says "Senior Data Engineer · Architecting AI Systems for Enterprise Analytics".
  role: "Solution Architect, Generative AI",
  location: "Toronto, Canada",
  email: "plaban1407@gmail.com",
  availability: "Open to GenAI architecture roles and advisory work",
  links: {
    linkedin: "https://www.linkedin.com/in/plabanroyai/",
    medium: "https://medium.com/@plabroy",
    github: "https://github.com/plabanroyaiwizard",
    aboutMe: "https://about.me/plaban_roy",
  },
};

export const hero = {
  eyebrow: "Generative AI Solution Architect",
  headline: "Turning generative AI into systems regulated enterprises can",
  headlineAccent: "trust.",
  subheadline:
    "I architect LLM applications that survive contact with production: retrieval that holds up at millions of documents, agents with guardrails, and conversational analytics that remembers context. Most of my work happens in pharma and healthcare, where accuracy and auditability are requirements, not features.",
  primaryCta: { label: "See the work", href: "#solutions" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  // CONFIRM: the numbers in these stats are inferred from public writing, not verified.
  stats: [
    { value: "1M+", label: "PDF-scale RAG architecture" },
    { value: "~60%", label: "Smaller LLM context payloads" },
    { value: "3", label: "Industries: pharma, health tech, analytics" },
  ],
};

export const about = {
  title: "Data engineer by trade, architect by necessity, builder by instinct.",
  paragraphs: [
    "At Sanofi I turn messy pharmaceutical documents (regulatory submissions, clinical trial reports, quality records) into structured, searchable intelligence using LLMs and vector databases. The hard part is rarely the model. It is the retrieval, the data contracts, the security boundaries and the evaluation loop around it.",
    "Before pharma I founded OmCare.AI, a Toronto health-tech venture working on personal health-data ownership. That experience shaped how I design: start from the user's real workflow, keep the architecture boring where it can be, and be deliberate about where the intelligence sits.",
    "I write about production GenAI architecture on Medium, from session layers for stateless NL-to-SQL APIs to six-layer RAG systems that scale to a million PDFs.",
  ],
  principles: [
    {
      title: "Retrieval before generation",
      body: "Most RAG failures are retrieval failures. I design chunking, hybrid search and re-ranking first, then pick the model.",
    },
    {
      title: "Evaluate everything",
      body: "Golden datasets, groundedness checks and regression evals ship with the system, not after it.",
    },
    {
      title: "Governance by design",
      body: "Access control, PII handling, audit trails and human review are architecture decisions, made up front.",
    },
  ],
};

export const expertise = [
  {
    id: "llm-apps",
    title: "LLM applications",
    summary:
      "Production assistants, copilots and NL-to-SQL interfaces with deliberate state, token budgets and fallbacks.",
    points: [
      "Multi-turn session layers over stateless LLM APIs",
      "Prompt and context engineering with token budget enforcement",
      "FastAPI services, streaming and structured outputs",
    ],
  },
  {
    id: "rag",
    title: "Retrieval-augmented generation",
    summary:
      "RAG that holds up beyond the demo: millions of documents, tables, scanned PDFs and strict citation requirements.",
    points: [
      "Layout-aware ingestion and semantic chunking",
      "Hybrid search, metadata filtering and re-ranking",
      "Pinecone and Snowflake Cortex vector search",
    ],
  },
  {
    id: "agents",
    title: "Agentic systems",
    summary:
      "Agents that plan, retrieve, validate and re-retrieve, with bounded autonomy and observable decisions.",
    points: [
      "Agentic RAG with parallel retrieval and validation agents",
      "Tool use with permissioned, auditable actions",
      "Human-in-the-loop checkpoints for high-stakes steps",
    ],
  },
  {
    id: "cloud-mlops",
    title: "Cloud & MLOps architecture",
    summary:
      "Infrastructure-as-code foundations that make GenAI workloads repeatable, observable and cost-aware.",
    points: [
      "AWS, Terraform and Docker-based delivery",
      "Snowflake data platforms and pipelines",
      "CI/CD, evaluation gates and LLM observability",
    ],
  },
  {
    id: "governance",
    title: "Governance & responsible AI",
    summary:
      "GenAI in regulated (GxP-adjacent) environments, where every answer has to be traceable and defensible.",
    points: [
      "Data residency, RBAC and PII-safe context handling",
      "Grounding, citation and hallucination controls",
      "Audit logging and model risk documentation",
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
    title: "Regulatory document intelligence",
    // CONFIRM: scope, scale and outcomes of the Sanofi work that can be shared publicly
    context: "Sanofi · Pharmaceutical R&D and quality",
    problem:
      "Regulatory submissions, clinical trial reports and quality records sat in unstructured PDFs, slowing review and making knowledge hard to reuse.",
    approach: [
      "Layout-aware ingestion pipeline that extracts text, tables and metadata",
      "Vector search with metadata filters scoped to document type and access level",
      "Grounded answers with source citations for reviewer verification",
    ],
    outcome:
      "Turned document archives into structured, searchable intelligence that reviewers can query in natural language.",
    stack: ["AWS", "Terraform", "Pinecone", "FastAPI", "Docker"],
  },
  {
    title: "Multi-turn conversational analytics",
    context: "Enterprise analytics · Snowflake Cortex Analyst",
    problem:
      "Cortex Analyst translates natural language to SQL but is stateless. Users could not ask follow-up questions in a regulated environment.",
    approach: [
      "Session Management Layer between client and Cortex Analyst",
      "Recency-first context injection with a 4,000-token history budget",
      "SQL payload compression and result-set context injection",
    ],
    outcome:
      "Persistent multi-turn analytics without modifying the model infrastructure, with roughly 60% smaller history payloads.",
    stack: ["Snowflake Cortex", "FastAPI", "Python", "RBAC"],
    link: {
      label: "Read the architecture write-up",
      href: "https://medium.com/@plabroy/architecting-persistent-multi-turn-conversations-on-stateless-nl-to-sql-apis-c4632ab535d4",
    },
  },
  {
    title: "RAG at million-document scale",
    context: "Reference architecture · 2026 production playbook",
    problem:
      "Naive retrieve-then-generate pipelines break at scale: confident answers grounded in the wrong documents.",
    approach: [
      "Six-layer architecture from ingestion to evaluation",
      "Agentic RAG with parallel retrieval and validation agents",
      "Retrieval-first metrics to catch failures before users do",
    ],
    outcome:
      "A blueprint for RAG systems that scale to over a million PDFs while staying measurable and debuggable.",
    stack: ["Agentic RAG", "Hybrid search", "Re-ranking", "Evals"],
    link: {
      label: "Read the playbook",
      href: "https://medium.com/@plabroy/how-to-build-rag-that-handles-1m-pdfs-the-2026-production-playbook-f4b995bcf26c",
    },
  },
  {
    title: "Polypharmacy cascade detection",
    // CONFIRM: whether this was built under OmCare.AI and how it should be described
    context: "Health tech · Medication safety",
    problem:
      "Drug interaction checkers evaluate medications in pairs, missing risks that only emerge across three or more drugs.",
    approach: [
      "Modelled polypharmacy as a network problem rather than pairwise checks",
      "Multi-drug cascade detection across a patient's full medication list",
      "Explainable output so clinicians can see why a cascade was flagged",
    ],
    outcome:
      "A network-based approach to medication safety that surfaces multi-drug cascades pairwise tools miss.",
    stack: ["Graph modelling", "Python", "LLMs", "Healthcare data"],
    link: { label: "Read the article", href: "https://medium.com/@plabroy" },
  },
];

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const experience: TimelineItem[] = [
  {
    // CONFIRM: exact title and start date at Sanofi
    period: "Present",
    role: "Senior Data Engineer · AI Systems Architecture",
    org: "Sanofi",
    location: "Toronto, Canada",
    summary:
      "Architecting AI systems for enterprise analytics and pharmaceutical document intelligence.",
    highlights: [
      "Designs LLM and vector-search pipelines over regulatory, clinical and quality documents",
      "Built a session layer enabling multi-turn conversations on Snowflake Cortex Analyst",
      "Owns infrastructure-as-code and deployment on AWS with Terraform",
    ],
  },
  {
    // CONFIRM: title and end date. Corporation registered 2024-07-16.
    period: "2024",
    role: "Founder & Director",
    org: "OmCare AI Inc.",
    location: "Toronto, Canada",
    summary:
      "Health-tech venture focused on personal health-data ownership and AI for preventive health.",
    highlights: [
      "Shaped product and architecture for a consumer health-data platform",
      "Explored AI for longevity, preventive care and medication safety",
    ],
  },
  {
    // CONFIRM: employer(s), titles and dates before OmCare.AI
    period: "Earlier",
    role: "Software Engineer, Machine Learning",
    org: "Data science and ML engineering roles",
    summary:
      "Built data science applications, ML models and data pipelines across finance and healthcare problems.",
    highlights: [
      "Deep learning, gradient boosting and fraud-detection models",
      "Spark, Luigi and Python data pipelines",
    ],
  },
];

export const certifications = [
  // CONFIRM: these are courses/certificates of completion from his public GitHub repo,
  // not professional certifications. Add any AWS/Azure/GCP certifications he holds.
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI · Coursera" },
  { name: "Fundamentals of Machine Learning on AWS", issuer: "AWS" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS" },
  { name: "Scalable Machine Learning on Big Data", issuer: "Coursera" },
  { name: "Deploying Scalable Machine Learning for Data Science", issuer: "LinkedIn Learning" },
  { name: "Introduction to TensorFlow for AI, ML and Deep Learning", issuer: "DeepLearning.AI · Coursera" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Generative AI",
    items: ["LLM application design", "RAG", "Agentic RAG", "Prompt & context engineering", "NL-to-SQL", "LLM evaluation"],
  },
  {
    group: "Data & retrieval",
    items: ["Snowflake", "Snowflake Cortex", "Pinecone", "Vector search", "Apache Spark", "Python"],
  },
  {
    group: "Cloud & platform",
    items: ["AWS", "Terraform", "Docker", "FastAPI", "CI/CD", "Observability"],
  },
  {
    group: "Machine learning",
    items: ["TensorFlow", "scikit-learn", "XGBoost", "Deep learning", "AutoML"],
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
  body: "Whether you are taking a RAG prototype to production, designing an agentic workflow, or putting governance around LLMs in a regulated environment, I am happy to compare notes.",
};
