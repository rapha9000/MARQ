import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/screens/Inicial';
import Login from './src/screens/Login';
import Index from "./Index"

export default function App() {
  return (
   <Index/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});
