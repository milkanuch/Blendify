import { FC } from "react";
import { Text, Pressable } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { getInvertedColor } from "helpers/colors";

import { GRADIENT_END } from "./button.constants";

import { styleSheet } from "./button.styles";
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
  const textColor = gradientColors && getInvertedColor(gradientColors[0]);

  const styles = styleSheet(textColor);

  return (
    <Pressable onPress={handleButtonPress} style={style} {...rest}>
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          end={GRADIENT_END}
          style={[styles.gradientContainer, gradientStyle]}
        >
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </LinearGradient>
      ) : (
        <Text>{label}</Text>
      )}
    </Pressable>
  );
};
