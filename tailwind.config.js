/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-primary': '#050C26',
        'black-secondary': '#1D1D1D',
        'orange-primary': '#FF7426',
      },
      fontFamily: {
        'roboto-bold': 'Roboto, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      backgroundImage: {
        eclipse: "url('./src/assets/Ellipse 1.png')",
      },
    },
  },
  plugins: [],
};
