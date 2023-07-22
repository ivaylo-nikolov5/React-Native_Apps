import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = (props) => {
    return(
        <Pressable
        onPress={props.onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: "#03541b"}}
        style={({pressed}) => [
          {backgroundColor: pressed ? props.pressedColor : props.color},
          {...props.style}
        ]}
      >
        <Text 
          style={styles.text}
        >
            {props.title}
        </Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 20,
        margin: 10,
    }, 
})

export default CustomButton