/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#161615',
        },
        paper: {
          DEFAULT: '#fafaf7',
          dim: '#5f5f56',
        },
        line: '#e7e4da',
        accent: {
          DEFAULT: '#e2ff33',
          soft: '#f3ffb3',
          dim: '#c7e400',
        },
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
