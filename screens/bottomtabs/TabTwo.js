import { View, Text, Pressable } from "react-native";
import React from "react";
import Card from "../../components/Card";
import { MyTabBar } from "../../Navigation/toptab/MyTabBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TypeA from "../../Navigation/toptab/TypeA";
import TypeB from "../../Navigation/toptab/TypeB";

const Tab = createMaterialTopTabNavigator();
const TabTwo = ({ navigation }) => {
  return (
    <>
      <View>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Text>TabTwo</Text>
        </Pressable>
        
      </View>
    <Tab.Navigator>
      <Tab.Screen name="TypeA" component={TypeA} />
      <Tab.Screen name="TypeB" component={TypeB} />
      
    </Tab.Navigator>
    
    </>
  );
};

export default TabTwo;
