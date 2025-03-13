import { ActivityIndicator, ScrollView, Text,View, Image } from "react-native"
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
            <View style={styles.errorContainer}>
                {error == 404?
                <>
                    <Image style={styles.image} source={require('../../../assets/locationNotFound.png')} />
                    <Text style={styles.errorText}>Nie znaleziono lokalizacji</Text>
                </>
                :
                <>
                    <Image style={styles.image} source={require('../../../assets/serverError.png')} />
                    <Text style={[styles.errorText,styles.serverErrorText]}>Wystąpił błąd połączenia z serwerem</Text>
                </>}
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