import { ProfileCard } from '../components/ProfileCard';

export const HomePage = () => {
  const profileData = {
    name: 'Arslan Alisher',
    role: 'IT Management Student',
    bio: "3rd year undergrad passionate about games. Love sleeping etc. Don't like hard courses please don't kill us.",
    avatarUrl: './me.jpg',
    links: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Email', url: 'mailto:a_alisher@kbtu.kz' },
    ],
  };

  return <ProfileCard {...profileData} />;
};