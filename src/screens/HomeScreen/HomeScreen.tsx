import { useState } from "react";

import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";

import { generateGradient } from "./homeScreen.helpers";

import { styles } from "./homeScreen.styles";

export const HomeScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<
    LinearGradientProps["colors"]
  >(["transparent", "transparent"]);

  const handleGenerateRandomColor = () => {
    const gradient = generateGradient();

    setBackgroundColor(gradient);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient colors={backgroundColor} style={styles.background} />
      <Button
        gradientColors={backgroundColor}
        gradientStyle={styles.buttonGradient}
        label="Hello There"
        labelStyle={styles.buttonLabel}
        onPress={handleGenerateRandomColor}
        style={styles.buttonContainer}
      />
    </SafeAreaView>
  );
};
