import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
import styles from "../../styles/homeStyle"
function Home(props)
{
    const search = () =>{
        Keyboard.dismiss()
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../assets/logo2.png')} />
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Podaj miejscowość..." style={styles.input}/>
                    <Image source={require('../../../assets/gps20.png')} style={styles.location}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={search}><Text style={styles.buttonText}>Sprawdź pogodę</Text></TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Home