import { authReducer } from "../slices/auth";
import { newsReducer } from "../slices/news";
import { configureStore } from "@reduxjs/toolkit";
import { StateModel as AuthStateModel } from "../slices/auth";
import { StateModel as NewsStateModel } from "../slices/news";

export interface StateModel {
  authReducer: AuthStateModel;
  newsReducer: NewsStateModel;
}

export const store = configureStore({ reducer: { authReducer, newsReducer } });
