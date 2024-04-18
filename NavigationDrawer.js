// NavigationDrawer.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavigationDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.drawerItem}>HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.drawerItem}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.drawerItem}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NavigationDrawer;
