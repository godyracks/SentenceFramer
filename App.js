// ./gradlew assembleRelease
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  OnboardingScreen,
  Sentences,
  LoadingScreen,
  Profile,
  Home
} from './components/screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'Sentences') {
            iconName = focused ? 'clipboard-text-multiple-outline' : 'clipboard-text-multiple-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-outline';
          } 

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white', // Set active tab icon color
        tabBarInactiveTintColor: 'white', // Set inactive tab icon color
        tabBarStyle: {
          backgroundColor: 'black', // Set the background color of the tab bar
        },
        tabBarLabel: '', // Hide the label
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Sentences" component={Sentences} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds, replace with actual data loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoadingScreen"
            component={LoadingScreen}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={BottomTabNavigator}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Sentences"
              component={BottomTabNavigator}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={Profile}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}