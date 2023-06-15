import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Alumnos Stack Files
import MenuScreen from "../screens/MenuScreen";
import SolicitudesScreen from "../screens/SolicitudesScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";
import LoginScreen from "../screens/LoginScreen"
import DatosSolicitudScreen from "../screens/DatosSolicitudScreen";
import NuevaSolicitudScreen from "../screens/NuevaSolicitudScreen";
import EditSolicitudScreen from "../screens/EditSolicitudScreen";



const Stack = createStackNavigator();

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

const SolicitudesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Solicitudes" component={SolicitudesScreen} />
      <Stack.Screen name="DatosSolicitud" component={DatosSolicitudScreen} />
    </Stack.Navigator>
  );
}

const ConfiguracionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const NuevaSolicitudStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NuevaSolicitud" component={NuevaSolicitudScreen} />
    </Stack.Navigator>
  );
}
const EditSolicitudStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="EditSolicitud" component={EditSolicitudScreen} />
    </Stack.Navigator>
  );
}

export {
  MenuStackNavigator, SolicitudesStackNavigator, ConfiguracionStackNavigator,
  LoginStackNavigator, NuevaSolicitudStackNavigator, EditSolicitudStackNavigator
};