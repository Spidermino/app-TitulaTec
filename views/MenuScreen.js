import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

import SolicitudesScreen from "./SolicitudesScreen";

export default function MenuScreen() {  
  const navigation = useNavigation();
  navigation.setOptions({ header: props => null  })
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
    navigation.navigate("Login")
  }}> 
      <Image
        source={require('../assets/Back_arrow.png')}
        style={{ width: 10, height: 10,
        top: 50,
        left: 10}}
      />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Menú</Text>
      <TouchableOpacity onPress={onPress = () => {
    navigation.navigate("Login")
  }}> 
      <Image
        source={require('../assets/notification.png')}
        style={{ width: 10, height: 10,
        top: 50,
        left: 10}}
      /><Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Bienvenido: Jesús Gil</Text>
      </TouchableOpacity>
      <Button
        buttonStyle={{ backgroundColor: '#04764B', width: 180 ,paddingVertical: 15 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#000" }}
        iconRight
        icon={
          <Image
            source={require('../assets/petition.png')}
            style={{ width: '20%', height: '200%' }}
          />
        }
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => navigation.navigate("Solicitudes")}
        title="Solicitudes"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
      <Button
        buttonStyle={{ backgroundColor: '#04764B', width: 180 ,paddingVertical: 15 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#000" }}
        iconRight
        icon={
          <Image
            source={require('../assets/settings.png')}
            style={{ width: '20%', height: '200%' }}
          />
        }
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => navigation.navigate("Configuracion")}
        title="Configuracion"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
}