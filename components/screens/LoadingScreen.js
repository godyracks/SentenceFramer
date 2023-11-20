// LoadingScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//import AppLogo from './AppLogo'; // Import your app logo

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={AppLogo} style={styles.logo} /> */}
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
//   logo: {
//     width: 100, // Set an appropriate width
//     height: 100, // Set an appropriate height
//     marginBottom: 20,
//   },
});

export default LoadingScreen;