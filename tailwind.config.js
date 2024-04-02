/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/public/index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',    
    },
    extend: {
      colors: {
        primary: '#f43f5e',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

