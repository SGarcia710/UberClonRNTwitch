import React from 'react';
import HomeScreen from '../../screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DestinationScreen from '../../screens/Destination';

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
      <Drawer.Group screenOptions={{ presentation: 'modal' }}>
        <Drawer.Screen name="Destination" component={DestinationScreen} />
      </Drawer.Group>
      <Drawer.Group>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={HomeScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default RootNavigator;
