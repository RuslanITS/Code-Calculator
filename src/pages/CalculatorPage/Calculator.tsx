import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { backPassPage } from "../../features/auth/authSlice.ts";
import type { RootState } from "../../app/store";
import { addSymbol, calculateResult, clearExpression, removeLastSymbol, } from "../../features/calculator/calculatorSlice";
import CalcKeyboard from "../../components/Keypad/CalculatorKeypad";

const Calculator = () => {
  const dispatch = useDispatch();

  const expression = useSelector(
    (state: RootState) => state.calculator.expression
  );

  const handleClick = (value: string) => {
    if (value === "C") {
      dispatch(clearExpression());
    } else if (value === "=") {
      dispatch(calculateResult());
    } else {
      dispatch(addSymbol(value));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {

      if (/^[0-9]$/.test(event.key)) {
        dispatch(addSymbol(event.key));
      }

      if (["+", "-", "*", "/"].includes(event.key)) {
        dispatch(addSymbol(event.key));
      }

      if (event.key === "Enter") {
        dispatch(calculateResult());
      }

      if (event.key === "Escape") {
        dispatch(clearExpression());
      }

      if (event.key === "Backspace") {
        dispatch(removeLastSymbol());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-start mb-3">
        <button
          className="btn btn-danger rounded-pill px-3"
          onClick={() => dispatch(backPassPage())}
        >
          Back
        </button>
      </div>
    <div className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg border-0"
        style={{
          width: "420px",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <div
            className="bg-dark text-white rounded p-4 mb-3 text-end"
            style={{
              minHeight: "90px",
              fontSize: "2rem",
              overflow: "hidden",
              wordBreak: "break-all",
            }}
          >
            {expression || "0"}
          </div>

          <CalcKeyboard onButtonClick={handleClick} />
        </Card.Body>
        <Card className="mt-3 border-0 shadow-sm">
          <Card.Body>
            <h6 className="fw-bold">Keyboard Shortcuts</h6>

            <p className="mb-1">
              Numbers: <kbd>0-9</kbd>
            </p>

            <p className="mb-1">
              Operators: <kbd>+</kbd> <kbd>-</kbd> <kbd>*</kbd> <kbd>/</kbd>
            </p>

            <p className="mb-1">
              Calculate: <kbd>Enter</kbd>
            </p>

            <p className="mb-1">
              Delete: <kbd>Backspace</kbd>
            </p>

            <p className="mb-0">
              Clear: <kbd>Escape</kbd>
            </p>
          </Card.Body>
        </Card>
      </Card>
    </div>
    </>
  );
};

export default Calculator;