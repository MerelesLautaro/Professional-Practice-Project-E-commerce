import React from 'react';
import { NavLink } from 'react-router';
import styles from '../styles/MenuItem.module.css';

const MenuItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.menuItem} ${isActive ? styles.active : ''}`
      }
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
