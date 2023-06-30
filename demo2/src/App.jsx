
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_B")
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>

      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0f0", padding: 10,})}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}) {
  
  const onPressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>

      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0f0", padding: 10,})}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go to Screen A
        </Text>
      </Pressable>

    </View>

    
  )
}

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Screen_A" 
          component={ScreenA} 
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen 
            name="Screen_B" 
            component={ScreenB} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
   },

   text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000"
   }
});

export default App;
