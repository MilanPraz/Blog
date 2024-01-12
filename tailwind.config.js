/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
      colors: {
        myWhite: "#EDF5E1",
        myBlue: "#05386B",
        mylight: "#8EE4AF",
        mygray: "#e0e0e0",
      },
      backgroundColor: {
        mainBg: "#5CDB95",
        lightBg: "#8EE4AF",
        darkBg: "#379683",
      },
    },
  },
  plugins: [],
};
