import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/Lessons';
import Nav from './pages/Nav';
import Program from './pages/Program';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer styles={styles.container}>
    <Nav></Nav>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Program" component={Program} options={{ headerShown: false }}/>
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
