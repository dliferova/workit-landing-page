/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
      },
      colors: {
        eucalyptus: "#44FFA1",
        "dark-purple": "#24053E",
        "davy-grey": "#584D62",
        "ghost-white": "#FCF8FF",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
