import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import FeatureContainer from "./components/FeatureContainer";
import AboutMe from "./components/AboutMe";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import { AuthProvider } from "./contexts/AuthContext";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Features",
        element: <FeatureContainer />,
      },
      {
        path: "/About-Me",
        element: <AboutMe />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Sign-up",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <RouterProvider router={AppRouter} />
    </AuthProvider>
  </>
);
