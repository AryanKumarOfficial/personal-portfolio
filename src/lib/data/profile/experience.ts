export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tech: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    id: `madrocket`,
    role: `Full-Stack Developer Intern`,
    company: `Madrocket Media and Technology`,
    period: "2025",
    location: "remote",
    description: `Worked on scalable dashboard features, implemented authentication flows, optimized database queries, and improved UI performance using Next.js and PostgreSQL.`,
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "React.js",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Built SaaS dashboards, admin panels, and full-stack web apps for clients with authentication, analytics, and scalable backend systems.",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
  },
];
