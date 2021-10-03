import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    PermissionsAndroid,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import MaterialButtonViolet from "../components/MaterialButtonViolet"
import * as FileSystem from "expo-file-system";
// import { AuthContext } from '../Providers/AuthContext'
import { EmailContext } from '../Providers/EmailContext'
import usuarios from '../database/Usuarios'


export default function App(props) {

    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [imagem, setImagem] = useState(null)
    const {Email} = React.useContext(EmailContext) // importando variavel global
    const [elmState, setElmState] = React.useState([]);
    const [usuariosState, setUsuariosState] = React.useState([]);
    const [teste, setTeste] = React.useState([]);
    var array=[]

    React.useEffect(() => {
        new usuarios().getAll().then((x) => {
            setUsuariosState(x);
        });
    }, []);

    React.useEffect(() =>{
        new usuarios().getByEmail(Email).then((x)=>{
            setElmState(x)
        });
        },[]); //colocar cpf

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync({ base64: true, });
            setCapturedPhoto(data.uri);
            setOpen(true);
            console.log(data.uri);
            setImagem(data.base64)
            //handleOK(data.Base64)
        }
    }
    // const handleOK = (signature) => {
    //     const path = "C:/Users/Daniel/Documents/ProModel";
    //     FileSystem.writeAsStringAsync(
    //         path,
    //         signature.replace("data:image/png;base64,", ""),
    //         { encoding: FileSystem.EncodingType.Base64 }
    //     )
    //         .then(() => FileSystem.getInfoAsync(path))
    //         .then(console.log)
    //         .catch(console.error);
    // };
    // let lista = usuariosState.map((u, idx) => {
    //     u = u.data()
    //     setTeste(u)
    // });
    
    // console.log('teste:'+lista)
    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.contentButtons}>
                    <TouchableOpacity
                        style={styles.buttonFlip}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <FontAwesome name="exchange" size={23} color="red"></FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
                        <FontAwesome name="camera" size={23} color="#fff"></FontAwesome>
                    </TouchableOpacity>
                </View>
            </Camera>
            {capturedPhoto && (
                <Modal animationType="slide" transparent={true} visible={open}>
                    <View style={styles.contentModal}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setOpen(false)}
                        >
                            <FontAwesome name="close" size={50} color="#000"></FontAwesome>
                        </TouchableOpacity>
                        <MaterialButtonViolet style={styles.Continuar} titulo="Continuar" onPress={()=>{props.navigation.navigate(
            "Assinatura"
          )
          var newData={imagem: imagem}
                        new usuarios().updateUser(elmState,newData)}
          } />
                        <Image style={styles.imgPhoto} source={{ uri: `data:image/gif;base64,${imagem}` }} />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        
    },
    camera: {
        height: "100%",
        width: "100%",
    },
    contentButtons: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    buttonCamera: {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50,

    },
    buttonFlip: {
        position: "absolute",
        bottom: 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50,

    },
    contentModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20,
    },
    closeButton: {
        position: "absolute",
        top: 100,
        left: 2,
        margin: 10,
    },
    Continuar: {
        height: 50,
        width: 150,
        position: "absolute",
        top: 630,
        left: 82,
        margin: 10,
    },
    imgPhoto: {
        width: "100%",
        height: 400,
    },
    botaoVoltar: {
        height: 50,
        width: 150
    },
})
