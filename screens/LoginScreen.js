import React , {useState} from "react";
import { View, Text, Alert, TextInput, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Input } from "@rneui/base";


export default function LoginScreen({ navigation }) {
  
  const [nom, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState();

  const getUsuarioData = async () => {
    try {
      const response = await fetch("http://192.168.0.176:3000/usuarios");
      const data = await response.json();
      console.log(data);
      setUsuario(data);
    } catch (error) {
      Alert.alert('Aviso', 'No es posible conectar.');
      console.log('b');
      console.error(error);
    }
  };

  useState(() => {
    getUsuarioData();
  }, []);

  const validarUsuario = () => {
    console.log("comprobación xd")
console.log(usuario.nombre)
console.log(usuario.password)
console.log(nom)
console.log(password)
    const user = usuario.find((usuario) => usuario.nombre === nom && usuario.password === password);
    if (user) {
      Alert.alert('', 'Sesión iniciada con éxito',
        [{ text: 'Aceptar', onPress: () => navigation.navigate("MenuTab") },]);
    } else {
      Alert.alert('', 'Usuario o contraseña incorrectos',
        [{ text: 'Aceptar' },]);
    }
  };
  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: '90%', height: '10%', position: 'absolute',
          top: 50,
          left: 10
        }}
      />

      <Image
        source={require('../assets/customer_120px.png')}
        style={{
          width: '10%', height: '5%',
          top: -80,
          left: -150
        }}
      /><Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -110,
        left: -50
      }}>Inicio de sesión</Text>
      <Text style={{
        fontFamily: 'Montserrat',
        top: -50,
        left: -130
      }}>Ingrese sus datos:</Text>
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{ fontFamily: 'Montserrat', width: 300, left: 30 }}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{ fontFamily: 'Montserrat', left: 30 }}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el usuario"
        value={nom}
        onChangeText={setNombre}
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{ width: 300, left: 30 }}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Contraseña:"
        labelStyle={{ fontFamily: 'Montserrat', left: 30 }}
        labelProps={{}}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa la contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        buttonStyle={{ backgroundColor: '#04764B', width: 180, paddingVertical: 15 }}
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
        onPress={() => validarUsuario()}
        title="Iniciar sesión"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
}


