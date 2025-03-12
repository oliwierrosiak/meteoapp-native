import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './src/styles/appStyle'
import { useEffect, useState } from 'react';
import Routing from './src/routes/routing';
import getWeather from './src/services/getWeather';


export default function App() {

  const[route,setRoute] = useState('home')
  const[searchValue,setSearchValue] = useState()
  const[weatherInfo,setWeatherInfo] = useState({})
  const[weatherError,setWeatherError] = useState('')

  const getWeatherInfo = async()=>
  {
    const weather = await getWeather(searchValue)
    if(weather)
    {
      setWeatherInfo(weather.current)
    }
    else
    {
      setWeatherError("Wystąpił bład przy pobieraniu pogody. Spróbuj ponownie później")
    }
  }

  useEffect(()=>{
    if(searchValue)
    {
      getWeatherInfo()
    }
  },[searchValue])

  useEffect(()=>{
    console.log(weatherInfo)
  },[weatherInfo])

  return (
    <SafeAreaView style={[styles.container, Platform.OS === "android" && styles.saveAreaAndroid]}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidCon}>
          
          
          <Routing route={route} setRoute={setRoute} searchValue={searchValue} setSearchValue={setSearchValue}/>


        </KeyboardAvoidingView>



    </SafeAreaView>
  );
}

