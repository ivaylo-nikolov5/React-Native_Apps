import React from 'react';
import {
    View,
    Text,
} from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Tasks from './screens/Tasks';
import Lists from './screens/Lists';
import Home from './screens/Home';

const Tab = createMaterialBottomTabNavigator();  

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = "home";
                            
                        } else if (route.name === "Tasks") {
                            iconName = "pen";
                            
                        } else if (route.name === "Lists") {
                            iconName = "list";
                            
                        }

                        
                        return (
                            <FontAwesome5 name={iconName}/>
                        )
                    }
                })
                    
                }
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}   
                />
                
                <Tab.Screen 
                    name="Tasks" 
                    component={Tasks}
                />

                <Tab.Screen 
                    name="Lists" 
                    component={Lists}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;
