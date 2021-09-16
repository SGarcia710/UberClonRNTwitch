import React from 'react';
import HomeScreen from '../../screens/Home';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          headerShown: false,
        };
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
