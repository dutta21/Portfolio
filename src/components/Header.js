import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >Aritra Dutta</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/dutta21">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/aritra-dutta-00250722b/">LinkedIn</Nav.Link>
            <Nav.Link href="mailto:duttaaritra30@gmail.com">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;