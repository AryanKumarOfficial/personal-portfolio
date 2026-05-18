export type Project = {
    id: string;
    title: string;
    description: string;
    tech: readonly string[];
    github?: string;
    live?: string;
    image: string;
};

export const projects: Project[] = [
    {
        id: "agrilearn-nexus",
        title: "AgriLearn Nexus",
        description:
            "An AI-powered agri-education and smart farming platform focused on improving agricultural learning, crop management, and farmer accessibility. Features include multilingual learning modules, AI-driven recommendations, real-time agricultural insights, interactive dashboards, and responsive modern UI for students, researchers, and farmers.",
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
    },
    {
        id: "jct-journal",
        title: "JCT Journal Management System",
        description:
            "A full-stack academic journal platform with end-to-end manuscript submission, peer review workflows, role-based access (Author, Reviewer, Editor, Admin), revision tracking, and publication scheduling. Containerised with Docker and backed by PostgreSQL.",
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
    },
];
