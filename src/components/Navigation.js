import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <h2>OpenAI Tools</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav.Link href="/">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="product-desc">
              <b>Product Description</b>
            </Nav.Link>
            <Nav.Link href="cold-emails">
              <b>Cold Emails</b>
            </Nav.Link>
            <Nav.Link href="tweets">
              <b>Tweets</b>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
