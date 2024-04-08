import React from 'react';
import { StyleSheet, ScrollView, Button, Image, Text, View } from 'react-native';
import Program from '../components/Program';

function Programs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Program />
      <Program />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});

export default Programs;
