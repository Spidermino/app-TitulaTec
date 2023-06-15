import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from 'react-native-elements';
import { FAB , Badge} from "@rneui/base";

export default function SolicitudesScreen({navigation}) {
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
      setSolicitud(data);
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
          <Text style={styles.title}>{item.nombre}</Text> 
          <View style={{flexDirection:'row'}}>
          <Text>Estatus:</Text>
          {item.estatus === 'E' ? (
                <Badge
                  badgeStyle={{ backgroundColor: "#FBF2CB" }}
                  containerStyle={{}}
                  status="primary"
                  textProps={{}}
                  textStyle={{ color: "#C8811A" }}
                  value="En espera"
                  options={{}}
                />
          ) : item.estatus === 'R' ? (
                <Badge
                  badgeStyle={{ backgroundColor: "#FDE9E9" }}
                  containerStyle={{}}
                  status="primary"
                  textProps={{}}
                  textStyle={{ color: "#CD3636" }}
                  value="Rechazada"
                  options={{}}
                />
          ) : item.estatus === 'A' ? (
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
          <Text>                No. Control:  {item.noControl}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text><Ionicons name="calendar-outline" size={16} /> {item.fechaRegistro}      </Text>
          <Text>                Opción:  {item.opcion}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
   
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <View>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("Menu")
      }}>
        
        <Image
          source={require('../assets/Back_arrow.png')}
          style={{
            width: 50, height: 50,
            marginBottom: 10, top: 40, left:-130
          }}
        />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        
      }}>Solicitudes</Text>
    </View>
      <FlatList
        data={solicitud}
        renderItem={renderItem}
        keyExtractor={(item) => item.idSolicitud}
      />

<FAB onPress={() => {
    navigation.navigate("NuevaSolicitudTab");
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