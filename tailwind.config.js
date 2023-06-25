/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "#FF5757",
        "orange-yellow": "#FFB01F",
        "green-teal": "#00BD91",
        "cobalt-blue": "#1125D4",
        
        "light-slate-blue": "#7857FF",
        "light-royal-blue": "#2E2BE9",
        "violet-blue": "#4E21CA",
        "persian-blue": "#2421CA",

        "pale-blue": "#EBF1FF",
        "light-levander": "#C8C7FF",
        "dark-gray-blue": "#303B5A",
      },
    },
  },
  plugins: [],
}

