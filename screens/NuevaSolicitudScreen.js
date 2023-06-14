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
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Fecha de registro: </Text>
        <View style={{ flexDirection: 'row' }} >
          <TouchableOpacity onPress={showPicker}>
            <Image
              source={require('../assets/calendar_120px.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Text style={{
            top: 1, left: 15, fontFamily: 'Montserrat',
            fontSize: 20
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
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Opción de titulación: </Text>
        <View>
          <DropDownPicker
            style={{ width: 250, zIndex: 9999, backgroundColor: '#fff' }}
            placeholder="Selecciona una opción"
            open={open}
            value={value}
            items={[
              { label: 'Tesis', value: 'Tesis' },
              { label: 'Exámen Ceneval', value: 'Examen Ceneval' },
              { label: 'Proyecto de investigación', value: 'Proyecton de investigacion' },
            ]}
            defaultValue={valueDrop}
            onChangeItem={(item) => setValueDrop(item.value)}
            setOpen={setOpen}
            setValue={setValue}

            dropDownContainerStyle={{ backgroundColor: '#000',zIndex: 1000, elevation: 1000}}
          />
        </View>

      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Numero de control: </Text>
        <View>
          <TextInput
            keyboardType="numeric"
          />
        </View>

      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Coordinador: </Text>
        <View>
          <TextInput
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Nombre de Proyecto: </Text>
        <View>
          <TextInput
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Producto: </Text>
        <View>
          <TextInput
          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Numero de estudiantes: </Text>
        <View>
          <TextInput
            keyboardType="numeric"

          />
        </View>
      </View>
      <View>
        <Text style={{
          fontFamily: 'Montserrat',
          fontSize: 15
        }}>Observaciones: </Text>
        <View>
          <TextInput
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

