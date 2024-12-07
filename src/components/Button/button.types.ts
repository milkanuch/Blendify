import { TouchableOpacityProps } from "react-native-gesture-handler";

export type ButtonProps = TouchableOpacityProps & {
  label?: string;
};
