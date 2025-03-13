import { View,Image,TextInput, Text, TouchableOpacity, Platform, Keyboard } from "react-native"
import styles from "../../styles/headerStyle"
import { useState } from "react"
function Header(props)
{
    const[searchVal,setSearchVal] = useState('')

    const search = () =>
    {
        Keyboard.dismiss()
        props.setSearchValue(searchVal)
    }

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo1.png')} />
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Szukaj miejsca..." placeholderTextColor="grey" value={searchVal} onChangeText={(val)=>{setSearchVal(val)}}/>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.gpsButton}>
                            <Image source={require('../../../assets/gps.png')} style={styles.location}/>
                        </TouchableOpacity>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.button} onPress={search}><Image style={styles.searchImg} source={require('../../../assets/search.png')} /></TouchableOpacity>
                </View>
                    
            </View>
        </View>
    )
}

export default Header