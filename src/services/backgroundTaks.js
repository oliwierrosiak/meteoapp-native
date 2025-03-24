import * as TaskManager from 'expo-task-manager';
import { registerTaskAsync } from 'expo-background-fetch';

const backgroundTaskName = 'send-location';

const registerBackgroundTask = async () => {
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
        registerBackgroundTask();
    }
};