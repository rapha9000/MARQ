import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/screens/Inicial';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login Email='MARQ'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});
