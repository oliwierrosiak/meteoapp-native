import axios from "axios"
import { ApiAddress } from "../../apiAddress"
import * as Notifications from 'expo-notifications'
import { getNotificationPushToken } from "./expoPushToken";
async function sendLocalization(localization)
{
    try
    {
        const token = await getNotificationPushToken()
        console.log(token)
        await axios.post(`${ApiAddress}?place=${localization}`,{notificationToken:token})
    }
    catch(ex)
    {
        console.log(ex)
    }
}

export default sendLocalization