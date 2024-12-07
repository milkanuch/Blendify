import { forwardRef, useMemo } from "react";

import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { ModalBackdrop } from "components/ModalBackdrop/ModalBackdrop";

import { Gradient } from "screens/HomeScreen/homeScreen.types";

import { GradientPickerItem } from "./GradientPickerItem/GradientPickerItem";

import { styles } from "./gradientPickerModal.styles";
import { GradientPickerModalProps } from "./gradientPickerModal.types";

export const GradientPickerModal = forwardRef<
  BottomSheetModal,
  GradientPickerModalProps
>(({ gradientList, onGradientSelect, activeIndex }, ref) => {
  const snapPoints = useMemo(() => ["80%"], []);

  const renderItem = (colors: Gradient, index: number) => {
    const isSelected = activeIndex === index;

    const handleGradientPress = () => {
      onGradientSelect(index);
    };

    return (
      <GradientPickerItem
        gradientColors={colors}
        gradientIndex={index}
        isSelected={isSelected}
        key={index}
        onPress={handleGradientPress}
      />
    );
  };

  return (
    <BottomSheetModal
      backdropComponent={ModalBackdrop}
      enableDynamicSizing={false}
      ref={ref}
      snapPoints={snapPoints}
    >
      <BottomSheetScrollView style={styles.container}>
        {gradientList.map(renderItem)}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});
