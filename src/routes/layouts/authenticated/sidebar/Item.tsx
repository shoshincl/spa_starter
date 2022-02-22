import React, { FC } from 'react';

interface Props {
  icon: React.ReactNode;
  tooltip: string;
}

const Item: FC<Props> = ({ icon, tooltip }) => {
  return (
    <i>
      <div className="group sidebar-icon rounded-3xl hover:rounded-xl transition-all duration-300">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
      </div>
    </i>
  );
};

export default Item;
