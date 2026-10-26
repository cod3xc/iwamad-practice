import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => (
  <div className="layout">
    <Header title="My site" />
    <main className="main">
      <Outlet />
    </main>
    <Footer text="iwamad week 6 practice" />
  </div>
);
