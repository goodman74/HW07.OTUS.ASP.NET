import { configureStore, } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { demoIdentitySlice } from "./demoIdentitySlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type UserType = "partner" | "employee" ;

export type DemoIdentityState = {
  email: string | null;
  password: string | null;
  userType: UserType | null;
  partnerId: string | null;
};

export type AuthState = {
  isAuthenticated: boolean;
};

export const store = configureStore({
  reducer: {
    demoIdentity: demoIdentitySlice.reducer,
    auth: authSlice.reducer,
  },
});
