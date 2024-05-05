// NavigationTabs.jsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lessons from './Lessons';
import Programs from './Programs';

const Tab = createMaterialTopTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator  tabBarOptions={{
       indicatorStyle: { backgroundColor: 'green' } }}>
      <Tab.Screen name="Lesson" component={Lessons} />
      <Tab.Screen name="Programs" component={Programs} />
    </Tab.Navigator>
  );
}
