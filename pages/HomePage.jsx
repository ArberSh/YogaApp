import { View, Text } from 'react-native';
import React from 'react';
import NavBottom from './NavBottom';

const HomePage = () => {
  return (
    <View>
      <NavBottom />
      <View>
        <Text>Hello from HomePage!</Text>
      </View>
    </View>
  );
}

export default HomePage;
