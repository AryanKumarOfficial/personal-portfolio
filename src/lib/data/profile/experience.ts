export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "madrocket",
    role: "Full-Stack Developer Intern",
    company: "Madrocket Technologies",
    period: "2025",
    location: "Remote",
    description:
      "Built scalable dashboard modules, authentication flows, and optimized database queries using Next.js and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Developed SaaS dashboards, admin panels, and backend systems with authentication, analytics, and scalable architecture.",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
  },
];
