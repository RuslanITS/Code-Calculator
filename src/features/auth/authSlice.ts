import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  pin: string,
  isAuthorized: boolean,
  message: string
}

const initialState: AuthState = {
  pin: '',
  isAuthorized: false,
  message: ''
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {

    addDigit: (state, action: PayloadAction<string>) => {
      if (state.message){
        state.message = ''
      }
      state.pin += action.payload;
    },

    clearPin: (state) => {
      state.pin = '';
      state.message = ''
    },

    checkPin: (state) => {
      if (state.pin === "1234") {
        state.isAuthorized = true;
        state.message = "Access Granted";
      } else {
        state.isAuthorized = false;
        state.message = "Access Denied";
        state.pin = "";
      }
    }

  }
})

export const { addDigit, clearPin, checkPin } = authSlice.actions;
export default authSlice.reducer;