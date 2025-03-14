import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:`100%`,
        display:`flex`,
        justifyContent:"center",
        alignItems:"center",
    },
    content:{
        width:`90%`,
        display:`flex`,
        flexDirection:"column",
        justifyContent:"stretch",
        alignItems:'center',
        gap:40,
    },
    image:{
        width:`90%`,
        height:`80`
    },
    inputContainer:{
        width:`100%`,
        position:`relative`,
    },
    input:{
        width:`100%`,
        backgroundColor:"#fff",
        fontSize:25,
        paddingBottom:10,
        paddingTop:10,
        paddingLeft:15,
        paddingRight:50,
        borderRadius:8,
    },
    location:{
        width:30,
        height:30,
    },
    gpsButton:{
        width:30,
        height:30,
        position:"absolute",
        right:8,
        top:`50%`,
        transform:`translate(0%,-50%)`,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        width:"100%",
        backgroundColor:'#410ba5',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderRadius:10,

    },
    buttonText:{
        fontSize:23,
        fontWeight:`700`,
        color:"#fff"
    },

})

export default styles