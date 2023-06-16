import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import DateTimePicker from "@react-native-community/datetimepicker";
import { FAB } from "@rneui/base";

export default function EditEvidenciaScreen({ route, navigation }) {
  const { item } = route.params;
  const [evidencia, setEvidencia] = useState({
    idEvidencia: item.idEvidencia,
    nombre: item.nombre,
    tipoEvidencia: item.tipoEvidencia,
    cantEntregada: item.cantEntregada,
    estatus: item.estatus,
  });

  const onChangeNombre = (value) => {
    setEvidencia({ ...evidencia, nombre: value });
  };
  const changeTipo = (value) => {
    setEvidencia({ ...evidencia, tipoEvidencia: value });
  };
  const onChangeCantEntregada = (value) => {
    setEvidencia({ ...evidencia, cantEntregada: value });
  };
  const onChangeEstatus = (value) => {
    setEvidencia({ ...evidencia, estatus: value });
  };


  const updateData = () => {
    var myHeaders = new Headers();
    console.log(evidencia)
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );
    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.0.176:3000/evidencias/" + evidencia.idEvidencia, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: evidencia.nombre,
        tipoEvidencia: evidencia.tipoEvidencia,
        cantEntregada: parseInt(evidencia.cantEntregada),
        estatus: evidencia.estatus,
      }),
    })
      .then((response) => {
        response.text();
        navigation.navigate("EvidenciasTab", { screen: 'Evidencias' });
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("DatosEvidencia", { item: item })
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
        top: -220
      }}>Editar evidencia</Text>
      <View style={{ top: -100 }}>
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
          value={evidencia.nombre}
            onChangeText={(value) => onChangeNombre(value)}
          />
        </View>

      </View>
      <View style={{ top: -70 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Cantidad entregada: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            keyboardType="numeric"
            value={(evidencia.cantEntregada).toString()}
            onChangeText={(value) => onChangeCantEntregada(value)}
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Tipo: </Text>
        <View style={{ flexDirection: 'row', left: -30 }}>
          <RadioButton
            value="Digital"
            status={evidencia.tipoEvidencia === 'Digital' ? 'checked' : 'unchecked'}
            onPress={() => changeTipo("Digital")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Digital</Text>
        </View>
        <View style={{ flexDirection: 'row', left: -30 }}>
          <RadioButton
            value="Fisico"
            status={evidencia.tipoEvidencia === 'Fisico' ? 'checked' : 'unchecked'}
            onPress={() => changeTipo("Fisico")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Fisico</Text>
        </View>
      </View>
      <FAB onPress={updateData}
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

