import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from 'react-native-paper';
import { FAB } from "@rneui/base";

export default function NuevaEvidenciaScreen({ navigation }) {
  const [evidencia, setEvidencia] = useState({
    nombre: "",
    tipoEvidencia: "",
    cantEntregada: 0,
    estatus: "",
  });
  const [checked, setChecked] = React.useState('Digital');

  const saveData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.0.176:3000/evidencias", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: evidencia.nombre,
        tipoEvidencia: checked.toString(),
        cantEntregada: parseInt(evidencia.cantEntregada),
        estatus: "E",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result");
        navigation.navigate( "EvidenciasTab");
        console.log(result);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };
  const onChangeNombre = (value) => {
    setEvidencia({ ...evidencia, nombre: value });
  };
  const onChangeCantEntregada = (value) => {
    setEvidencia({ ...evidencia, cantEntregada: value });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("EvidenciasTab");
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
      }}>Nueva evidencia</Text>

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

      </View>
      <View style={{ top: -10 }}>
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
            status={checked === 'Digital' ? 'checked' : 'unchecked'}
            onPress={() => setChecked("Digital")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Digital</Text>
        </View>
        <View style={{ flexDirection: 'row', left: -30 }}>
          <RadioButton
            value="Fisico"
            status={checked === 'Fisico' ? 'checked' : 'unchecked'}
            onPress={() => setChecked("Fisico")}
          />
          <Text style={{
            top: 5, fontFamily: 'Montserrat',
            fontSize: 15
          }}>Fisico</Text>
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

