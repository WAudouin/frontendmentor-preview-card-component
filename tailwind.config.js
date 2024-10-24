/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "pure-white": "#FFFFFF",
      cream: "#F2EAE2",
      aurometal: "#6C7289",
      aquamarine: "#3D8168",
      "aquamarine-hover": "#1A4032",
      gunmetal: "#1C232B",
    },
    fontFamily: {
      display: ["Fraunces"],
      body: ["Montserrat"],
    },
  },
  plugins: [],
};
