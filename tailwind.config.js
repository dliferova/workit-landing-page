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
      backgroundImage: {
        "pattern-1": 'url("/public/bg-pattern-1.svg")',
        "pattern-2": 'url("/public/bg-pattern-2.svg")',
        "pattern-3": 'url("/public/bg-pattern-3.svg")',
        hero: 'url("./assets/images/image-hero.webp")',
        "founder-avatar": 'url("./assets/images/image-founder.webp")',
      },
    },
  },
  plugins: [],
}
