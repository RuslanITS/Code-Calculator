import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p className="mb-1">
          Calculator
        </p>

        <small className="text-secondary">
          © 2026 All rights reserved
        </small>
      </Container>
    </footer>
  );
};

export default Footer;