/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: "1.5rem",
      },
      colors: {
        primary: "#00A78E",
        secondary: "#0d0d0d",
        dark: "#171717",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated")],
};
