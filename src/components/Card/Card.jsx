import { Image } from "antd";
import Button from "../Button/Button";

import "./Card.scss";

const Card = ({ image, icon, texts, price, plan, type }) => {
  return type === "plan" ? (
    <div className="Card">
      <div>
        <Image preview={false}></Image>
      </div>
      <h3>{plan}</h3>
      <div>
        <div>
          {texts.map((text) => (
            <>
              <img src={icon} alt="icon" />
              <span>{text}</span>
            </>
          ))}
        </div>
      </div>
      {price ? <div>${price} / mo</div> : <div>Free</div>}
      <Button type="outline"></Button>
    </div>
  ) : (
    <div></div>
  );
};

export default Card;
