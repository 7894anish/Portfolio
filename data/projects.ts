export type Project = {
  slug: string; title: string; category: string; description: string;
  longDescription: string; technologies: string[]; features: string[];
  problem: string; solution: string; architecture: { title: string; description: string }[];
  role: string; contributions: string[]; github: string; liveUrl: string;
  featured: boolean; visual: "data" | "assistant" | "home" | "portfolio";
};

export const projects: Project[] = [
  {
    slug: "4dalert", title: "4DAlert", category: "Enterprise data platform",
    description: "Making complex enterprise data clear, connected, and actionable.",
    longDescription: "An enterprise platform bringing data quality, reconciliation, observability, and master data management into connected data workflows.",
    technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "AI"],
    features: ["Entity resolution", "Match & merge", "Matching rules", "Survivorship", "Data quality", "Reconciliation", "Monitoring", "Workflow management", "Agentic workflows"],
    problem: "Enterprise data is distributed across systems, with inconsistent records, duplicate entities, and competing values. Teams need clear interfaces and connected workflows to understand, reconcile, and manage that data.",
    solution: "4DAlert connects data quality, matching, survivorship, reconciliation, and monitoring in an enterprise data platform. Its workflows support the journey from understanding a data issue to managing the records involved.",
    architecture: [
      { title: "Enterprise interface", description: "Angular and TypeScript interfaces present data operations, matching rules, and workflow controls." },
      { title: "Application services", description: "Node.js and REST APIs connect interface actions with backend workflows and asynchronous operations." },
      { title: "Data & intelligence", description: "PostgreSQL supports enterprise data operations, with AI capabilities extending intelligent workflows." },
    ],
    role: "Full-stack development across enterprise interfaces, backend functionality, and data workflows.",
    contributions: ["Developed Angular-based interfaces and connected them to REST APIs.", "Worked with Node.js and PostgreSQL on enterprise data operations.", "Contributed to matching and survivorship workflows across frontend and backend.", "Debugged production functionality and worked on AI integration."],
    github: "", liveUrl: "", featured: true, visual: "data",
  },
  {
    slug: "ask4d", title: "Ask4D", category: "AI-powered enterprise assistant",
    description: "A natural-language bridge between people and enterprise data.",
    longDescription: "An AI-powered enterprise data assistant designed to connect natural-language questions with structured data and enterprise workflows.",
    technologies: ["Python", "LangChain", "LangGraph", "LLMs", "PostgreSQL", "SQL"],
    features: ["Natural-language interaction", "SQL generation", "Metadata exploration", "Agentic workflows", "Tool-based reasoning", "Structured responses"],
    problem: "Exploring enterprise data often means understanding schemas, writing SQL, and navigating multiple tools. Natural-language questions need relevant metadata and a structured path to the data behind an answer.",
    solution: "Ask4D brings natural-language interaction, metadata exploration, and SQL generation into an enterprise assistant. Agentic workflows connect questions with tools and structure the resulting responses.",
    architecture: [
      { title: "Question & context", description: "Natural-language requests and relevant metadata establish the context for enterprise data questions." },
      { title: "Agent orchestration", description: "Python, LangChain, and LangGraph support tool-based reasoning and agentic workflows." },
      { title: "Structured data", description: "SQL and PostgreSQL connect the assistant to enterprise data, informing structured responses." },
    ],
    role: "AI application development focused on connecting language models with enterprise data workflows.",
    contributions: ["Worked on AI assistant functionality for enterprise data interaction.", "Explored metadata-aware SQL generation and tool-based workflows.", "Connected GenAI concepts with a full-stack and enterprise data background."],
    github: "", liveUrl: "", featured: true, visual: "assistant",
  },
  {
    slug: "homepilot", title: "HomePilot", category: "Full-stack application",
    description: "Connecting everyday services through one complete application.",
    longDescription: "A full-stack application combining user-facing discovery and booking with the administrative workflows behind a service platform.",
    technologies: ["React", "FastAPI", "MongoDB", "REST APIs"],
    features: ["Authentication", "User profiles", "Catalog", "Booking", "Payments", "Admin functionality", "File uploads"],
    problem: "A service application needs more than a catalog. User accounts, bookings, payments, and administration must fit together as a coherent experience.",
    solution: "HomePilot brings these capabilities into a full-stack application, pairing a React interface with FastAPI services and MongoDB storage.",
    architecture: [
      { title: "User experience", description: "React provides the interface for profiles, catalog discovery, and booking journeys." },
      { title: "API layer", description: "FastAPI exposes REST endpoints for application and administrative functionality." },
      { title: "Persistence", description: "MongoDB supports the application's document-oriented data needs." },
    ],
    role: "Full-stack application development.",
    contributions: ["Connected React interfaces with FastAPI REST services.", "Worked across user-facing and administrative application capabilities."],
    github: "", liveUrl: "", featured: false, visual: "home",
  },
  {
    slug: "portfolio", title: "The portfolio", category: "Design meets engineering",
    description: "A considered digital home for the work, and the thinking behind it.",
    longDescription: "A personal portfolio built to communicate an AI and full-stack engineering practice through focused storytelling and detailed project case studies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide"],
    features: ["Responsive design", "Project case studies", "Accessible navigation", "Dark & light themes", "SEO metadata", "Static rendering"],
    problem: "A list of technologies says little about how an engineer approaches real applications. The work needs context, clear hierarchy, and room for technical detail.",
    solution: "A content-driven portfolio with an original engineering visual, structured project case studies, and a clear connection between full-stack experience and AI development.",
    architecture: [
      { title: "Content model", description: "Typed data modules keep project information, skills, and profile settings in one place." },
      { title: "Presentation", description: "Next.js server components render the content. Small client components handle navigation, themes, and the contact form." },
      { title: "Delivery", description: "Static export produces portable HTML with route metadata, a sitemap, and minimal interactive JavaScript." },
    ],
    role: "Personal portfolio design and implementation.",
    contributions: ["Defined the information architecture and visual direction.", "Built responsive pages and a reusable, typed project system.", "Included keyboard navigation, reduced-motion support, and configurable contact details."],
    github: "", liveUrl: "", featured: false, visual: "portfolio",
  },
];
