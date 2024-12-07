const RGBA_BIT_NUMBER = 255;

export const generateRandomColor = () => {
  const red = Math.floor(Math.random() * RGBA_BIT_NUMBER);
  const green = Math.floor(Math.random() * RGBA_BIT_NUMBER);
  const blue = Math.floor(Math.random() * RGBA_BIT_NUMBER);

  const opacity = Math.random().toFixed(1);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};
