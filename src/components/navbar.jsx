import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand>Mattia De Vivo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-lg-0">
            <NavDropdown title="CV" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://drive.google.com/open?id=1lB2Mme8UMBar_59kueyJXct0OisLC9xX"
                target="_blank"
              >
                Italian
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://drive.google.com/file/d/1GWqKD9_2LQ749RUmSjRilbKiW1dBhp6K/view?usp=sharing"
                target="_blank"
              >
                English
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://github.com/mattiadevivo" target="_blank">
              <span style={{ marginRight: "10px" }}>Projects</span>
              <i class="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/mattia-de-vivo-281316157"
              target="_blank"
            >
              <span style={{ marginRight: "10px" }}>Linkedin</span>
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
