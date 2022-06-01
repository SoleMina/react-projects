import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { CartWidget } from "../CartWidget";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Karianca Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/*
              <Nav.Link href="#features">Features</Nav.Link>
            */}
            </Nav>

            <Nav>
              <Nav.Link href="#" to="#">
                <CartWidget icon={faShoppingCart} />
              </Nav.Link>
              <Nav.Link href="#deets">Productos</Nav.Link>
              <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
