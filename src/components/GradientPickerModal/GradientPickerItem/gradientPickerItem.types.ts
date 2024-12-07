import { Gradient } from "screens/HomeScreen/homeScreen.types";

export type GradientPickerItemProps = {
  gradientIndex: number;
  gradientColors: Gradient;
  isSelected: boolean;
  onPress: () => void;
};
