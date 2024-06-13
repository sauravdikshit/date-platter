import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator'

const Main = () => {
  return (
    <View className="bg-white" style={{flex:1}}>
      <BottomNavigator/>
    </View>
  )
}

export default Main