/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: { fontFamily: { sans: ['EB Garamond'], ornament: ['Bodoni Ornaments'] } }
  },

  plugins: []
};

module.exports = config;
