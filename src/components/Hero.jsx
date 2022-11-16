import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroImage from "../assets/hero-image.webp";
import MbToken from "../assets/mbtoken.svg";
import MetaMask from "../assets/metamask.svg";
import OpenSea from "../assets/opensea.png";
const Hero = () => {
  return (
    <main>
      <Container>
        <Row className="hero">
          <Col lg={8}>
            <h1 className="hero-heading">
              Rent a <span className="colored-text">Place</span> away from{" "}
              <span className="colored-text">Home</span> in the{" "}
              <span className="colored-text">Metaverse</span>
            </h1>
            <p className="hero-text">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="search-box">
              <input
                type="text"
                className="search"
                placeholder="Search for location"
              />
              <button className="search-btn">Search</button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="hero-image-box">
              <img
                src={HeroImage}
                alt="Beautiful nfts"
                width="300"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="logo-house">
        <img src={MbToken} alt="mbtoken logo" className="icon" />
        <img src={MetaMask} alt="metamask logo" className="icon" />
        <img src={OpenSea} alt="opensea logo" className="icon" />
      </div>
    </main>
  );
};

export default Hero;
