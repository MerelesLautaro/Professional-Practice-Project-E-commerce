import { createBrowserRouter } from "react-router";
import { LoginScreen } from "../Pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "Login", element: <LoginScreen/> },
    ],
  },
  { path: "*", element: <h1>404 not found</h1> },
]);
