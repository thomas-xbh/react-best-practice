import { RouteObject } from "react-router-dom";
import React from "react";
import HomePage from "../pages/home/index.tsx";
import AboutPage from "../pages/about/index.tsx";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default routes;

