/** @type {import('tailwindcss').Config} */
export default {
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
        gray50: "#FAFAFA",
        gray100: "#F4F4F5",
        gray200: "#E4E4E7",
        gray300: "#D4D4D8",
        gray400: "#A1A1AA",
        gray500: "#71717A",
        gray600: "#52525B",
        gray700: "#3F3F46",
        gray800: "#27272A",
        gray900: "#18181B",
        gray950: "#09090B",
        yellow50: "#FDFFEE",
        yellow100: "#F7FFCC",
        yellow200: "#F4FFB3",
        yellow300: "#EEFE90",
        yellow400: "#EBFE7A",
        yellow500: "#E6FE59",
        yellow600: "#D1E751",
        yellow700: "#A3B43F",
        yellow800: "#7F8C31",
        yellow900: "#616B25",
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
