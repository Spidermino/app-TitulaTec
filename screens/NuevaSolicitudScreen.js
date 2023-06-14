import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Input } from "@rneui/base";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";


export default function NuevaSolicitudScreen({navigation}) {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [fecha, setFecha] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');

    const showPicker = () => {
        setIsPickerShow(true);
      };

      const onChange = (event, value) => {
        setFecha(value);
        if (Platform.OS === 'android') {
          setIsPickerShow(false);
        }
      };

    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
        <Text style={{fontFamily: 'Montserrat',
        fontSize: 15}}>Fecha de registro: </Text>
        <View style={{flexDirection: 'row'}} >
           <TouchableOpacity onPress={showPicker}>
          <Image
            source={require('../assets/calendar_120px.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={{top:1, left:15, fontFamily: 'Montserrat',
        fontSize: 20}}>{fecha.toLocaleDateString()}</Text>
         </View>
         </View>
        {/* The date picker */}
        {isPickerShow && mode === 'date' &&(
         <DateTimePicker
           value={fecha}
           mode={'date'}
           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           is24Hour={true}
           onChange={onChange}
         />
       )}
       
       </View>
    );
}

