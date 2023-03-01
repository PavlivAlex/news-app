import React from "react";

// components
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// styles
import { styles } from "./styles";

const MainLayout = () => {
  return (
    <Box sx={styles.authBox}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
