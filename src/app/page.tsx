import About from "@/components/shared/Home/About";
import Contact from "@/components/shared/Home/Contact";
import Experience from "@/components/shared/Home/Experience";
import Hero from "@/components/shared/Home/Hero";
import Projects from "@/components/shared/Home/Projects";

export default function Home() {
  return (
    <main className="pt-32">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
