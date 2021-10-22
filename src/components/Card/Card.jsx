import { Image } from "antd";
import Button from "../Button/Button";

import "./Card.scss";

const Card = ({ image, icon, texts, price, plan, type }) => {
  return type === "plan" ? (
    <div className="Card flex-column justify-content-between">
      <div className="mb20">
        <img className="Card__image" src={image} alt="card" />
        <h3 className="app-heading3 mb30">{plan}</h3>
        <div>
          {texts.map((text) => (
            <div>
              <img src={icon} alt="icon" className="mr20" />
              <span className="app-paragraph1">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {price ? (
          <div className="mb20">
            <span className="app-heading6">${price}</span>
            <span className="app-paragraph1">/ mo</span>
          </div>
        ) : (
          <div className="app-heading6 mb20">Free</div>
        )}
        <Button type="outline">Select</Button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Card;
