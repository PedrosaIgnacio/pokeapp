import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../imgs/logo.png";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="white">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
            <img src={logo} alt="..." />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
