import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from '../screens/Home';
import LogoTitle from '../components/Logo';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator