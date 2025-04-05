"use client"
import React, {Suspense, useEffect, useState} from 'react';
import HeroSection from "@/app/(home)/about/components/HeroSection";
import Skills from "@/app/(home)/about/components/Skills";
import Education from "@/app/(home)/about/components/Education";
import AboutJsonLd from "@/app/(home)/about/components/AboutJsonLd";
import { Metadata } from "next";

const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-400/20 rounded-full animate-spin"></div>
      <div className="w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin absolute top-0 left-0"></div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-400 whitespace-nowrap">
        Loading...
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
    const [about, setAbout] = useState({
        personal: {
            name: "",
            age: "",
            email: "",
            address: "",
            freelance: "",
            title: "",
            experience: "",
            language: "",
        },
        experiences: {
            year: "",
            projectsCompleted: "",
        },
        skills: [{name: "", icon: ""}],
        education: [{
            id: 0,
            institution: "",
            degree: "",
            startDate: "",
            description: "",
            highlights: [] as string[],
            type: ""
        }],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/settings/about')
            .then(res => res.json())
            .then(data => {
                setAbout(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching about data:', err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingAnimation />;
    }

    return (
        <Suspense fallback={<LoadingAnimation />}>
            <main className="bg-black text-white min-h-screen">
                {/* Add structured data for SEO */}
                <AboutJsonLd 
                    personal={about.personal}
                    experiences={about.experiences}
                    skills={about.skills}
                    education={about.education}
                />
                
                {/* Hero Section with personal information */}
                <section aria-labelledby="about-hero">
                    <HeroSection
                        experience={about.experiences}
                        personalInfo={about.personal}
                    />
                </section>
                
                {/* Skills section with semantic HTML */}
                <section aria-labelledby="skills-section">
                    <h2 id="skills-section" className="sr-only">Professional Skills</h2>
                    <Skills skills={about.skills}/>
                </section>
                
                {/* Education section with semantic HTML */}
                <section aria-labelledby="education-section">
                    <h2 id="education-section" className="sr-only">Education Background</h2>
                    <Education education={about.education}/>
                </section>
            </main>
        </Suspense>
    )
}

export default About;
