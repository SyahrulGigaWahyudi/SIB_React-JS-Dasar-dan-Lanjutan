import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent({ active }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-libby shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          📚 Libbybook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center" activeKey={`#${active}`}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
