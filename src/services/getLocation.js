import * as Location from 'expo-location';

async function getLocation() {
    try {
        let location = await Location.getLastKnownPositionAsync({ accuracy: Location.Accuracy.High });
        if (!location) {
            location = await new Promise((resolve, reject) => {
                Location.watchPositionAsync(
                    { accuracy: Location.Accuracy.BestForNavigation, timeInterval: 5000, distanceInterval: 10 },
                    (loc) => {
                        resolve(loc);
                    }
                );
                setTimeout(() => reject(new Error()), 10000);
            });
        }

        let address = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        if(address[0]?.city)
        {
            return address
        }
        else
        {
            throw new Error()
        }
        
    } 
    catch(ex)
    {
        return null;
    }
}

export default getLocation