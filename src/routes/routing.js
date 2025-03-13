import { useEffect } from "react"
import Home from "../screens/home/home"
import Search from "../screens/search/search"

function Routing(props)
{

    if(props.route === "home")
    {
        return <Home setRoute={props.setRoute} setSearchValue={props.setSearchValue}/>
    }
    else if(props.route === "search")
    {
        return <Search setSearchValue={props.setSearchValue} weatherInfo={props.weatherInfo} getLoading={props.getLoading} setGetLoading={props.setGetLoading}/>
    }
}

export default Routing