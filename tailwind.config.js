module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#4fd1c5',
          DEFAULT: '#319795',
          dark: '#285e61',
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}