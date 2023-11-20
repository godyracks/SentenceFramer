// File: components/screens/Home.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToSentences = (category) => {
    navigation.navigate('Sentences', { category });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToSentences('breakfast')}>
        <Text style={styles.categoryButtonText}>Breakfast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToSentences('lunch1')}>
        <Text style={styles.categoryButtonText}>Lunch</Text>
      </TouchableOpacity>
      {/* Add more category buttons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#3498db',
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
