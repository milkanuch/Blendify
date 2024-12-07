import { StyleSheet } from "react-native";

export const styleSheet = (color: string | undefined) =>
  StyleSheet.create({
    gradientContainer: {
      borderColor: color,
    },
    label: {
      color,
    },
  });
