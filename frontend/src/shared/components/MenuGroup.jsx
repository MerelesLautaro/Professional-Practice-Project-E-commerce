import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import MenuItem from './MenuItem';
import '../styles/MenuGroup.css';

const MenuGroup = ({ title, icon, routes }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Detecta si alguna ruta hija está activa
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
    <div className="menu-group">
      <div className="menu-group-header" onClick={toggleExpand}>
        <span className="menu-group-icon">{icon}</span>
        <span className="menu-group-title">{title}</span>
        <span className="menu-group-arrow">{expanded ? '▾' : '▸'}</span>
      </div>

      {expanded && (
        <div className="menu-group-items">
          {routes.map((route, index) => (
            <MenuItem key={index} to={route.to} label={route.label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuGroup;
