import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: [
          "var(--font-satoshi)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        "dm-serif": ["var(--font-dm-serif)", "serif"],
      },
      screens: {
        mobile: "700px",
      },
      spacing: {
        "100": "100px",
      },
      colors: {
        brand: {
          DEFAULT: "#128948",
          dark: "#0F6B3A",
          soft: "#E7F3EC",
        },
        ink: {
          DEFAULT: "#1B1819",
          strong: "#101010",
          body: "#4B5563",
          muted: "#6B7280",
        },
        paper: "#F9FAFB",
        line: "#E5E7EB",
      },
      fontSize: {
        display: ["clamp(2.25rem, 1.4rem + 3.2vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        title: ["clamp(1.625rem, 1.3rem + 1.2vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        lede: ["1.25rem", { lineHeight: "1.75rem" }],
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
