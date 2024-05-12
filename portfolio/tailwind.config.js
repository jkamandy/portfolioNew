const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite alternate',
      },  
      colors: {
        "background-dark": "#181919",
        "primary-orange": "#F0B645",
        "light-gray": "#bdbdbd",
        "text-gray": "#747575",
        "navbar-dark": "#222222",
        "subheading-text": "#737474",
      },
      width: {
        'w-navbar': '28rem', // You can set any value you want
      }
    },
  },
  darkMode: "class",

  plugins: [nextui()]
}

