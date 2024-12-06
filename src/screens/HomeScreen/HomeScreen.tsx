import { Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./homeScreen.styles";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Hello There</Text>
    </SafeAreaView>
  );
};
