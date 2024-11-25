import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="bg-purple-700 shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            My Portfolio
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-lg text-gray-200 mb-12">
          A passionate developer eager to create amazing web experiences.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/300?text=Project+${
                  index + 1
                }`}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Project Title</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 py-4 text-center text-gray-300">
        © 2024 My Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
