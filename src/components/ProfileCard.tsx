import { LikeButton } from './LikeButton';

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
};

export const ProfileCard = ({
  name,
  role,
  bio,
  avatarUrl,
  links,
}: ProfileCardProps) => {
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

      <LikeButton />
    </article>
  );
};