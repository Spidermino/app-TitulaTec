import React, {useState} from "react";
import { View, Text } from "react-native";
import { ListItem } from 'react-native-elements';

export default function SolicitudesScreen() {
  const [solicitud, setSolicitud] = useState();
  const [proyecto, setProyecto] = useState();

  const getSolicitudData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.1.148:3000/solicitude");
      let data = await response.json();
      setSolicitud(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getProyectoData = async () => {
    try{
      let response = await fetch("http://192.168.1.148:3000/proyecto")
      let data = await response.json();
      setProyecto(data);
    }catch(error){
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
          <Text style={styles.title}>{item.nomAlumno}</Text>
          <Text>Edad: {item.edad}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     
    </View>
  );
}