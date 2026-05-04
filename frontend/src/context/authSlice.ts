import { createSlice} from "@reduxjs/toolkit";
import type { AuthState, } from "./store";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isAuthenticated: false,
  } as AuthState,

  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
