import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Percentage Calculator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#findValue">Find Value</Nav.Link>
                <Nav.Link href="#findPercentage">Find %</Nav.Link>
                <Nav.Link href="#increase-Decrease">Increase/Decrease</Nav.Link>
                <Nav.Link href="#price-increase">Price Increase</Nav.Link>
                <Nav.Link href="#price-decrease">Price Decrease</Nav.Link>
                <Nav.Link href="#gst">GST Calculator</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
