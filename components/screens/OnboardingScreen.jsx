import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  // Custom DotComponent with styles
  const CustomDotComponent = ({ selected }) => {
    return (
      <View
        style={[
          styles.dot,
          selected ? styles.selectedDot : null,
        ]}
      />
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      DotComponent={CustomDotComponent} // Use your custom DotComponent
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../db/app-logo.png')}
              style={styles.image}
            />
          ),
          title: 'Welcome to Turf Talk!',
          subtitle: 'Your source for in-depth football analysis and reviews.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../db/app-logo.png')}
              style={styles.image}
            />
          ),
          title: 'Join us every Tuesday and Thursday',
          subtitle: 'Get the latest insights and discussions on football.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../db/app-logo.png')}
              style={styles.image}
            />
          ),
          title: 'Shop Authentic Football Jerseys',
          subtitle: 'Explore our collection of premium football jerseys.',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  selectedDot: {
    backgroundColor: '#007AFF', // Selected dot color
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Adjust image size and resizeMode as needed
  },
});

export default OnboardingScreen;