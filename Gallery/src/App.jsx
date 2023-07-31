import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Photos from './screens/Photos';
import Albums from './screens/Albums';

const Tab = createMaterialBottomTabNavigator();

function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === "Photos") {
              iconName = "image";
            } else if (route.name === "Albums") {
              // Use a valid icon name from FontAwesome5 library
              iconName = "images";
            }

            size = focused ? 29 : 25;
            color = focused ? "#5265f2" : "#858585";

            return <FontAwesome5 name={iconName} size={size} color={color}/>;
          },
        })}
        activeColor="#5265f2"
        barStyle={{
          backgroundColor: '#000000',
        }}
      >
        <Tab.Screen 
          name="Photos" 
          component={Photos}
        />
        <Tab.Screen 
          name="Albums" 
          component={Albums}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
