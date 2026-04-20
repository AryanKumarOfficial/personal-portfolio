import Github from "@/assets/icons/Github";
import Linkedin from "@/assets/icons/Linkedin";
import { ComponentType } from "react";

export interface ContactDataType {
  title: string;
  description: string;
  email: string;
  availability: string;
  socials: Socail[];
}

export interface Socail {
  icon: ComponentType;
  href: string;
}

export const contact: ContactDataType = {
  title: "Let's work together",

  description:
    "I'm currently available for internships, freelance projects, and full-time roles. Feel free to reach out if you'd like to collaborate.",

  email: "aryan@aryankumarofficial.dev",

  availability: "Available for internships",

  socials: [
    {
      icon: Github,
      href: "https://github.com/aryankumarofficial",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aryankumarofficial",
    },
  ],
};
