import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lesson = ({ data }) => {
  console.log('Lesson data:', data); // Log the data object

  if (!data || !data.english_name) {
    console.error('Invalid data:', data);
    return null; // Return null if data is invalid
  }

  return (
    <TouchableOpacity  >
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.fontSize}>{data.english_name}</Text>
          <Text>Time: {data.time}</Text>
          <Text>Category: {data.category}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: data.image }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#49A003',
    width: 380,
    height: 120,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'column',
  },
  fontSize: {
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default Lesson;
