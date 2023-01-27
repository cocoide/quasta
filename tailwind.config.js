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
    },
  },
  plugins: [],
};
