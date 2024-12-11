import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserForm from "../pages/UserForm";
import DesignPage from "../pages/DesignPage";
import ShoppingBasket from "../pages/ShoppingBascket";
import ScreenOne from "../pages/screenOne";
import ScreenTwo from "../pages/screenTwo";
import ScreenThree from "../components/screenThree";

//================
// Stack Navigator
//================
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="screenOne">
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="userForm"
        component={UserForm}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="screenOne"
        component={ScreenOne}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="screenTwo"
        component={ScreenTwo}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="screenThree"
        component={ScreenThree}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

//================
// Tab Navigator
//================
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          switch (route.name) {
            case "صفحه اصلی":
              iconName = focused ? "home" : "home-outline";
              break;
            case "طراحی سفارشی":
              iconName = focused ? "brush" : "brush-outline";
              break;
            case "سبد خرید":
              iconName = focused ? "basket" : "basket-outline";
              break;
            case "پروفایل":
              iconName = focused ? "happy" : "happy-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })} 
    >
      <Tab.Screen name="صفحه اصلی" component={Home} />
      <Tab.Screen name="طراحی سفارشی" component={DesignPage} />
      <Tab.Screen name="سبد خرید" component={ShoppingBasket} />
      <Tab.Screen name="پروفایل" component={UserForm} />
    </Tab.Navigator>
  );
}

//===================
// Drawer Navigator
//===================
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          right: 0,
          left: null,
        },
      }}
      defaultStatus="closed"
    >
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen name="login" component={Login} />
    </Drawer.Navigator>
  );
}

function Navigation() {
  return <TabGroup />;
}

export default Navigation;