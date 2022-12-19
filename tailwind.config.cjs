/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,svelte}",
  ],
  theme: {
    fontFamily: {
      "sans": [ "'Pretendard Variable'", "'Pretendard'", "var(--fallback-font-family)" ],
    },
  },
  plugins: [],
}
