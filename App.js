import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import Lesson from './pages/Lesson';
import Beginner from './pages/Beginner';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer styles={styles.container}>
    <Lesson></Lesson>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Beginner" component={Beginner} />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontSize:46
  }
});
