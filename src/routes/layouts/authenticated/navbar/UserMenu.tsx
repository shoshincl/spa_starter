import Userfront from '@userfront/core';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../../routes';

import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const UserMenu = () => {
  const { t } = useTranslation();
  const handleLogout = async () => {
    await Userfront.logout({ redirect: Routes.ROOT });
  };
  return (
    <div className="flex items-center xs:hidden">
      <div className="space-x-3 dropdown inline-block relative">
        <button
          className="h-10 px-2 rounded-full hover:bg-blue-400 text-blue-500 font-bold border-2 border-blue-500 hover:border-blue-500 text-sm text-center hover:text-white"
          type="button"
        >
          <FaUser size="15" />
        </button>
        <ul className="dropdown-menu absolute sm:right-0 xl:right-auto text-gray-700 pt-1 hidden">
          <li
            className="bg-white border-2 rounded-sm border-blue-200 hover:bg-blue-200 hover:text-white py-2 px-2 block whitespace-no-wrap cursor-pointer"
            onClick={() => handleLogout()}
          >
            <div className="flex items-center">
              <FiLogOut size="15" className="mx-1" />
              {t('routes.layouts.authenticated.navbar.ACTION_LOGOUT')}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
