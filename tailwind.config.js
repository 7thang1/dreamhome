
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =withMT({
  content: [

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#806056",
      },
      backgroundImage: {
        'map': "url('/map.svg')",
        'hcm': "url('/hcm.jpg')",
        'dn': "url('/dn.jpg')",
        'hn': "url('/hn.jpg')",
        'bd': "url('/bd.jpg')",
      }
    },
  },
  plugins: [
 ],
});