import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Courier Prime', 'serif'], // Add Newsreader to serif
        sans: ['Poppins', 'sans-serif'], // Default sans font (optional)
      },
      colors: {
        gray: {
          100: '#f9f9f9', // Light background
          900: '#333333', // Dark text
        },
      },
    },
  },
  plugins: [],
};

export default config;
