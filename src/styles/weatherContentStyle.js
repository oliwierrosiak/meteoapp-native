import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingContainer:{
        width:`100%`,
        height:`100%`,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    loading:{
        transform:"scale(4)",
    },
    weatherContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"pink"
    },
    errorContainer:{
        width:"100%",
        height:"80%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:30,
    },
    image:{
        width:200,
        height:200
    },
    errorText:{
        fontSize:25,
        color:"white",
        fontWeight:900,
        textAlign:"center"
    },
    serverErrorText:{
        color:"red",
    }
})

export default styles