import { useRef, useState } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "components/Button";
import { GradientPickerModal } from "components/GradientPickerModal";

import { generateGradient, generateGradientList } from "./homeScreen.helpers";

import { styles } from "./homeScreen.styles";
import { GradientList } from "./homeScreen.types";

export const HomeScreen = () => {
  const [gradientList, setGradientList] = useState<GradientList>(
    generateGradientList(),
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const gradientPickerRef = useRef<BottomSheetModal>(null);

  const activeGradient = gradientList[activeIndex];

  const handleGenerateRandomColor = () => {
    const gradient = generateGradient();

    setGradientList((prevList) => {
      return prevList?.map((item, index) =>
        index === activeIndex ? gradient : item,
      );
    });
  };

  const handleOpenGradientPicker = () => {
    gradientPickerRef.current?.present();
  };

  const handleSelectGradient = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient colors={activeGradient} style={styles.background} />
      <Button
        gradientColors={activeGradient}
        gradientStyle={styles.buttonGradient}
        label="Hello There"
        labelStyle={styles.buttonLabel}
        onLongPress={handleOpenGradientPicker}
        onPress={handleGenerateRandomColor}
        style={styles.buttonContainer}
        subtitle="Tap anywhere on the screen to blend random colors, or press and hold to choose colors from our library. Have fun!"
        subtitleStyle={styles.buttonSubtitle}
      />
      <GradientPickerModal
        activeIndex={activeIndex}
        gradientList={gradientList}
        onGradientSelect={handleSelectGradient}
        ref={gradientPickerRef}
      />
    </SafeAreaView>
  );
};
