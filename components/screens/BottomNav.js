import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home, Sentences, Favorite } from './index.js';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'comment' : 'comment-outline';
          } else if (route.name === 'Sentences') {
            iconName = focused ? 'format-text' : 'format-text-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          color: 'white',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Sentences" component={Sentences} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
