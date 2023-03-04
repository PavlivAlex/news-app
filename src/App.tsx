import React, { useEffect } from "react";

// helpers
import { StateModel } from "./redux/store";
import { initializeApp } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

// components
import Router from "./router";
import { CircularProgress } from "@mui/material";
import { setLanguageOfNews } from "./redux/slices/news";
import { LanguageEnum } from "./interfaces/common";

const App = () => {
  const dispatch = useDispatch();

  const { isAppInitialized } = useSelector(
    (state: StateModel) => state.authReducer
  );

  useEffect(() => {
    dispatch(initializeApp());
    dispatch(setLanguageOfNews(LanguageEnum.EN));
  }, []);

  if (!isAppInitialized) return <CircularProgress />;

  return <Router />;
};

export default App;
