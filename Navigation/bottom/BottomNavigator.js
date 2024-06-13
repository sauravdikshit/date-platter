import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOne from '../../screens/bottomtabs/TabOne';
import TabTwo from '../../screens/bottomtabs/TabTwo';
import TabThree from '../../screens/bottomtabs/TabThree';
import TabFour from '../../screens/bottomtabs/TabFour';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
  
      <Tab.Navigator>
        <Tab.Screen name="TabOne" component={TabOne} options={{headerShown:false}} />
        <Tab.Screen name="TabTwo" component={TabTwo}  options={{headerShown:false}}/>
        <Tab.Screen name="TabThree" component={TabThree} />
        <Tab.Screen name="TabFour" component={TabFour} />
      </Tab.Navigator>

  )
}

export default BottomNavigator