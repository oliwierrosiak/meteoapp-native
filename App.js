import { StatusBar } from 'react-native';
import { SafeAreaView, Text, View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './src/styles/appStyle'
import { useEffect, useState } from 'react';
import Routing from './src/routes/routing';
import getWeather from './src/services/getWeather';
import * as SystemUI from "expo-system-ui";
import { ensureBackgroundTask } from './src/services/backgroundTaks';
import * as Location from 'expo-location';
import * as Notifications from "expo-notifications";
import sendLocalization from './src/services/sendLocalization';
import { getNotificationPushToken } from './src/services/expoPushToken';



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

  const getLocalizationPermissions = async()=>
  {
    await Location.requestForegroundPermissionsAsync();
    await Location.requestBackgroundPermissionsAsync();
    await Notifications.requestPermissionsAsync();
  }

  useEffect(()=>{
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true);
      SystemUI.setBackgroundColorAsync("transparent");
    }
    getLocalizationPermissions()
    ensureBackgroundTask()

    // test wysyłania tokenu notifications
      sendLocalization("Gniezno")
      // getNotificationPushToken()

      const notificationListener = Notifications.addNotificationReceivedListener(notification => {
        console.log("Powiadomienie odebrane:", notification);
      });
  
      const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
        console.log("Powiadomienie otwarte:", response);
      });

      return () => {
        Notifications.removeNotificationSubscription(notificationListener);
        Notifications.removeNotificationSubscription(responseListener);
      };
  },[])

  return (
    <SafeAreaView style={[styles.container, Platform.OS === "android" && styles.saveAreaAndroid]}>
        
      <Routing route={route} setRoute={setRoute} searchValue={searchValue} setSearchValue={setSearchValue} getLoading={getLoading} weatherInfo={weatherInfo} setGetLoading={setGetLoading}/>
    
    </SafeAreaView>
  );
}

