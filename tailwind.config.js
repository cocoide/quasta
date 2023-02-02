/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2F97",
        accent: "#b48c2c",
        neutral: "#f4f4f4",
        shadow: "#ececec",
        outline: "#d4d4d4",
        text: "#525354",
        nothing: "#fffcfc",
      },
      keyframes: {
        downY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%) " },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%) " },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%) " },
        },
        upY: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%) " },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        scale: {
          "0%": { transform: "scale(.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        openModal: "downY 0.2s ease-out",
        slideIn: "slideIn 0.2s ease-out",
        slideOut: "slideOut 0.1s ease",
        upModal: "upY 0.2s ease-out",
        appear: "appear 0.2s ease-in-out",
        disappear: "disappear 0.1s ease",
        scale: "scale 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
