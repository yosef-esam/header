/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        courgette: ['"Courgette"', "cursive"],
        "noto-serif": ['"Noto Serif Vithkuqi"', "serif"],
        chonburi: ['"Chonburi"', "cursive"],
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
      },
    },
  },
  plugins: [],
};
