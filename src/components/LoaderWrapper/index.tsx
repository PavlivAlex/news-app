import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import React, { FC } from "react";

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
