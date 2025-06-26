/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Must include Header.jsx
  ],
  theme: {
    extend: {},
  },
plugins: [
  require('@tailwindcss/vite').debugScreens(),
],
};