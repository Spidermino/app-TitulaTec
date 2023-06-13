import React, { useState }from "react";
import { View, Text, Image, TouchableOpacity, Switch} from "react-native";
import useDarkMode from 'use-dark-mode';

export default function ConfiguracionScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const darkMode = useDarkMode(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -250,
        left: -10}}>Configuraciones</Text>
  <View style={{ flexDirection: 'row', top:-200, left:-20}}>
  <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: 10,
        left:-30
      }}>Modo oscuro</Text>
      <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      onChange={darkMode.toggle}
      value={isEnabled}
      />
    </View>
    <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("Login")
      }}>
    <View style={{ flexDirection: 'row', top:-60}}>
    <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Cerrar sesión</Text>
      <Image
        source={require('../assets/logout.png')}
        style={{ width: 30, height: 30,
        top: -115,
        left: -30}}
      />
</View>
</TouchableOpacity>
    </View>
  );
}
