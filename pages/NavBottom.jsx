import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lessons from './Lessons';
import Programs from './Programs';

const Tab = createMaterialTopTabNavigator();

export default function NavBottom() {
  return (
    <Tab.Navigator screenOptions={{tabBarUtabBarUnderlineStyle:'red'}}>
      <Tab.Screen name="Lesson" component={Lessons} />
      <Tab.Screen name="Programs" component={Programs} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})