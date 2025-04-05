import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface TechCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  color: string;
}

const TechCard = ({ tech, index }: { tech: TechCardProps; index: number }) => (
  <div 
    className="group relative overflow-hidden rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 p-6 h-full transition-all duration-300 hover:shadow-glow hover:border-teal-500/30 hover:-translate-y-1"
  >
    <div className={cn(
      "absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br", 
      tech.color
    )}></div>
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center mb-4">
        <div className="rounded-full p-4 bg-gradient-to-br from-black to-gray-900 border-2 border-teal-500/30 group-hover:border-teal-500/70 transition-all duration-300 shadow-md group-hover:shadow-lg">
          {tech.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white text-center group-hover:text-teal-300 transition-colors duration-300">{tech.name}</h3>
      <p className="text-gray-400 text-center text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
    </div>
  </div>
);

export default TechCard;
