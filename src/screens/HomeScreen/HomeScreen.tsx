import { useState } from "react";
import { Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { generateRandomColor } from "../../helpers/colors";

import { styleSheet } from "./homeScreen.styles";

export const HomeScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("transparent");

  const styles = styleSheet(backgroundColor);

  const handleGenerateRandomColor = () => {
    const randomColor = generateRandomColor();

    setBackgroundColor(randomColor);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity onPress={handleGenerateRandomColor}>
        <Text>Hello There</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
