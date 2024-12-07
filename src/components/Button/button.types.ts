import { TextStyle, TouchableOpacityProps } from "react-native";

import { LinearGradientProps } from "expo-linear-gradient";

export type ButtonProps = TouchableOpacityProps & {
  label?: string;
  gradientColors?: LinearGradientProps["colors"];
  gradientStyle?: LinearGradientProps["style"];
  labelStyle?: TextStyle;
};
