import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#71717A",
        colorDark: "#A1A1AA",
        colorBrut: "#FAFAFA",
        primary: "#111827",
        secondary: "#2563eb",
        primaryDark: "#e5e7eb",
        secondaryDark: "#3b82f6",
        red: "#ef4444",
        redBlack: "#991b1b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "8xl": "1350px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
