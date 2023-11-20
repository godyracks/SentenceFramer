import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library

const Home = () => {
  const navigation = useNavigation();

  const navigateToSentences = (category) => {
    navigation.navigate('Sentences', { category });
  };

  const navigateToSettings = () => {
    // Navigate to the settings screen when the cog wheel icon is pressed
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.settingsButton} onPress={navigateToSettings}>
        <Icon name="cog" size={30} color="#fff" />
      </TouchableOpacity>
   
      <Text style={styles.userGuide}>
        Welcome to the Sentences App! Tap on a category below to explore sentences with a twist.
      </Text>

      {/* Category Buttons with Icons */}
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigateToSentences('Breakfast')}
      >
        <Icon name="food" size={30} color="#fff" /> 
        <Text style={styles.categoryButtonText}>Breakfast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigateToSentences('Lunch')}
      >
        <Icon name="food" size={30} color="#fff" /> 
        <Text style={styles.categoryButtonText}>Lunch</Text>
      </TouchableOpacity>

      {/* Add more category buttons with icons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#616C6F',
    padding: 20,
  },
  userGuide: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  categoryButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
    backgroundColor: '#3498db',
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Add spacing between icon and text
  },
});

export default Home;
