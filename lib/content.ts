export const profile = {
  name: "Mahima Sindal",
  title: "Senior Software Engineer",
  location: "Ahmedabad, India",
  openTo: "Open to relocation: Europe / UK",
  email: "mahimasindal@gmail.com",
  phone: "+91-9588280989",
  summary:
    "Senior Software Engineer with 5+ years of experience building B2B SaaS platforms, high-throughput email infrastructure, and cloud-native distributed systems processing millions of daily events. Experienced in designing scalable messaging systems and email campaigns, production reliability, distributed architectures, observability, and mentoring engineering teams.",
  headline: "I build the infrastructure behind millions of emails a day.",
  links: {
    linkedin: "https://www.linkedin.com/in/mahima-sindal-268793183",
    github: "https://github.com/mahimasindal",
    leetcode: "https://leetcode.com/u/mahima_sindal",
    resume: "/Mahima_Sindal_Resume.pdf",
  },
};

export const taglines: string[] = [
  "I teach servers to talk nicely to each other... and now I'm teaching AI to join the conversation.",
  "Professional bug creator. Even more professional bug fixer.",
  "Building backend systems by day. Teaching AI new tricks by night.",
  "Making distributed systems smarter and AI agents more useful.",
  "Professional translator between humans, APIs, and AI.",
  "Teaching computers to do the boring stuff since 2020.",
  "Everything is eventually consistent. Even my career path.",
  "If it scales, I'm interested. If it breaks at scale, I'm fascinated.",
  "Building products that scale. Breaking them only in development.",
  "Turning coffee into APIs and ideas into products.",
  "Prompt engineering is just debugging... in English.",
  "Trying to automate myself out of repetitive work. So far, so good.",
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Node.js",
      "NestJS",
      "Express",
      "Spring Boot",
      "ReactJS",
    ],
  },
  {
    category: "Databases & Infrastructure",
    items: [
      "MySQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "OpenSearch / ElasticSearch",
      "AWS (EC2, RDS, Aurora)",
      "Docker",
      "CI/CD",
      "Grafana",
      "ClickHouse",
    ],
  },
  {
    category: "AI & Engineering Productivity",
    items: [
      "OpenAI",
      "Claude",
      "LangChain",
      "LangGraph",
      "MCP",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  {
    category: "Concepts & Tools",
    items: [
      "System Design",
      "Data Structures & Algorithms",
      "Microservice Architecture",
      "Unit Testing (Jest)",
      "JMeter",
      "Postman",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  stats?: { value: string; label: string }[];
  bullets: { label: string; detail: string; link?: { href: string; text: string } }[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer – Backend",
    org: "Saleshandy",
    dates: "Sept 2022 – Present",
    stats: [
      { value: "4M+", label: "Daily emails" },
      { value: "90%", label: "Fewer incidents" },
      { value: "400M+", label: "Docs indexed" },
      { value: "8+", label: "Engineers mentored" },
    ],
    bullets: [
      {
        label: "Messaging Infrastructure",
        detail:
          "Owned and evolved distributed backend infrastructure powering 4M+ daily email deliveries and 2M+ mailbox interactions, improving throughput while maintaining high availability and achieving 80% unit test coverage.",
        link: { href: "https://saleshandy.com/outreach", text: "saleshandy.com/outreach" },
      },
      {
        label: "Product Engineering",
        detail:
          "Contributed to Saleshandy's CRM, Unified Inbox, and multi-channel engagement platform, enabling customer communication workflows across Email, WhatsApp, Calls, LinkedIn (manual & automated), and Task management alongside large-scale email delivery infrastructure.",
        link: { href: "https://saleshandy.com/crm", text: "saleshandy.com/crm" },
      },
      {
        label: "Production Reliability",
        detail:
          "Engineered resilient production systems using fallback mechanisms, idempotent execution strategies, observability dashboards, and proactive Grafana alerting, reducing production support incidents by ~90%. Resolved production issues through log analysis, monitoring, root cause investigation, and system improvements.",
      },
      {
        label: "Search Infrastructure",
        detail:
          "Engineered OpenSearch infrastructure across 400M+ and 80M+ document indexes, maintaining latency at 100-200ms. Benchmarked semantic search performance with different embedding models.",
        link: { href: "https://saleshandy.com/lead-finder", text: "saleshandy.com/lead-finder" },
      },
      {
        label: "Data Ingestion",
        detail:
          "Contributed to an S3-backed Kubernetes ingestion pipeline processing ~1.2 TB of data by implementing OpenSearch Painless transformation scripts.",
      },
      {
        label: "AI Optimization",
        detail:
          "Engineered automated reply categorization and AI data preparation pipelines that optimized OpenAI prompt context, reducing LLM token usage and saving approximately $150/month.",
        link: { href: "https://saleshandy.com/unified-inbox", text: "saleshandy.com/unified-inbox" },
      },
      {
        label: "Engineering Leadership",
        detail:
          "Mentored 8+ engineers through technical guidance, design discussions, and code reviews while developing AI-assisted hiring workflows that reduced manual recruitment effort by 5–6 hours per week. Collaborated cross-functionally with founders, product, support, and engineering teams to deliver platform capabilities.",
      },
    ],
  },
  {
    role: "Software Developer – FullStack",
    org: "Accenture",
    dates: "Jan 2021 – Sept 2022",
    bullets: [
      {
        label: "API & Backend",
        detail: "Engineered RESTful APIs and PL/SQL scripts reliably aggregating daily telecom data.",
      },
      {
        label: "Python Automation",
        detail:
          "Automated complex data migration and validation workflows using Python, eliminating manual overhead and saving 5+ hours/week in engineering effort.",
      },
      {
        label: "Frontend Monitoring Tooling",
        detail:
          "Built real-time network monitoring dashboards using ReactJS to visualize critical telecom usage metrics and enhance operational observability.",
      },
    ],
  },
];

export type ProjectEntry = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: { href: string; text: string };
};

export const projects: ProjectEntry[] = [
  {
    name: "BrandVeda",
    tagline: "AI Brand Visibility Intelligence Platform",
    description:
      "Designed data pipelines executing 54 parallel LLM evaluations across multiple models to quantify brand share-of-voice.",
    tags: ["NestJS", "MongoDB", "OpenAI", "Gemini", "Perplexity"],
    link: { href: "https://github.com/mahimasindal/brandveda-backend", text: "GitHub" },
  },
  {
    name: "Ecommerce Backend",
    tagline: "RESTful e-commerce API",
    description:
      "Built a Node.js/Express e-commerce API with JWT-authenticated accounts, product and review management, order processing, and admin controls.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: { href: "https://github.com/mahimasindal/ecommerce-backend", text: "GitHub" },
  },
];

export const education = {
  school: "Jaipur Engineering College and Research Centre (JECRC)",
  degree: "Bachelor of Technology (B.Tech.), Computer Science Engineering",
  dates: "2016 – 2020",
  languages: "English (Full Professional Proficiency), Hindi (Native)",
  certification: "HackerRank Certified Software Engineer / Python",
};

export type StoryEntry = {
  title: string;
  body: string;
};

export const stories: StoryEntry[] = [
  {
    title: "I Find Problems Others Miss",
    body: "Whether it's revenue leakages or inefficient workflows, I enjoy uncovering hidden issues before they become bigger problems.",
  },
  {
    title: "I Build Systems That Last",
    body: "I simplify complex backend systems into scalable, maintainable, and observable solutions that teams can confidently build on.",
  },
  {
    title: "I Thrive Under Production Pressure",
    body: "From late-night incidents to five-minute debugging sessions, I enjoy solving high-impact production problems with speed and clarity.",
  },
];

export const personality = {
  reading: {
    status: "Currently reading",
    title: "The Mountain Is You",
    author: "Brianna Wiest",
  },
  hobbies: ["Reading", "Cycling", "Running", "Singing"],
};
