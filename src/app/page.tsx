import Github from "@/assets/icons/Github";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container max-w-6xl mx-auto min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-2xl">
        <p className="text-muted-foreground font-mono mb-3 text-sm">
          Full-Stack Engineer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Aryan Kumar
        </h1>

        <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          I build scalable dashboards, SaaS platforms, and real-time web
          applications using Next.js, PostgreSQL, and modern backend systems.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button size={"lg"} asChild>
            <Link href={"#projects"}>View Projects</Link>
          </Button>

          <Button variant={"outline"} size={"lg"} asChild>
            <a href="https://github.com/aryankumarofficial" target="_blank">
              <Github/>
              Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
