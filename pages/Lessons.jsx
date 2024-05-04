import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Lesson from '../components/Lesson';
import lessonData from '../LessonData.json'; // Import lesson data
import NavBottom from './NavBottom';

const Lessons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(lessonData); // Set data from lessonData.json
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
});

export default Lessons;
