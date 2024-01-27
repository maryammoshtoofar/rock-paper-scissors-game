/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "bounce 3s linear",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(169.40% 89.55% at 94.76% 6.29%, hsl(214, 47%, 23%) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      colors: {
        primary: "#2a46c0",
        dark: "#3b4363",
        gray: "#606e85",
      },
    },
  },
  plugins: [],
};
