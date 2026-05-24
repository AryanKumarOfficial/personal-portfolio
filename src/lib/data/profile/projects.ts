export type Project = {
    id: string;
    title: string;
    description: string;
    tech: readonly string[];
    github?: string;
    live?: string;
    image: string;
    blog?: {
        overview: string;
        architecture: string;
        technicalChallenges: { title: string; description: string }[];
        learnings: string;
    };
};

export const projects: Project[] = [
    {
        id: "pulsecheck-saas",
        title: "PulseCheck – Downtime Monitoring SaaS",
        description:
            "A comprehensive B2B SaaS platform for real-time endpoint monitoring. Features include background cron jobs, SSL certificate tracking, incident logging, role-based tenant access, and Razorpay subscription billing.",
        tech: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "InsForge BaaS",
            "PostgreSQL",
            "Razorpay",
            "Zustand",
            "Recharts",
        ] as const,
        github: "https://github.com/aryankumarofficial/downtime-detector-saas",
        live: "https://pulse-check.aryankumarofficial.dev",
        image: "/images/projects/pulse-check.png",
        blog: {
            overview: "PulseCheck was engineered to provide developers and startups with a highly reliable, low-latency system for monitoring their critical infrastructure. It required building a scalable background task queue, managing complex B2B multi-tenant architecture, and handling subscription lifecycles.",
            architecture: "The platform utilizes a Next.js App Router frontend seamlessly integrated with InsForge (a Backend-as-a-Service platform) for the PostgreSQL database, authentication, and Serverless Edge Functions. Background monitoring runs on scheduled Edge Functions, which write telemetry data directly to the database without blocking the main application thread.",
            technicalChallenges: [
                {
                    title: "Scalable Background Telemetry",
                    description: "Executing HTTP pings across hundreds of tenant URLs asynchronously without choking a monolithic server process. I resolved this by offloading the heavy lifting to InsForge Edge Functions driven by CRON triggers, strictly decoupling the monitoring workload from the main Next.js API layer."
                },
                {
                    title: "Idempotent B2B Subscriptions",
                    description: "Handling role-based access and strict subscription tier limits (e.g., maximum 5 monitors on the Pro plan). I implemented secure, idempotent webhook signature verification via Razorpay and enforced subscription entitlements at the database schema level."
                }
            ],
            learnings: "I gained deep expertise in architecting serverless background task workflows and managing robust, secure subscription lifecycles utilizing third-party payment providers within a strict B2B multi-tenant environment."
        }
    },
    {
        id: "agrilearn-nexus",
        title: "AgriLearn Nexus",
        description:
            "An AI-powered agri-education and smart farming platform focused on improving agricultural learning, crop management, and farmer accessibility.",
        tech: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "AI Integration",
            "JWT",
            "Responsive Design",
        ] as const,
        github: "https://github.com/agrilearn-Nexus/agrilearn-temp",
        live: "https://agrilearnnexus.com",
        image: "/images/projects/agrilearn-nexus.png",
        blog: {
            overview: "AgriLearn Nexus was built to bridge the technology gap in the agricultural sector. The goal was to provide an intelligent, multilingual platform that could ingest complex agricultural data and translate it into actionable insights for farmers and researchers.",
            architecture: "We adopted a multi-tier serverless architecture using Next.js for SSR and static generation, keeping TTFB incredibly low. The backend logic relies heavily on Node.js microservices interfacing with MongoDB to store rich pedagogical content and user progress securely using JWT-based auth.",
            technicalChallenges: [
                {
                    title: "Multilingual AI Inference Pipeline",
                    description: "Farmers spanning different geographic regions required prompt localized responses. We had to implement an AI middleware layer that translates inputs before passing them to the core NLP model, increasing latency. We mitigated this by caching common translation mappings in a Redis-like layer."
                },
                {
                    title: "Offline-First Data Sync",
                    description: "Network connectivity in rural areas is notoriously flaky. We utilized service workers and IndexedDB via a custom data sync layer to ensure farmers could still read downloaded modules and queue telemetry data to be synced when the connection was restored."
                }
            ],
            learnings: "Building AgriLearn taught me the nuances of designing state machines that handle unpredictable network conditions. I also gained deep experience in optimizing context windows for LLMs while keeping translation costs minimal."
        }
    },
    {
        id: "jct-journal",
        title: "JCT Journal Management System",
        description:
            "A full-stack academic journal platform with end-end manuscript submission, peer review workflows, role-based access (Author, Reviewer, Editor, Admin), revision tracking, and publication scheduling. Containerised with Docker and backed by PostgreSQL.",
        tech: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "JWT",
            "TailwindCSS",
        ] as const,
        github: "https://github.com/aryankumarofficial/jct",
        live: "https://jct.vercel.app",
        image: "/images/projects/jct-journal.png",
        blog: {
            overview: "Managing an academic journal involves strict phase transitions (submit, review, revise, publish) and heavy document control. JCT Journal Management System was built to digitalize and automate this entire pipeline, replacing archaic email-based workflows with a unified dashboard.",
            architecture: "The application utilizes the Next.js App Router with Server Actions to securely interact with a PostgreSQL database via Prisma ORM. For deployment consistency, the app and database are containerized using Docker, allowing self-hosting capabilities.",
            technicalChallenges: [
                {
                    title: "Complex Role-Based Access Control (RBAC)",
                    description: "Different actors (Authors, Editors, Reviewers) required completely isolated views and strictly enforced permissions. I implemented a robust centralized authorization logic using Next.js middleware and Prisma extensions to prevent privilege escalation."
                },
                {
                    title: "State Machine for Manuscript Lifecycle",
                    description: "Moving manuscripts through review phases without entering an invalid state was difficult. I resolved this by building a definitive state machine pattern in the backend service layer, enforcing transactional integrity for every workflow step."
                }
            ],
            learnings: "This project heavily reinforced my understanding of ACID transactions in PostgreSQL and taught me how to effectively architect scalable, secure RBAC patterns within full-stack Next.js applications."
        }
    },
    {
        id: "blind-app",
        title: "Blind – Anonymous College Community",
        description:
            "A production-style anonymous social platform for college students featuring engagement-based feed ranking, custom JWT + OTP authentication, anonymous posting and commenting, and real-time feed updates built with TanStack Query.",
        tech: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "TanStack Query",
            "JWT",
            "Docker",
        ] as const,
        github: "https://github.com/aryankumarofficial/blind-app",
        live: "https://blind-app-rust.vercel.app",
        image: "/images/projects/blind-app.png",
        blog: {
            overview: "Blind was built to serve as an engagement-driven, completely anonymous social layer for college students. It required a high-performance backend capable of instant feed updates while rigorously enforcing user privacy and data security.",
            architecture: "Built on the Next.js Edge Runtime, the app leverages Prisma with PostgreSQL for relational integrity. The frontend makes heavy use of TanStack Query for optimistic UI updates, ensuring interactions like upvotes respond instantly prior to server confirmation.",
            technicalChallenges: [
                {
                    title: "Actionable Anonymity",
                    description: "I had to ensure users remained 100% anonymous while still retaining the ability to enforce moderation (bans/rate limits). I solved this by decoupling authentication identities from operational records—mapping hashed tokens via one-way encryption to moderate actions."
                },
                {
                    title: "Optimized Feed Ranking",
                    description: "Computing engagement scores dynamically for a live feed generated massive database loads on reads. I mitigated this by pre-computing ranking scores chronologically and utilizing standard caching patterns, keeping TTFB steady."
                }
            ],
            learnings: "I mastered optimistic UI implementation with TanStack Query and gained a nuanced understanding of how to balance heavy read/write ratios for modern social feeds."
        }
    },
    {
        id: "imagekit-online-store",
        title: "ImageKit Shop",
        description: "A full-stack digital asset storefront with a sleek, minimalist admin dashboard. It features secure credential authentication, dynamic product variant pricing, Razorpay payment integration, and a seamless image processing pipeline.",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI",
            "Mongoose",
            "NextAuth",
            "Razorpay",
            "ImageKit"
        ],
        github: "https://github.com/aryankumarofficial/imagekit-online-store",
        live: "https://image-store-delta.vercel.app/",
        image: "/images/projects/image-kit.png",
        blog: {
            overview: "ImageKit Shop is an end-to-end e-commerce solution tailored specifically for digital asset delivery. The goal was to build a storefront that handles frictionless payment routing alongside serving optimized high-resolution imagery.",
            architecture: "The application employs a Next.js full-stack setup with NextAuth managing secure credential authentication. MongoDB (via Mongoose) manages flexible product schemas. Media uploads are piped directly into ImageKit to reduce local server bloat, and transactional logic uses the Razorpay API.",
            technicalChallenges: [
                {
                    title: "Image Processing Pipeline",
                    description: "Uploading and serving raw high-resolution assets directly crippled load times and bandwidth limits. I offloaded image processing entirely to ImageKit, utilizing their URL-based transformation API to serve WebP/AVIF formats dynamically."
                },
                {
                    title: "Secure Payment Webhooks",
                    description: "Ensuring that successful payments reliably translated to order fulfillment—even during network blips. I implemented strict signature verification for Razorpay webhooks and idempotent order processing logic to mathematically prevent duplicate orders."
                }
            ],
            learnings: "I gained rigorous practical experience in building secure, idempotent payment workflows and utilizing edge-based Media CDNs to rapidly deliver heavy media assets."
        }
    },
    {
        id: "fitwell",
        title: "FitWell – Wellness Dashboard",
        description:
            "An interactive wellness dashboard built with the latest Next.js 15 and React 19 stack. Features mood tracking, workout scheduling, goal setting, habit checklists, animated UI, and full dark/light theme customisation.",
        tech: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "Zustand",
            "Motion",
        ] as const,
        github: "https://github.com/aryankumarofficial/fitwell",
        live: "https://the-fitwell.vercel.app",
        image: "/images/projects/fitwell.png",
        blog: {
            overview: "FitWell was conceived as a highly interactive, client-heavy personal dashboard. It required extensive micro-interactions and an ultra-smooth user experience free of arbitrary page loads, designed entirely on the latest experimental React stacks.",
            architecture: "Built purely utilizing Next.js 15 and React 19 methodologies, taking deep advantage of server actions and seamless concurrent transitions. Zustand serves as the global state engine keeping data synchronized, while Framer Motion orchestrates intricate layout shifts.",
            technicalChallenges: [
                {
                    title: "Performant Layout Shifts",
                    description: "Moving heavy data blobs (mood charts, habits, trackers) simultaneously caused jank. I leaned aggressively into hardware-accelerated CSS transforms and Framer Motion's `layoutId` features to maintain a clean 60fps during repaints."
                },
                {
                    title: "Complex UI State Syncing",
                    description: "Keeping localized, real-time widget states in sync prior to server confirmation resulted in mismatched data logic. I implemented a robust persistence middleware pattern in Zustand stacked with debounced background synchronization."
                }
            ],
            learnings: "I successfully pushed the boundaries of React 19's concurrent rendering features, fundamentally leveling up my command over complex client-side state lifecycles and layout projection."
        }
    },
    {
        id: "cloudnote",
        title: "CloudNote – Note-Taking App",
        description:
            "A full-stack CRUD note-taking application with user authentication, tag/category organisation, and keyword search. Built end-to-end with Next.js, MongoDB, and TypeScript with a fully responsive design.",
        tech: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS", "React"] as const,
        github: "https://github.com/aryankumarofficial/cloudnote",
        live: "https://cloudinote.vercel.app",
        image: "/images/projects/cloudnote.png",
        blog: {
            overview: "CloudNote is a comprehensive productivity application engineered to maintain fast, responsive cross-device experiences while handling intensive full-text search and organization workflows.",
            architecture: "Structured entirely around the Next.js framework functioning as a monolith. MongoDB handles flexible document modeling, integrating natively with generic React hook patterns for fast local reads.",
            technicalChallenges: [
                {
                    title: "Robust Full-Text Tag Search",
                    description: "Scaling keyword search effectively without locking the main thread. I devised an efficient indexing method inside MongoDB coupled with a local client-side memory cache to autocomplete text."
                }
            ],
            learnings: "Reinforced core CRUD methodologies and expanded my foundation in NoSQL data modeling for document-heavy requirements."
        }
    },
    {
        id: "debugoist",
        title: "DebugOIST – University Tech Club Platform",
        description:
            "A responsive multi-page platform for the DebugOIST university tech club, featuring an event management module, structured UI architecture, and i18n support. Contributed the full event management system and performance optimisation.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"] as const,
        github: "https://github.com/aryankumarofficial/DebugOIST",
        live: "https://debugoist.vercel.app/en",
        image: "/images/projects/debugoist.png",
        blog: {
            overview: "As part of our University's Tech Club, DebugOIST needed a platform capable of handling diverse language footprints and rigorous event sign-ups simultaneously.",
            architecture: "A classic React/Next.js frontend with heavily optimized static-site generation (SSG). Next.js i18n systems act as the core routing layer for internationalization.",
            technicalChallenges: [
                {
                    title: "Static i18n Generation",
                    description: "Ensuring proper routing for localized paths (e.g., /en/events) without degrading SEO performance. Extensively optimized Next.js dynamic routing to pre-generate localized event templates."
                }
            ],
            learnings: "Built critical team-based collaboration habits, refined my skills in implementing Next.js localization features, and improved static asset delivery pipelines."
        }
    },
];
