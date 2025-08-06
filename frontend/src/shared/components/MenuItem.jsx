import React from 'react';
import { NavLink } from 'react-router';
import '../styles/MenuItem.css';

const MenuItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `menu-item ${isActive ? 'active' : ''}`
      }
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
