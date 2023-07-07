import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

function ScreenA({navigation, route}) {

    const onPressHandler = () => {
      navigation.navigate("Screen_B");
      // navigation.toggleDrawer();
    }
  
    return (
      <View style={styles.body}>
        <Text style={[
          GlobalStyle.CustomFont,
          styles.text]}>
          Screen A
        </Text>
  
        <Pressable
          style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0f0", padding: 10,})}
          onPress={onPressHandler}
        >
          <Text style={[
            GlobalStyle.ButtonStyle,
            styles.text]}>
            Go to Screen B
          </Text>
        </Pressable>

        <Text style={styles.text}>{route.params?.message}</Text>
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
    //  fontSize: 40,
     color: "#000",
    //  fontWeight: 600,
    //  fontFamily: "Fasthand-Regular"

    }
 });

export default ScreenA;