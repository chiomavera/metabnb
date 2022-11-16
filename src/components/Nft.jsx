import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterImage from "../assets/footer-image.webp";
const Nfts = () => {
  return (
    <main className="Nfts mt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6} className='pb-5'>
            <h1 className="Nfts-heading">Metabnb NFTs</h1>
            <p className="Nfts-text">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              customer access to loads of our exclusive services.
            </p>
            <button className="Nfts-btn">
              <a href="#learn-more">Learn more</a>
            </button>
          </Col>
          <Col lg={6}>
            <div className="hero-image-box mb-5">
              <img
                src={FooterImage}
                alt="Beautiful nfts"
                width="300"
                className="Nfts-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Nfts;
