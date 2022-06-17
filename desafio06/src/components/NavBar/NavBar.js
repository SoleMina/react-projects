import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { CartWidget } from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar__container}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink
              to="/"
              className="nav-link"
              className={({ isActive }) =>
                isActive
                  ? styles.nav_linked + " ligthblue"
                  : styles.nav_linked + " white"
              }
            >
              Karianca Ecommerce
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/*
              <Nav.Link href="#features">Features</Nav.Link>
            */}
            </Nav>

            <Nav>
              <Nav.Link>
                <Link to="/cart">
                  <CartWidget icon={faShoppingCart} />
                </Link>
              </Nav.Link>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Productos
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Categories
              </NavLink>
              {/*
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  className={styles.dropdown}
                >
                  Action
                </NavDropdown.Item>
              </NavDropdown>
               */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
