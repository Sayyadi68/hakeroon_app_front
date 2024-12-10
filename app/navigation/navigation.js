import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Ionicons } from '@expo/vector-icons'

import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginUserType from '../pages/LoginUserType'
import UserForm from '../pages/UserForm'
import DesignPage from '../pages/DesignPage'
import ShoppingBasket from '../pages/ShoppingBascket'

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
          } else if (route.name === 'طراحی سفارشی') {
            iconName = focused ? 'brush' : 'brush-outline'
          } else if (route.name === 'سبد خرید') {
            iconName = focused ? 'basket' : 'basket-outline'
          } else if (route.name === 'پروفایل') {
            iconName = focused ? 'happy' : 'happy-outline'
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
      <Tab.Screen name='سبد خرید' component={ShoppingBasket} />

      <Tab.Screen name='طراحی سفارشی' component={DesignPage} />
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
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          right: 0,
          left: null,
        },
      }}
      defaultStatus='closed'
    >
      <Drawer.Screen
        name='HomeStackGroup'
        component={HomeStackGroup}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='login'
        component={Login}
        // options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  )
}

function Navigation() {
  return <DrawerGroup />
}

export default Navigation
