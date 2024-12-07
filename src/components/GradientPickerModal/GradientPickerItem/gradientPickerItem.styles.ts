import { StyleSheet } from "react-native";

export const ACTIVE_COLOR = "#000";
export const INACTIVE_COLOR = "#B0BEC5";

export const ACTIVE_BORDER_WIDTH = 4;
export const INACTIVE_BORDER_WIDTH = 2;

const TEXT_COLOR = "#000";

export const styleSheet = (isSelected: boolean) => {
  return StyleSheet.create({
    buttonLabel: {
      color: TEXT_COLOR,
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
    gradientContainer: {
      borderColor: isSelected ? ACTIVE_COLOR : INACTIVE_COLOR,
      borderRadius: 8,
      borderWidth: isSelected ? ACTIVE_BORDER_WIDTH : INACTIVE_BORDER_WIDTH,
      marginVertical: 8,
      paddingVertical: 16,
    },
  });
};
