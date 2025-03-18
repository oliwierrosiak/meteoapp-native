import * as TaskManager from 'expo-task-manager';
import { BackgroundFetchResult, registerTaskAsync } from 'expo-background-fetch';
import getLocation from './getLocation';
import sendLocalization from './sendLocalization';

const backgroundTaskName = 'send-location';


TaskManager.defineTask(backgroundTaskName,async() => {
    (async () => {
        try {
            const location = await getLocation();
            console.log("wysyłanie")
            console.log(location)
            if (location) {
                await sendLocalization(location[0].city);
            }
        } 
        catch(ex)
        {
            console.error(ex);
        }
    })();

    return BackgroundFetchResult.NewData;
});


const registerBackgroundTask = async () => {
        try
        {
            await registerTaskAsync(backgroundTaskName, {
                minimumInterval: 600,
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
        console.log("zadanie jest zarejestronwane")
        registerBackgroundTask();
    }
};