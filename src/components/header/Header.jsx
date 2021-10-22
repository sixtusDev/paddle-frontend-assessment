import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="logo" className="Header__image" />

      <nav className="Header__nav">
        <a href="#">About</a>
        <a href="#">FAQS</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </nav>
      <div className="Header__cta">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
