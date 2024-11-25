// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './pages/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8',
        secondary: '#9333EA',
        accent: '#8B5CF6',
      },
    },
  },
  plugins: [],
};

export default config;
