import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterLogo from "../assets/footerlogo.svg";
import FacebookLogo from "../assets/facebook-263-721950.svg";
import InstagramLogo from "../assets/instagram-216-721958.svg";
import TwitterLogo from "../assets/twitter-241-721979.svg";
import Copy from "../assets/copyright.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4}>
            <img src={FooterLogo} alt="Brand Logo" width="150" height="50" />
          </Col>
          <Col lg={8}>
            <div className="footer-links">
              <div>
                <a href="#community">
                  <p className="footer-main-link">Community</p>
                </a>
                <a href="#ntf">
                  <p className="footer-sub-link">NFT</p>
                </a>
                <a href="#tokens">
                  <p className="footer-sub-link">Tokens</p>
                </a>
                <a href="#landlords">
                  <p className="footer-sub-link">Landlords</p>
                </a>
                <a href="#discord">
                  <p className="footer-sub-link">Discord</p>
                </a>
              </div>
              <div>
                <a href="#places">
                  <p className="footer-main-link">Places</p>
                </a>
                <a href="#castle">
                  <p className="footer-sub-link">Castle</p>
                </a>
                <a href="#farm">
                  <p className="footer-sub-link">Farms</p>
                </a>
                <a href="#beach">
                  <p className="footer-sub-link">Beach</p>
                </a>
                <a href="#learn-more">
                  <p className="footer-sub-link">Learn more</p>
                </a>
              </div>
              <div>
                <a href="#about-us">
                  <p className="footer-main-link">About Us</p>
                </a>
                <a href="#road-map">
                  <p className="footer-sub-link">Road map</p>
                </a>
                <a href="creators">
                  <p className="footer-sub-link">Creators</p>
                </a>
                <a href="career">
                  <p className="footer-sub-link">Career</p>
                </a>
                <a href="#contact">
                  <p className="footer-sub-link">Contact</p>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-last">
          <div className="footer-icons mb-5">
            <a href="#facebook">
              <img src={FacebookLogo} alt="Facebook Logo" />
            </a>
            <a href="#instagram">
              <img src={InstagramLogo} alt="Instagram Logo" />
            </a>
            <a href="#twitter">
              <img src={TwitterLogo} alt="Twitter logo" />
            </a>
          </div>
          <div>
            <a href="#copy">
              <img src={Copy} alt="Copyright" width="80" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
