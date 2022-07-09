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
          <Navbar.Brand>
            <NavLink to="/" className={styles.nav_linked}>
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
              <NavLink
                to="/categories/electro"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Electro
              </NavLink>
              <NavLink
                to="/categories/laptop"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Laptop
              </NavLink>
              <NavLink
                to="/categories/cellphone"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Cellphone
              </NavLink>
              <NavLink
                to="/categories/games"
                className={({ isActive }) =>
                  isActive
                    ? styles.nav_linked + " ligthblue"
                    : styles.nav_linked + " white"
                }
              >
                Games
              </NavLink>
              <Nav.Link>
                <Link to="/cart">
                  <CartWidget icon={faShoppingCart} />
                </Link>
              </Nav.Link>
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
