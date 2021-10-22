import "./Button.scss";

const Button = ({ type, children }) => {
  return (
    <button className={`Button Button-${type}`}>
      {" "}
      <span>{children}</span>
    </button>
  );
};

export default Button;
