import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { likes } = useLikes();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition ${
      isActive
        ? 'bg-gray-900 text-white active'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`;

  return (
    <header className="bg-white border-b py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        {likes > 0 && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-rose-100 text-rose-700 rounded-full">
            ❤️ {likes}
          </span>
        )}
      </div>

      <nav className="flex items-center gap-2">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/skills" className={navLinkClass}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};