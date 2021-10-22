import { Row, Col, Image } from "antd";
import Button from "../../components/Button/Button";

import heroImage from "../../assets/hero-image.png";
import userIcon from "../../assets/user-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import serverIcon from "../../assets/server-icon.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero">
        <Row>
          <Col span={12}>
            <h1 className="app-heading1">We Are Everything We Aspire To BE</h1>
            <p className="app-paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              orci condimentum lectus efficitur tempor vel eu massa. Sed
              molestie turpis eget ipsum malesuada dignissim
            </p>
            <Button type="solid">Get Started</Button>
          </Col>
          <Col span={12}>
            <Image preview={false} src={heroImage} alt="Hero" />
          </Col>
        </Row>
      </section>
      <section className="Stats">
        <Row>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
