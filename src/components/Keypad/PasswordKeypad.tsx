const buttonsPas = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9",
  "C", "0", "E"
];

interface Props {
  onButtonClick: (value: string) => void;
}

const PasswordKeypad = ({ onButtonClick }: Props) => {
  return (
    <div
      className="d-grid gap-3"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {buttonsPas.map((button) => {

        return (
          <button
            key={button}
            onClick={() => onButtonClick(button)}
            className={`btn py-3 fw-bold ${
              button === "C"
                ? "btn-danger"
                : button === "E"
                  ? "btn-success"
                  : "btn-dark"
            }`}
            style={{
              fontSize: "1.8rem",
              borderRadius: "15px",
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default PasswordKeypad;