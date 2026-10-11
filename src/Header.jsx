import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <span>My Dev Blog</span>
      </Link>
      <nav className="site-header__nav" aria-label="Main">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
}
