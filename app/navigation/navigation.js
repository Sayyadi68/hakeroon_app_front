import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons'

import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginUserType from '../pages/LoginUserType'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName
          if (route.name === 'خانه') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'تنظیمات') {
            iconName = focused ? 'settings' : 'settings-outline'
          } else if (route.name === 'پروفایل') {
            iconName = focused ? 'notifications' : 'notifications-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name='پروفایل' component={LoginUserType} />
      <Tab.Screen name='تنظیمات' component={Login} />
      <Tab.Screen name='خانه' component={Home} />
    </Tab.Navigator>
  )
}

function Navigation() {
  return <TabGroup />
  // <NavigationContainer>
  {
    /* <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='UserType' component={LoginUserType} />
      </Stack.Navigator> */
  }
  {
    /* </NavigationContainer> */
  }
}

export default Navigation
