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
  active,
}) => {
  return type === "plan" ? (
    <div
      className={
        active
          ? "CardPrice flex-column justify-content-between active"
          : "CardPrice flex-column justify-content-between"
      }
    >
      <div className="mb20">
        <img className="CardPrice__image" src={image} alt="card" />
        <h3 className="app-heading3 mb30">{plan}</h3>
        <div>
          {texts.map((text) => (
            <div key={text}>
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
            <span className="app-paragraph4">/ mo</span>
          </div>
        ) : (
          <div className="app-heading6 mb20">Free</div>
        )}
        <Button type={active ? "solid" : "outline"}>Select</Button>
      </div>
    </div>
  ) : (
    <div className={active ? "CardTestimony active shadow" : "CardTestimony"}>
      <div className="flex-row align-items-center mb20">
        <div className="flex-row align-items-center flex1">
          <img className="CardTestimony__image mr10" src={image} alt="user1" />
          <div className="flex-column ">
            <span className="app-heading3 CardTestimony__name">{name}</span>
            <span className="app-paragraph2 cardTestimony__location">
              {location}
            </span>
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
