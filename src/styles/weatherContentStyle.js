import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingContainer:{
        width:`100%`,
        height:`80%`,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    loading:{
        transform:"scale(3)",
    },
    weatherContainer:{
        width:"100%",
        height:"100%",
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
    errorImage:{
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
    },
    image:{
        width:100,
        height:100
    },
    h1:{
        color:"white"
    },
    h2:{
        color:"white"
    },
    location:{
        color:"white"
    },
    conditions:{
        color:"white"
    }
})

export default styles