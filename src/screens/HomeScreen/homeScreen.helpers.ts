import { generateRandomColor } from "helpers/colors";

import { Gradient, GradientList } from "./homeScreen.types";

const MIN_COLORS_LENGTH = 2;
const MAX_COLORS_LENGTH = 5;

const GRADIENT_LIST_LENGTH = 20;

export const generateGradient = (): Gradient => {
  const colorLength = Math.max(
    MIN_COLORS_LENGTH,
    Math.floor(Math.random() * MAX_COLORS_LENGTH),
  );

  const colors = Array.from(
    { length: colorLength },
    generateRandomColor,
  ) as unknown;

  return colors as Gradient;
};

export const generateGradientList = (
  length: number = GRADIENT_LIST_LENGTH,
): GradientList => {
  return Array.from({ length }, generateGradient);
};
