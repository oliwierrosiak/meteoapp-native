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
        return <Search searchValue={props.searchValue}/>
    }
}

export default Routing