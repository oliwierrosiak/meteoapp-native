import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable, ActivityIndicator, Platform } from "react-native"
import styles from "../../styles/homeStyle"
import { useRef, useState } from "react"
import getLocation from "../../services/getLocation"
function Home(props)
{
    const[inputValue,setInputValue] = useState('')
    const[localizingLoading,setLocalizingLoading] = useState(false)

    const inputRef = useRef(null)

    const search = () =>{
        if(inputValue.trim())
        {
            Keyboard.dismiss()
            props.setSearchValue(inputValue)
            props.setRoute('search')
        }
        else
        {
            inputRef.current.focus()
            setInputValue('')
        }
    }

    const localizing = (dotCount)=>
    {
        switch(dotCount)
        {
            case 1:
                setInputValue("Lokalizuję.")
                break;
            case 2: 
                setInputValue("Lokalizuję..")
                break;
            case 3:
                setInputValue("Lokalizuję...")
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
                setInputValue(place[0].city)
                setLocalizingLoading(false)
            }
            else
            {
                clearInterval(interval)
                setInputValue('')
                setLocalizingLoading(false)
            }
        }
       
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidCon} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../assets/logo2.png')} />
                <View style={styles.inputContainer}>
                    <TextInput editable={!localizingLoading} placeholder="Podaj miejscowość..." placeholderTextColor="grey" ref={inputRef} autoCorrect={false} style={styles.input} value={inputValue} onChangeText={(val)=>{setInputValue(val)}}/>
                    <Pressable onPress={locationClicked} style={styles.gpsButton}>
                    {localizingLoading?<ActivityIndicator />:
                    <Image source={require('../../../assets/gps.png')} style={styles.location}/>}
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.button} onPress={search}><Text style={styles.buttonText}>Sprawdź pogodę</Text></TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Home