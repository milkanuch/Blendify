import { FC } from "react";
import { Text, Pressable } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { GRADIENT_END } from "./button.constants";

import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  label,
  style,
  gradientColors,
  labelStyle,
  gradientStyle,
  onPress: handleButtonPress,
  ...rest
}) => {
  return (
    <Pressable onPress={handleButtonPress} style={style} {...rest}>
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          end={GRADIENT_END}
          style={gradientStyle}
        >
          <Text style={labelStyle}>{label}</Text>
        </LinearGradient>
      ) : (
        <Text>{label}</Text>
      )}
    </Pressable>
  );
};
