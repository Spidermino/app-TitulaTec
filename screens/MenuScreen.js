import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

import SolicitudesScreen from "./SolicitudesScreen";

export default function MenuScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ header: props => null })
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("Login")
      }}>
        <Image
          source={require('../assets/Back_arrow.png')}
          style={{
            width: 50, height: 50,
            top: -220,
            left: -150
          }}
        />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -200,
        left: -20
      }}>Menú</Text>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -190,
        left: -20
      }}>Bienvenido: Jesús Gil</Text>

      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("NotificacionesScreen")
      }}>
        <Image
          source={require('../assets/notification.png')}
          style={{
            width: 50, height: 50,
            top: -330,
            left: 150
          }}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', top:-100}}>
      <Button
        buttonStyle={{ backgroundColor: '#7C1C73', width: 180, paddingVertical: 30, top: 0 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#000" }}
        iconPosition="bottom"
        icon={
          <Image
            source={require('../assets/petition.png')}
            style={{ width: 80, height: 80 }}
          />
        }
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => navigation.navigate("Solicitudes")}
        title="Solicitudes"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 10}}
      />
      <Button
        buttonStyle={{ backgroundColor: '#04764B', width: 180, paddingVertical: 30 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#000" }}
        iconPosition="bottom"
        icon={
          <Image
            source={require('../assets/settings.png')}
            style={{ width: 80, height: 80 }}
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
    </View>
  );
}