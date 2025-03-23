import * as Notifications from 'expo-notifications'

  
export async function getNotificationPushToken() {

    const perms = await Notifications.getPermissionsAsync();
    if(perms)
    {
        const status = await Notifications.requestPermissionsAsync();
        try
        {
            token = (await Notifications.getExpoPushTokenAsync()).data;
        }
        catch(ex)
        {
            console.log(ex)
        }
        return token
    }
    else
    {
        return null
    }
  }
  