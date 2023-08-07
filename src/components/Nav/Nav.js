import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from '../../assest/logo.png'



function NavBar() {
    return (
            <Navbar  expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' className='logo-img' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Explore Foods</Nav.Link>
                    <Nav.Link href="#link">Reviews</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                    <Nav.Link href="#link" className='phone-number'>3512518265</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            );
}

export default NavBar
