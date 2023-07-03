import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

export default ScreenB;