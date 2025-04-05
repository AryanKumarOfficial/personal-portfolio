"use client";

import JsonLd from "@/components/JsonLd";

export default function HomeJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aryan Kumar",
    "url": "https://www.aryankumarofficial.tech",
    "image": "https://www.aryankumarofficial.tech/assets/images/user.jpg",
    "sameAs": [
      "https://github.com/AryanKumarOfficial",
      "https://linkedin.com/in/aryan-kumar-official",
      "https://twitter.com/aryankumardev"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Developer"
    },
    "description": "Aryan Kumar is a Full-Stack Developer and UI/UX Designer specializing in building modern web applications with React, Next.js, and other cutting-edge technologies.",
    "knowsAbout": [
      "Web Development", 
      "Front-end Development", 
      "React", 
      "Next.js", 
      "UI/UX Design", 
      "TypeScript"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science Department"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.aryankumarofficial.tech",
    "name": "Aryan Kumar | Full-Stack Developer & UI/UX Designer",
    "description": "Aryan Kumar is a Full-Stack Developer and UI/UX Designer specializing in building modern web applications with React, Next.js, and other cutting-edge technologies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aryankumarofficial.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Return both structured data elements
  return (
    <>
      <JsonLd data={personData} />
      <JsonLd data={websiteData} />
    </>
  );
}
