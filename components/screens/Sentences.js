// File: components/screens/Sentences.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Data from '../db/Data'; // Import your data file

const Sentences = ({ route }) => {
  const { category } = route.params;
 
  console.log('Received category in Sentences:', category);
  //console.log('categoryData:', categoryData); // Log categoryData
  console.log('Data object:', Data);

  const categoryData = Data[category];
  console.log('Category data:', categoryData);
  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleCardPress = (item) => {
    // Handle the logic when a card is pressed, e.g., navigate to a detailed view
    console.log(`Pressed: ${item.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{category}</Text>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardTitle: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Sentences;
