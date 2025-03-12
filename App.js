import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './src/styles/appStyle'
import { useState } from 'react';
import Routing from './src/routes/routing';


export default function App() {

  const[route,setRoute] = useState('home')

  return (
    <SafeAreaView style={styles.container}>
      
      <Routing route={route} />

    </SafeAreaView>
  );
}

