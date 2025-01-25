// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this matches your file extensions
  ],
  theme: {
    extend: {},
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
};
