import { ProfileCard } from '../components/ProfileCard';
import { SkillBadge } from '../components/SkillBadge';
import logo from '../assets/logo.svg';

const user = { name: 'Your Name', bio: 'Frontend student building a dev blog.', avatar: logo };

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <div className="contact">
        <ProfileCard user={user} />
        <div className="post-card__tags">
          {['React', 'CSS', 'Git'].map((s) => (
            <SkillBadge key={s} skill={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
