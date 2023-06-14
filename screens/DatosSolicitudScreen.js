import React from "react";
import { View, Text } from "react-native";

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>Nombre del proyecto:</Text>
        <Text>{solicitud.nombre}</Text>
        <Text>Producto:</Text>
        <Text>{solicitud.producto}</Text>
        <Text>Numero de estudiantes:</Text>
        <Text>{solicitud.numeroEstudiantes}</Text>
        <Text>Observaciones:</Text>
        <Text>{solicitud.observaciones}</Text>
        <Text>Fecha de registro:</Text>
        <Text>{solicitud.fechaRegistro}</Text>
        <Text>Fecha de atención:</Text>
        <Text>{solicitud.fechaAtencion}</Text>
        <Text>Estatus:</Text>
        if (solicitud.estatus === 'E') {
          <Badge
            badgeStyle={{ backgroundColor: "#FBF2CB" }}
            containerStyle={{}}
            status="primary"
            textProps={{}}
            textStyle={{ color: "#C8811A" }}
            value="En espera"
            options={{}}
          />
        }else if(solicitud.estatus === 'R'){
          <Badge
            badgeStyle={{ backgroundColor: "#FDE9E9" }}
            containerStyle={{}}
            status="primary"
            textProps={{}}
            textStyle={{ color: "#CD3636" }}
            value="Rechazada"
            options={{}}
          />
        }else if(solicitud.estatus === 'A'){
          <Badge
            badgeStyle={{ backgroundColor: "#D9F9E6" }}
            containerStyle={{}}
            status="primary"
            textProps={{}}
            textStyle={{ color: "#2F9461" }}
            value="Aceptada"
            options={{}}
          />
        }
        <Text>Opcion:</Text>
        <Text>{solicitud.opcion}</Text>
        <Text>Numero de control:</Text>
        <Text>{solicitud.noControl}</Text>
        <Text>Coordinador:</Text>
        <Text>{solicitud.coordinador}</Text>
      </View>
      <FAB onPress={() => {
        navigation.navigate("NuevaSolicitud");
      }}
        style={{ width: "80%", margin: 20, left: 150 }}
        placement="left"
        color="#0080FF"
        size="large"
        overlayColor="#454545"
        icon={{ name: "edit", color: "#fff" }}
      />
      <FAB onPress={() => {
        navigation.navigate("NuevaSolicitud");
      }}
        style={{ width: "80%", margin: 20, left: 150 }}
        placement="left"
        color="#0080FF"
        size="large"
        overlayColor="#454545"
        icon={{ name: "delete", color: "#fff" }}
      />
      <FAB onPress={() => {
        navigation.navigate("NuevaSolicitud");
      }}
        style={{ width: "80%", margin: 20, left: 150 }}
        placement="left"
        color="#0080FF"
        size="large"
        overlayColor="#454545"
        text="Consultar evidencias"
        icon={{ name: "search", color: "#fff" }}
      />
    </View>
  );
}