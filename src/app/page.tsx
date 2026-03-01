import Experience from "@/components/shared/Home/Experience";
import Hero from "@/components/shared/Home/Hero";
import Projects from "@/components/shared/Home/Projects";

export default function Home() {
  return (
    <main className="pt-32">
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}
