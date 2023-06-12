import React , { useState } from "react";
import { View, Text } from "react-native";
import { FAB , Input} from "@rneui/base";
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-date-picker";
import Dropdown from "react-native-material-dropdown";

export default function NuevaSolicitudScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="dd/mm/aaaa"
        Text="{fechaFormato}"
      />
      {/* <DatePicker
      modal
      
      mode="date"
      date={}
      onConfirm={date => {
        setOpen(false);
        formatFecha(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    /> */}
    <Dropdown
          
       
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={{}}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{fontFamily: 'Montserrat'}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Correo:"
        labelStyle={{fontFamily: 'Montserrat'}}
        labelProps={{}}
        leftIcon={<Ionicons name="mail-outline" size={20} />}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Ingresa el correo"
      />
    <FAB
      style={{ width: "80%", margin: 20 }}
      placement="left"
      color="#04764B"
      size="large"
      overlayColor="#454545"
      icon={{ name: "save", color: "#fff" }}
    />
 
    </View>
  );
}
// // const [date, setDate] = useState(new Date());
// //  const [fechaFormato, setFechaFormato] = useState('');


// //  const formatFecha = fecha => {
// //     setDate(fecha);
// //     const dia = fecha.getDate();
// //     const mes = fecha.getMonth() + 1;
// //     const anio = fecha.getFullYear();
// //     setFechaFormato(`${dia}/${mes}/${anio}`);
//   };