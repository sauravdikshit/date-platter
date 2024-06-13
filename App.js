

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from './screens/Home';
import ScreenOne from './screens/ScreenOne';
import AppNavigator from "./Navigation/AppNavigator";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppNavigator/>
    
  );
}

