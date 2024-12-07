import { forwardRef, useMemo } from "react";
import { Pressable, Text } from "react-native";

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

import { Gradient } from "screens/HomeScreen/homeScreen.types";

import { styles } from "./gradientPickerModal.styles";
import { GradientPickerModalProps } from "./gradientPickerModal.types";

export const GradientPickerModal = forwardRef<
  BottomSheetModal,
  GradientPickerModalProps
>(({ gradientList, onGradientSelect }, ref) => {
  const snapPoints = useMemo(() => ["80%"], []);

  const renderItem = (colors: Gradient, index: number) => {
    const handleGradientPress = () => {
      onGradientSelect(index);
    };

    return (
      <Pressable key={index} onPress={handleGradientPress}>
        <Text>{`Gradient ${colors[0]}`}</Text>
      </Pressable>
    );
  };

  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <BottomSheetView style={styles.container}>
        {gradientList.map(renderItem)}
      </BottomSheetView>
    </BottomSheetModal>
  );
});
