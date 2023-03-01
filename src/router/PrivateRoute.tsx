import React from "react";

// helpers
import { AuthRoutesEnum } from "./authRoutes";

// components
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
  isUserAuthenticated: boolean;
}

const PrivateRoute = ({ isUserAuthenticated, children }: IProps) => {
  if (!isUserAuthenticated) {
    return <Navigate to={AuthRoutesEnum.Root} />;
  }

  return children;
};

export default PrivateRoute;
