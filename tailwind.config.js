export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shortstack: ['"Short Stack"', 'cursive'],
      },

      backgroundImage: {
        hero: "url('/hero-img.jpg')",
      },
    },
  },
  plugins: [],
}
