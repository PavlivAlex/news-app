import React from "react";

// components
import { Navigate } from "react-router-dom";
import { ProfileRoutesEnum } from "./profileRoutes";

interface IProps {
  children: JSX.Element;
  isUserAuthenticated: boolean;
}

const PublicRoute = ({ isUserAuthenticated, children }: IProps) => {
  if (isUserAuthenticated) {
    return <Navigate to={ProfileRoutesEnum.Profile} />;
  }

  return children;
};

export default PublicRoute;
