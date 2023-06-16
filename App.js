import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/TabNavigator";
import { useFonts } from 'expo-font';

function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Outfit-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return <NavigationContainer>
  <BottomTabNavigator />
</NavigationContainer>
;
}

export default App;