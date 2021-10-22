import { Row, Col } from "antd";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero">
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
