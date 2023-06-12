import React from "react";
import { View, Text } from "react-native";

export default function NuevaEvidenciaScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ListItem.Content style={{flexDirection: 'row'}}>
  <View style={{width: '50%'}}>
    <Text>Este es el primer campo de texto.</Text>
  </View>
  <View style={{width: '50%'}}>
    <Text>Este es el segundo campo de texto.</Text>
  </View>
</ListItem.Content>

    </View>
  );
}