import { Tag } from './ui/Tag';

export type Skill = {
  id: number;
  label: string;
};

export const SkillBadge = ({ skill }: { skill: Skill }) => (
  <Tag label={skill.label} />
);
