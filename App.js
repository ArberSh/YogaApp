import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import NavBottom from "./pages/NavBottom"; // Import NavBottom component
import AboutUs from "./MenuBar/AboutUs.jsx"; // Import AboutMe component
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native"; // Import View and StyleSheet components
import Pfp from "./assets/Png.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Settings from './MenuBar/Settings.jsx'
import { createStackNavigator } from '@react-navigation/stack';
import Exercise from "./pages/Exercise.jsx";
import Camera from "./pages/Camera.jsx";
import InfoProgram from "./pages/InfoProgram.jsx";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 50,
          height: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={Pfp}
          style={{
            height: 100,
            width: 100,
            borderRadius: 65,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#111",
          }}
        >
          Arber Shaska
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerActiveBackgroundColor: "#B7FFB2",
        drawerLabelStyle: {
          color: "#434343",
        },
      }}
    >
      <Drawer.Screen
        name="Home Page"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <MaterialCommunityIcons name='home' size={30} color="#808080" />
          ),
        }}
        component={NavBottom}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <MaterialCommunityIcons name='nut' size={30} color="#808080" />
          ),
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="About Us"
        options={{
          drawerLabel: "About Us",
          title: "About Us",
          drawerIcon: () => (
            <MaterialCommunityIcons name='help' size={30} color="#808080" />
          ),
        }}
        component={AboutUs}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }}/>
        <Stack.Screen name="InfoProgram" component={InfoProgram} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
