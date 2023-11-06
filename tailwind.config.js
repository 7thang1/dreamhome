const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#806056",
      },
      backgroundImage: {
        map: "url('/map.svg')",
        hcm: "url('/hcm.jpg')",
        dn: "url('/dn.jpg')",
        hn: "url('/hn.jpg')",
        bd: "url('/bd.jpg')",
      },
    },
  },
  plugins: [],
});
