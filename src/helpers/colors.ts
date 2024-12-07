const RGBA_BIT_NUMBER = 255;
const BIT_DIVIDER = 2;
const LUMINANCE_THRESHOLD = RGBA_BIT_NUMBER / BIT_DIVIDER;

const RGBA_REGEX = /rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/;

const LUMINANCE_MULTIPLIERS = {
  red: 0.2126,
  green: 0.7152,
  blue: 0.0722,
} as const;

export const generateRandomColor = () => {
  const red = Math.floor(Math.random() * RGBA_BIT_NUMBER);
  const green = Math.floor(Math.random() * RGBA_BIT_NUMBER);
  const blue = Math.floor(Math.random() * RGBA_BIT_NUMBER);

  const opacity = Math.random().toFixed(1);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

//SOURCE: https://stackoverflow.com/a/52879332/21495821
export const getInvertedColor = (rgba: string) => {
  const match = rgba.match(RGBA_REGEX);

  if (!match) {
    return;
  }

  const [_, red, green, blue] = match.map(Number);
  const luminance =
    LUMINANCE_MULTIPLIERS.red * red +
    LUMINANCE_MULTIPLIERS.green * green +
    LUMINANCE_MULTIPLIERS.blue * blue;

  if (luminance > LUMINANCE_THRESHOLD) {
    return "black";
  }

  return "white";
};
