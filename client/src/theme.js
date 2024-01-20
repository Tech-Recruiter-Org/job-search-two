export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#f4f2ed",
    50: "#F0F0F0",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    700: "#333333",
  },
  primary: {
    50: "#0c66c2",
    500: "#71b7fb",
    700: "#006B7D",
  },
  secondary: {
    20: "#ff0000",
    50: "#e9a53f",
    100: "#ed7447",
  },
};

export const themeSettings = () => {
  return {
    palette: {
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
        red: colorTokens.secondary[100],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[300],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
      badge: {
        color: colorTokens.secondary[20],
      },
      extra: {
        orange: colorTokens.secondary[50],
        red: colorTokens.secondary[100],
      },
    },
  };
};
