/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#b71c1c", // Hlavná červená
        secondary: "#d32f2f", // Svetlejšia červená
        accent: "#ffebee", // Svetloružová
      },
    },
  },
  plugins: [],
}

