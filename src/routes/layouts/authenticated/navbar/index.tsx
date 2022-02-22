import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../../routes';

import Actions from './Actions';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

const Navbar: FC = () => {
  const [hidden, toggleHidden] = useState(true);
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <Link to={Routes.ROOT} className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-500 text-lg">
              {process.env.REACT_APP_NAME}
            </span>
          </Link>
          <Actions />
          <UserMenu />
          <div className="sm:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => hidden && toggleHidden(!hidden)}
              onBlur={() => !hidden && toggleHidden(!hidden)}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu hidden={hidden} />
    </nav>
  );
};

export default Navbar;
