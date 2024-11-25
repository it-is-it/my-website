// src/components/Navbar.tsx
import Link from 'next/link';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          My Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-300">
            <FaHome /> Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            <FaUser /> About
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            <FaProjectDiagram /> Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            <FaEnvelope /> Contact
          </Link>
          <button onClick={toggleDarkMode} className="ml-4">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
