import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { FAB, Badge, Card } from "@rneui/base";
import { useIsFocused } from '@react-navigation/native';


export default function DatosUsuarioScreen({ route, navigation }) {
  const { item } = route.params;
  const isFocused = useIsFocused();
  const [usuario, setUsuario] = useState({
    idUsuario: item.idUsuario,
    nombre: item.nombre,
    sexo: item.sexo,
    telefono: item.telefono,
    email: item.email,
    domicilio: item.domicilio
  });
 

  

  const deleteData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.0.176:3000/usuarios/" + usuario.idUsuario, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: usuario.nombre,
        sexo: usuario.sexo,
        telefono: usuario.telefono,
        email: usuario.email,
        domicilio: usuario.domicilio
      }),
    })
      .then((response) => {
        response.text();
        navigation.navigate("UsuariosTab", { screen: 'Usuarios' });
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity onPress={onPress = () => {
          navigation.navigate("UsuariosTab", { screen: 'Usuarios' });
        }}>

          <Image
            source={require('../assets/Back_arrow.png')}
            style={{
              width: 50, height: 50,
              marginBottom: 10, top: -30, left: -80
            }}
          />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 20,
          top: -70,
          left: 0
        }}>Datos del usuario</Text>
      </View>
      <Card containerStyle={{ top: -50 }} wrapperStyle={{}}>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Nombre:</Text>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 15 }}>{usuario.nombre}</Text>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Sexo:</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 15 }}>{usuario.sexo}</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Telefono:</Text>
          <Text style={{ fontFamily: 'Montserrat' }}>{usuario.telefono}</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Email:</Text>
          <Text style={{ fontFamily: 'Montserrat' }}>{usuario.email}</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Domicilio:</Text>
          <Text style={{ fontFamily: 'Montserrat' }}>{usuario.domicilio}</Text>
        </View>
      </Card>


     
      <FAB onPress={() => Alert.alert('', '¿Esta seguro de eliminar el usuario: ' + usuario.nombre + '?',
        [{ text: 'Si', onPress: deleteData }, { text: 'No', style: 'cancel' }], { cancelable: false })}
        style={{ width: "50%", margin: 20, left: 70 }}
        placement="left"
        color="#C90000"
        size="large"
        overlayColor="#454545"
        icon={{ name: "delete", color: "#fff" }}
      />
    </View>
  );
}