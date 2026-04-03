/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "ui-sans-serif",
          "sans-serif"
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 48px -12px rgba(37, 99, 235, 0.45)",
        "glow-sm": "0 0 28px -10px rgba(37, 99, 235, 0.35)"
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)"
      },
      transitionDuration: {
        180: "180ms",
        240: "240ms"
      }
    }
  },
  plugins: []
};
