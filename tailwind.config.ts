import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        "dm-serif": ["var(--font-dm-serif)", "serif"],
      },
      screens: {
        mobile: "700px",
      },
      colors: {
        primary: {
          DEFAULT: "#128947",
          dark: "#0e6d37",
        },
        text: {
          primary: "#1f1f1f",
          secondary: "#101010",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        custom: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
