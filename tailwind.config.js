/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        ring: {
          50: 'oklch(0.708 0 0)', // matches your original outline-ring/50 use
        },
        border: 'oklch(0.922 0 0)',
      },
    },
  },
  plugins: [],
}
