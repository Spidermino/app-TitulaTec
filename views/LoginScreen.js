import React from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import MenuScreen from "./MenuScreen";
import SolicitudesScreen from "./SolicitudesScreen";


export default function LoginScreen() {
  const navigation = useNavigation();
const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese los datos"
      />
      <Text>Contenido</Text>
      <Button
        title="Solicitudes"
        onPress={() => navigation.navigate('Menu')}
      />
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Menu") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "Solicitudes") {
              iconName = focused ? "people-outline" : "people";
          }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { width: 400 },
        })}>
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Solicitudes" component={SolicitudesScreen} />
      </Tab.Navigator>
      
      
    </View>

  );

}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});