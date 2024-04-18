import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/Logo.png';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './Lessons.jsx';
import AboutMe from '../MenuBar/AboutUs.jsx'
import Profile from '../MenuBar/AboutUs.jsx'


function Nav({ routeName }) {
  const navigation = useNavigation();
const Drawer = createDrawerNavigator();


  // Render Nav only if the route name is not 'Exercise'
  if (routeName !== 'Exercise') {
    return (
      <View style={style.NavContainer}>
        <View style={style.First}>
        <Drawer.Navigator>
      <Drawer.Screen
      name="HomePage"
        component={HomePage}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <SimpleLineIcons name="home" size={20} color="#808080" />
        }}
      />
      <Drawer.Screen
      name="AboutMe"
        component={AboutMe}
        options={{
          drawerLabel: "About Me",
          drawerIcon: () => <SimpleLineIcons name="list" size={20} color="#808080" />
        }}
      />
      <Drawer.Screen
      name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerIcon: () => <SimpleLineIcons name="home" size={20} color="#808080" />
        }}
      />
    </Drawer.Navigator>
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
