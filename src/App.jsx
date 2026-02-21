import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { About, Contact, Experience, Education, Skills, Events, Achievements, Patents, Hero, Navbar, Works, StarsCanvas, AllProjects, Preloader } from './components';

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Patents />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for 3D assets to prepare
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter basename="/venupagilla-portfolio">
      <div className="relative z-0 bg-primary">
        <Toaster position="top-center" reverseOrder={false} />
        {loading && <Preloader />}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
