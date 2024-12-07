import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import { HomeScreen } from "./src/screens/HomeScreen";
import { styles } from "./src/shared/styles";

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <HomeScreen />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
