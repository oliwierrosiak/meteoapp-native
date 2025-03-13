import { ActivityIndicator, ScrollView, Text,View, Image, Platform } from "react-native"
import styles from "../../styles/weatherContentStyle"
import { useEffect, useState } from "react"

function WeatherContent(props)
{
    const[data,setData] = useState({})
    const[error,setError] = useState(0)

    useEffect(()=>{
        if(props.weatherInfo)
        {
            console.log(props.weatherInfo)
            if(props.weatherInfo.errorCode)
            {
                setError(props.weatherInfo.errorCode)
                props.setGetLoading(false)
            }
            else
            {
                setError(0)
                setData(props.weatherInfo)
                props.setGetLoading(false)
            }
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
                    <Image style={styles.errorImage} source={require('../../../assets/locationNotFound.png')} />
                    <Text style={styles.errorText}>Nie znaleziono lokalizacji</Text>
                </>
                :
                <>
                    <Image style={styles.errorImage} source={require('../../../assets/serverError.png')} />
                    <Text style={[styles.errorText,styles.serverErrorText]}>Wystąpił błąd połączenia z serwerem</Text>
                </>}
            </View>
        :
            <ScrollView style={styles.weatherContainer}>
                <View>
                    <Image source={{uri:`http:${data.icon}`}} style={styles.image}/>

                    <Text style={styles.location}>{data.name}</Text>

                    <Text style={styles.conditions}>{data.condition}</Text>
                </View>
                
                <View style={styles.item}>
                    <Text style={styles.h1}>{data.temperature}</Text>
                    <Text style={styles.h2}>Temperatura</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.feelsLike}</Text>
                    <Text style={styles.h2}>Temperatura odczuwalna</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.cloud}%</Text>
                    <Text style={styles.h2}>Zachmurzenie</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.rain}mm</Text>
                    <Text style={styles.h2}>Deszcz</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.humidity}</Text>
                    <Text style={styles.h2}>Wilgotność</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.pressure}</Text>
                    <Text style={styles.h2}>Ciśnienie</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.windSpeed}</Text>
                    <Text style={styles.h2}>Prędkość wiatru</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.windDirection}</Text>
                    <Text style={styles.h2}>Kierunek wiatru</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.country}</Text>
                    <Text style={styles.h2}>Kraj</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.localDate}</Text>
                    <Text style={styles.h2}>Data Lokalna</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.localTime}</Text>
                    <Text style={styles.h2}>Godzina lokalna</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.timeZone}</Text>
                    <Text style={styles.h2}>Strefa czasowa</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.h1}>{data.lastUpdate}</Text>
                    <Text style={styles.h2}>Ostatnia aktualizacja</Text>
                </View>

            </ScrollView>
            )
    )
}

export default WeatherContent