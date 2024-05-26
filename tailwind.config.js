/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        white_1: "#f7f8ff",
        blue: "#4781FF",
        black_1: "#b2b2b2",
        black_2: "#eeeeee",
        red: "#fd565c",
        green: "#40ad72",
        purple: "#ec4cdf",
      },
      container: {},
      extend: {
        fontFamily: {},
        backgroundImage: {},
        backgroundColor: {},
        boxShadow: {
          white_shadow: "0px 10px .2px 10px #c5c5da40",
        },
        screens: {},
      },
    },
  },
  plugins: [],
};
