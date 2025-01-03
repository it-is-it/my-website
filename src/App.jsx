import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  // Dark mode state (default is true for dark mode)
  const [darkMode, setDarkMode] = useState(true);

  // Check for saved theme in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Update body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode); // Save preference in localStorage
  }, [darkMode]);

  return (
    <>
      {/* Dark Mode Toggle Button with Sun and Moon Icons */}
      <button
        className="btn"
        onClick={() => setDarkMode(prevMode => !prevMode)}
        style={{ position: 'fixed', top: '20px', right: '20px' }}
      >
        {darkMode ? <FaMoon /> : <FaSun />} {/* Toggle between moon and sun icons */}
        <span style={{ marginLeft: '8px' }}>
          {darkMode ? 'Dark Mode' : 'Light Mode'} {/* Toggle between dark and light text */}
        </span>
      </button>
      
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
