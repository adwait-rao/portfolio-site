/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
      body: ["Open Sans"],
    },
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      colors: {
        colbase: "#222831",
        collayer: "#393E46",
        colbright: "#00ADB5",
        colwhite: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
