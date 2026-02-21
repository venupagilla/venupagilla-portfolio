import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Education, Skills, Events, Achievements, Patents, Hero, Navbar, Works, StarsCanvas, AllProjects } from './components';

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
  return (
    <BrowserRouter basename="/venupagilla-portfolio">
      <div className="relative z-0 bg-primary">
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
