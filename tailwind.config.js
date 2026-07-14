/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a09',
          soft: '#131210',
          line: '#221f1a',
        },
        paper: {
          DEFAULT: '#f3efe6',
          dim: '#9a958c',
        },
        gold: {
          DEFAULT: '#c9a463',
          soft: '#e4c98a',
          dim: '#8a7343',
        },
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
