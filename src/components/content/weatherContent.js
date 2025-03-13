import { ActivityIndicator, ScrollView, Text,View } from "react-native"
import styles from "../../styles/weatherContentStyle"
import { useEffect, useState } from "react"

function WeatherContent(props)
{
    const[data,setData] = useState({})
    const[error,setError] = useState(0)

    useEffect(()=>{

        if(props.weatherInfo?.errorCode)
        {
            setError(props.weatherInfo.errorCode)
            props.setGetLoading(false)
        }
        else if(props.weatherInfo?.current)
        {
            setData(props.weatherInfo)
            props.setGetLoading(false)
        }
    },[props.weatherInfo])

    return(
        props.getLoading?
            <View style={styles.loadingContainer}>
                <ActivityIndicator style={styles.loading} color={"white"}/>
            </View>
        :(error?
            <View>

            </View>
        :
            <ScrollView style={styles.weatherContainer}>
                <View>
                    <Text>{data.current?.dewpoint_c}</Text>
                </View>
            </ScrollView>)
    )
}

export default WeatherContent