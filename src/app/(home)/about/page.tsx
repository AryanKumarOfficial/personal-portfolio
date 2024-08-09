import React from 'react';
import HeroSection from "@/app/(home)/about/components/HeroSection";
import Skills from "@/app/(home)/about/components/Skills";
import Education from "@/app/(home)/about/components/Education";

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
