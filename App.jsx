import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BioDataProvider } from "./BioDataContext";

export default function App() {
  const [loaded] = useFonts({
    RobotoSlab_X: require("./assets/fonts/roboto/RobotoSlab-ExtraBold.ttf"),
    OpenSans_SB: require("./assets/fonts/opensans/OpenSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <BioDataProvider>
        <RootNavigation />
      </BioDataProvider>
    </>
  );
}
