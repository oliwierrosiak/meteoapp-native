import { useEffect } from "react"
import { ScrollView, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, StatusBar} from "react-native"
import styles from "../../styles/searchStyle"
import Header from "../../components/header/header"
import WeatherContent from "../../components/content/weatherContent"

function Search(props)
{
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <Header setSearchValue={props.setSearchValue}/>

            <KeyboardAvoidingView style={{minHeight:"100%"}} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "android" ? 100 : 0}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} keyboardShouldPersistTaps="handled">
                    <ScrollView contentContainerStyle={styles.scrollView}keyboardShouldPersistTaps="handled">
                        <WeatherContent weatherInfo={props.weatherInfo} getLoading={props.getLoading} setGetLoading={props.setGetLoading}/>
                    </ScrollView>

            </TouchableWithoutFeedback>

            </KeyboardAvoidingView>

        </View>

    )
}

export default Search