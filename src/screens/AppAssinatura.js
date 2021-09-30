import React, { useRef } from "react";
import { StyleSheet, View, Button , Image,SafeAreaView} from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import MaterialButtonViolet from "../components/MaterialButtonViolet"

const Sign = (props,{ onOK }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    //console.log(signature);
    //onOK(signature);
  };


  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;


  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style= {styles.imgPhoto}  source={{ uri: `data:image/gif;base64,${imagem}` }} /> */}
      <Image style= {styles.imgPhoto}  source={require('../../assets/images/Petronio.jpg')} />
      <View style={styles.row2}>
        <MaterialButtonViolet style={styles.botaoVoltar} titulo='Tirar Foto'
          onPress={()=>props.navigation.navigate(
            "Camera"
          )}
        />
        {//<Button title="Clear" onPress={handleClear} />
        //<Button title="Confirm" onPress={handleConfirm} />
      }
      </View>
      <SignatureScreen style={{paddingTop:5}} confirmText="Confirmar"   onOK={(img) => console.log(img)}
  onEmpty={() => console.log("empty")} clearText="Apagar" imageType={"image/svg+xml"} descriptionText="Assine aqui" ref={ref} //onOK={handleOK} 
   trimWhitespace="true" />
      <View style={styles.row}>
        <MaterialButtonViolet style={styles.botaoVoltar} titulo='Entrar na Fila'
          onPress={()=>props.navigation.navigate(
              "Mapa"
            )}
        />
        {//<Button title="Clear" onPress={handleClear} />
        //<Button title="Confirm" onPress={handleConfirm} />
      }
      </View>
      
    </SafeAreaView>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignItems:"flex-end",
    alignContent: "flex-end",
    height: 10,
    padding: 10,
  },
  botaoVoltar: {
    height: 50,
    width: 150
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingBottom:10,
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingTop:10,
    alignItems: "center",
    paddingBottom:10,
  },
  imgPhoto: {
    borderRightWidth:1,
    borderRadius:1,
    paddingTop:200,
    width: 300,
    height: 250,
    alignContent:"center",
    alignSelf: "center"
},
});