"use client"
import React, {Suspense, useEffect, useState} from 'react';
import HeroSection from "@/app/(home)/about/components/HeroSection";
import Skills from "@/app/(home)/about/components/Skills";
import Education from "@/app/(home)/about/components/Education";

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
        education: [{degree: "", year: "", institute: "", description: "", highlights: ""}],
    });

    useEffect(() => {
        fetch('/api/settings/about')
            .then(res => res.json())
            .then(data => {
                console.log(data, 'data');
                setAbout(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
                <p className="text-2xl text-gray-800">Loading...</p>
            </div>
        }>
            <HeroSection
                experience={about.experiences}
                personalInfo={about.personal}/>
            <Skills skills={about.skills}/>
            <Education/>
        </Suspense>
    )
}

export default About;
