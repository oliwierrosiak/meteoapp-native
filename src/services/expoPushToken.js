// import * as Notifications from 'expo-notifications'

// export async function getNotificationPushToken() {

//     let token
//     const perms = await Notifications.getPermissionsAsync();

//     if(perms)
//     {
//         token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token)
//         return token
//     }
//     else
//     {
//         return null
//     }
//   }
  
//   export default function App() {
//     const [expoPushToken, setExpoPushToken] = useState("");
//     const notificationListener = useRef();
//     const responseListener = useRef();
  
//     useEffect(() => {
//       async function setupNotifications() {
//         const token = await registerForPushNotificationsAsync();
//         setExpoPushToken(token);
  
//         // Obsługa powiadomień
//         notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//           console.log("📩 Otrzymano powiadomienie:", notification);
//         });
  
//         responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//           console.log("✅ Kliknięto powiadomienie:", response);
//         });
//       }
  
//       setupNotifications();
  
//       return () => {
//         Notifications.removeNotificationSubscription(notificationListener.current);
//         Notifications.removeNotificationSubscription(responseListener.current);
//       };
//     }, []);
  
//   }