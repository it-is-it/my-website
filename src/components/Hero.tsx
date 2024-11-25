// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">
        I am a passionate developer building amazing web experiences.
      </p>
    </section>
  );
};

export default Hero;
