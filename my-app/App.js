import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_VFWV4gnghIJgOLXozfCL2ClQD32d1g",
  authDomain: "database-f10d2.firebaseapp.com",
  databaseURL: "https://database-f10d2-default-rtdb.firebaseio.com",
  projectId: "database-f10d2",
  storageBucket: "database-f10d2.appspot.com",
  messagingSenderId: "674363139245",
  appId: "1:674363139245:web:95ebed2ea7979eaeb85224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set } from "firebase/database";

let obj = {
  username: 'raj',
  email: 'raj@gmail.com',
  profile_picture : 'imageUrl'
}

function handleForm() {
  const db = getDatabase(app);
  set(ref(db, 'users/' + 101), obj);
}

handleForm()
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;











// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
