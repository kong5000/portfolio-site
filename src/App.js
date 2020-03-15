import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar'
import HomepageHero from './components/HomepageHero'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import CoverPage from './components/CoverPage'

const App = () => {
  return (
    <div>
         <NavigationBar/>
      <CoverPage/>
      <ProjectSection/>
    </div>
  );
}

export default App;
