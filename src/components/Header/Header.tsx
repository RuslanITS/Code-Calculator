import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          Calculator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;