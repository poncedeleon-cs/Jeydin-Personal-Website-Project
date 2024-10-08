module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1e1e2e',
          text: '#cdd6f4',
          buttons: '#f2cdcd'
        },
        light: {
          background: '#eff1f5',
          text: '#4c4f69',
          buttons: '#dd7878'
        }
      }
    }
  }
}