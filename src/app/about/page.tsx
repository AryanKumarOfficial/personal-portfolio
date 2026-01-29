import { ResumeService } from "@/modules/resume/service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, GraduationCap, Briefcase } from "lucide-react";

// Force dynamic to fetch fresh data
export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const skills = await ResumeService.getSkills();
  const education = await ResumeService.getEducation();
  const experience = await ResumeService.getExperience();

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-20">

        {/* Bio */}
        <section className="text-center space-y-6">
             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Me</h1>
             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                I am a passionate Full-Stack Developer with a knack for building scalable web applications.
                With a strong foundation in modern technologies, I strive to create seamless user experiences
                and efficient backend systems.
             </p>
        </section>

        {/* Skills */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Code /></div>
                <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skillsByCategory).map(([category, items]) => (
                    <div key={category} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-lg mb-4 text-slate-800">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill.id} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm font-medium text-slate-600">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Experience */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Briefcase /></div>
                <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8 relative border-l-2 border-slate-200 ml-3 pl-8 pb-4">
                {experience.map((exp) => (
                    <div key={exp.id} className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 shadow-sm" />
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <div className="text-blue-600 font-medium mb-2">{exp.company} <span className="text-slate-400 font-normal text-sm mx-1">•</span> {exp.type}</div>
                        <p className="text-sm text-slate-500 mb-4 uppercase tracking-wide">
                            {new Date(exp.startDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} -
                            {exp.endDate ? new Date(exp.endDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : 'Present'}
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(t => (
                                <span key={t} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Education */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><GraduationCap /></div>
                <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu) => (
                    <div key={edu.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-lg text-slate-900">{edu.institution}</h3>
                        <div className="text-indigo-600 font-medium">{edu.degree}</div>
                        <div className="text-sm text-slate-500 mb-4">{edu.field}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                             {new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                        </div>
                        {edu.description && <p className="mt-4 text-slate-600 text-sm">{edu.description}</p>}
                    </div>
                ))}
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
