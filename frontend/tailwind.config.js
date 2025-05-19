/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        "primary-dark": "#0050a0",
        secondary: "#1a1a1a",
        "secondary-dark": "#0a0a0a",
        background: "#f8f9fa",
        "text-dark": "#333333",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
}; 