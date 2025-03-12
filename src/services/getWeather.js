import axios from "axios"
import { ApiAddress } from "../../apiAddress"
async function getWeather(place)
{
    try
    {
        // const response = await axios.get(`${ApiAddress}?place=${place}`)
        const response = await axios.get(`http://192.168.33.454`)
        if(response.data)
        {
            console.log(response.data)
            return response.data
        }
        else
        {
            throw new Error()
        }
    }
    catch(ex)
    {
        return null
    }
}

export default getWeather