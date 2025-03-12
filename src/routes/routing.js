import Home from "../screens/home/home"
import Search from "../screens/search/search"

function Routing(props)
{
    if(props.route === "home")
    {
        return <Home />
    }
    else if(props.route === "search")
    {
        return <Search />
    }
}

export default Routing