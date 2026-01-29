import { ResumeService } from "@/modules/resume/service";
import { addSkillAction, deleteSkillAction, addEducationAction, deleteEducationAction, addExperienceAction, deleteExperienceAction } from "@/modules/resume/actions";

export default async function ResumePage() {
  const skills = await ResumeService.getSkills();
  const education = await ResumeService.getEducation();
  const experience = await ResumeService.getExperience();

  return (
    <div className="space-y-12 pb-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Resume Management</h2>

      {/* Skills Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <form action={addSkillAction} className="space-y-3">
                    <input name="name" placeholder="Skill Name (e.g. React)" className="w-full p-2 border rounded dark:bg-gray-700" required />
                    <select name="category" className="w-full p-2 border rounded dark:bg-gray-700">
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Tools">Tools</option>
                        <option value="Other">Other</option>
                    </select>
                    <input name="level" type="number" placeholder="Level (0-100)" className="w-full p-2 border rounded dark:bg-gray-700" />
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Skill</button>
                </form>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-2 content-start">
                {skills.map(skill => (
                    <div key={skill.id} className="bg-gray-50 dark:bg-gray-800 border p-2 rounded flex justify-between items-center text-sm">
                        <span>{skill.name} <span className="text-gray-400 text-xs">({skill.category})</span></span>
                        <form action={deleteSkillAction}>
                            <input type="hidden" name="id" value={skill.id} />
                            <button className="text-red-500 hover:text-red-700">X</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">Education</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
             <form action={addEducationAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="institution" placeholder="Institution" className="p-2 border rounded dark:bg-gray-700" required />
                <input name="degree" placeholder="Degree" className="p-2 border rounded dark:bg-gray-700" required />
                <input name="field" placeholder="Field of Study" className="p-2 border rounded dark:bg-gray-700" />
                <input name="location" placeholder="Location" className="p-2 border rounded dark:bg-gray-700" />
                <div className="flex gap-2">
                    <input type="date" name="startDate" className="p-2 border rounded dark:bg-gray-700 flex-1" required />
                    <input type="date" name="endDate" className="p-2 border rounded dark:bg-gray-700 flex-1" />
                </div>
                <textarea name="description" placeholder="Description" className="md:col-span-2 p-2 border rounded dark:bg-gray-700" />
                <button type="submit" className="md:col-span-2 bg-blue-600 text-white p-2 rounded">Add Education</button>
            </form>
        </div>
        <div className="space-y-2">
            {education.map(edu => (
                <div key={edu.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-indigo-500 relative">
                     <form action={deleteEducationAction} className="absolute top-2 right-2">
                            <input type="hidden" name="id" value={edu.id} />
                            <button className="text-red-500 hover:text-red-700">X</button>
                    </form>
                    <h4 className="font-bold">{edu.institution}</h4>
                    <p className="text-sm">{edu.degree} - {edu.field}</p>
                    <p className="text-xs text-gray-500">{new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">Experience</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
             <form action={addExperienceAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="company" placeholder="Company" className="p-2 border rounded dark:bg-gray-700" required />
                <input name="role" placeholder="Role" className="p-2 border rounded dark:bg-gray-700" required />
                <input name="type" placeholder="Type (Full-time, Contract)" className="p-2 border rounded dark:bg-gray-700" />
                <div className="flex gap-2">
                    <input type="date" name="startDate" className="p-2 border rounded dark:bg-gray-700 flex-1" required />
                    <input type="date" name="endDate" className="p-2 border rounded dark:bg-gray-700 flex-1" />
                </div>
                <input name="technologies" placeholder="Technologies (comma separated)" className="md:col-span-2 p-2 border rounded dark:bg-gray-700" />
                <textarea name="description" placeholder="Description" className="md:col-span-2 p-2 border rounded dark:bg-gray-700" />
                <button type="submit" className="md:col-span-2 bg-blue-600 text-white p-2 rounded">Add Experience</button>
            </form>
        </div>
        <div className="space-y-2">
             {experience.map(exp => (
                <div key={exp.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-orange-500 relative">
                     <form action={deleteExperienceAction} className="absolute top-2 right-2">
                            <input type="hidden" name="id" value={exp.id} />
                            <button className="text-red-500 hover:text-red-700">X</button>
                    </form>
                    <h4 className="font-bold">{exp.role} @ {exp.company}</h4>
                    <p className="text-xs text-gray-500">{new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}</p>
                    <p className="mt-2 text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {exp.technologies.map(t => <span key={t} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 rounded">{t}</span>)}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
