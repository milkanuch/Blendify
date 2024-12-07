import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  buttonGradient: {
    borderRadius: 8,
    borderWidth: 2,
    paddingVertical: 16,
    width: "100%",
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
