import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome';
import Signin from './screens/signin';
import Signup from './screens/signup';
import { Main } from './screens/menu';




// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Signup from './Screens/Signup';
// import Signin from './Screens/Signin';
// import Forget from './Screens/Forget';

// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
// 
// const main = () => {
//   return (
//     < Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#f96163",
//         tabBarStyle: { marginHorizontal: -15, backgroundColor: "#d7d7d9" },
//       }
//       }
//     >
//       <Tab.Screen
//         name="Home"
//         component={Menu}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="home" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen
//         name="Search"
//         component={SearchFilter}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="search" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen
//         name="Cart"
//         component={Welcome}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="shopping-cart" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen
//         name="user"
//         component={Welcome}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="user" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//     </Tab.Navigator >
//   )
// }

export default function App() {


  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName='Welcome'>
        <Stack.Screen   name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="signup" component={Signup} />
        {/* <Stack.Screen name="forget" component={Forget} /> */}
        <Stack.Screen name="menu" component={Main} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
