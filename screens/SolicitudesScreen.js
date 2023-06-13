import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { ListItem } from 'react-native-elements';

export default function SolicitudesScreen() {
  const [solicitud, setSolicitud] = useState();

  const filter = {
    where: {
      idProyecto: '2',
    },
  };
  
   const getSolicitudData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.0.176:3000/solicitudes");
      let data = await response.json();
      setSolicitdu(data);
    } catch (error) {
      console.error(error);
    }
  };
  useState(() => {
    getSolicitudData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DatosSolicitud", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{item.nombre}</Text>
          //Poner icono de calendario en ves de fechaRegistro
          <Text>Fecha Registro: {item.fechaRegistro}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text>No Control:{item.nombre}</Text>
          //Poner badge para estatus y algun if
          <Text>Estatus: {item.noControl}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={solicitud}
        renderItem={renderItem}
        keyExtractor={(item) => item.idSolicitud}
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