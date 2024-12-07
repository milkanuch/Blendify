import { StyleSheet } from "react-native";

const ACTIVE_COLOR = "green";
const INACTIVE_COLOR = "black";

export const styleSheet = (isSelected: boolean) => {
  return StyleSheet.create({
    buttonLabel: {
      color: INACTIVE_COLOR,
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
    gradientContainer: {
      borderColor: isSelected ? ACTIVE_COLOR : INACTIVE_COLOR,
      borderRadius: 8,
      borderWidth: 2,
      marginVertical: 8,
      paddingVertical: 16,
    },
  });
};
