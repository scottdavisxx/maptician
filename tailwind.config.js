/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "border",
    "rounded-lg",
    "border-blue-600",
    "p-3",
    "mb-4",
    "w-[30%]",
  ],
};
