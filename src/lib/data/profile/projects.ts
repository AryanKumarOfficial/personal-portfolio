export type Project = {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  github?: string;
  live?: string;
  image: string;
};

export const projects: readonly Project[] = [
  {
    id: "student-platform",
    title: "Student Collaboration Platform",
    description:
      "A full-stack platform enabling students to collaborate, find teammates, and manage projects with role-based access and real-time updates.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    github: "https://github.com/aryankumarofficial",
    live: "#",
    image: "/images/projects/project1.png",
  },
  {
    id: "school-dashboard",
    title: "School Management Dashboard",
    description:
      "Multi-role SaaS dashboard for managing students, leads, and analytics with authentication and scalable backend architecture.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/aryankumarofficial",
    live: "#",
    image: "/images/projects/project2.png",
  },
  {
    id: "ecommerce-backend",
    title: "MERN E-commerce Backend",
    description:
      "Production-ready backend with authentication, product management, orders, and scalable REST API architecture.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/aryankumarofficial",
    image: "/images/projects/project3.png",
  },
];
