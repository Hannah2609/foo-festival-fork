/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fooBlack: {
          900: "#000000",
        },
        fooBlue: {
          700: "#0D5272",
        },
        fooPink: {
          900: "#EC5564",
        },
        fooYellow: {
          200: "#FAE499",
        },
        fooWhite: {
          900: "#FFFFFF",
        },
        fooGrey: {
          200: "#D9D9D9",
          900: "#2B2B2B",
        },
        transparent: {
          200: "transparent",
        },
      },
    },
  },
  plugins: [],
};
