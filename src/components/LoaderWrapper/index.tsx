import React, { FC } from "react";

// components
import { Box, CircularProgress, styled } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const LoaderWrapper: FC<IProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <Loader>
          <CircularProgress />
        </Loader>
      ) : (
        children
      )}
    </>
  );
};

const Loader = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default LoaderWrapper;
