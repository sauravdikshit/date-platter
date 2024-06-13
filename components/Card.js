import { View, Text } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View className="h-96 border-[#47969f] border-[0.9px] rounded-lg bg-[#ffffff]" >
        <View className="bg-[#4c7ca9] h-9 rounded-t-lg border-b-[0.9px] border-[#47969f] " >
         <View className="flex-row justify-between m-2">
            <View className="flex-row gap-2">
            <Text className="text-white text-[14px] font-bold">Date & Time:</Text>
            <Text className="text-white text-[14px] font-bold">24/Aug/2023</Text>
            </View>
            <View className="flex-row gap-2">
            <Text className="text-white text-[14px] font-bold">Booking Id:</Text>
            <Text className="text-white text-[14px] font-bold">8900123</Text>




            </View>
            

       
           
         </View>
        </View>
      <Text>Card</Text>
    </View>
  )
}