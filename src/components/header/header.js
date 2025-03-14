import { View,Image,TextInput, Text, TouchableOpacity, Platform, Keyboard, Pressable, ActivityIndicator } from "react-native"
import styles from "../../styles/headerStyle"
import { useState } from "react"
import getLocation from "../../services/getLoaction"
function Header(props)
{
    const[searchVal,setSearchVal] = useState('')
    const[localizingLoading,setLocalizingLoading] = useState(false)

    const search = () =>
    {
        Keyboard.dismiss()
        props.setSearchValue(searchVal)
        setSearchVal('')
    }

    const localizing = (dotCount)=>
    {
        switch(dotCount)
        {
            case 1:
                setSearchVal("Lokalizuję.")
                break;
            case 2: 
                setSearchVal("Lokalizuję..")
                break;
            case 3:
                setSearchVal("Lokalizuję...")
                break;
        }
    }

    const locationClicked = async() =>
    {
        if(!localizingLoading)
        {
            setLocalizingLoading(true)
            let dotCount = 1
            const interval = setInterval(()=>{
                localizing(dotCount)
                dotCount++
                if(dotCount === 4)
                {
                    dotCount = 1
                }
            },250)
    
            const place = await getLocation()
            if(place)
            {
                clearInterval(interval)
                setSearchVal(place[0].city)
                setLocalizingLoading(false)
            }
            else
            {
                clearInterval(interval)
                setSearchVal('')
                setLocalizingLoading(false)
            }
        }
       
    }

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo1.png')} />
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Szukaj miejsca..." placeholderTextColor="grey" value={searchVal} onChangeText={(val)=>{setSearchVal(val)}}/>
                <View style={styles.menu}>
                    <Pressable style={styles.gpsButton} onPress={locationClicked}>
                            {localizingLoading?<ActivityIndicator />:
                            <Image source={require('../../../assets/gps.png')} style={styles.location}/>
                            }
                        </Pressable>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.button} onPress={search}><Image style={styles.searchImg} source={require('../../../assets/search.png')} /></TouchableOpacity>
                </View>
                    
            </View>
        </View>
    )
}

export default Header