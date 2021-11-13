import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hookis/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="nav-container py-3"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Camera-World</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end nav-custom"
          >
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>

            {user.email ? (
              <>
                <Navbar.Text className="px-2"></Navbar.Text>
                <span className="text-white pe-2">{user.displayName}</span>
                <Button variant="light" onClick={logOut}>
                  log-out
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log-In
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
