import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
import styles from "../../styles/homeStyle"
import { useRef, useState } from "react"
function Home(props)
{
    const[inputValue,setInputValue] = useState('')

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

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../assets/logo2.png')} />
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Podaj miejscowość..." ref={inputRef} autoCorrect={false} style={styles.input} value={inputValue} onChangeText={(val)=>{setInputValue(val)}}/>
                    <Image source={require('../../../assets/gps20.png')} style={styles.location}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={search}><Text style={styles.buttonText}>Sprawdź pogodę</Text></TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Home