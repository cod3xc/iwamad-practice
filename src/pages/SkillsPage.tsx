import { SkillBadge, Skill } from '../components/SkillBadge';
import { Card } from '../components/ui/Card';

export const SkillsPage = () => {
  const skills: Skill[] = [
    { id: 1, label: 'Gaming' },
    { id: 2, label: 'React' },
    { id: 3, label: 'TypeScript' },
    { id: 4, label: 'CSS design tokens' },
    { id: 5, label: 'React Router' },
  ];

  return (
    <Card>
      <h2>My Skills</h2>
      <p className="muted">Technologies &amp; frameworks I use</p>
      {skills.length > 0 ? (
        <div className="row">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="muted">No skills listed yet.</p>
      )}
    </Card>
  );
};
