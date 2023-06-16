import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  MenuStackNavigator, SolicitudesStackNavigator,
  ConfiguracionStackNavigator, LoginStackNavigator, NuevaSolicitudStackNavigator, 
  EditSolicitudStackNavigator, EvidenciasStackNavigator, NuevaEvidenciaStackNavigator,
  EditEvidenciaStackNavigator, UsuariosStackNavigator, NuevoUsuarioStackNavigator
} from "./StackNavigator";
//{logged === true ? </BottomTabNavigator> : </Login>}
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "MenuTab") {
          iconName = focused ? "home-outline" : "home";
        } else if (route.name === "SolicitudesTab") {
          iconName = focused ? "clipboard-outline" : "clipboard";
        } else if (route.name === "ConfiguracionTab") {
          iconName = focused ? "cog-outline" : "cog";
        }else if (route.name === "UsuariosTab") {
          iconName = focused ? "people-outline" : "people";
        }else if (route.name === "EvidenciasTab") {
          iconName = focused ? "folder-open-outline" : "folder";
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    })}>
      <Tab.Screen name="LoginTab" component={LoginStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
      <Tab.Screen name="MenuTab" component={MenuStackNavigator}
        options={{ tabBarLabel: "Menú",tabBarStyle: { display: "none" }, headerShown: false }} />
      <Tab.Screen name="SolicitudesTab" component={SolicitudesStackNavigator}
        options={{ tabBarLabel: "Solicitudes", headerShown: false }} />
         <Tab.Screen name="EvidenciasTab" component={EvidenciasStackNavigator}
        options={{ tabBarLabel: "Evidencias", headerShown: false }} />
        <Tab.Screen name="UsuariosTab" component={UsuariosStackNavigator}
        options={{ tabBarLabel:"Usuarios", headerShown: false}} />
      <Tab.Screen name="ConfiguracionTab" component={ConfiguracionStackNavigator}
        options={{ tabBarLabel: "Configuracion", headerShown: false }} />
      <Tab.Screen name="NuevaSolicitudTab" component={NuevaSolicitudStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
      <Tab.Screen name="EditSolicitudTab" component={EditSolicitudStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
        <Tab.Screen name="NuevaEvidenciaTab" component={NuevaEvidenciaStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
      <Tab.Screen name="EditEvidenciaTab" component={EditEvidenciaStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
        <Tab.Screen name="NuevoUsuarioTab" component={NuevoUsuarioStackNavigator}
        options={{ tabBarStyle: { display: "none" }, headerShown: false, tabBarButton: () => null }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;