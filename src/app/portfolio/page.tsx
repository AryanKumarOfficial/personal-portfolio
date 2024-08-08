import React from "react";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/Introduction";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CertificationsSection from "./components/Certifications";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudy";
import Article from "./components/Article";
import DownloadResume from "./components/DownloadResume";

const PortfolioPage: React.FC = () => {
    return (
        <main className="text-gray-800">
            <HeroSection/>
            <IntroductionSection/>
            <Service/>
            <Experience/>
            <Projects/>
            <Testimonials/>
            <CertificationsSection/>
            <CaseStudies/>
            <Article/>
            <DownloadResume/>
            <CTA/>
        </main>
    );
};

export default PortfolioPage;
