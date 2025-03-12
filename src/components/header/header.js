import { View,Image,TextInput, Text, TouchableOpacity, Platform } from "react-native"
import styles from "../../styles/headerStyle"
function Header(props)
{
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo1.png')} />
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Wpisz nowe miejsce..."/>
                <View style={[styles.menu,Platform.OS === "ios" && styles.iosCenter]}>
                    <TouchableOpacity style={styles.gpsButton}>
                            <Image source={require('../../../assets/gps.png')} style={styles.location}/>
                        </TouchableOpacity>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.button}><Image style={styles.searchImg} source={require('../../../assets/search.png')} /></TouchableOpacity>
                </View>
                    
            </View>
                

        </View>
    )
}

export default Header