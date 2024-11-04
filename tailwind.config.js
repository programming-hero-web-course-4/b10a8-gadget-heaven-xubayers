import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9538E2",
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
