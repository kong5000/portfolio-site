import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <Container fluid>
      <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid id="home-hero" className="text-center">
        <Container>
          <h1 class="title">Keith Ong</h1>
          <p class="lead">A former electrical engineer who wants to code</p>
          <i class="fas fa-charging-station fa-7x icon"></i>
          <i class="fas fa-arrow-right fa-7x icon"></i>
          <i class="fas fa-laptop-code fa-7x icon"></i>
       </Container>
      </Jumbotron>
    </Container>
  );
}

export default App;
