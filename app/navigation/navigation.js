import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons'

import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginUserType from '../pages/LoginUserType'
import UserForm from '../pages/UserForm'
import { createDrawerNavigator } from '@react-navigation/drawer'

//================
//  stack navigator
//================

const HomeStack = createNativeStackNavigator()
function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='TabGroup'
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='login'
        component={Login}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='userType'
        component={LoginUserType}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='userForm'
        component={UserForm}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

//================
//  Tab navigator
//================

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
        headerShown: false,
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name='پروفایل'
        component={UserForm}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='تنظیمات' component={Login} />
      <Tab.Screen name='خانه' component={Home} />
    </Tab.Navigator>
  )
}

//===================
//  Drawer navigator
//===================

const Drawer = createDrawerNavigator()
function DrawerGroup() {
  return (
    <Drawer.Navigator screenLayout={{}}>
      <Drawer.Screen
        name='HomeStackGroup'
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  )
}

function Navigation() {
  return <DrawerGroup />
}
{
  /* <HomeStackGroup /> */
}
export default Navigation
