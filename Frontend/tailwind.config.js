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
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.no-scrollbar': {
            '-webkit-scrollbar': 'none',
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          },
        });
      },
    ],
  },
};
