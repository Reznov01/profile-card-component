/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      "phone-mini": "360px",
      "Tablet-media": "768px",
      "Desktop-media": "1440px",
    },
    extend: {
      colors: {
        "Dark-cyan": "hsl(185, 75%, 39%)",
        "Very-dark-desaturated-blue": " hsl(229, 23%, 23%)",
        "Dark-grayish-blue": "hsl(227, 10%, 46%)",
        "Dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        Kumbh: '"Kumbh Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
