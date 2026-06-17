import { useDispatch, useSelector } from "react-redux";
import { addDigit, checkPin, clearPin } from "../../features/auth/authSlice.ts";
import Keypad from "../../components/Keypad/Keypad";
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

  const handleClick = (value: string) => {
    if (value === "C") {
      dispatch(clearPin());
    } else if (value === "E") {
      dispatch(checkPin());
    } else {
      dispatch(addDigit(value));
    }
  };

  return (
    <Card
      className="mx-auto shadow-lg"
      style={{
        maxWidth: "350px",
      }}
    >
      <Card.Body>
        <div
          className="border rounded p-3 mb-3 text-end fs-2"
          style={{ minHeight: "70px" }}
        >
          {message ? message : "*".repeat(pin.length)}
        </div>

        <Keypad onButtonClick={handleClick} />
      </Card.Body>
    </Card>
  );
};
export default Password;