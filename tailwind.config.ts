import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Courier Prime', 'serif'], // Serif font for body text
        sans: ['Poppins', 'sans-serif'],  // Sans-serif font for headers
      },
      colors: {
        gray: {
          100: '#f9f9f9', // Light background
          900: '#333333', // Dark text
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h1
            },
            h2: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h2
            },
            h3: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h3
            },
            h4: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h4
            },
            h5: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h5
            },
            h6: {
              fontFamily: 'Poppins, sans-serif', // Sans-serif font for h6
            },
            p: {
              fontFamily: 'Courier Prime, serif', // Serif font for paragraphs
            },
            li: {
              fontFamily: 'Courier Prime, serif', // Serif font for list items
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
