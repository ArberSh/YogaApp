// Lessons.jsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Lesson from '../components/Lesson';
import lessonData from '../LessonData.json'; // Import lesson data

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
});

export default function Lessons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(lessonData); 
  }, []);

  const renderItem = ({ item, index }) => <Lesson key={index} data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
