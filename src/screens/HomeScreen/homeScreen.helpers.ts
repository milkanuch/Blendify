import { LinearGradientProps } from "expo-linear-gradient";

import { generateRandomColor } from "helpers/colors";

const MIN_COLORS_LENGTH = 2;
const MAX_COLORS_LENGTH = 5;

export const generateGradient = (): LinearGradientProps["colors"] => {
  const colorLength = Math.max(
    MIN_COLORS_LENGTH,
    Math.floor(Math.random() * MAX_COLORS_LENGTH),
  );

  const colors = Array.from(
    { length: colorLength },
    generateRandomColor,
  ) as unknown;

  return colors as LinearGradientProps["colors"];
};
