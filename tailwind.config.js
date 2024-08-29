/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        openSans: ["var(--font-open-sans)"]
      },
      colors: {
        primary: "#003366",
        heading: "#161C2D",
        heading_Blue_BG: "#E0E0E0",
        subheading: "#4D4D4D",
        subheading_Blue_BG: "#B3B3B3",
        paragraph: "#2F2F2F",
        Paragraph_Primary_BG: "#DDDDDD",
        border: "#CCCCCC",
        Border_Primary_BG: "#333333",
        Nav_Link_Primary_BG: "##FF9B3F"
      },
    },
  },
  plugins: [],
};
