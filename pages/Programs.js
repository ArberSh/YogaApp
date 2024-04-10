import React from 'react';
import { StyleSheet, ScrollView, Button, Image, Text, View } from 'react-native';
import Program from '../components/Program';

function Programs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Program />
      <Program />
      <Program />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:14,
    backgroundColor:"#EFEFEF"
  },
});

export default Programs;
