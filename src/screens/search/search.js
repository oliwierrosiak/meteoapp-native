import { Text, View } from "react-native"
import styles from "../../styles/searchStyle"
import Header from "../../components/header/header"

function Search(props)
{
    return(
        <View style={styles.container}>

            <Header setSearchValue={props.setSearchValue}/>

        </View>
    )
}

export default Search