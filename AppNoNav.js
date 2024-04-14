import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/Lessons';
import Nav from './pages/Nav';
import Programs from './pages/Programs';
import Exercise from './pages/Exercise';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Exercise} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Test: {
    fontSize: 46
  }
});
