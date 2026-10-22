import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';

export const App = () => {
  const profileData = {
    name: 'Arslan Alisher',
    role: 'IT Management Student',
    bio: "3rd year undergrad passionate about games. Love sleeping etc. Don't like hard courses please don't kill us.",
    avatarUrl: './me.jpg',
    links: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Email', url: 'mailto:a_alisher@kbtu.kz' },
    ],
    skills: [
      { id: 1, label: 'Gaming' },
      { id: 2, label: 'React' },
      { id: 3, label: 'TypeScript' },
      { id: 4, label: 'Tailwind' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between font-sans">
      <Header title="My site" />
      <main className="flex items-center justify-center p-4">
        <ProfileCard {...profileData} />
      </main>
      <Footer text="iwamad week 3 practice" />
    </div>
  );
};

export default App;