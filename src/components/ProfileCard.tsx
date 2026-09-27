import { useState } from 'react';
import { Skill, SkillBadge } from './SkillBadge';

type LinkItem = {
  name: string;
  url: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
  skills: Skill[];
};

export const ProfileCard = ({
  name,
  role,
  bio,
  avatarUrl,
  links,
  skills,
}: ProfileCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <article className="profile-card bg-white rounded-xl shadow-md w-full max-w-sm text-center flex flex-col items-center">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-3 bg-gray-50 border border-gray-200 object-cover"
        />
      )}

      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-500 mb-3">{role}</p>

      <p className="text-sm text-gray-600 mb-5 px-2">
        {bio}
      </p>

      {/* Skills list with empty state */}
      <div className="w-full mb-5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Skills</p>
        {skills.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic">No skills added yet.</p>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 mb-5">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Interactive Like Button */}
      <button
        type="button"
        onClick={() => setIsLiked(!isLiked)}
        className={`w-full py-2 px-4 rounded-lg text-sm font-medium border transition ${
          isLiked ? 'liked' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span>{isLiked ? '❤️' : '🤍'}</span> {isLiked ? 'Liked' : 'Like'}
      </button>
    </article>
  );
};