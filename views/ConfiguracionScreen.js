import React from "react";
import { View, Text } from "react-native";
import { Switch } from "@rneui/base";

export default function ConfiguracionScreen() {
  const [value, setValue] = React.useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Configuraciones</Text>
  
  <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Modo oscuro</Text>
      <Switch
      color="#04764B"
      value={value}
      onValueChange={() => setValue()}
    />
    <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Cerrar sesión</Text>
      <Image
        source={require('../assets/logout.png')}
        style={{ width: '10%', height: '5%',
        top: -80,
        left: -150}}
      />

    </View>
  );
}