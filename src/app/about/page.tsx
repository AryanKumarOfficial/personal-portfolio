import React from 'react';
import HeroSection from "@/app/about/components/HeroSection";
import Skills from "@/app/about/components/Skills";
import Education from "@/app/about/components/Education";

const About: React.FC = () => {
    return (
        <>
            <HeroSection/>
            <Skills/>
            <Education/>
        </>
    )
}

export default About;
