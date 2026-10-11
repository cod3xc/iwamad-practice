import { LikeButton } from './LikeButton';
import { Card } from './ui/Card';

type LinkItem = { name: string; url: string };

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
};

export const ProfileCard = ({ name, role, bio, avatarUrl, links }: ProfileCardProps) => (
  <Card className="page-card stack">
    {avatarUrl && <img src={avatarUrl} alt={`Photo of ${name}`} className="avatar" />}
    <div>
      <h2>{name}</h2>
      <p className="muted">{role}</p>
    </div>
    <p>{bio}</p>
    <div className="row">
      {links.map((link) => (
        <a key={link.name} className="ui-btn" href={link.url} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      ))}
    </div>
    <LikeButton />
  </Card>
);