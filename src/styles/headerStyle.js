import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
        paddingTop:10,
        paddingBottom:20,
        borderBottomWidth:5,
        borderBottomColor:"#444444",
    },
    logo:{
        width:50,
        height:50,
    },
    inputContainer:{
        position:`relative`,
        width:`70%`,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    input:{
        backgroundColor:"#fff",
        fontSize:20,
        paddingBottom:10,
        paddingTop:10,
        paddingLeft:15,
        paddingRight:100,
        borderRadius:8,
        width:"100%",
        height:50,
        textAlignVertical: "center",
        includeFontPadding: false,
    },
    menu:{
        position: `absolute`,
        right:8,
        top:`50%`,
        transform:`translate(0%,-50%)`,
        display:"flex",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        gap:7,
    },
    button:{
        backgroundColor:'#410ba5',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:30,
        height:30,
        borderRadius:50,
    },
    searchImg:{
        width:20,
        height:20,
    },
    gpsButton:{
        width:25,
        height:25,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    location:{
        width:`100%`,
        height:`100%`,
    },
    line:{
        width:3,
        height:`90%`,
        borderRadius:5,
        backgroundColor:"grey"
    }

})

export default styles