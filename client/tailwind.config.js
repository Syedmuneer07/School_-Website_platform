/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#eff8f3",100:"#d6eee0",500:"#16a34a",600:"#15803d",700:"#166534" },
        ink:   { 50:"#f0f7ff",500:"#2563eb",600:"#1d4ed8",700:"#1e40af" }
      }
    }
  },
  plugins: []
};
