/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "orange-light": "#FF6B00",
      "background-black": "#0D0D0D",
      "footer-bg": "#121212",
      "title-gray": "#F0ECEC",
      "content-gray": "#D0CCCC",
    },
  },
  plugins: [],
};
