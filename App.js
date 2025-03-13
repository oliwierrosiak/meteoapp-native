import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './src/styles/appStyle'
import { useEffect, useState } from 'react';
import Routing from './src/routes/routing';
import getWeather from './src/services/getWeather';


export default function App() {

  const[route,setRoute] = useState('home')
  const[searchValue,setSearchValue] = useState()
  const[weatherInfo,setWeatherInfo] = useState(null)
  const[getLoading,setGetLoading] = useState(false)

  const getWeatherInfo = async()=>
  {
    const weather = await getWeather(searchValue)
    setWeatherInfo(weather)
  }

  useEffect(()=>{
    if(searchValue)
    {
      setGetLoading(true)
      getWeatherInfo()
    }
  },[searchValue])

  return (
    <SafeAreaView style={[styles.container, Platform.OS === "android" && styles.saveAreaAndroid]}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidCon}>
          
          
          <Routing route={route} setRoute={setRoute} searchValue={searchValue} setSearchValue={setSearchValue} getLoading={getLoading} weatherInfo={weatherInfo} setGetLoading={setGetLoading}/>


        </KeyboardAvoidingView>



    </SafeAreaView>
  );
}

