import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar'
import HomepageHero from './components/HomepageHero'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <Container fluid className="head-container">
      <NavigationBar />
      <HomepageHero />
      <ProjectSection/>
      <ContactSection/>
    </Container>
  );
}

export default App;
