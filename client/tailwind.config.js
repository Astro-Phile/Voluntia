// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line ensures Tailwind scans your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}