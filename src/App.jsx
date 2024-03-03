import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="skills/*" element={<Skills />} />
        <Route path="work/*" element={<Work />} />
        <Route path="resume/*" element={<Resume />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App
