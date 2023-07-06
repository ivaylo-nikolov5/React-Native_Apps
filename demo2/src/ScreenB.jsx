import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function ScreenB({navigation, route}) {

    const {itemName, itemId} = route.params;

    const onPressHandler = () => {
      navigation.navigate("Screen_A", {message: "message from B"})
      // navigation.goBack();
      // navigation.setParams({itemId: 2})
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
        <Text style={styles.text}>{itemName}</Text>
        <Text style={styles.text}>ID: {itemId}</Text>
  
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