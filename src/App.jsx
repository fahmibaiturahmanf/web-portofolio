import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1E1E1E] overflow-x-hidden">
        <Navbar />
        <main className="grow">
          <main className="grow pt-20 md:pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          </main>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;