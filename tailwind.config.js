/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-white-alpha-10',
    'bg-white-alpha-10/50'
  ],
  theme: {
    extend: {
      colors: {
        'white-alpha-10': '#ffffff1a',
        'white-alpha': {
          10: '#ffffff1a'
        },
      },
    },
  },
  plugins: [],
}