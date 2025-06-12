import { StrictMode, use, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Router } from "./Router";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);