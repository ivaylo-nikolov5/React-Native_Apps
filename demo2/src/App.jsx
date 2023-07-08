
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0090ff",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          }
          
        }}
      >
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              headerShown: false 
            }} 
          />

        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: "Home",
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
