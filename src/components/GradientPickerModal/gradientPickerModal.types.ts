import { GradientList } from "screens/HomeScreen/homeScreen.types";

export type GradientPickerModalProps = {
  gradientList: GradientList;
  activeIndex: number;
  onGradientSelect: (gradientIndex: number) => void;
};
