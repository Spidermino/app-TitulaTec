import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FAB } from "@rneui/base";

export default function EditSolicitudScreen({ route, navigation }) {
    const { item } = route.params;
    const [bandera, setBandera] = useState(false);
    const [solicitud, setSolicitud] = useState({
        idSol: item.idSolicitud,
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
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [fecha, setFecha] = useState(solicitud.fechaRegistro);
    const [mode, setMode] = useState('date');
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

    const showPicker = () => {
        setIsPickerShow(true);
        setBandera(true);
    };

    const onChange = (event, value) => {
        setFecha(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    const updateData = () => {
        var myHeaders = new Headers();
        if (bandera === true) {
            solicitud.fechaRegistro = fecha.toLocaleDateString()
        }


        // myHeaders.append(
        //   "Authorization",
        //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
        // );
        myHeaders.append("Content-Type", "application/json");
        fetch("http://192.168.0.176:3000/solicitudes/" + solicitud.idSol, {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify({
                nombre: solicitud.nombre,
                producto: solicitud.producto,
                numeroEstudiantes: parseInt(solicitud.numeroEstudiantes),
                observaciones: solicitud.observaciones,
                fechaRegistro: solicitud.fechaRegistro,
                opcion: solicitud.opcion,
                noControl: parseInt(solicitud.noControl),
                coordinador: solicitud.coordinador,
            }),
        })
            .then((response) => {
                response.text();
                navigation.navigate("SolicitudesTab", { screen: 'Solicitudes' });
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

 

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={onPress = () => {
                navigation.navigate("DatosSolicitud", { item: item })
            }}>
                <Image
                    source={require('../assets/Back_arrow.png')}
                    style={{
                        width: 50, height: 50,
                        top: -25,
                        left: -150
                    }}
                />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'Montserrat',
                fontSize: 20,
                top: -70
            }}>Editar solicitud</Text>
            <View style={{ top: -40, left: -70 }}>
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
                    {bandera === true ? (
                        <Text style={{
                            top: 1, left: 40, fontFamily: 'Montserrat',
                            fontSize: 18
                        }}>{fecha.toLocaleDateString()}</Text>
                    ) : bandera === false ? (
                        <Text style={{
                            top: 1, left: 40, fontFamily: 'Montserrat',
                            fontSize: 18
                        }}>{fecha}</Text>
                    ) : null
                    }
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
            <View style={{ top: -30 }}>
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
                        keyboardType="numeric"
                        onChangeText={(value) => onChangeOpcion(value)}
                        value={solicitud.opcion}
                    />
                </View>

            </View>
            <View style={{ top: -20 }}>
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
                        value={(solicitud.noControl).toString()}
                    />
                </View>

            </View>
            <View style={{ top: -15 }}>
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
                        value={solicitud.coordinador}
                    />
                </View>
            </View>
            <View style={{ top: -10 }}>
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
                        value={solicitud.nombre}
                    />
                </View>
            </View>
            <View style={{ top: -5 }}>
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
                        value={solicitud.producto}
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
                        value={(solicitud.numeroEstudiantes).toString()}

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
                        numberOfLines={4}
                        onChangeText={(value) => onChangeObservaciones(value)}
                        value={solicitud.observaciones}
                    />
                </View>
            </View>
            <FAB onPress={updateData}
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

