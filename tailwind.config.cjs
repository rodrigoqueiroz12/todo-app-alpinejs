/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    colors: {
      "purple": "#8284FA",
      "purple-dark": "#5E60CE",
      "blue": "#4EA8DE",
      "blue-dark": "#1E6F9F",
      "gray-700": "#0D0D0D",
      "gray-600": "#1A1A1A",
      "gray-500": "#262626",
      "gray-400": "#333333",
      "gray-300": "#808080",
      "gray-200": "#D9D9D9",
      "gray-100": "#F2F2F2",
      danger: "#E25858",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "sm": "12px",
      "md": "14px",
      "lg": "16px"
    },
    lineHeight: {
      "140": "140%"
    }
  },
  plugins: [],
};