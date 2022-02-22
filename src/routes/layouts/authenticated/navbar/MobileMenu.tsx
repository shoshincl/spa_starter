import { FC } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { items } from '../sidebar';

interface Props {
  hidden: boolean;
}

const MobileMenu: FC<Props> = ({ hidden }) => {
  const { pathname } = useLocation();
  return (
    <div className={classnames(hidden && 'hidden', 'mobile-menu')}>
      <ul>
        {items.map(({ icon, tooltip, to }) => (
          <NavLink to={to} key={to}>
            <li
              className={classnames(
                'flex items-center w-full',
                pathname.split('/:')[0] === to && 'bg-blue-500 text-white'
              )}
            >
              {icon}
              <p className="block text-sm px-2 py-4 font-semibold">{tooltip}</p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
