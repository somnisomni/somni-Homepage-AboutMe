/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,svelte}",
  ],
  theme: {
    fontFamily: {
      // var(--fallback-font-family) is available at `./src/styles/common.css`, which included in `main.css`
      "sans": [ "'Pretendard Variable'", "'Pretendard'", "var(--fallback-font-family)" ],
    },
  },
  plugins: [],
}
