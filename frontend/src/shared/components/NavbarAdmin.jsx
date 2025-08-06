import React, { useState } from 'react';
import { NavLink } from 'react-router';
import '../styles/NavbarAdmin.css';

const NavbarAdmin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: 'Administrador',
  };

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '?';

  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <NavLink to="/dashboard" className="navLink">Inicio</NavLink>
      </div>

      <div className="navbarRight">
        <div className="userInfo" onClick={toggleDropdown}>
          <span className="username">{user.name}</span>
          <div className="avatar">{getInitial(user.name)}</div>
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
