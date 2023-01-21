import './App.css';
import linkedin from "./images/icons/icons8-linkedin-50.png"
import email from "./images/icons/icons8-envelope-50.png"

import Experience from './components/experience';
import Contact from './components/contact';
import HeadingPage from './components/HeadingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skill';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <HeadingPage />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
