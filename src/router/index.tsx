import React from "react";

// helpers
import { authRoutes } from "./authRoutes";
import { StateModel } from "../redux/store";
import { useSelector } from "react-redux";
import { commonRoutes } from "./commonRoutes";
import { profileRoutes } from "./profileRoutes";

// components
import MainLayout from "../layouts/MainLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const { isAuthorized } = useSelector((state: StateModel) => state.authReducer);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PublicRoute isUserAuthenticated={isAuthorized}>
                <route.component />
              </PublicRoute>
            }
          />
        ))}

        {commonRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

        {profileRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute isUserAuthenticated={isAuthorized}>
                <route.component />
              </PrivateRoute>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
