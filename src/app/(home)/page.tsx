"use client"
import { useEffect, useState, useRef } from "react";
import useHome from "@/backend/store/Home";

// Import modular components
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CurrentlyLearningSection from "@/components/home/CurrentlyLearningSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  const { fetchHomeData, data, error, loading } = useHome();
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Profession titles for the typing effect
  const professions = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Innovator"
  ];

  // Scroll to next section
  const scrollToNextSection = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({ top: heroHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!data.title) {
      fetchHomeData();
    }
  }, [data, fetchHomeData]);

  // Typing effect
  useEffect(() => {
    if (loading || !data.title) return;

    const currentText = professions[textIndex];
    let currentIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentProfession = professions[textIndex];

      if (!isDeleting && currentIndex <= currentProfession.length) {
        setTypedText(currentProfession.substring(0, currentIndex));
        currentIndex++;
        timer = setTimeout(type, 100);
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(currentProfession.substring(0, currentIndex));
        currentIndex--;
        timer = setTimeout(type, 50);
      } else if (currentIndex <= 0) {
        isDeleting = false;
        setTextIndex((prevIndex) => (prevIndex + 1) % professions.length);
        timer = setTimeout(type, 500);
      } else {
        isDeleting = true;
        timer = setTimeout(type, 2000);
      }
    };

    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [loading, data.title, textIndex]);

  if (loading || !data.title) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-teal-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-teal-400 text-lg font-medium">Loading</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection
      />
      
      {/* Skills Section */}
      <SkillsSection/>
      
      {/* Projects Section */}
      <div className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto px-6">
          <ProjectsSection />
        </div>
      </div>
      
      {/* Currently Learning Section */}
      <CurrentlyLearningSection />
      
      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}