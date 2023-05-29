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
        Grotesk: ["Cabinet Grotesk"],
        Cabinet_Grotesk: ["Cabinet_Grotesk"],
      },
      colors: {
        green: "#009832",
        dark: "#111928",
        gray: "#6B7280",
      },
      fontFamily: {
        inter: ['Inter', "sans-serif"]
      }
    },
  },
  plugins: [],
};
