import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calculator: calculatorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;