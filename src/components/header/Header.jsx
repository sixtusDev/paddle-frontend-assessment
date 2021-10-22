import Button from "../Button/Button";

import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="Header flex-row justify-content-between">
      {/* <div className="container"> */}
      <img src={logo} alt="logo" className="Header__image" />

      <nav className="Header__nav">
        <a href="#" className="Header__nav-link">
          About
        </a>
        <a href="#" className="Header__nav-link">
          FAQS
        </a>
        <a href="#" className="Header__nav-link">
          Pricing
        </a>
        <a href="#" className="Header__nav-link">
          Testimonials
        </a>
      </nav>
      <div className="Header__cta">
        <span className="Header__cta-link">Sign In</span>
        <Button type="outline">Sign Up</Button>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
