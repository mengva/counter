// App.js

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {

return (
  <>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>


  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  </NavigationContainer>
  </>
);

};

export default App;