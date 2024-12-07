import { FC } from "react";
import { Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  label,
  style,
  onPress: handleButtonPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={handleButtonPress} style={style} {...rest}>
      {!!label && <Text style={style}>{label}</Text>}
    </TouchableOpacity>
  );
};
