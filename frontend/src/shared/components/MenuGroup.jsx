import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import MenuItem from './MenuItem';
import styles from '../styles/MenuGroup.module.css';

const MenuGroup = ({ title, icon, routes }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isActive = routes.some(route => location.pathname.startsWith(route.to));
    if (isActive) {
      setExpanded(true);
    }
  }, [location.pathname, routes]);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className={styles.menuGroup}>
      <div className={styles.menuGroupHeader} onClick={toggleExpand}>
        <span className={styles.menuGroupIcon}>{icon}</span>
        <span className={styles.menuGroupTitle}>{title}</span>
        <span className={styles.menuGroupArrow}>{expanded ? '▾' : '▸'}</span>
      </div>

      {expanded && (
        <div className={styles.menuGroupItems}>
          {routes.map((route, index) => (
            <MenuItem key={index} to={route.to} label={route.label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuGroup;
