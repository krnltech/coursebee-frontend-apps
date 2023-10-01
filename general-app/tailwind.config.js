/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "noto-sans": ["Noto Sans Bengali", "sans-serif"],
      },
      colors: {
        "bright-orange": "#FF4F00",
        "light-orange": "#FFF9F5",
        "secondary-orange": "#FFF1EB",
        "logo-orange": "#FEAA00",
        "off-white": "#FFFDF9",
        black: "#0C0F12",
        "black-v1": "#1F293D",
        "dark-gray": "#666666",
        "light-gray": "#D9D9D9",
        "light-gray-v1": "#A3A5B5",
        ncolor: {
          300: "#EBEEF3",
          500: "#768498",
          600: "#6E7991",
          700: "#3D4752",
          800: "#1F2F54",
        },
        "off-whie": "#FFFDF9",
      },
      screens: {
        md: "845px",
        // => @media (min-width: 845px) { ... }
      },
      backgroundImage: {
        "course-details-banner": "url('/images/courses/banner.png')",
      },
      boxShadow: {
        primary: "0px 2px 8px 0px rgba(20, 20, 43, 0.07)",
      },
    },
  },
  plugins: [],
};
