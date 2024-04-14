import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuImg from '../assets/Menu.png';
import Logo from '../assets/Logo.png';

function Nav({ routeName }) {
  const navigation = useNavigation();

  // Render Nav only if the route name is not 'Exercise'
  if (routeName !== 'Exercise') {
    return (
      <View style={style.NavContainer}>
        <View style={style.First}>
          <TouchableOpacity style={style.Image}>
            <Image source={MenuImg} />
          </TouchableOpacity>
          <Image style={style.Logo} source={Logo} />
        </View>
        <View style={style.Second}>
          <Text style={style.FontSize} onPress={() => navigation.navigate('HomePage')}>
            Lesson
          </Text>
          <Text style={style.FontSize} onPress={() => navigation.navigate('Programs')}>
            Program
          </Text>
        </View>
      </View>
    );
  } else {
    return null; // Don't render Nav if the route is 'Exercise'
  }
}

const style = StyleSheet.create({
  NavContainer: {
    marginTop: 20
  },
  First: {
    height: 60,
    flexDirection: 'row',
  },
  Image: {
    width: 20,
    height: 20,
    padding: 12
  },
  Logo: {
    top: -10,
    left: 142,
    width: 60,
    height: 60,
  },
  Second: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  FontSize: {
    fontSize: 20
  }
});

export default Nav;
