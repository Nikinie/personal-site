/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 40s ease infinite",
        "infinite-scroll": "infinite-scroll 1s linear infinite",
      },
      keyframes: {
        gradientMove: {
          "50%": { backgroundPosition: "100% 200%" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
