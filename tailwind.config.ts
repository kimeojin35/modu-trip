/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      fontSize: {
        medium12: [
          "12px",
          {
            fontWeight: 500,
            lineHeight: "16px",
          },
        ],
        medium14: [
          "14px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
        medium16: [
          "16px",
          {
            fontWeight: 500,
            lineHeight: "24px",
          },
        ],
        medium18: [
          "18px",
          {
            fontWeight: 500,
            lineHeight: "24px",
          },
        ],
        medium20: [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "28px",
          },
        ],
        semibold20: [
          "20px",
          {
            fontWeight: 600,
            lineHeight: "28px",
          },
        ],
        semibold24: [
          "24px",
          {
            fontWeight: 600,
            lineHeight: "32px",
          },
        ],
        medium28: [
          "28px",
          {
            fontWeight: 500,
            lineHeight: "40px",
          },
        ],
        semibold32: [
          "32px",
          {
            fontWeight: 600,
            lineHeight: "40px",
          },
        ],
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        optic: {
          50: "#FDFFEE",
          100: "#F7FFCC",
          200: "#F4FFB3",
          300: "#EEFE90",
          400: "#EBFE7A",
          500: "#E6FE59",
          600: "#D1E751",
          700: "#A3B43F",
          800: "#7F8C31",
          900: "#616B25",
        },
        red50: "#FEF2F2",
        red100: "#FEE2E2",
        red200: "#FECACA",
        red300: "#FCA5A5",
        red400: "#F87171",
        red500: "#EF4444",
        red600: "#DC2626",
        red700: "#B91C1C",
        red800: "#991B1B",
        red900: "#7F1D1D",
      },
    },
  },
  plugins: [],
};
