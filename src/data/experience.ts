export interface Experience {
  title: string;
  company: string;
  period?: string;
  // Either an image under /public or initials shown on the coloured tile.
  logo?: string;
  initials?: string;
  // Crop the logo to the tile instead of fitting it, for files with padding baked in.
  logoCover?: boolean;
  // Round badge logos: drop the tile padding and zoom past the file's own margin.
  logoFill?: boolean;
  logoBg: string;
  description?: string;
  achievements: string[];
  // Shown as chips. Use the exact keywords recruiters search for.
  tech: string[];
}

export const experience: Experience[] = [
  {
    title: 'Lead Software Engineer',
    company: 'Walmart International',
    period: 'May 2026 – Present',
    logo: '/img/walmart-spark.svg',
    logoBg: '#0053e2',
    description:
      'Architected high-performance, full-stack global commerce interfaces and distributed backend services with Rust and Node.js for Walmart International, driving critical digital shopping experiences for hundreds of millions of peak monthly users in dozens of languages.',
    achievements: [],
    tech: ['Rust', 'Node.js', 'Microservices', 'Distributed Systems', 'Internationalization (i18n)'],
  },
  {
    title: 'Head of AI Engineering',
    company: 'SureSteps',
    period: 'May 2025 – May 2026',
    logo: '/img/suresteps.jpeg',
    logoBg: '#ffffff',
    description:
      'Solely architected an enterprise multimodal GenAI platform, engineering custom RAG, high-throughput document extraction, and hybrid retrieval pipelines to power end-to-end intelligent knowledge synthesis.',
    achievements: [
      'Architected the full product end-to-end: responsive web app, cross-platform mobile app, and scalable backend services',
      'Designed an AI-powered data pipeline for intelligent content analysis, classification, and enrichment',
      'Integrated Salesforce CRM for seamless customer data sync and automated workflows',
    ],
    tech: ['Generative AI', 'LLMs', 'RAG', 'Vector Databases', 'Python', 'TypeScript', 'Next.js', 'AWS'],
  },
  {
    title: 'Lead Engineer',
    company: 'Nike',
    period: 'Jan 2025 – Dec 2025',
    logo: '/img/nike.png',
    logoBg: '#ffffff',
    description:
      'Led full-stack architecture for Nike’s enterprise athlete dashboards and core services, serving as the foundational upstream data source powering all downstream systems company-wide.',
    achievements: [
      'Architected real-time inventory services handling millions of requests',
      'Decreased release cycles by 30% through advanced CI/CD automation',
      'Delivered distributed event-driven workflows using NATS and Node.js',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'DynamoDB', 'Event-Driven Architecture', 'CI/CD'],
  },
  {
    title: 'Lead Engineer',
    company: 'Mars (mms.com)',
    period: 'Jul 2023 – Jan 2025',
    logo: '/img/mms.png',
    logoBg: '#D52B1E',
    description:
      "Led full-stack architecture and delivery for M&M'S global e-commerce platform, scaling custom DTC ordering flows to flawlessly support 3M+ peak monthly users.",
    achievements: [
      'Built services reducing packaging processing time by 85%',
      'Improved uptime to 99.9% across digital storefronts',
      'Architected delivery ETA engine with sub-40ms response',
    ],
    tech: ['React', 'Node.js', 'Java', 'Python'],
  },
  {
    title: 'Senior Engineer',
    company: 'Apple (SPG)',
    period: 'Jul 2022 – Jul 2023',
    logo: '/img/apple.png',
    logoCover: true,
    logoBg: '#4A4A4A',
    description:
      'Engineered distributed telemetry services and real-time analytics dashboards processing billions of events to power mission-critical observability at massive scale.',
    achievements: [
      'Reduced render time by 40% via virtualized components',
      'Built shared UI kit used by 200+ apps',
      'Boosted simulation platform UX through async optimization',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Distributed Systems', 'Observability', 'Real-Time Analytics'],
  },
  {
    title: 'Senior Engineer',
    company: 'Nike',
    period: 'Jul 2021 – Jul 2022',
    logo: '/img/nike.png',
    logoBg: '#ffffff',
    description:
      'Architected high-velocity warehouse automations that processed over 44 million records yearly and reclaimed 36,000+ hours of team bandwidth with Node.js and TypeScript.',
    achievements: [
      'Built a warehouse management service that cut stock shortages by 25%',
      'Scaled microservices to handle 20% more warehouse transactions',
      'Tuned MySQL queries and indexes, boosting database performance by 30%',
    ],
    tech: ['Node.js', 'TypeScript', 'Java', 'Microservices', 'DynamoDB', 'MySQL'],
  },
  {
    title: 'Software Engineer',
    company: 'Drive Social Media',
    period: 'Dec 2018 – Jul 2021',
    logo: '/img/drive.png',
    logoBg: '#1DA1F2',
    description:
      'Transformed the company’s tech landscape by rebuilding its entire product suite on React, NestJS, and AWS, architecting unified multi-provider analytics, automated content generation, and cross-platform scheduling to drive massive franchise growth.',
    achievements: [
      'Improved platform performance by 800% and increased user retention by 240%',
      'Delivered features that helped acquire 1,000 new clients (~$25M ARR)',
      'Built CI/CD pipelines on Jenkins and GitLab to accelerate releases',
    ],
    tech: ['React', 'NestJS', 'AWS', 'Microservices', 'CI/CD', 'Vue.js', 'Laravel', 'PHP'],
  },
  {
    title: 'Software Engineer',
    company: 'Impending Success LLC',
    period: 'Jul 2015 – Nov 2019',
    initials: 'IS',
    logoBg: '#1e293b',
    description:
      'Delivered custom full-stack solutions and modular CMS architectures across client projects using React, TypeScript, Vue, Node/NestJS, and Laravel to streamline content management and messaging systems.',
    achievements: [
      'Designed and shipped tailored solutions in Angular, React, Node.js, and Laravel',
      'Maintained 99.9% uptime across client production systems',
      'Delivered e-commerce platforms that boosted client sales by 40%',
    ],
    tech: ['React', 'TypeScript', 'Vue.js', 'Node.js', 'NestJS', 'Laravel'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Edgar County Humane Association',
    period: 'Jan 2014 – Jan 2016',
    logo: '/img/echa.png',
    logoFill: true,
    logoBg: '#ffffff',
    description:
      "Digitized the shelter's legacy paper operations from scratch by building an AngularJS web app, custom admin dashboard, and multi-source animal adoption API.",
    achievements: [
      'Built a custom adoption portal driving a 72% increase in engagement and 55% more adoptions',
      'Mobile-optimized UI grew registrations by 65% and volunteer sign-ups by 58%',
      'Developed secure APIs and payment integration, cutting form errors by 45%',
    ],
    tech: ['AngularJS', 'Node.js', 'REST APIs'],
  },
];
