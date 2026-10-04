export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition">
      {skill.label}
    </span>
  );
};