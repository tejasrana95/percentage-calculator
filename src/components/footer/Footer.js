import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Footer.scss';

export default function Footer () {
  const year = new Date().getFullYear();
    return (
        <footer>
          <Container>
            <Navbar.Brand href="#home">Percentage Calculator &copy; Infi Technology {year}</Navbar.Brand>
          </Container>
        </footer>
    );
}
