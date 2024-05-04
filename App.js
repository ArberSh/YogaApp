import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import NavBottom from "./pages/NavBottom"; // Import NavBottom component
import HomePage from "./pages/HomePage"; // Import HomePage component
import AboutUs from "./MenuBar/AboutUs.jsx"; // Import AboutMe component
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native"; // Import View and StyleSheet components
import Pfp from "./assets/Png.png";
import { borderRadius, color, fontSize, fontWeight, width } from "@mui/system";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from './MenuBar/Profile.jsx'

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
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
        }}
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
    drawerLabel:"Home",
    title:"Home",
    drawerIcon: () => (
      <MaterialCommunityIcons name='home' size={30} color="#808080" />
    ),
  }}
  component={NavBottom}
/>
  <Drawer.Screen name="Profile"  options={{
    drawerLabel:"Profile",
    title:"Arber Shaska",
    drawerIcon: () => (
      <MaterialCommunityIcons name='account' size={30} color="#808080" />
    ),
  }} component={Profile} />
        <Drawer.Screen name="About Us"  options={{
    drawerLabel:"About Us",
    title:"About Us",
    drawerIcon: () => (
      <MaterialCommunityIcons name='chat-question-outline' size={30} color="#808080" />
    ),
  }} component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
