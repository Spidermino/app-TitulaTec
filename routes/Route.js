import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../views/LoginScreen";
import MenuScreen from "../views/MenuScreen";
import SolicitudesScreen from "../views/SolicitudesScreen";
import ConfiguracionScreen from "../views/ConfiguracionScreen";
import NuevaSolicitudScreen from "../views/NuevaSolicitudScreen";

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
        <Stack.Screen name="NuevaSolicitud" component={NuevaSolicitudScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}