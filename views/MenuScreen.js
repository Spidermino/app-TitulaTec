import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';


import SolicitudesScreen from "./SolicitudesScreen";
const Tab = createBottomTabNavigator();
export default function MenuScreen() {  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menu</Text>
      <Text>Contenido</Text>
      
    </View>
  );
}