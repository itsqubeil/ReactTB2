/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        gfont: "Mulish,sans-serif",
        momon: "Montserrat, sans-serif",
        karla: "Karla, sans-serif",
      },
      colors: {
        oreng: "#FFB26B",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
