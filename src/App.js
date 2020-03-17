import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import CoverPage from './components/CoverPage'

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <CoverPage/>
      <ProjectSection id="projects"/>
      <ContactSection id="contact"/>
    </div>
  );
}

export default App;
