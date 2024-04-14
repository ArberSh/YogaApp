import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './pages/Lessons';
import Nav from './pages/Nav';
import Programs from './pages/Programs';
import Exercise from './pages/Exercise';
import AboutUs from './MenuBar/AboutUs';
import Profile from './MenuBar/Profile';

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer styles={styles.container}>
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor: "#fff",
        width:250
      },
      headerStyle:{
        backgroundColor:"#f5411e"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      },
      drawerActiveBackgroundColor:"blue",
      drawerLabelStyle:{
        color:"#111"
      }
    }}>
      <Drawer.Screen name="Home"
      options={{
        drawerLabel:"Home",
        title:"Home",
        drawerIcon:() => {
          <SimpleLineIcons name="home" size={20} color="#808080"/>
        }
      }}
      component={HomePage}
      />
    </Drawer.Navigator>
      <Nav /> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Programs" component={Programs} />
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
    fontSize: 46
  }
});
