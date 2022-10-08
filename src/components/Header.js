import React from "react";
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState } from "react";

export const Header = () => {
  const [navv, setNavv] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 0){
      setNavv(true);
    }else{
      setNavv(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <Navbar className={navv ? 'navv active' : 'navv'} fixed="top"  collapseOnSelect expand="lg" bg="" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={'/'}><h1><Badge bg="light" text="dark">TourGuide</Badge></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav active">
          <Nav className="me-auto">
            <Nav.Link eventKey={1} as={Link} to={'/packages'} active>Packages</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={'/contact'} active>Contact Us</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={'/customers'} active>Our Customers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="" eventKey={3} as={Link} to={'/signin'} active >SignIn</Nav.Link>
            <Nav.Link className="" eventKey={4} as={Link} to={'/signup'} active >SignUp</Nav.Link>
            <Nav.Link className="" eventKey={4} as={Link} to={'/adminlogin'} active >AdminLogin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


