import { FC } from "react";
import { View } from "react-native";

import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

import { styles } from "./modalBackdrop.styles";

export const ModalBackdrop: FC<BottomSheetBackdropProps> = ({ style }) => {
  return <View style={[styles.container, style]} />;
};
