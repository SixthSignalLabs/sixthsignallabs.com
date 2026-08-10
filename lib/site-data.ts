export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export type ActionLink = {
  readonly label: string;
  readonly href: string;
};

export type ServiceVisual =
  | "mobile-stack"
  | "browser-grid"
  | "system-map"
  | "interface-canvas"
  | "release-path"
  | "performance-wave";

export type Service = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly capabilities: readonly string[];
  readonly visual: ServiceVisual;
};

export type CaseStudy = {
  readonly id: string;
  readonly name: string;
  readonly badge: string;
  readonly isPlaceholder: true;
  readonly industry: string;
  readonly platforms: readonly string[];
  readonly description: string;
  readonly services: readonly string[];
  readonly image: {
    readonly src: string | null;
    readonly alt: string;
  };
  readonly metrics: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly caseStudyHref: string | null;
  readonly mockup: "mobile" | "browser" | "dashboard";
};

export type ProcessStage = {
  readonly number: string;
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly output: string;
};

export type TechnologyGroupId =
  | "frontend"
  | "mobile"
  | "backend"
  | "infrastructure";

export type TechnologyGroup = {
  readonly id: TechnologyGroupId;
  readonly label: string;
  readonly summary: string;
  readonly technologies: readonly string[];
  readonly connectsTo: readonly TechnologyGroupId[];
};

export type Differentiator = {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
};

export type Testimonial = {
  readonly id: string;
  readonly quote: string;
  readonly clientName: string;
  readonly role: string;
  readonly company: string;
  readonly avatarSrc: string | null;
  readonly isPlaceholder: true;
  readonly isVerified: false;
};

export type FooterLink = {
  readonly label: string;
  readonly href: string | null;
  readonly isPlaceholder?: boolean;
};

export type SiteData = {
  readonly metadata: {
    readonly name: string;
    readonly title: string;
    readonly description: string;
    readonly canonicalUrl: string | null;
    readonly logoAlt: string;
  };
  readonly navigation: {
    readonly items: readonly NavigationItem[];
    readonly cta: ActionLink;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly primaryAction: ActionLink;
    readonly secondaryAction: ActionLink;
    readonly signalStages: readonly string[];
  };
  readonly intro: {
    readonly eyebrow: string;
    readonly statement: string;
    readonly body: string;
  };
  readonly servicesSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly items: readonly Service[];
  };
  readonly workSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly placeholderNotice: string;
    readonly items: readonly CaseStudy[];
  };
  readonly processSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly stages: readonly ProcessStage[];
  };
  readonly technologySection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly groups: readonly TechnologyGroup[];
  };
  readonly differentiatorsSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly items: readonly Differentiator[];
  };
  readonly statementSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
  };
  readonly testimonialsSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly items: readonly Testimonial[];
  };
  readonly contactSection: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly primaryAction: ActionLink;
    readonly email: {
      readonly label: string;
      readonly value: string;
      readonly href: string | null;
      readonly isConfirmed: false;
    };
  };
  readonly footer: {
    readonly tagline: string;
    readonly navigation: readonly NavigationItem[];
    readonly socialLinks: readonly FooterLink[];
    readonly legalLinks: readonly FooterLink[];
    readonly copyright: string;
  };
};

export const navigationItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const satisfies readonly NavigationItem[];

export const services = [
  {
    id: "mobile-apps",
    number: "01",
    title: "Mobile apps",
    summary:
      "Native-quality iOS and Android experiences built around clear workflows, responsive interactions, and a codebase ready to evolve.",
    capabilities: [
      "iOS and Android",
      "React Native, Flutter, or native",
      "App architecture and release",
    ],
    visual: "mobile-stack",
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web applications",
    summary:
      "Fast, accessible web products with thoughtful UX, robust frontend architecture, and performance engineered in from the start.",
    capabilities: [
      "Product interfaces",
      "Responsive platforms",
      "Frontend architecture",
    ],
    visual: "browser-grid",
  },
  {
    id: "product-engineering",
    number: "03",
    title: "Product engineering",
    summary:
      "The systems behind the interface: APIs, data models, integrations, backend services, and cloud infrastructure that work as one product.",
    capabilities: ["Backend and APIs", "Data and integrations", "Cloud systems"],
    visual: "system-map",
  },
  {
    id: "ui-ux",
    number: "04",
    title: "UI / UX",
    summary:
      "Product strategy, UX architecture, interaction design, and interface systems shaped alongside the engineering that brings them to life.",
    capabilities: ["Product strategy", "UX and prototyping", "Design systems"],
    visual: "interface-canvas",
  },
  {
    id: "mvp-development",
    number: "05",
    title: "MVP development",
    summary:
      "A focused path from open questions to a production-ready first release—scoped to learn quickly without creating a disposable foundation.",
    capabilities: ["Scope and roadmap", "Design and build", "Launch readiness"],
    visual: "release-path",
  },
  {
    id: "product-scaling",
    number: "06",
    title: "Product scaling",
    summary:
      "Targeted improvements to architecture, reliability, speed, and product experience as usage, complexity, and team needs grow.",
    capabilities: ["Architecture review", "Performance and reliability", "UX refinement"],
    visual: "performance-wave",
  },
] as const satisfies readonly Service[];

