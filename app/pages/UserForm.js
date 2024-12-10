import { View, Text } from 'react-native'
import React from 'react'

export default function UserForm() {
  return (
    <View>
      <Text>UserForm</Text>
    </View>
  )
}

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Text, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'

// // Screens
// function ProfileScreen() {
//   return (
//     <View className='flex-1 items-center justify-center'>
//       <Text>Profile Screen</Text>
//     </View>
//   )
// }

// function SettingsScreen() {
//   return (
//     <View className='flex-1 items-center justify-center'>
//       <Text>Settings Screen</Text>
//     </View>
//   )
// }

// function DetailsScreen() {
//   return (
//     <View className='flex-1 items-center justify-center'>
//       <Text>Details Screen</Text>
//     </View>
//   )
// }

// // Home Stack
// function HomeScreen() {
//   return (
//     <View className='flex-1 items-center justify-center'>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

// // Create Navigators
// const Drawer = createDrawerNavigator()
// const Tab = createBottomTabNavigator()
// const Stack = createNativeStackNavigator()

// // Home Stack Navigator
// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name='Home'
//         component={HomeScreen}
//         options={{ headerTitle: 'Home' }}
//       />
//       <Stack.Screen
//         name='Details'
//         component={DetailsScreen}
//         options={{ headerTitle: 'Details' }}
//       />
//     </Stack.Navigator>
//   )
// }

// // Tab Navigator
// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName
//           if (route.name === 'HomeTab') {
//             iconName = 'home-outline'
//           } else if (route.name === 'Profile') {
//             iconName = 'person-outline'
//           }
//           return <Ionicons name={iconName} size={size} color={color} />
//         },
//         tabBarActiveTintColor: '#A72F3B',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen
//         name='HomeTab'
//         component={HomeStack}
//         options={{ headerShown: false, title: 'Home' }}
//       />
//       <Tab.Screen
//         name='Profile'
//         component={ProfileScreen}
//         options={{ headerTitle: 'Profile' }}
//       />
//     </Tab.Navigator>
//   )
// }

// // Drawer Navigator
// export default function App() {
//   return (
//     // <NavigationContainer>
//     <Drawer.Navigator
//       screenOptions={{
//         drawerActiveTintColor: '#A72F3B',
//         drawerInactiveTintColor: 'gray',
//       }}
//     >
//       <Drawer.Screen
//         name='Tabs'
//         component={TabNavigator}
//         options={{ headerShown: false, title: 'Main' }}
//       />
//       <Drawer.Screen
//         name='Settings'
//         component={SettingsScreen}
//         options={{ headerTitle: 'Settings' }}
//       />
//     </Drawer.Navigator>
//     /* </NavigationContainer> */
//   )
// }
