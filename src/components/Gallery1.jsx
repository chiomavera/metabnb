import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FirstImage from "../assets/Group 4048.png";
import SecondImage from "../assets/Group 4049.png";
import ThirdImage from "../assets/Group 4050.png";
import FourthImage from "../assets/Group 4051.png";
import FifthImage from "../assets/Group 4052.png";
import SixthImage from "../assets/Group 4053.png";
import SeventhImage from "../assets/Group 4054.png";
import EightImage from "../assets/Group 4055.png";

const Gallery1 = () => {
  return (
    <Container className="justify-content-center align-items-center">
      <div>
        <h2 className="gallery1-heading mt-5 mb-5">
          Inspiration for your next adventure
        </h2>
      </div>
      <div className="gallery-house">
        <Row>
          <Col lg={3} md={6}>
            <img
              src={FirstImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={SecondImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={ThirdImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={FourthImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6}>
            <img
              src={FifthImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={SixthImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={SeventhImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
          <Col lg={3} md={6}>
            <img
              src={EightImage}
              alt="beautiful ntf"
              className="gallery-image"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Gallery1;
