import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

export const Header = ({ title }: { title: string }) => {
  const { likes } = useLikes();

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>{title}</h1>
        <span>♥ {likes}</span>
      </div>
      <nav className="nav" aria-label="Main">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
};
