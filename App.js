import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';

import customStyle from './customStyle';


export default function App() {
  let text1 = {"coords":{"altitude":741.3101148605347,"altitudeAccuracy":15.451624870300293,"latitude":-23.542302154388622,"accuracy":65,"longitude":-46.314261644713326,"heading":-1,"speed":-1},"timestamp":1631329062270.567}
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loaded, setLoaded] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    
    <View >
      
      <MapView
        customMapStyle={customStyle}
        style={styles.mapStyle}
        initialRegion={{latitude: text1.coords.latitude,
          longitude: text1.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,}}
        showsUserLocation
      >
        <Marker 
          coordinate={{
            latitude: -23.7145501,
            longitude: -46.5865878,
          }}
          title="Hospital Assunção"
          description="Av. Álvaro Guimarães, 3051 - Planalto, São Bernardo do Campo - SP, 09810-010"
          
          icon={{ 
            uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
          }}
          pinColor= "blue"
        ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
        </Marker>
        <Marker 
          coordinate={{
            latitude: -23.6975654,
            longitude: -46.5884565,
          }}
          title="Santa Casa São Bernardo do Campo"
          description="Av. Robert Kennedy, 2900 - Assunção, São Bernardo do Campo - SP, 09860-214"
          
          icon={{ 
            uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
          }}
          pinColor= "blue"
        ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
        </Marker>
        <Marker 
          coordinate={{
            latitude: -23.7113111,
            longitude: -46.5935088,
          }}
          title="Hospital de Clínicas Municipal José Alencar"
          description="Estr. dos Alvarengas, 1001 - Assunção, São Bernardo do Campo - SP, 09850-550"
          
          icon={{ 
            uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
          }}
          pinColor= "blue"
        ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
        </Marker>
      </MapView>
    </View>
  );
}

// export default class App extends Component {
//   // state = {
//   //   errorMessage:'',
//   // };
//   // componentWillMount(){
//   //   this._getLocation()
//   // }


//   // _getLocation = async () => {
//   //   const { status} = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);
//   //   if (status !== 'granted' ) {
//   //     console.log('Permission not marcos')

//   //     this.setState({
//   //       errorMessage:'Permissão não garantida'
//   //     })
//   //   }
//   //   const location = await Location.getCurrentPositionAsync()

//   //   this.setState({
//   //     location,
//   //   })
//   // }
// constructor() {
//   super();
//   this.state = {
//     region: {
//       latitude: -23.7240838,
//       longitude: -46.581621,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//   }
// }
//   componentDidMount() {
//     this.getLocationAsync();
//     // console.log(this.props.map);
//   }
//   async getLocationAsync() {
//     const { status } = await Location.requestForegroundPermissionsAsync();;
//     if (status === 'granted') {
//      const location = await Location.getCurrentPositionAsync({});
  
//      this.setState({
//       region: {
//        latitude: location.coords.latitude,
//        longitude: location.coords.longitude,
//        latitudeDelta: 0.0922,
//        longitudeDelta: 0.0421,
//       },
//      });
//     } else {
//      throw new Error('Location permission not granted');
//     }
//    }
//   // let [regiao, setRegiao] = useState({
//   //   latitude: -23.7240838,
//   //         longitude: -46.581621,
//   //         latitudeDelta: 0.0922,
//   //         longitudeDelta: 0.0421,
//   // });

//   // useEffect(() => {
//   //   Location.getCurrentPositionAsync(
//   //     posicao => {
//   //       setRegiao({
//   //         latitute: -22.7240838,
//   //         longitude: -46.581621,
//   //         latitudeDelta: 0.0922,
//   //         longitudeDelta: 0.0421,
//   //       })
//   //     }
//   //   );
//   // },[])

//   render(){
//     const {region} = this.state;
//   return (
//     <View >
//       <MapView
//         customMapStyle={customStyle}
//         style={styles.mapStyle}
//         initialRegion={region}
//         showsUserLocation
//       >
//         <Marker 
//           coordinate={{
//             latitude: -23.7145501,
//             longitude: -46.5865878,
//           }}
//           title="Hospital Assunção"
//           description="Av. Álvaro Guimarães, 3051 - Planalto, São Bernardo do Campo - SP, 09810-010"
          
//           icon={{ 
//             uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
//           }}
//           pinColor= "blue"
//         ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
//         </Marker>
//         <Marker 
//           coordinate={{
//             latitude: -23.6975654,
//             longitude: -46.5884565,
//           }}
//           title="Santa Casa São Bernardo do Campo"
//           description="Av. Robert Kennedy, 2900 - Assunção, São Bernardo do Campo - SP, 09860-214"
          
//           icon={{ 
//             uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
//           }}
//           pinColor= "blue"
//         ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
//         </Marker>
//         <Marker 
//           coordinate={{
//             latitude: -23.7113111,
//             longitude: -46.5935088,
//           }}
//           title="Hospital de Clínicas Municipal José Alencar"
//           description="Estr. dos Alvarengas, 1001 - Assunção, São Bernardo do Campo - SP, 09850-550"
          
//           icon={{ 
//             uri: "https://img.icons8.com/external-justicon-flat-justicon/1/000000/external-hospital-coronavirus-justicon-flat-justicon.png" 
//           }}
//           pinColor= "blue"
//         ><Image source={require('./assets/hospital.png')} style={{height: 35, width:35 }} />
//         </Marker>
//       </MapView>
//     </View>
//   );
//   }
// }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  }
});



