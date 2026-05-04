import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";
import type { DemoIdentityState, UserType, } from "./store";

export const demoIdentitySlice = createSlice({
  name: "demoIdentity",

  initialState: {
    email: null,
    password: null,
    userType: null,
    partnerId: null,
  } as DemoIdentityState,

  reducers: {
    createUser(state, action: PayloadAction<{ email: string; password: string; userType: UserType; partnerId: string }>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.userType = action.payload.userType;
      state.partnerId = action.payload.partnerId;
    },
  },
});

export const demoIdentityActions = demoIdentitySlice.actions;
