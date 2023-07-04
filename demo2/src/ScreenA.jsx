import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function ScreenA({navigation}) {

    const onPressHandler = () => {
      // navigation.navigate("Screen_B")
      navigation.toggleDrawer();
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
            Toggle Drawer
          </Text>
        </Pressable>
      </View>
    )
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

export default ScreenA;