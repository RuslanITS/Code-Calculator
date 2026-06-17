const buttonsPas = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9",
  "C", "0", "E"
];

interface Props {
  onButtonClick: (value: string) => void;
}

const Keypad = ({ onButtonClick }: Props) => {
  return (
    <div className="card p-3 shadow-sm">
      <div
        className="d-grid gap-2"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {buttonsPas.map((button) => (
          <button
            key={button}
            className="btn btn-dark py-3 fs-4"
            onClick={() => onButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keypad;