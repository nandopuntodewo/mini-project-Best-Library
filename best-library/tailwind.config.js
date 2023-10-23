/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#6f5643",
          "200": "#6d4d34",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
