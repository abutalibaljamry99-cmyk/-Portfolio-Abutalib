import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Colour System (Black & White only) ──────────────────────────────
      colors: {
        brand: {
          black: "#0A0A0A",
          white: "#F5F5F5",
          // Neutral scale
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        // Inter for body — loaded via next/font in layout.tsx
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        // Cormorant Garamond for display headings
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem",  { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        "display-xl":  ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg":  ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md":  ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
        "display-sm":  ["1.875rem",{ lineHeight: "1.3",  letterSpacing: "-0.01em" }],
      },

      // ── Spacing ──────────────────────────────────────────────────────────
      maxWidth: {
        "content": "1280px",
      },

      // ── Motion ───────────────────────────────────────────────────────────
      transitionTimingFunction: {
        "ease-arch": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      // ── Border ───────────────────────────────────────────────────────────
      borderWidth: {
        "thin": "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
