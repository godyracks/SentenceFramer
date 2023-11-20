import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Data from '../db/Data'; // Import your data file
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Sentences = ({ route }) => {
  const { category } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryData = Data[category];

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleCardPress = (item) => {
     // Define an array of witty sentences
  const wittySentences = [
    `I love ${item.title}! Yummy!`,
    `Feeling hungry for ${item.title}!`,
    `Savoring the flavor of ${item.title}!`,
    `Delicious ${item.title} coming right up!`,
  ];
    // Select a random sentence from the array
  const randomSentence = wittySentences[Math.floor(Math.random() * wittySentences.length)];

  // Set the selected item and the witty sentence
  setSelectedItem({ ...item, sentence: randomSentence });
 
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
     {selectedItem && (
  <View style={styles.sentenceContainer}>
    <Text style={styles.sentenceText}>{selectedItem.sentence}</Text>
    <TouchableOpacity><MaterialCommunityIcons name="heart" size={24} color="red" /></TouchableOpacity>
  </View>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#616C6F',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#fff'
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
  sentenceContainer: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  sentenceText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'orange',
  },
});

export default Sentences;
