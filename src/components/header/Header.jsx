import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import Button from "../Button/Button";
import barsIcon from "../../assets/bars-icon.svg";

import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <header className="Header ">
      <Drawer placement="left" onClose={onCloseDrawer} visible={drawerVisible}>
        <nav className="flex-column align-items-center mb50 mt30">
          <a href="#about" className="Header__nav-link mb10">
            About
          </a>
          <a href="#faq" className="Header__nav-link mb10">
            FAQS
          </a>
          <a href="#pricing" className="Header__nav-link mb10">
            Pricing
          </a>
          <Link to="/github" className="Header__nav-link mb10">
            Github
          </Link>
          <a href="#testimony" className="Header__nav-link">
            Testimonials
          </a>
        </nav>
        <div className="flex-column align-items-center">
          <span className="Header__cta-link mb20">Sign In</span>
          <Button type="outline">Sign Up</Button>
        </div>
      </Drawer>
      <div className="container">
        <div className="flex-row justify-content-between align-items-center mb30">
          <Link to="/">
            <img src={logo} alt="logo" className="Header__image" />
          </Link>

          <img
            className="Header__drawer-icon"
            src={barsIcon}
            alt="menu"
            onClick={showDrawer}
          />

          <nav className="Header__nav">
            <a href="#about" className="Header__nav-link">
              About
            </a>
            <a href="#faq" className="Header__nav-link">
              FAQS
            </a>
            <a href="#pricing" className="Header__nav-link">
              Pricing
            </a>
            <a href="#testimony" className="Header__nav-link">
              Testimonials
            </a>
            <Link to="/github" className="Header__nav-link">
              Github
            </Link>
          </nav>
          <div className="Header__cta">
            <span className="Header__cta-link">Sign In</span>
            <Button type="outline">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
