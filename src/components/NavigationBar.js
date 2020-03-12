import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => (
    <Navbar expand="lg" className='navigation-bar'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home" className="my-link">Home</Nav.Link>
                <Nav.Link href="#link" className="my-link">Projects</Nav.Link>
                <Nav.Link href="#link" className="my-link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar