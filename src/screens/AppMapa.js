import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Dimensions, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions';


import customStyle from '../../assets/dadsa/customStyle';

export default class App extends Component {
  

constructor() {
  //let [duracao, setDuracao] = useState(0);
  super();
  this.state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    duracao: 0
  
  

  }
  loaded: false
}
  componentDidMount() {
    this.getLocationAsync();
    // console.log(this.props.map);
  }
  async getLocationAsync() {
    const { status } = await Location.requestForegroundPermissionsAsync();;
    if (status === 'granted') {
     const location = await Location.getLastKnownPositionAsync({
      accuracy: 10,
    });
    
     this.setState({
      region: {
       latitude: location.coords.latitude,
       longitude: location.coords.longitude,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
      },
     });
    } else {
     throw new Error('Location permission not granted');
    }
   }

render(){
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD5Kri8lQPXjMQCMM4022IwziOH5ph0hvk';
  const region = this.state.region;
  const origin = {latitude:-23.7113111, longitude: -46.5884565};
  const destination = { latitude: -23.6975654,longitude: -46.5884565,};
  let tempo = this.state.duracao
  //console.log(region)
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" />
      <MapView
        customMapStyle={customStyle}
        style={styles.mapStyle}
        initialRegion={{
          latitude: -23.6975654,
            longitude: -46.5884565,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation
               //userLocationCalloutEnabled
        //showsMyLocationButton
        //followsUserLocation
        //mapType="hybrid"
      >
        <MapViewDirections
          lineDashPattern={[1000]}
          origin={region}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="blue"
          onReady={result => {
            console.log(`Distance: ${result.distance} km`)
            console.log(`Duration: ${result.duration} min.`)
            this.setState({duracao:result.duration})
            //{setDuracao(result.duration)}
            //console.log(`Duration: ${duracao} min.`)
          }}
          
   
           

        />
        
        <Marker
          coordinate={{
            latitude: -23.7145501,
            longitude: -46.5865878,
          }}
          
          title="Hospital Assunção"
          description="Av. Álvaro Guimarães, 3051 - Planalto, São Bernardo do Campo - SP, 09810-010"
          pinColor="blue"
        ><Image source={require('../../assets/hospital.png')} style={{ height: 35, width: 35 }} />
        </Marker>
        <Marker
          coordinate={{
            latitude: -23.6975654,
            longitude: -46.5884565,
          }}
          title="Santa Casa São Bernardo do Campo"
          description="Av. Robert Kennedy, 2900 - Assunção, São Bernardo do Campo - SP, 09860-214"

          pinColor="#00A8FF"
        ><Image source={require('../../assets/hospital.png')} style={{ height: 35, width: 35 }} />
        </Marker>
        <Marker
          coordinate={{
            latitude: -23.7113111,
            longitude: -46.5935088,
          }}
          title="Hospital de Clínicas Municipal José Alencar"
          description="Estr. dos Alvarengas, 1001 - Assunção, São Bernardo do Campo - SP, 09850-550"

          pinColor="blue"
        ><Image source={require('../../assets/hospital.png')} style={{ height: 35, width: 35 }} />
        </Marker>
      </MapView>
      <View style={styles.placeContainer} horizontal>
        <View style={styles.place}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Você esta a {tempo.toFixed(0)} minutos do Hospital Marquinhos... </Text>
        </View>
      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  placeContainer: {
    width: '100%',
    maxHeight: 400,
    marginBottom: 40
  },

  place: {
    width: Dimensions.get('window').width - 40,
    maxHeight: 100,
    backgroundColor: "rgba(80,227,194,1)",
    marginHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',

  }
});




