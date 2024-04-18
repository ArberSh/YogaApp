// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from './NavigationBar';
import NavigationDrawer from './NavigationDrawer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <NavigationBar {...props} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name="Program" component={ProgramScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <NavigationBar />
      <Text>Home Screen</Text>
    </View>
  );
};

const LessonScreen = () => {
  return (
    <View>
      <NavigationBar />
      <Text>Lesson Screen</Text>
    </View>
  );
};

const ProgramScreen = () => {
  return (
    <View>
      <NavigationBar />
      <Text>Program Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <NavigationBar />
      <Text>Profile Screen</Text>
    </View>
  );
};

const AboutUsScreen = () => {
  return (
    <View>
      <NavigationBar />
      <Text>About Us Screen</Text>
    </View>
  );
};

export default App;
