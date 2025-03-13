import { useEffect } from "react"
import { ScrollView, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native"
import styles from "../../styles/searchStyle"
import Header from "../../components/header/header"
import WeatherContent from "../../components/content/weatherContent"

function Search(props)
{
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

            <Header setSearchValue={props.setSearchValue}/>

            <WeatherContent weatherInfo={props.weatherInfo} getLoading={props.getLoading} setGetLoading={props.setGetLoading}/>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default Search