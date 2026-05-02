/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'souss-blue': '#1E88E5',
        'argan-orange': '#F57C00',
        'berber-red': '#C62828',
        'sand': '#F9E0A8',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
