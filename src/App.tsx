import React, { useEffect } from "react";

// helpers
import { StateModel } from "./redux/store";
import { initializeApp } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

// components
import Router from "./router";
import { CircularProgress } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();

  const { isAppInitialized } = useSelector(
    (state: StateModel) => state.authReducer
  );

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!isAppInitialized) return <CircularProgress />;

  return <Router />;
};

export default App;
