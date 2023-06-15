import React,{useState}from "react";
import { View, Text } from "react-native";
import { FAB , Badge} from "@rneui/base";

export default function DatosSolicitudScreen({ route, navigation }) {
  const { item } = route.params;
  const [solicitud, setSolicitud] = useState({
    nombre: item.nombre,
    producto: item.producto,
    numeroEstudiantes: item.numeroEstudiantes,
    observaciones: item.observaciones,
    fechaRegistro: item.fechaRegistro,
    fechaAtencion: item.fechaAtencion,
    estatus: item.estatus,
    opcion: item.opcion,
    noControl: item.noControl,
    coordinador: item.coordinador
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <View style={{top: -20}}>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Nombre del proyecto:</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:15}}>{solicitud.nombre}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Producto:</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:15}}>{solicitud.producto}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Numero de estudiantes:</Text>
        <Text style={{fontFamily:'Montserrat'}}>{solicitud.numeroEstudiantes}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Observaciones:</Text>
        <Text style={{fontFamily:'Montserrat'}}>{solicitud.observaciones}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Fecha de registro:</Text>
        <Text style={{fontFamily:'Montserrat'}}>{solicitud.fechaRegistro}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Fecha de atención:</Text>
        <Text style={{fontFamily:'Montserrat'}}>{solicitud.fechaAtencion}</Text>
        <View style={{flexDirection:'row', marginBottom:5}}>
        <Text style={{fontFamily:'Montserrat', fontSize:20, top:-8}}>Estatus:   </Text>
        { solicitud.estatus === 'E' ? (
          <Badge
            badgeStyle={{ backgroundColor: "#FBF2CB" }}
            containerStyle={{}}
            status="primary"
            textProps={{}}
            textStyle={{ color: "#C8811A" }}
            value="En espera"
            options={{}}
          />
        ) : solicitud.estatus === 'R' ? (
          <Badge
            badgeStyle={{ backgroundColor: "#FDE9E9" }}
            containerStyle={{}}
            status="primary"
            textProps={{}}
            textStyle={{ color: "#CD3636" }}
            value="Rechazada"
            options={{}}
          />
        ) : solicitud.estatus === 'A' ? (
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
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Opcion:</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:15}}>{solicitud.opcion}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Numero de control:</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:15}}>{solicitud.noControl}</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:20}}>Coordinador:</Text>
        <Text style={{fontFamily:'Montserrat', fontSize:15}}>{solicitud.coordinador}</Text>
      </View>
      <View>
      <FAB onPress={() => {
        navigation.navigate("EditSolicitudTab", { screen: 'EditSolicitud', params: {item:item} });
        
      }}
        style={{ width: "80%", margin: -110, left: -200 }}
        placement="left"
        color="#7C1C73"
        size="large"
        overlayColor="#454545"
        icon={{ name: "edit", color: "#fff" }}
      />
      </View>
      <View>
      <FAB onPress={() => {
        navigation.navigate("NuevaSolicitud");
      }}
        style={{ width: "80%",margin: -110, left:-50 }}
        placement="left"
        color="#C90000"
        size="large"
        overlayColor="#454545"
        icon={{ name: "delete", color: "#fff" }}
      />
      </View>
      
      <View>
      <FAB onPress={() => {
        navigation.navigate("NuevaSolicitud");
      }}
        style={{ width: "80%", margin: -110, left:90 }}
        placement="left"
        color="#04764B"
        size="large"
        overlayColor="#454545"
        icon={{ name: "search", color: "#fff" }}
      />
      </View>
      
    </View>
  );
}