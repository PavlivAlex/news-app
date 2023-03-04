import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageHelpers } from "../../helpers/localStorage";

export interface StateModel {
  user: string | null;
  isAuthorized: boolean;
  isAppInitialized: boolean;
}

const initialState: StateModel = {
  user: null,
  isAuthorized: false,
  isAppInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeApp: (state: StateModel) => {
      state.isAppInitialized = false;
      const accessToken = LocalStorageHelpers.getAccessToken();
      localStorage.setItem("lang", "us");

      if (!accessToken) {
        state.isAppInitialized = true;
        state.isAuthorized = false;
        state.user = null;
      } else {
        const user: string | null = localStorage.getItem("user");
        state.isAppInitialized = true;
        state.isAuthorized = true;
        state.user = user;
      }
    },
  },
});

export const { initializeApp } = authSlice.actions;

export const authReducer = authSlice.reducer;
