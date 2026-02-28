import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container mx-auto min-h-screen flex items-center">
      <div className="max-w-3xl">
        <p className="text-muted-foreground font-mono mb-2">
          Full-Stack Engineer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Aryan Kumar
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          I build scalable dashboards, SaaS platforms, and real-time web
          applications using Next.js, PostgreSQL, and modern backend systems.
        </p>

        <div className="flex gap-4 mt-6">
          <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
            View Projects
          </Button>

          <Button className="border px-6 py-3 rounded-lg">GitHub</Button>
        </div>
      </div>
    </section>
  );
}
