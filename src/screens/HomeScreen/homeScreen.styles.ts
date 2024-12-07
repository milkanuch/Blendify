import { StyleSheet } from "react-native";

const HORIZONTAL_PADDING = 16;

export const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: HORIZONTAL_PADDING,
    position: "absolute",
    right: HORIZONTAL_PADDING,
    top: 0,
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
  buttonSubtitle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
  screen: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});
