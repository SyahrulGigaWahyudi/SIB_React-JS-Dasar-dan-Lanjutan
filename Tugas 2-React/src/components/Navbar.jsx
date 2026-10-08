import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/koleksi", label: "Koleksi" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

// Organism: navbar utama. NavLink otomatis menambah class "active"
// pada link yang cocok dengan URL saat ini.
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-libby shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          📚 Libbybook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center">
            {links.map((l) => (
              <Nav.Link key={l.to} as={NavLink} to={l.to} end={l.end}>
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
