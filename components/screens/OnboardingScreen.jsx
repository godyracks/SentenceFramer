import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
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
    <ImageBackground
      source={require('../db/overlay.png')}
      style={styles.backgroundImage}
    >
      <Onboarding
        onSkip={() => navigation.replace('Home')}
        onDone={() => navigation.replace('Home')}
        DotComponent={CustomDotComponent} // Use your custom DotComponent
        pages={[
          {
            backgroundColor: 'transparent', // Set to transparent for overlay effect
            image: (
              <Image
                source={require('../db/app-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Welcome to Sentence Framer!',
            subtitle: 'Craft creative sentences with our diverse collection of images and phrases.',
          },
          {
            backgroundColor: 'transparent', // Set to transparent for overlay effect
            image: (
              <Image
                source={require('../db/app-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Express Yourself',
            subtitle: 'Generate unique sentences by combining different images and words.',
          },
          {
            backgroundColor: 'transparent', // Set to transparent for overlay effect
            image: (
              <Image
                source={require('../db/app-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Explore and Have Fun',
            subtitle: 'Discover various categories and create sentences that reflect your creativity.',
          },
        ]}
      />
    </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Adjust image size and resizeMode as needed
  },
});

export default OnboardingScreen;
