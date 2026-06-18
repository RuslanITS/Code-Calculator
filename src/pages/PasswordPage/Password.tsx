import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addDigit, checkPin, clearPin } from "../../features/auth/authSlice.ts";
import PasswordKeypad from "../../components/Keypad/PasswordKeypad.tsx";
import type { RootState } from "../../app/store";
import { Card } from "react-bootstrap";

const Password = () => {
  const dispatch = useDispatch();

  const pin = useSelector(
    (state: RootState) => state.auth.pin
  );

  const message = useSelector(
    (state: RootState) => state.auth.message
  );

  useEffect(() => {
    if (pin.length === 4) {
      dispatch(checkPin());
    }
  }, [pin, dispatch]);

  const handleClick = (value: string) => {
    if (value === "C") {
      dispatch(clearPin());
    } else if (value === "E") {

      if (pin === "1234") {
        dispatch(checkPin());
        toast.success("Access Granted");
      } else {
        dispatch(checkPin());
        toast.error("Incorrect Password");
      }

    } else {
      dispatch(addDigit(value));
    }
  };

  return (
    <Card
      className="shadow-lg border-0 mx-auto"
      style={{
        maxWidth: "420px",
        borderRadius: "25px",
      }}
    >
      <Card.Body className="p-4">
        <h3 className="text-center mb-4 fw-bold">
          Enter PIN 1234
        </h3>

        <div
          className={`rounded p-4 mb-4 text-center fw-bold ${
            message === "Access Granted"
              ? "bg-success text-white"
              : message === "Access Denied"
                ? "bg-danger text-white"
                : "bg-dark text-white"
          }`}
          style={{
            minHeight: "90px",
            fontSize: "2rem",
          }}
        >
          {message || "*".repeat(pin.length) || "----"}
        </div>

        <PasswordKeypad onButtonClick={handleClick} />
      </Card.Body>
    </Card>
  );
};
export default Password;