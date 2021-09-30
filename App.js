import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaCadastro from './src/screens/TelaCadastro'
import { AuthProvider } from './src/Providers/AuthContext';
import MaterialButtonViolet from './src/components/MaterialButtonViolet'
import Index from './navigation/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <TelaCadastro/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
