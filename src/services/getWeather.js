import axios from "axios"
import { ApiAddress } from "../../apiAddress"
async function getWeather(place)
{
    try
    {
        const response = await axios.get(`${ApiAddress}?place=${place}`)
        if(response.data.current)
        {
            return response.data
        }
        else
        {
            throw new Error(400)
        }
    }
    catch(ex)
    {
        const error = ex.message == 400?400:500
        return {errorCode: error}
    }
}

export default getWeather