import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => (
    <Navbar expand="lg" className='navigation-bar'>
        <Navbar.Brand>Keith Ong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
                <Nav.Link href="#projects-section" className="my-link">Projects</Nav.Link>
                <Nav.Link href="#contact-section" className="my-link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar