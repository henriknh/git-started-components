module.exports = {
  // purge: ["./src/components/**/*.tsx"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
