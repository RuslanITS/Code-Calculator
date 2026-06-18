import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  expression: string;
}

const initialState: CalculatorState = {
  expression: '',
};

const calculatorSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {

    addSymbol: (state, action: PayloadAction<string>) => {
      state.expression += action.payload;
    },

    clearExpression: (state) => {
      state.expression = ''
    },

    calculateResult: (state) => {
      state.expression = String(eval(state.expression));
    }

  }
})

export const { addSymbol, clearExpression, calculateResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;