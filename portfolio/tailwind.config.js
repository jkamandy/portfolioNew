/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#181919",
        "primary-orange": "#F0B645",
        "text-gray": "#747575",
        "navbar-dark": "#222222"
      },
      width: {
        'w-navbar': '28rem', // You can set any value you want
      }
    },
  },
  plugins: [],
}

