import { Row, Col, Image } from "antd";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import heroImage from "../../assets/hero-image.png";
import priceImage1 from "../../assets/price-image1.png";
import priceImage2 from "../../assets/price-image2.png";
import priceImage3 from "../../assets/price-image3.png";
import pianoImage from "../../assets/piano.png";
import userIcon from "../../assets/user-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import serverIcon from "../../assets/server-icon.svg";
import boxIcon from "../../assets/box-icon.svg";
import checkIcon from "../../assets/check-icon.svg";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/amazon.png";
import discord from "../../assets/discord.png";
import reddit from "../../assets/reddit.png";
import spotify from "../../assets/spotify.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import starIcon from "../../assets/star-icon.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="container">
          <Row>
            <Col xs={24} md={12} className="mb50">
              <h1 className="app-heading1">
                We Are Everything We Aspire To BE
              </h1>
              <p className="app-paragraph1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac orci condimentum lectus efficitur tempor vel eu massa. Sed
                molestie turpis eget ipsum malesuada dignissim
              </p>
              <Button type="solid">Get Started</Button>
            </Col>
            <Col xs={24} md={12}>
              <Image preview={false} src={heroImage} alt="Hero" />
            </Col>
          </Row>
        </div>
      </section>
      <section className="Stats">
        <div className="container">
          <div className="Stats__inner">
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
          </div>
        </div>
      </section>
      <section className="Features" id="about">
        <div className="container">
          <Row gutter={20}>
            <Col xs={24} md={12} className="mb30">
              <Image preview={false} src={pianoImage} />
            </Col>
            <Col xs={24} md={12}>
              <div className="Features__right">
                <h2 className="app-heading2">Features We Provide For You</h2>
                <p className="app-paragraph1">
                  Curabitur tempor justo non turpis malesuada cursus. Mauris ac
                  libero eu sem finibus lacinia nec pulvinar.
                </p>
                <div>
                  <div className="flex-row align-items-center">
                    <img src={boxIcon} alt="box" className="mr10" />
                    <span className="app-paragraph2">
                      Curabitur tempor justo
                    </span>
                  </div>
                  <div>
                    <img src={boxIcon} alt="box" className="mr10" />
                    <span className="app-paragraph2">
                      Curabitur tempor justo.
                    </span>
                  </div>
                  <div>
                    <img src={boxIcon} alt="box" className="mr10" />
                    <span className="app-paragraph2">
                      Curabitur tempor justo
                    </span>
                  </div>
                  <div>
                    <img src={boxIcon} alt="box" className="mr10" />
                    <span className="app-paragraph2">
                      Curabitur tempor justo
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="Plan" id="pricing">
        <div className="container">
          <div className="center Plan__text-box">
            <h2 className="app-heading2">Choose Your Plan</h2>
            <p className="app-paragraph1">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div>
            <Row gutter={20}>
              <Col xs={24} md={8} className="mb30">
                <Card
                  image={priceImage1}
                  icon={checkIcon}
                  texts={[
                    "Mauris sem neque",
                    "Mauris sem nequ",
                    "Mauris sem nequr",
                    "Mauris sem nequw",
                  ]}
                  plan="Free Plan"
                  type="plan"
                />
              </Col>
              <Col xs={24} md={8} className="mb30">
                <Card
                  image={priceImage2}
                  icon={checkIcon}
                  texts={[
                    "Mauris sem newe",
                    "Mauris sem neqwe",
                    "Mauris sem neqfe",
                    "Mauris sem neqae",
                    "Mauris sem neqxe",
                  ]}
                  plan="Standard Plan"
                  type="plan"
                  price="9"
                />
              </Col>
              <Col xs={24} md={8}>
                <Card
                  image={priceImage3}
                  icon={checkIcon}
                  texts={[
                    "Mauris sem nehue",
                    "Mauris sem njque",
                    "Mauris sem nvque",
                    "Mauris sem noque",
                    "Mauris sem nzque",
                    "Mauris sem nmque",
                  ]}
                  plan="Premium Plan"
                  type="plan"
                  price="12"
                  active
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="Sponsors">
        <div className="container">
          <div className="center mb70 Sponsors__text-box">
            <h2 className="app-heading2">Get Started With Paddle Today</h2>
            <p className="app-paragraph1">
              Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
              ante egestas ullamcorper
            </p>
            <div className="mb50">
              <Button type="solid">Start Today</Button>
            </div>
          </div>
          <div className="Sponsors__logo-box flex-row align-items-center justify-content-between">
            <img className="Sponsors__logo" src={netflix} alt="netflix" />
            <img className="Sponsors__logo" src={reddit} alt="reddit" />
            <img className="Sponsors__logo" src={amazon} alt="amazon" />
            <img className="Sponsors__logo" src={discord} alt="discord" />
            <img className="Sponsors__logo" src={spotify} alt="spotify" />
          </div>
        </div>
      </section>
      <section className="Testimony" id="testimony">
        <div className="container">
          <div className="Testimony__text-box center">
            <h2 className="app-heading2">
              Trusted by Thousands of Happy Customer
            </h2>
            <p className="app-paragraph1">
              Nam laoreet cursus diam, sed tristique arcu semper non.
              Suspendisse et suscipit est, nec laoreet mi. Nunc pellentesque
              imperdiet ultricies.
            </p>
          </div>
        </div>
        <div className="Testimony__card-wrapper">
          <Row gutter={20}>
            <Col xs={24} md={8} className="mb30">
              <Card
                type="testimony"
                icon={starIcon}
                image={user1}
                text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
                name="Sixtus Innocent"
                location="Lagos, Nigeria"
                rating="4.5"
                active
              />
            </Col>
            <Col xs={24} md={8} className="mb30">
              <Card
                type="testimony"
                icon={starIcon}
                image={user2}
                text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
                name="Yessica Christy"
                location="Shanxi, China"
                rating="4.5"
              />
            </Col>
            <Col xs={24} md={8}>
              <Card
                type="testimony"
                icon={starIcon}
                image={user3}
                text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
                name="Kim Young Jou"
                location="Kim Young Jou"
                rating="4.5"
              />
            </Col>
          </Row>
        </div>
        <div className="container">
          <div className="flex-row justify-content-end mt20 mb50">
            <img src={arrowLeftIcon} alt="arrow" className="mr10" />
            <div className="arrow-right">
              <img
                className="arrow-right-image"
                src={arrowRightIcon}
                alt="arrow right"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="Subscribe">
        <div className="container">
          <div className="Subscribe__inner">
            <div className="flex-row justify-content-between align-items-center Subscribe__items flex-wrap">
              <div className="Subscribe__text-box">
                <h2 className="app-heading2">
                  Subscribe Now for Get Special Features!
                </h2>
                <p className="app-paragraph1">
                  Praesent mollis lobortis nisl nec laoreet.
                </p>
              </div>
              <Button type="solid">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
