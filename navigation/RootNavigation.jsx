import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
