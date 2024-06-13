import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 140,
        },
      }}>
      <Drawer.Screen name="Main" component={Main}  options={{
    headerShown: false
  }} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator