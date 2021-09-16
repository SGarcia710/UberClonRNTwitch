import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigators/RootNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
