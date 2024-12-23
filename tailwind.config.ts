import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'Arial', 'sans-serif'], // Replace with your desired font
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
