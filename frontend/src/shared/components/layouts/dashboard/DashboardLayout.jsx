import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../Sidebar';
import NavbarAdmin from '../../NavbarAdmin';
import styles from '../../../styles/DashboardLayout.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <NavbarAdmin />
        <main className={styles.dashboardContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;