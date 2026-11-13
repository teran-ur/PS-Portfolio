import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F7F7F5",
          secondary: "#EBEBE8",
          card: "#FFFFFF",
          dark: "#171717",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FFFFFF",
          muted: "#EBEBE8",
          dark: "#171717",
        },
        accent: {
          primary: "#FF6B35",
          secondary: "#E85D26",
          light: "#FFF1EB",
          muted: "rgba(255, 107, 53, 0.12)",
        },
        text: {
          primary: "#171717",
          secondary: "#686868",
          muted: "#8E8E93",
          light: "#FFFFFF",
          dark: "#171717",
        },
        border: {
          DEFAULT: "#E5E5E2",
          subdued: "#E5E5E2",
          accent: "rgba(255, 107, 53, 0.35)",
          dark: "rgba(255, 255, 255, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 12px 24px -6px rgba(0, 0, 0, 0.08), 0 4px 8px -4px rgba(0, 0, 0, 0.03)",
        orange: "0 4px 20px -2px rgba(255, 107, 53, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
