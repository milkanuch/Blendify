import { GradientList } from "screens/HomeScreen/homeScreen.types";

export type GradientPickerModalProps = {
  gradientList: GradientList;
  onGradientSelect: (gradientIndex: number) => void;
};
