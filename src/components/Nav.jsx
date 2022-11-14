import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.svg'
import Button from './Button';

const TopNavBar = () => {
    return (
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand>
          <img
              alt="logo"
              src={Logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/place">Place to stay</Nav.Link>
              <Nav.Link href="#nfts">NFTs</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
            </Nav>
            <Button />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default TopNavBar;