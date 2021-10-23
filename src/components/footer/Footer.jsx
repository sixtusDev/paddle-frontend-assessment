import { Row, Col } from "antd";
import logo from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <Row gutter={30} justify="space-between">
          <Col xs={24} sm={12} md={12} className="mb10">
            <div>
              <img src={logo} alt="logo" className="mb30" />
              <p className="app-paragraph">
                Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
                ante egestas ullamcorper. Duis id mauris consequat, ultrices
                ligula at, laoreet mag. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi, repudiandae.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={4} md={4} className="mb30">
            <div>
              <h3 className="app-heading3">Product</h3>
              <p className="app-paragraph1">Praesent</p>
              <p className="app-paragraph1">App Dev</p>
              <p className="app-paragraph1">Testing</p>
              <p className="app-paragraph1">Praesent</p>
            </div>
          </Col>
          <Col xs={24} sm={4} md={4} className="mb30">
            <div>
              <h3 className="app-heading3">Engage</h3>
              <p className="app-paragraph1">Praesent</p>
              <p className="app-paragraph1">App Dev</p>
              <p className="app-paragraph1">Testing</p>
              <p className="app-paragraph1">Praesent</p>
            </div>
          </Col>
          <Col xs={24} sm={4} md={4}>
            <div>
              <h3 className="app-heading3">Earn Money</h3>
              <p className="app-paragraph1">Praesent</p>
              <p className="app-paragraph1">App Dev</p>
            </div>
          </Col>
        </Row>
        <p className="Footer__copy">© 2020 PADDLE</p>
      </div>
    </footer>
  );
};

export default Footer;
