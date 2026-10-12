/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#101114",
        asphalt: "#181a1e",
        pit: "#23252a",
        orange: "#ff5722",
        racing: "#e50914",
        midnight: "#0b132b",
        cyan: "#3dd6d0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        carbon: "repeating-linear-gradient(45deg, #17181b 0 2px, #121316 2px 4px)",
      },
      keyframes: {
        "live-pulse": { "0%, 100%": { opacity: "1" }, "50%": { opacity: ".4" } },
        "ticker-scroll": { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        live: "live-pulse 1.4s ease-in-out infinite",
        ticker: "ticker-scroll 32s linear infinite",
      },
    },
  },
  plugins: [],
};