export const caseStudies = [
  {
    id: "project-one",
    name: "Project One",
    badge: "Case study placeholder",
    isPlaceholder: true,
    industry: "Industry to be confirmed",
    platforms: ["Platform to be confirmed"],
    description:
      "Replace this copy with a verified project overview before publishing client work.",
    services: ["Services to be confirmed"],
    image: {
      src: null,
      alt: "Project One image placeholder",
    },
    metrics: [],
    caseStudyHref: null,
    mockup: "mobile",
  },
  {
    id: "project-two",
    name: "Project Two",
    badge: "Case study placeholder",
    isPlaceholder: true,
    industry: "Industry to be confirmed",
    platforms: ["Platform to be confirmed"],
    description:
      "Replace this copy with a verified project overview before publishing client work.",
    services: ["Services to be confirmed"],
    image: {
      src: null,
      alt: "Project Two image placeholder",
    },
    metrics: [],
    caseStudyHref: null,
    mockup: "browser",
  },
  {
    id: "project-three",
    name: "Project Three",
    badge: "Case study placeholder",
    isPlaceholder: true,
    industry: "Industry to be confirmed",
    platforms: ["Platform to be confirmed"],
    description:
      "Replace this copy with a verified project overview before publishing client work.",
    services: ["Services to be confirmed"],
    image: {
      src: null,
      alt: "Project Three image placeholder",
    },
    metrics: [],
    caseStudyHref: null,
    mockup: "dashboard",
  },
] as const satisfies readonly CaseStudy[];

export const processStages = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    summary:
      "Understand the business, the users, the constraints, and the opportunity worth pursuing.",
    output: "Shared product direction",
  },
  {
    number: "02",
    id: "design",
    title: "Design",
    summary:
      "Define the experience, product architecture, interaction model, and interface system.",
    output: "Validated product blueprint",
  },
  {
    number: "03",
    id: "build",
    title: "Build",
    summary:
      "Engineer the frontend, backend, integrations, and infrastructure as one dependable system.",
    output: "Production-ready software",
  },
  {
    number: "04",
    id: "launch",
    title: "Launch",
    summary:
      "Test, optimize, deploy, monitor, and keep learning from how the product is used.",
    output: "Measured release and iteration",
  },
] as const satisfies readonly ProcessStage[];

