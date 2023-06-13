import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { ListItem } from 'react-native-elements';

export default function SolicitudesScreen() {
  const [proyecto, setProyecto] = useState();
  const filter = {
    where: {
      idProyecto: '2',
    },
  };
  const getProyectoData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.0.176:3000/proyectos?filter=" + JSON.stringify(filter));
      let data = await response.json();
      setProyecto(data);
    } catch (error) {
      console.error(error);
    }
  };
  useState(() => {
    getProyectoData();
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
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>No control: {item.noControl}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={proyecto}
        renderItem={renderItem}
        keyExtractor={(item) => item.idProyecto}
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