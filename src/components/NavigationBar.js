import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => (
    <Navbar expand="lg" className='navigation-bar'>
        <Navbar.Brand>Keith Ong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
                <Nav.Link href="#home" className="my-link">Home</Nav.Link>
                <Nav.Link href="#projects" className="my-link">Projects</Nav.Link>
                <Nav.Link href="#contact" className="my-link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar