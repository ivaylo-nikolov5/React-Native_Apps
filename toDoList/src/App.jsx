import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Tasks from './screens/Tasks';
import Lists from './screens/Lists';
import Home from './screens/Home';
import ListTasks from './screens/ListTasks'; // Import the ListTasks screen

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Lists" component={Lists}/>
      <Stack.Screen name="ListTasks" component={ListTasks} />
    </Stack.Navigator>
  );
}

function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 27 : 25;
              color = focused ? '#04c73890' : '#080808';
            } else if (route.name === 'Tasks') {
              iconName = 'pen';
              size = focused ? 27 : 25;
              color = focused ? '#04c73890' : '#080808';
            } else if (route.name === 'Lists') {
              iconName = 'list';
              size = focused ? 27 : 25;
              color = focused ? '#04c73890' : '#080808';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        activeColor="#04c738"
        barStyle={{
          backgroundColor: '#cfcfcf',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Lists" component={ListStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
