import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FAB } from "@rneui/base";


export default function NuevaSolicitudScreen({ navigation }) {
  const [solicitud, setSolicitud] = useState({
    nombre: "",
    producto: "",
    numeroEstudiantes: 0,
    observaciones: "",
    fechaRegistro: "",
    fechaAtencion: "",
    estatus: "",
    opcion: "",
    noControl: 0,
    coordinador: ""
  });
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [fecha, setFecha] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [valueDrop, setValueDrop] = useState(null);

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setFecha(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  const saveData = () => {
    var myHeaders = new Headers();
    console.log(solicitud);
    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.1.231:3000/solicitudes", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: solicitud.nombre,
        producto: solicitud.producto,
        numeroEstudiantes: parseInt(solicitud.numeroEstudiantes),
        observaciones: solicitud.observaciones,
        fechaRegistro: fecha.toLocaleDateString(),
        estatus: "E",
        opcion: solicitud.opcion,
        noControl: parseInt(solicitud.noControl),
        coordinador: solicitud.coordinador,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result");
        navigation.navigate("SolicitudesTab");
        console.log(result);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };
  const onChangeNombre = (value) => {
    setSolicitud({ ...solicitud, nombre: value });
  };
  const onChangeProducto = (value) => {
    setSolicitud({ ...solicitud, producto: value });
  };
  const onChangeNumeroE = (value) => {
    setSolicitud({ ...solicitud, numeroEstudiantes: value });
  };
  const onChangeObservaciones = (value) => {
    setSolicitud({ ...solicitud, observaciones: value });
  };
  const onChangeOpcion = (value) => {
    setSolicitud({ ...solicitud, opcion: value });
  };
  const onChangeNoControl = (value) => {
    setSolicitud({ ...solicitud, noControl: value });
  };
  const onChangeCoordinador = (value) => {
    setSolicitud({ ...solicitud, coordinador: value });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("SolicitudesTab")
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
      }}>Nueva solicitud</Text>
      <View style={{ top: -30, left: -70 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18,
          marginBottom: 5
        }}>Fecha de registro: </Text>
        <View style={{ flexDirection: 'row' }} >
          <TouchableOpacity onPress={showPicker}>
            <Image
              source={require('../assets/calendar_120px.png')}
              style={{ width: 30, height: 30, left: 30 }}
            />
          </TouchableOpacity>
          <Text style={{
            top: 1, left: 40, fontFamily: 'Montserrat',
            fontSize: 18
          }}>{fecha.toLocaleDateString()}</Text>
        </View>
      </View>

      {isPickerShow && mode === 'date' && (
        <DateTimePicker
          value={fecha}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <View style={{ top: -15 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Opción de titulación: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}

            onChangeText={(value) => onChangeOpcion(value)}

          />
        </View>

      </View>
      <View style={{ top: -10 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Numero de control: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            keyboardType="numeric"
            onChangeText={(value) => onChangeNoControl(value)}

          />
        </View>

      </View>
      <View style={{ top: -5 }}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Coordinador: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangeCoordinador(value)}

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Nombre de Proyecto: </Text>
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
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Producto: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            onChangeText={(value) => onChangeProducto(value)}

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Numero de estudiantes: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 35
          }}
            keyboardType="numeric"
            onChangeText={(value) => onChangeNumeroE(value)}
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Observaciones: </Text>
        <View>
          <TextInput style={{
            borderBottomWidth: 1.0,
            borderTopWidth: 1.0, borderLeftWidth: 1.0,
            borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
            fontSize: 15, width: 300, height: 120
          }}
            multiline={true}
            numberOfLines={5}
            onChangeText={(value) => onChangeObservaciones(value)}
          />
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

