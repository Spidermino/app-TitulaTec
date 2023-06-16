import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { FAB, Badge, Card } from "@rneui/base";

export default function DatosEvidenciaScreen({ route, navigation }) {
  const { item } = route.params;
  const [evidencia, setEvidencia] = useState({
    idEvidencia: item.idEvidencia,
    nombre: item.nombre,
    tipoEvidencia: item.tipoEvidencia,
    cantEntregada: item.cantEntregada,
    estatus: item.estatus,
  });


  const deleteData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.1.231:3000/evidencias/" + evidencia.idEvidencia, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: evidencia.nombre,
        tipoEvidencia: evidencia.tipoEvidencia,
        cantEntregada: evidencia.cantEntregada,
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
      <View>
        <TouchableOpacity onPress={onPress = () => {
          navigation.navigate("EvidenciasTab", { screen: 'Evidencias' });
        }}>

          <Image
            source={require('../assets/Back_arrow.png')}
            style={{
              width: 50, height: 50,
              marginBottom: 10, top: -180, left: -80
            }}
          />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 20,
          top: -200,
          left: 0
        }}>Datos de la evidencia</Text>
      </View>
      <Card containerStyle={{ top: -100 }} wrapperStyle={{}}>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Nombre de la evidencia:</Text>
        <Text style={{ fontFamily: 'Montserrat', fontSize: 15 }}>{evidencia.nombre}</Text>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Tipo:</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 15 }}>{evidencia.tipoEvidencia}</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Cantidad entregada:</Text>
          <Text style={{ fontFamily: 'Montserrat' }}>{evidencia.cantEntregada}</Text>
          <View style={{ flexDirection: 'row', marginTop: 18 }}>
            <Text style={{ fontFamily: 'Montserrat', fontSize: 20, top: -8 }}>Estatus:   </Text>
            {evidencia.estatus === 'E' ? (
              <Badge
                badgeStyle={{ backgroundColor: "#FBF2CB" }}
                containerStyle={{}}
                status="primary"
                textProps={{}}
                textStyle={{ color: "#C8811A" }}
                value="En espera"
                options={{}}
              />
            ) : evidencia.estatus === 'R' ? (
              <Badge
                badgeStyle={{ backgroundColor: "#FDE9E9" }}
                containerStyle={{}}
                status="primary"
                textProps={{}}
                textStyle={{ color: "#CD3636" }}
                value="Rechazada"
                options={{}}
              />
            ) : evidencia.estatus === 'A' ? (
              <Badge
                badgeStyle={{ backgroundColor: "#D9F9E6" }}
                containerStyle={{}}
                status="primary"
                textProps={{}}
                textStyle={{ color: "#2F9461" }}
                value="Aceptada"
                options={{}}
              />
            ) : null
            }
          </View>

        </View>
      </Card>


      <FAB onPress={() => {
        navigation.navigate("EditEvidenciaTab", { screen: 'EditEvidencia', params: { item: item } });

      }}
        style={{ width: "50%", margin: 20, left: -70 }}
        placement="left"
        color="#7C1C73"
        size="large"
        overlayColor="#454545"
        icon={{ name: "edit", color: "#fff" }}
      />
      <FAB onPress={() => Alert.alert('', '¿Esta seguro de eliminar la evidencia: ' + evidencia.nombre + '?',
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