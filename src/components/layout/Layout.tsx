import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { NavBar } from '../navbar/NavBar';
import MenuBar from '../navbar/MenuBar';

export function Layout() {
  return (
    <div className="h-full">
      <Header />
      <MenuBar />
      <div className="flex flex-row h-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
