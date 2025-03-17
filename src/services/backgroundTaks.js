import * as TaskManager from 'expo-task-manager';
import { BackgroundFetchResult, registerTaskAsync } from 'expo-background-fetch';
import getLocation from './getLocation';
import sendLocalization from './sendLocalization';

const backgroundTaskName = 'send-location';

TaskManager.defineTask(backgroundTaskName, async () => {
    console.log("wykonywanie")
    try
    {
        const location = await getLocation()
        if(location[0]?.city)
        {
            console.log("wysyłam lokalizacje")
            sendLocalization(location[0].city)
        }
        else
        {
            throw new Error()
        }
    }
    catch(ex)
    {
        return BackgroundFetchResult.Failed;
    }
    
});


export const registerBackgroundTask = async () => {
        try
        {
            await registerTaskAsync(backgroundTaskName, {
                minimumInterval: 60,
                stopOnTerminate: false,
                startOnBoot: true, 
            });
        }
        catch(ex)
        {
            console.log(ex)
        }
};


export const ensureBackgroundTask = async () => {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(backgroundTaskName);
    if (!isRegistered) {
        console.log("zadanie jest nieaktywne")
        registerBackgroundTask();
    }
    else
    {
        console.log("zadanie jest aktywne")
    }
};

ensureBackgroundTask();