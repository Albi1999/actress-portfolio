import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f7f4ef",
          100: "#ede5d7",
          200: "#dcc8a6",
          300: "#c5a77c",
          400: "#b68c5d",
          500: "#a57549",
          600: "#8a5d3a",
          700: "#6f472e",
          800: "#4f3222",
          900: "#2f1d15",
        },
        petrol: {
          50: "#ebf8fa",
          100: "#cdeff3",
          200: "#9fdde7",
          300: "#6fc9db",
          400: "#40b1c8",
          500: "#2a92aa",
          600: "#1f7488",
          700: "#155a6b",
          800: "#0c3e4c",
          900: "#04252f",
        },
        peach: {
          100: "#fff0e8",
          200: "#ffd9c5",
          300: "#ffbea2",
          400: "#ffa17d",
          500: "#ff8459",
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(10, 20, 30, 0.18)",
        glass: "0 0 0 1px rgba(255,255,255,0.18), 0 10px 50px rgba(0,0,0,0.28)",
      },
      backgroundImage: {
        "ambient-light":
          "radial-gradient(circle at 20% 25%, rgba(255, 190, 162, 0.4), transparent 45%), radial-gradient(circle at 80% 20%, rgba(63, 177, 200, 0.25), transparent 40%), linear-gradient(160deg, #fff8f1 0%, #f5efe5 45%, #f6f2eb 100%)",
        "ambient-dark":
          "radial-gradient(circle at 20% 20%, rgba(32, 119, 140, 0.35), transparent 45%), radial-gradient(circle at 85% 12%, rgba(255, 132, 89, 0.15), transparent 35%), linear-gradient(160deg, #081019 0%, #101b2a 45%, #121f1d 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
