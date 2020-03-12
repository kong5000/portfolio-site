import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar'
import HomepageHero from './components/HomepageHero'

function App() {
  return (
    <Container fluid className="head-container">
      <NavigationBar/>
      <HomepageHero/>
    </Container>
  );
}

export default App;
