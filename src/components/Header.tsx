import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

export const Header = ({ title }: { title: string }) => {
  const { likes } = useLikes();

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="" width={40} height={40} />
        <h1>{title}</h1>
        {likes > 0 && <span className="badge-likes">❤️ {likes}</span>}
      </div>
      <nav className="nav" aria-label="Main">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
