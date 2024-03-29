export const defaultTheme = {
  product: {
    blueDark: "#1E6F9F",
    blue: "#4EA8DE",
    purpleDark: "#5E60CE",
    purple: "#8284FA",
  },
  base: {
    "gray-700": "#0D0D0D",
    "gray-600": "#1A1A1A",
    "gray-500": "#262626",
    "gray-400": "#333333",
    "gray-300": "#808080",
    "gray-200": "#D9D9D9",
    "gray-100": "#F2F2F2",
  },

  feedback: {
    danger: "#E25858",
  },

  typography: {
    sizes: {
      EM: "0.75rem",
      SM: "0.875rem",
      ST: "1rem",
    },

    weights: {
      regular: "400",
      bold: "700",
    },
  },
} as const;
