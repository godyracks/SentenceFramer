// File: navigation/StackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default StackNavigator;
