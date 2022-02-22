import { FC } from 'react';
import { Outlet } from 'react-router';

import Authentication from './Authentication';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Authenticated: FC = () => (
  <>
    <Navbar />
    <Authentication />
    <div className="flex pt-16">
      <Sidebar />
      <Outlet />
    </div>{' '}
  </>
);

export default Authenticated;
