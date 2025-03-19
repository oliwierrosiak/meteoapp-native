import axios from "axios"
import { ApiAddress } from "../../apiAddress"
import * as Notifications from 'expo-notifications'

async function sendLocalization(localization)
{
    try
    {
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await axios.post(`${ApiAddress}?place=${localization}`,{notificationToken:token})
    }
    catch(ex)
    {
        console.log(ex)
    }
}

export default sendLocalization