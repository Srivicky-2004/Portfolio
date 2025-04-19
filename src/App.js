import './App.css';
import Home from './Components/HomePage/Home';
import Nav from './Components/NavBar/Nav';
import Skill from './Components/SkillPage/Skill';
import Projects from './Components/ProjectPage/Projects';
import Education from './Components/EduPage/Education';
import Contact from './Components/ContactPage/Contact';

function App() {
  return (
    <div>
       <Nav/>
       <Home/>
       <Skill/>
       <Projects/>
       <Education/>
       <Contact/>
    </div>
  );
}

export default App;
