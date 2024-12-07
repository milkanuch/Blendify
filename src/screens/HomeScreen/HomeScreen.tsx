import { useState } from "react";
import { Text } from "react-native";

import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { generateRandomColor } from "../../helpers/colors";

import { styles } from "./homeScreen.styles";

export const HomeScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<
    LinearGradientProps["colors"]
  >(["transparent", "transparent"]);

  const handleGenerateRandomColor = () => {
    const randomColor = generateRandomColor();
    const secondRandomColor = generateRandomColor();

    setBackgroundColor([randomColor, secondRandomColor]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient colors={backgroundColor} style={styles.container}>
        <TouchableOpacity onPress={handleGenerateRandomColor}>
          <Text>Hello There</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};
