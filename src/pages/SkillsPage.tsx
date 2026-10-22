import { SkillBadge, Skill } from '../components/SkillBadge';

export const SkillsPage = () => {
  const skills: Skill[] = [
    { id: 1, label: 'Gaming' },
    { id: 2, label: 'React' },
    { id: 3, label: 'TypeScript' },
    { id: 4, label: 'Tailwind CSS' },
    { id: 5, label: 'React Router' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-2">My Skills</h2>
      <p className="text-xs text-gray-500 mb-4">Technologies & frameworks I use</p>
      
      {skills.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic">No skills listed yet.</p>
      )}
    </div>
  );
};