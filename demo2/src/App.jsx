
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab =  createMaterialTopTabNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            size = focused ? 25 : 20;
            color = focused ? "#0f0" : "#f0edf6"
            if (route.name === "Screen_A") {
              iconName = "atlassian";
            } else if (route.name === "Screen_B") {
              iconName = "btc";
            }

            return <FontAwesome5
              name={iconName}
              size={size}
              color={color}
            />
          
          }
        })}
        // tabBarOptions = {{
        //   activeTintColor: "#0f0",
        //   inactiveTintColor: "#555",
        //   activeBackgroundColor: "#555",
        //   inactiveBackgroundColor: "#999",
        //   showLabel: false,
        // }}
        activeColor="#f0edf6"
        inactiveColor="#f0edf6"
        barStyle={{backgroundColor: "#694fad"}}
      >
        <Tab.Screen 
          name="Screen_A" 
          component={ScreenA} 
          // options={{
          //   tabBarBadge: 3
          // }}
        />

        <Tab.Screen 
            name="Screen_B" 
            component={ScreenB} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
