import { Image } from "antd";
import Button from "../Button/Button";

import "./Card.scss";

const Card = ({
  image,
  icon,
  texts,
  price,
  plan,
  type,
  text,
  name,
  location,
  rating,
}) => {
  return type === "plan" ? (
    <div className="CardPrice flex-column justify-content-between">
      <div className="mb20">
        <img className="CardPrice__image" src={image} alt="card" />
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
    <div className="CardTestimony">
      <div className="flex-row align-items-center mb20">
        <div className="flex-row align-items-center flex1">
          <img className="CardTestimony__image mr10" src={image} alt="user1" />
          <div className="flex-column align-content-center">
            <span className="app-heading3" style={{ marginBottom: "-10px" }}>
              {name}
            </span>
            <span className="app-paragraph2">{location}</span>
          </div>
        </div>
        <div className="flex-row align-items-center">
          <span className="mr10">{rating}</span>
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="app-paragraph1">{text}</div>
    </div>
  );
};

export default Card;
