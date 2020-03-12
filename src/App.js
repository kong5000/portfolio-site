import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar'
import HomepageHero from './components/HomepageHero'
import ProjectCard from './components/ProjectCard'
import gameImage from './assets/game.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container fluid className="head-container">
      <NavigationBar />
      <HomepageHero />
      <h2 id="projects-header">PROJECTS</h2>
      <Row className="card-holder">
        <Col className="col-lg-4">
          <ProjectCard
            image={gameImage}
            title="Android Game"
            text="A retro sidescroller mobile game"
            skills={[
              "Java", "Android", "Game Design"
            ]}
          />
        </Col>
        <Col className="col-lg-4">
          <ProjectCard
            image={gameImage}
            title="Android Game"
            text="A retro sidescroller mobile game"
            skills={[
              "Java", "Android", "Game Design"
            ]}
          />
        </Col>
        <Col className="col-lg-4">
          <ProjectCard
            image={gameImage}
            title="Android Game"
            text="A retro sidescroller mobile game"
            skills={[
              "Java", "Android", "Game Design"
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
