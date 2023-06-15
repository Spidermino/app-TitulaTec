import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FAB } from "@rneui/base";
import DropDownPicker from 'react-native-dropdown-picker';



export default function NuevaSolicitudScreen({ navigation }) {
  
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [fecha, setFecha] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
  const onChangeNombre = (value) => {
    setAlumno({ ...alumno, nomAlumno: value });
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
      <View style={{top: -30, left: -70}}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18,
          marginBottom: 5
        }}>Fecha de registro: </Text>
        <View style={{ flexDirection: 'row' }} >
          <TouchableOpacity onPress={showPicker}>
            <Image
              source={require('../assets/calendar_120px.png')}
              style={{ width: 30, height: 30, left:30 }}
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
      <View style={{top:-15}}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Opción de titulación: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
            keyboardType="numeric"
          />
        </View>

      </View>
      <View style={{top:-10}}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Numero de control: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
            keyboardType="numeric"
          />
        </View>

      </View>
      <View style={{top:-5}}>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Coordinador: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Nombre de Proyecto: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Producto: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Numero de estudiantes: </Text>
        <View>
        <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height: 35}}
            keyboardType="numeric"

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 18
        }}>Observaciones: </Text>
        <View>
          <TextInput style={{borderBottomWidth: 1.0, 
          borderTopWidth: 1.0, borderLeftWidth: 1.0,
          borderRightWidth: 1.0, borderColor: 'gray', fontFamily: 'Montserrat',
          fontSize: 15, width: 300, height:120}}
            multiline={true}
            numberOfLines={5}
          />
        </View>
      </View>
      <FAB onPress={() => {
        navigation.navigate("Solicitud");
      }}
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

