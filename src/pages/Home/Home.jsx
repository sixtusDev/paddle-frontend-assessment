import { Row, Col, Image } from "antd";
import Button from "../../components/Button/Button";
import Card from "../../components/Card";
import heroImage from "../../assets/hero-image.png";
import pianoImage from "../../assets/piano.png";
import userIcon from "../../assets/user-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import serverIcon from "../../assets/server-icon.svg";
import boxIcon from "../../assets/box-icon.svg";
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
          <Col span={8}>
            <div className="flex-row align-items-center justify-content-center Stats__details">
              <div className="mr20">
                <Image preview={false} src={userIcon} />
              </div>
              <div className="flex-column">
                <span className="app-heading4">90+</span>
                <span className="app-heading5">Users</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex-row align-items-center justify-content-center Stats__details">
              <div className="mr20">
                <Image preview={false} src={locationIcon} />
              </div>
              <div className="flex-column">
                <span className="app-heading4">30+</span>
                <span className="app-heading5">Locations</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex-row align-items-center justify-content-center">
              <div className="mr20">
                <Image preview={false} src={serverIcon} />
              </div>
              <div className="flex-column">
                <span className="app-heading4">50+</span>
                <span className="app-heading5">Servers</span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="Features">
        <Row gutter={20}>
          <Col span={12}>
            <Image preview={false} src={pianoImage} />
          </Col>
          <Col span={12}>
            <h2 className="app-heading2">Features We Provide For You</h2>
            <p className="app-paragraph1">
              Curabitur tempor justo non turpis malesuada cursus. Mauris ac
              libero eu sem finibus lacinia nec pulvinar.
            </p>
            <div>
              <div className="flex-row align-items-center">
                <img src={boxIcon} alt="box" className="mr10" />
                <span className="app-paragraph2">Curabitur tempor justo</span>
              </div>
              <div>
                <img src={boxIcon} alt="box" className="mr10" />
                <span className="app-paragraph2">Curabitur tempor justo.</span>
              </div>
              <div>
                <img src={boxIcon} alt="box" className="mr10" />
                <span className="app-paragraph2">Curabitur tempor justo</span>
              </div>
              <div>
                <img src={boxIcon} alt="box" className="mr10" />
                <span className="app-paragraph2">Curabitur tempor justo</span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="Plan">
        <div className="center">
          <h2 className="app-heading2">Choose Your Plan</h2>
          <p className="app-paragraph1">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
