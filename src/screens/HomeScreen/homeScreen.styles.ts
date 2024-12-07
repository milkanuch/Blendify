import { StyleSheet } from "react-native";

export const styleSheet = (backgroundColor: string) =>
  StyleSheet.create({
    screen: {
      alignItems: "center",
      backgroundColor,
      flex: 1,
      justifyContent: "center",
    },
  });
