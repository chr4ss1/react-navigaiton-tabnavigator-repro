import React from 'react';
import { createSwitchNavigator, createCompatNavigatorFactory } from '@react-navigation/compat';
import AuthenticatedNavigator from './AuthenticatedNavigator';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = createSwitchNavigator(
  {
    Authenticated: AuthenticatedNavigator,
  },
  {
    initialRouteName: 'Authenticated',
  }
);

function AppContainer () {
  return (
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
}

export default AppContainer;
