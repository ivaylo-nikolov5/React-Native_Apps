import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = (props) => {
    return(
        <Pressable
        onPress={props.onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: "#00f"}}
        style={({pressed}) => [
          {backgroundColor: pressed ? "#1df705" : props.color},
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
    touchable: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
    },

    text: {
        color: "#000",
        fontSize: 20,
        margin: 10,
    }, 
})

export default CustomButton