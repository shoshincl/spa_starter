import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import SidebarItem from './Item';

import { Routes } from '../../../routes';

type Item = {
  icon: React.ReactNode;
  tooltip: string;
  to: string;
};

export const items: Item[] = [
  { to: Routes.HOME, icon: <FaHome size="28" />, tooltip: 'Home' },
];

const Sidebar: FC = () => {
  return (
    <div className="xs:hidden fixed top-0 left-0 h-screen w-16 m-0 pt-16 flex flex-col bg-gray-700 text-white">
      {items.map(({ icon, to, tooltip }) => (
        <Link to={to} key={to}>
          <SidebarItem icon={icon} tooltip={tooltip} />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
