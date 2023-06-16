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
import EvidenciasScreen from "../screens/EvidenciasScreen";
import NuevaEvidenciaScreen from "../screens/NuevaEvidenciaScreen";
import EditEvidenciaScreen from "../screens/EditEvidenciaScreen";
import DatosEvidenciaScreen from "../screens/DatosEvidenciaScreen";
import UsuariosScreen from "../screens/UsuariosScreen";
import NuevoUsuarioScreen from "../screens/NuevoUsuarioScreen";
import DatosUsuarioScreen from "../screens/DatosUsuarioScreen";




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
const EvidenciasStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Evidencias" component={EvidenciasScreen} />
      <Stack.Screen name="DatosEvidencia" component={DatosEvidenciaScreen}/>
      
    </Stack.Navigator>
  );
}
const NuevaEvidenciaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NuevaEvidencia" component={NuevaEvidenciaScreen} />
    </Stack.Navigator>
  );
}
const EditEvidenciaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="EditEvidencia" component={EditEvidenciaScreen} />
    </Stack.Navigator>
  );
}
const UsuariosStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Usuarios" component={UsuariosScreen} />
      <Stack.Screen name="DatosUsuario" component={DatosUsuarioScreen} />
    </Stack.Navigator>
  );
}
const NuevoUsuarioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NuevoUsuario" component={NuevoUsuarioScreen} />
    </Stack.Navigator>
  );
}

export {
  MenuStackNavigator, SolicitudesStackNavigator, ConfiguracionStackNavigator,
  LoginStackNavigator, NuevaSolicitudStackNavigator, EditSolicitudStackNavigator,
  EvidenciasStackNavigator, EditEvidenciaStackNavigator, NuevaEvidenciaStackNavigator,
  UsuariosStackNavigator, NuevoUsuarioStackNavigator
};