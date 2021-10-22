import "./Button.scss";

const Button = ({ type, children }) => {
  return <button className={`Button Button-${type}`}> {children}</button>;
};

export default Button;
