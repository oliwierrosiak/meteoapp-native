import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './src/styles/appStyle'
import { useState } from 'react';
import Routing from './src/routes/routing';


export default function App() {

  const[route,setRoute] = useState('home')

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidCon}>
          
          
          <Routing route={route} />


        </KeyboardAvoidingView>


    </SafeAreaView>
  );
}

