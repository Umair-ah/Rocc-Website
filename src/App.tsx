import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Certificates from './components/Certificates';
import OrganizationalStructure from './components/OrganizationalStructure';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Projects />
      <Clients />
      <Certificates />
      <OrganizationalStructure />
      <ImageGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
