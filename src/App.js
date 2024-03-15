import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Certification from './components/Certification';



function App() {
  return (
    <div>
      
      <Header />
      <AboutMe />
      <Education/>
      <Certification/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
