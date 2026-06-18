const buttonsCalc = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "C", "0", "=", "+"
];

interface Props {
  onButtonClick: (value: string) => void;
}

const CalcKeyboard = ({ onButtonClick }: Props) => {
  return (
    <div
      className="d-grid gap-2"
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {buttonsCalc.map((button) => {
        const isOperator = ["+", "-", "*", "/", "="].includes(button);

        return (
          <button
            key={button}
            onClick={() => onButtonClick(button)}
            className={`btn py-3 fs-4 fw-bold ${
              button === "C"
                ? "btn-danger"
                : isOperator
                  ? "btn-warning"
                  : "btn-dark"
            }`}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default CalcKeyboard;