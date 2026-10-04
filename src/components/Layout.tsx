import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between font-sans">
      <Header title="My site" />
      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
      <Footer text="iwamad week 4 practice" />
    </div>
  );
};