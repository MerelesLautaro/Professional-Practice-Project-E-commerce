import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../Sidebar';
import NavbarAdmin from '../../NavbarAdmin';
import '../../../styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-content">
        <NavbarAdmin />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
