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
    }
})

export default styles