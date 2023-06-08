import React from "react";
import { View, Text, Alert, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Input } from "@rneui/base";
import MenuScreen from "./MenuScreen";
import SolicitudesScreen from "./SolicitudesScreen";

export default function LoginScreen() {
  const navigation = useNavigation();
  
  navigation.setOptions({ title: "" })
  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: '90%', height: '10%', position: 'absolute',
        top: 0,
        left: 0}}
      />
      {/* <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator> */}
      <Text leftIcon={<Ionicons name="person-outline" size={40} />}>Inicio de sesión</Text>
      <Text>Ingrese sus datos:</Text>
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Contraseña:"
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} />}
        rightIcon={<Ionicons name="eye-off-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa la contraseña"
        secureTextEntry={true}
      />
      <Button
        buttonStyle={{ backgroundColor: '#04764B', width: 180 }}
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
            source={require('../assets/login_102px.png')}
            style={{ width: '20%', height: '200%' }}
          />
        }
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => navigation.navigate('Menu')}
        title="Iniciar sesión"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
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



