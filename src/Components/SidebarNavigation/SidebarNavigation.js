import React from 'react';
import "./SidebarNavigation.sass";
import SidebarIcons from '../SidebarIcons/SidebarIcons';


export default function SidebarNavigation({ handleNavClick }) {
  return (
    <aside className="side-bar">
      <SidebarIcons handleNavClick={handleNavClick} />
    </aside>
  );
}
