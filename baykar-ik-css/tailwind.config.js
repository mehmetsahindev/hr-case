/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-gray": {
          200: "#E2E8F0",
          600: "#475569",
          900: "#0F172A",
        },
        "blue-light": {
          700: "#0369A1",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        container: "1440px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
