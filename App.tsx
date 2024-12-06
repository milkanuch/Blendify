import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import { HomeScreen } from "./src/screens/HomeScreen";

export const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <HomeScreen />
    </SafeAreaProvider>
  );
};
