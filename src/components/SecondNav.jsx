import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import LocationIcon from '../assets/setting-5.svg'

const SecondNav = () => {
  return (
    <Container className='mt-5 mb-5' bg="white">
        <Nav as="ul">
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Resturant</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Cottage</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Castle</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Fantast city</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Beach</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Carbins</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>Off-grid</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item' as="li">
        <Nav.Link href="#" className='nav-link'>farm</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <button className='location'><Nav.Link href="#" className='nav-link location-link'>Location <img src={LocationIcon} alt=''/></Nav.Link></button>
      </Nav.Item>
    </Nav>
    </Container>
  );
}

export default SecondNav;