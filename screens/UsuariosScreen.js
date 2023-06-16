import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from 'react-native-elements';
import { FAB, Badge } from "@rneui/base";
import { useIsFocused } from '@react-navigation/native';

export default function UsuariosScreen({ navigation }) {
  const [usuario, setUsuario] = useState();
  const isFocused = useIsFocused();
const onChangeNombre = (value) => {
    setUsuario({ ...usuario, nombre: value });
  };
  const getUsuarioData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.0.176:3000/usuarios");
      let data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isFocused) {
      getUsuarioData()
    }
  }, [isFocused]);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>

          navigation.navigate("DatosUsuario", {
            item: item,
          })
        }
      >

        <View style={styles.item}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>Sexo:  {item.sexo}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text><Ionicons name="mail-outline" size={16} /> {item.email}      </Text>
          <Text><Ionicons name="call-outline" size={16} /> {item.telefono}</Text>
        </View>

      </TouchableOpacity>
    );
  };
  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity onPress={onPress = () => {
          navigation.navigate("MenuTab")
        }}>

          <Image
            source={require('../assets/Back_arrow.png')}
            style={{
              width: 50, height: 50,
              marginBottom: 10, top: 40, left: -130
            }}
          />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 20,

        }}>Usuarios</Text>
      </View>
      <FlatList
        data={usuario}
        renderItem={renderItem}
        keyExtractor={(item) => item.idUsuario}
      />

      <FAB onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "NuevoUsuarioTab" }],
        })
      }}
        style={{ width: "80%", margin: 20, left: 150 }}
        placement="left"
        color="#0080FF"
        size="large"
        overlayColor="#454545"
        icon={{ name: "add", color: "#fff" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    width: 400,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#30A2FF",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#ccc",
  },
});