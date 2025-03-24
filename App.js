import { StatusBar } from 'react-native';
import { SafeAreaView, Platform } from 'react-native';
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
import getLocation from './src/services/getLocation';
import * as TaskManager from 'expo-task-manager';
import { BackgroundFetchResult } from 'expo-background-fetch';

const backgroundTaskName = 'send-location';

export default function App() {
   
  const[route,setRoute] = useState('home')
  const[searchValue,setSearchValue] = useState()
  const[weatherInfo,setWeatherInfo] = useState(null)
  const[getLoading,setGetLoading] = useState(false)
  const[token,setToken] = useState('')


  TaskManager.defineTask(backgroundTaskName,async() => {
    (async () => {
        try
        {
            const location = await getLocation();
            if(location)
            {
              await sendLocalization(location[0].city,token);
            }
        } 
        catch(ex)
        {
           console.error(ex);
        }
    })();

    return BackgroundFetchResult.NewData;
  });

  const getWeatherInfo = async()=>
  {
    const weather = await getWeather(searchValue)
    setWeatherInfo(weather)
  }

  const getLocalizationPermissions = async()=>
  {
    await Location.requestForegroundPermissionsAsync();
    await Location.requestBackgroundPermissionsAsync();
    await Notifications.requestPermissionsAsync();
  }

  const setTokenFunc = async()=>
  {
    const token = await getNotificationPushToken()
    if(token)
    {
      setToken(token)
      sendLocalization("gniezno",token);
    }
  }

  useEffect(()=>{
    if(searchValue)
    {
      setGetLoading(true)
      getWeatherInfo()
    }
  },[searchValue])

  useEffect(()=>{

    if(Platform.OS === "android")
    {
      StatusBar.setTranslucent(true);
      SystemUI.setBackgroundColorAsync("transparent");
    }

    getLocalizationPermissions()

    setTokenFunc()
   
    ensureBackgroundTask()
  
    const responseListener = Notifications.addNotificationResponseReceivedListener(async() => {
      const location = await getLocation()
      const weatherInfo = await getWeather(location[0].city)
      setRoute('search')
      setGetLoading(true)
      setWeatherInfo(weatherInfo)
    });

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    };

  },[])

  return (
    <SafeAreaView style={[styles.container, Platform.OS === "android" && styles.saveAreaAndroid]}>
        
      <Routing route={route} setRoute={setRoute} searchValue={searchValue} setSearchValue={setSearchValue} getLoading={getLoading} weatherInfo={weatherInfo} setGetLoading={setGetLoading}/>
    
    </SafeAreaView>
  );
}