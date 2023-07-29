import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Photos from './screens/Photos';
import Albums from './screens/Albums';

const Tab = createMaterialBottomTabNavigator();

function App() {


    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Photos" component={Photos}/>
                <Tab.Screen name="Albums" component={Albums}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
