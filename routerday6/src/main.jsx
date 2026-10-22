import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from "./components/Theme.jsx";

import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Skill from './components/Skill.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Project" element = {<Project />} />
      <Route path = "/Skill" element = {<Skill />} />
      <Route path = "/Education" element = {<Education />} />
      <Route path = "/Achievements" element = {<Achievements />} />
      <Route path = "/Contact" element = {<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

export default App