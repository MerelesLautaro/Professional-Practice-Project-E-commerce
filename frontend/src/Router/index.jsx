import { createBrowserRouter } from "react-router";
import { RegisterScreen, DashboardScreen } from "../Pages";
import LoginScreen from '../Pages/login/LoginScreen.jsx';
import MainLayout from "../shared/components/layouts/MainLayout";
import DashboardLayout from "../shared/components/layouts/dashboard/DashboardLayout"

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'register', element: <RegisterScreen /> },
  { path: 'login', element: <LoginScreen /> },
    ],
  },

  {
    path: '/categorias/gestionar',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardScreen /> },
    ],
  },

  {
    path: '*',
    element: <h1>404 not found</h1>,
  },
]);
