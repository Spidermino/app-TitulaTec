import React from "react";
import { View, Text } from "react-native";
import { ListItem } from 'react-native-elements';

export default function SolicitudesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ListItem.Content style={{flexDirection: 'row', backgroundColor:'gray'}}>
  <View style={{width: '50%'}}>
    <Text>Nombre.</Text>
  </View>
  <View style={{width: '50%'}}>
    <Text>Este es el segundo campo de texto.</Text>
  </View>
</ListItem.Content>
<ListItem.Content style={{flexDirection: 'row'}}>
  <View style={{width: '50%'}}>
    <Text>Nombre.</Text>
  </View>
  <View style={{width: '50%'}}>
    <Text>Este es el segundo campo de texto.</Text>
  </View>
</ListItem.Content>

    </View>
  );
}