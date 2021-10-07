import { css } from "@emotion/react";

export const color = {
  // Palette

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  warningAA: "#BC5724",

  /////////////////

  // Primary
  red: "#e62600",
  navy: "#323264",
  navyRGB: "50, 50, 100",
  skyblue: "#c2e8ff",
  cream: "#f5f5f0",

  // Secondary
  ruby: "#aa0a0a",
  teal: "#0082aa",
  denim: "#284b9b",
  sienna: "#dc7846",
  lightcream: "#f9f9f6",

  // Seasonal
  holidayred: "#d91734",
  green: "#00853e",
  pink: "#e60572",
  yellow: "#fff284",
  orange: "#eD8B00",

  // Grayscale
  disabledgray: "#d9dada",
  stroke: "#989090",
  gray: "#707575",
  grayAA: "#707575",
  darkgray: "#414646",
  typegray: "#0a1414",

  white: "#ffffff",
  black: "#000000",
};

export const alertColors = {
  // Alerts
  green:"#00853E",
  red: color.red,
  yellow: "#fff284",
  yellowAA: "#bc5724",
};

export const transition = {
  speed: {
    ms3: "all 300ms ease-in-out",
  },
};

export const spacing = {
  padding: {
    one: 2,
    two: 4,
    small: 12,
    medium: 24,
    large: 32,
  },
  borderRadius: {
    default: 8,
    large: 16,
  },
};

export const typography = {
  type: {
    primary:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    light: "300",
    regular: "400",
    bold: "700",
  },
  size: {
    s1: "12",
    s2: "14",
    s3: "16",
    m1: "20",
    m2: "24",
    m3: "28",
    l1: "32",
    l2: "40",
    l3: "48",
    code: "90",
  },
};

export const breakpoint = 600;
export const pageMargin = "5.55555";

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

// Works based on Chakra instructions
export const fonts = {
  heading: "Source Sans Pro",
  body: "Source Sans Pro",
};
