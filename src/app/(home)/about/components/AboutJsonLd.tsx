"use client";

import JsonLd from "@/components/JsonLd";

interface AboutJsonLdProps {
  personal: {
    name: string;
    age: string;
    email: string;
    address: string;
    freelance: string;
    title: string;
    experience: string;
    language: string;
  };
  experiences: {
    year: string;
    projectsCompleted: string;
  };
  skills: Array<{ name: string; icon: string }>;
  education: Array<{
    id: number;
    institution: string;
    degree: string;
    startDate: string;
    description: string;
    highlights: string[];
    type: string;
  }>;
}

export default function AboutJsonLd({ personal, experiences, skills, education }: AboutJsonLdProps) {
  // Format skills into an array of strings for structured data
  const skillNames = skills.map(skill => skill.name);
  
  // Get the most recent education
  const recentEducation = education.length > 0 ? education[0] : null;

  // Person schema with detailed profile information
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.name || "Aryan Kumar",
    "description": `${personal.name || "Aryan Kumar"} is a ${personal.title || "Full-Stack Developer"} with ${personal.experience || "3+"} years of experience, specializing in modern web development and UI/UX design.`,
    "jobTitle": personal.title || "Full-Stack Developer",
    "email": personal.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personal.address
    },
    "knowsLanguage": personal.language,
    "knowsAbout": skillNames,
    "alumniOf": recentEducation ? {
      "@type": "EducationalOrganization",
      "name": recentEducation.institution,
      "department": recentEducation.type
    } : null,
    "sameAs": [
      "https://github.com/AryanKumarOfficial",
      "https://linkedin.com/in/aryan-kumar-official",
      "https://twitter.com/aryankumardev"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": personal.freelance === "Available" ? "Freelance" : "Independent Developer"
    }
  };

  // About page schema
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Aryan Kumar - Full-Stack Developer & UI/UX Designer",
    "description": `Learn about ${personal.name || "Aryan Kumar"}'s experience, skills, education, and professional background as a ${personal.title || "Full-Stack Developer"}.`,
    "url": "https://www.aryankumarofficial.tech/about",
    "keywords": ["about", "full-stack developer", "UI/UX designer", ...skillNames],
    "mainEntity": {
      "@type": "Person",
      "name": personal.name || "Aryan Kumar",
      "jobTitle": personal.title || "Full-Stack Developer"
    }
  };

  return (
    <>
      <JsonLd data={personData} />
      <JsonLd data={aboutPageData} />
    </>
  );
}
