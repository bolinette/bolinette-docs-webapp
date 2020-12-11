module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"]
      },
      colors: {
        ideDark: "#23241f"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