export const technologyGroups = [
  {
    id: "frontend",
    label: "Frontend",
    summary: "Interfaces shaped for speed, clarity, and maintainability.",
    technologies: ["Next.js", "React", "TypeScript"],
    connectsTo: ["backend", "infrastructure"],
  },
  {
    id: "mobile",
    label: "Mobile",
    summary: "Platform-aware experiences for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    connectsTo: ["backend"],
  },
  {
    id: "backend",
    label: "Backend",
    summary: "APIs, services, and data models designed around the product.",
    technologies: ["Node.js", "Python", "Go", "PostgreSQL"],
    connectsTo: ["infrastructure"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    summary: "Practical foundations for deployment, observability, and scale.",
    technologies: ["AWS", "Google Cloud", "Vercel", "Docker"],
    connectsTo: [],
  },
] as const satisfies readonly TechnologyGroup[];

export const differentiators = [
  {
    number: "01",
    title: "Product thinking, not ticket taking",
    summary:
      "We question assumptions, clarify tradeoffs, and help shape the right product before committing to code.",
  },
  {
    number: "02",
    title: "Senior engineering from day one",
    summary:
      "Early architecture decisions account for maintainability, performance, security, and the realities of future change.",
  },
  {
    number: "03",
    title: "Design and engineering together",
    summary:
      "Interaction and technical decisions happen in the same conversation, keeping the experience ambitious and buildable.",
  },
  {
    number: "04",
    title: "Built for momentum",
    summary:
      "Small teams, direct communication, and visible increments keep decisions moving and the product grounded in progress.",
  },
] as const satisfies readonly Differentiator[];

export const testimonials = [
  {
    id: "testimonial-placeholder",
    quote: "Client testimonial goes here.",
    clientName: "Client name",
    role: "Role",
    company: "Company",
    avatarSrc: null,
    isPlaceholder: true,
    isVerified: false,
  },
] as const satisfies readonly Testimonial[];

export const siteData = {
  metadata: {
    name: "Sixth Signal Labs",
    title: "Sixth Signal Labs — Mobile & Web Product Development",
    description:
      "Sixth Signal Labs designs and engineers high-quality mobile apps, web applications, and digital products for startups and ambitious companies.",
    canonicalUrl: null,
    logoAlt: "Sixth Signal Labs",
  },
  navigation: {
    items: navigationItems,
    cta: { label: "Start a project", href: "#contact" },
  },
  hero: {
    eyebrow: "Independent product engineering studio",
    heading: "We build software people want to use.",
    body:
      "Sixth Signal Labs designs and engineers mobile apps, web platforms, and digital products for ambitious teams—from first idea to production.",
    primaryAction: { label: "Start a project", href: "#contact" },
    secondaryAction: { label: "See our work", href: "#work" },
    signalStages: ["Idea", "Design", "Engineering", "Launch"],
  },
  intro: {
    eyebrow: "One integrated product team",
    statement: "Strategy. Design. Engineering. One product team.",
    body:
      "We turn product questions into clear decisions, dependable systems, and software ready for real users.",
  },
  servicesSection: {
    eyebrow: "Capabilities",
    heading: "Everything needed to turn an idea into a product.",
    body:
      "From the first product decision to the systems behind launch, we connect design and engineering across the full build.",
    items: services,
  },
  workSection: {
    eyebrow: "Selected work",
    heading: "Products we've brought to life.",
    body:
      "A structure for the product stories, design decisions, and engineering work behind selected launches.",
    placeholderNotice:
      "Project slots are placeholders for verified case studies; no clients, outcomes, or metrics are represented here.",
    items: caseStudies,
  },
  processSection: {
    eyebrow: "How we work",
    heading: "From signal to shipped product.",
    body:
      "One continuous product loop turns ambiguity into direction, direction into software, and every release into the next useful signal.",
    stages: processStages,
  },
  technologySection: {
    eyebrow: "Engineering system",
    heading: "Built with technology that lasts.",
    body:
      "We choose proven tools around the needs of the product—not the other way around—and keep every layer understandable as it grows.",
    groups: technologyGroups,
  },
  differentiatorsSection: {
    eyebrow: "Why Sixth Signal Labs",
    heading: "A product team with engineering depth.",
    body:
      "The work stays close to the people making it, from the earliest product choices through production.",
    items: differentiators,
  },
  statementSection: {
    eyebrow: "Work as one team",
    heading: "Your product shouldn’t feel outsourced.",
    body:
      "We work as an extension of your team—from the first product conversation through launch and what comes next.",
  },
  testimonialsSection: {
    eyebrow: "Client perspective",
    heading: "What it’s like to build together.",
    body: "Verified client perspectives will appear here.",
    items: testimonials,
  },
  contactSection: {
    eyebrow: "Start a conversation",
    heading: "Have something worth building?",
    body: "Let’s turn it into something clear, useful, and ready to grow.",
    primaryAction: { label: "Start a project", href: "#contact-form" },
    email: {
      label: "Email address placeholder",
      value: "hello@sixthsignallabs.com",
      href: null,
      isConfirmed: false,
    },
  },
  footer: {
    tagline: "Software, designed and engineered as one system.",
    navigation: navigationItems,
    socialLinks: [
      { label: "LinkedIn", href: null, isPlaceholder: true },
      { label: "GitHub", href: null, isPlaceholder: true },
      { label: "X", href: null, isPlaceholder: true },
    ],
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    copyright: "© Sixth Signal Labs",
  },
} as const satisfies SiteData;
