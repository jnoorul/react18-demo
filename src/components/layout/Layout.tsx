import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { MenuBar } from '../navbar/MenuBar';

export function Layout() {
  return (
    <div className="h-full">
      <Header />
      <MenuBar />
      <div className="mx-12">
        <Outlet />
      </div>
    </div>
  );
}
