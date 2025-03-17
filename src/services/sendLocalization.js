import axios from "axios"
import { ApiAddress } from "../../apiAddress"

async function sendLocalization(localization)
{
    try
    {
        await axios.post(`${ApiAddress}?place=${localization}`)
    }
    catch(ex)
    {
        console.log(ex)
    }
}

export default sendLocalization