
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
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer =  createDrawerNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          // drawerPosition: "right",
          drawerType: "front",
          swipeEdgeWidth: 500,
          drawerHideStatusBarOnOpen: false,
          overlayColor: "#00000090",
          drawerStyle: {
            backgroundColor: "#fff",
            width: 300,
          },
          // swipeEnabled: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0ff",

          }
        }}
      >
        <Drawer.Screen 
          name="Screen_A" 
          component={ScreenA}
          options={{
            title: "Screen_A Title",
            drawerIcon: ({focused}) => {
              return <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color="#0f0"
              />
            }
          }} 
        />

        <Drawer.Screen 
          name="Screen_B" 
          component={ScreenB} 
          options={{
            title: "Screen_B Title",
            drawerIcon: ({focused}) => {
              return <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color="#0f0"
              />
            }
          }}
          initialParams={{itemName: "Item from Drawer", itemId: 1}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default App;
