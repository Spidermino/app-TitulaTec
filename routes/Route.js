import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../views/LoginScreen";
import MenuScreen from "../views/MenuScreen";

const Stack = createStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={({ route }) => ({
                        tabBarVisible: route.state && route.state.index === 0,
                    })}
                />
                <Stack.Screen name="Menu" component={MenuScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}