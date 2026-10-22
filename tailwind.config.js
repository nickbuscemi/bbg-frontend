import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand palette
        dust: {
          DEFAULT: "#DAD7CD",
          light: "#EDEBE5",
        },
        sage: "#A3B18A",
        fern: "#588157",
        hunter: "#3A5A40",
        pine: {
          DEFAULT: "#344E41",
          deep: "#24372D",
        },
        // Neutral text
        ink: "#1A1E1B",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', "sans-serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "-apple-system", '"Segoe UI"', "Arial", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        button: "0.1em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
