import { Container, Nav, Navbar } from "react-bootstrap";
import { Basket2Fill, PlusCircleFill, Shop, InfoCircleFill, EnvelopeFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4"
        >
          <Shop className="me-2 mb-1" />
          Name Brand
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center gap-2">
          <Nav.Link
            as={NavLink}
            to="/"
            className="d-flex align-items-center gap-2"
          >
            <Basket2Fill />
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className="d-flex align-items-center gap-2"
          >
            <InfoCircleFill />
            About
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/contact"
            className="d-flex align-items-center gap-2"
          >
            <EnvelopeFill />
            Contact
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/add"
            className="d-flex align-items-center gap-2"
          >
            <PlusCircleFill />
            Add Item
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;