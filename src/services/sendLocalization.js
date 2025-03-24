import axios from "axios"
import { ApiAddress } from "../../apiAddress"

async function sendLocalization(localization,token)
{
    try
    {
        await axios.post(`${ApiAddress}?place=${localization}`,{notificationToken:token})
    }
    catch(ex)
    {
        console.log(ex)
    }
}

export default sendLocalization