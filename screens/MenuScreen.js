import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/base";


export default function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress = () => {
        navigation.navigate("LoginTab")
      }}>
        <Image
          source={require('../assets/Back_arrow.png')}
          style={{
            width: 50, height: 50,
            top: -150,
            left: -150
          }}
        />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -180,
        left: 0
      }}>Menú</Text>
      <Text style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        top: -150,
        left: 0
      }}>Bienvenido</Text>

      
      <View style={{ flexDirection: 'row', top: -100 }}>
        <Button
          buttonStyle={{ backgroundColor: '#7C1C73', width: 180, paddingVertical: 30, top: 0 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          iconPosition="bottom"
          icon={
            <Image
              source={require('../assets/petition.png')}
              style={{ width: 80, height: 80 }}
            />
          }
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => navigation.navigate("SolicitudesTab")}
          title="Solicitudes"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 10 }}
        />
        <Button
          buttonStyle={{ backgroundColor: '#04764B', width: 180, paddingVertical: 30, top: 0 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          iconPosition="bottom"
          icon={
            <Image
              source={require('../assets/folder_120px.png')}
              style={{ width: 80, height: 80 }}
            />
          }
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => navigation.navigate("EvidenciasTab")}
          title="Evidencias"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 10 }}
        />
        
      </View>
      <View style={{ flexDirection: 'row', top: -100, left:-95 }}>
      <Button
          buttonStyle={{ backgroundColor: '#0080FF', width: 180, paddingVertical: 30 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          iconPosition="bottom"
          icon={
            <Image
              source={require('../assets/settings.png')}
              style={{ width: 80, height: 80 }}
            />
          }
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => navigation.navigate("ConfiguracionTab")}
          title="Configuracion"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
      </View>
    </View>
  );
}