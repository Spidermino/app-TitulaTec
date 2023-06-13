import React from "react";
import { View, Text, Alert, TextInput, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Input } from "@rneui/base";
import { useFonts } from 'expo-font';

export default function LoginScreen({navigation}) {
 
    const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: '90%', height: '10%', position: 'absolute',
        top: 50,
        left: 10}}
      />
    
      <Image
        source={require('../assets/customer_120px.png')}
        style={{ width: '10%', height: '5%',
        top: -80,
        left: -150}}
      /><Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
      top: -110,
      left: -50}}>Inicio de sesión</Text>
      <Text style={{ 
        fontFamily: 'Montserrat',
      top: -50,
      left: -130}}>Ingrese sus datos:</Text>
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
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
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} />}
        rightIcon={<Ionicons name="eye-off-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa la contraseña"
        secureTextEntry={true}
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
            source={require('../assets/login_102px.png')}
            style={{ width: '20%', height: '200%' }}
          />
        }
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => Alert.alert('','Sesión iniciada con éxito',
        [{text: 'Aceptar', onPress: () => navigation.navigate("MenuTab")},])}
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

