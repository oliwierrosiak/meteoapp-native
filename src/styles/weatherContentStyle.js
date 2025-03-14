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
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        paddingVertical:20,
        paddingHorizontal:30,
        gap:30,
    },
    infoHeader:{
        width:`100%`,
        flexDirection:"column",
        justifyContent:"center",
        marginBottom:20,
    },
    infoHeaderH1:{
        flexDirection:"row",
        width:"100%",
        height:72,
        justifyContent:"center",
        alignItems:"center",
    },
    infoHeaderH2:{
        justifyContent:"center",
        alignItems:"center",
        width:`100%`,
    },
    location:{
        color:"white",
        fontSize:50,
        fontWeight:900
    },
    conditions:{
        color:"lightgrey",
        fontSize:30,
        fontWeight:700,
        width:"100%",
        textAlign:"center"
    },
    item:{
        width:`45%`,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
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
        height:200,
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
        width:72,
        height:72,
    },
    h1:{
        color:"white",
        fontSize:25,
        textAlign:"center"
    },
    h2:{
        color:"grey",
        fontSize:15,
         textAlign:"center"
    },


})

export default styles