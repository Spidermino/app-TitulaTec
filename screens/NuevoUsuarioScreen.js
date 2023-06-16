import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import { FAB } from "@rneui/base";


export default function NuevoUsuarioScreen({ navigation }) {
  const [usuario, setUsuario] = useState({
    nombre: "",
    sexo: "",
    telefono: "",
    email: "",
    domicilio: "",
    password: "",
  });
 
 

  const saveData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.0.176:3000/usuarios", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: usuario.nombre,
        sexo: usuario.sexo,
        telefono: usuario.telefono,
        email: usuario.email,
        domicilio: usuario.domicilio,
        password: usuario.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result");
        navigation.navigate("UsuariosTab");
        console.log(result);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };
  const onChangeNombre = (value) => {
    setUsuario({ ...usuario, nombre: value });
  };
  const onChangeSexo= (value) => {
    setUsuario({ ...usuario, sexo: value });
  };
  const onChangeTelefono = (value) => {
    setUsuario({ ...usuario, telefono: value });
  };
  const onChangeEmail = (value) => {
    setUsuario({ ...usuario, email: value });
  };
  const onChangeDomicilio = (value) => {
    setUsuario({ ...usuario, domicilio: value });
  };
  const onChangePassword = (value) => {
    setUsuario({ ...usuario, password: value });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("UsuariosTab")
      }}>
        <Image
          source={require('../assets/Back_arrow.png')}
          style={{
            width: 50, height: 50,
            top: -45,
            left: -150
          }}
        />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -70
      }}>Nuevo usuario</Text>
      <View style={{ top: -15 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Nombre: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangeNombre(value)}
          />
        </View>
        <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Sexo: </Text>
        <View style={{ flexDirection: 'row', left: -30 }}>
          <RadioButton
            value="Masculino"
            status={usuario.sexo === 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => onChangeSexo("Masculino")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Masculino</Text>
        </View>
        <View style={{ flexDirection: 'row', left: -30 }}>
          <RadioButton
            value="Femenino"
            status={usuario.sexo === 'Femenino' ? 'checked' : 'unchecked'}
            onPress={() => onChangeSexo("Femenino")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Femenino</Text>
        </View>
      </View>
      </View>
      <View style={{ top: -10 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Telefono: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            keyboardType="numeric"
            onChangeText={(value) => onChangeTelefono(value)}

          />
        </View>
      </View>
      <View style={{ top: -5 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Email: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangeEmail(value)}

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Domicilio: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangeDomicilio(value)}

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Contraseña: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangePassword(value)}
          />
        </View>
      </View>
      <FAB onPress={saveData}
        style={{ width: "80%", margin: 20, left: 150 }}
        placement="left"
        color="#0080FF"
        size="large"
        overlayColor="#454545"
        icon={{ name: "save", color: "#fff" }}
      />
    </View>
  );
}

