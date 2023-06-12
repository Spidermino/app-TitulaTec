import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../screens/LoginScreen";
import MenuScreen from "../screens/MenuScreen";
import SolicitudesScreen from "../screens/SolicitudesScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";


const Stack = createStackNavigator();

export default function Route() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Solicitudes" component={SolicitudesScreen} />
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}