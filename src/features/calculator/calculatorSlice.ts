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
      const value = action.payload;

      const operators = ["+", "-", "*", "/"];

      if (
        state.expression === "" &&
        operators.includes(value)
      ) {
        return;
      }

      const lastChar = state.expression.slice(-1);

      if (
        operators.includes(lastChar) &&
        operators.includes(value)
      ) {
        return;
      }

      state.expression += value;
    },



    clearExpression: (state) => {
      state.expression = ''
    },

    calculateResult: (state) => {
      state.expression = String(eval(state.expression));
    },

    removeLastSymbol: (state) => {
      state.expression = state.expression.slice(0, -1);
    }

  }
})

export const { addSymbol, clearExpression, calculateResult, removeLastSymbol } = calculatorSlice.actions;

export default calculatorSlice.reducer;