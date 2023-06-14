import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Alumnos Stack Files
import MenuScreen from "../screens/MenuScreen";
import SolicitudesScreen from "../screens/SolicitudesScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";
import LoginScreen from "../screens/LoginScreen"
import NuevaSolicitudScreen from "../screens/NuevaSolicitudScreen";


const Stack = createStackNavigator();

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false
    }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

const SolicitudesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false
  }}>
      <Stack.Screen name="Solicitudes" component={SolicitudesScreen} />
      <Stack.Screen name="NuevaSolicitud" component={NuevaSolicitudScreen} 
      options={{tabBarStyle:{display: "none"}, headerShown:false}}/>

    </Stack.Navigator>
  );
}

const ConfiguracionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false
  }}>
      <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false
  }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}


export { MenuStackNavigator, SolicitudesStackNavigator, ConfiguracionStackNavigator, LoginStackNavigator };