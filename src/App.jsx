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
  const [darkMode, setDarkMode] = useState(false);

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
      {/* Dark Mode Toggle Button with Only Sun and Moon Icons */}
      <button
  className="dark-mode-toggle"
  onClick={() => setDarkMode((prevMode) => !prevMode)}
>
  {darkMode ? <FaMoon /> : <FaSun />} {/* Toggle between moon and sun */}
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
