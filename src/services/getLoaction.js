import * as Location from 'expo-location';

async function getLocation()
{


    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        return address
    }
    else
    {
        return null
    }
}

export default getLocation