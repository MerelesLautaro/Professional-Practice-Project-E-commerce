import { createBrowserRouter } from "react-router";
import { RegisterScreen } from "../Pages";
import MainLayout from "../features/shared/components/layouts/MainLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      { path: "register", element: <RegisterScreen/> },
    ],
  },
  { path: "*", element: <h1>404 not found</h1> },
]);
