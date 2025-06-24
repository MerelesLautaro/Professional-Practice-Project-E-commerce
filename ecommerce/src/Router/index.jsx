import { createBrowserRouter } from "react-router";
import { RegisterScreen } from "../Pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "register", element: <RegisterScreen/> },
    ],
  },
  { path: "*", element: <h1>404 not found</h1> },
]);
