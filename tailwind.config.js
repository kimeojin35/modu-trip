/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        transparent: "rgba(0, 0, 0, 0)",
        white: "#FFFFFF",
        black: "#000000",
        gray50: "#F9FAFB",
        gray100: "#F3F4F6",
        gray200: "#E5E7EB",
        gray300: "#D1D5DB",
        gray400: "#9CA3AF",
        gray500: "#6B7280",
        gray600: "#4B5563",
        gray700: "#374151",
        gray800: "#1F2937",
        gray900: "#111827",

        optic50: "#FDFFEE",
        optic100: "#F7FFCC",
        optic200: "#F4FFB3",
        optic300: "#EEFE90",
        optic400: "#EBFE7A",
        optic500: "#E6FE59",
        optic600: "#D1E751",
        optic700: "#A3B43F",
        optic800: "#7F8C31",
        optic900: "#616B25",

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
      fontFamily: {
        pretendard: "var(--font-pretendard)",
      },
      fontSize: {
        bold48: [
          "48px",
          {
            fontWeight: 700,
            lineHeight: "58px",
          },
        ],
        bold40: [
          "40px",
          {
            fontWeight: 700,
            lineHeight: "48px",
          },
        ],
        medium36: [
          "36px",
          {
            fontWeight: 500,
            lineHeight: "44px",
          },
        ],
        semibold36: [
          "32px",
          {
            fontWeight: 600,
            lineHeight: "38px",
          },
        ],
        bold36: [
          "36px",
          {
            fontWeight: 700,
            lineHeight: "44px",
          },
        ],
        bold32: [
          "32px",
          {
            fontWeight: 700,
            lineHeight: "38px",
          },
        ],

        medium28: [
          "28px",
          {
            fontWeight: 500,
            lineHeight: "34px",
          },
        ],
        semibold28: [
          "28px",
          {
            fontWeight: 600,
            lineHeight: "34px",
          },
        ],
        bold28: [
          "28px",
          {
            fontWeight: 700,
            lineHeight: "34px",
          },
        ],
        regular24: [
          "24px",
          {
            fontWeight: 400,
            lineHeight: "28px",
          },
        ],
        medium24: [
          "24px",
          {
            fontWeight: 500,
            lineHeight: "28px",
          },
        ],
        semibold24: [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "28px",
          },
        ],

        medium20: [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "24px",
          },
        ],
        semibold20: [
          "20px",
          {
            fontWeight: 600,
            lineHeight: "24px",
          },
        ],

        medium18: [
          "18px",
          {
            fontWeight: 500,
            lineHeight: "22px",
          },
        ],
        semibold18: [
          "18px",
          {
            fontWeight: 600,
            lineHeight: "22px",
          },
        ],

        medium16: [
          "16px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        semibold16: [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "20px",
          },
        ],
        medium14: [
          "14px",
          {
            fontWeight: 500,
            lineHeight: "18px",
          },
        ],
        semibold14: [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "18px",
          },
        ],
        medium12: [
          "12px",
          {
            fontWeight: 500,
            lineHeight: "14px",
          },
        ],
      },
    },
  },
  plugins: [],
};
