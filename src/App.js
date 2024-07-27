import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Workexperiance from './Components/Workexperiance';
import Skills from './Components/Skills';
import Project from './Components/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Education from './Components/Education';
function App() {
  return (
    <div>
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
          < Route path="/about" element={
            <>
              <About />
            </>
          } />

          < Route path="/Education" element={
            <>
              <Education />
            </>
          } />

          < Route path="/Workexperiance" element={
            <>
              < Workexperiance />
            </>
          } />         
            < Route path="/Skills" element={
            <>
              < Skills />
            </>
          } />  
           < Route path="/Project" element={
            <>
              < Project />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
