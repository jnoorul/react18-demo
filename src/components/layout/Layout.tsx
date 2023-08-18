import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { NavBar } from '../navbar/NavBar';

export function Layout() {
  return (
    <div className="h-full">
      <Header />
      <div className="flex flex-row h-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
