import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const TextInp = (props) => {
  const styles = props.styles;

  const handleChangeText = (inputText) => {
    props.setText(inputText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskInpContainer}>
        <TextInput
          style={styles.taskInput}
          onChangeText={handleChangeText}
          value={props.text}
          placeholder={props.placeholder}
          placeholderTextColor={props.phColor}
        />
      </View>
    </View>
  );
};



export default TextInp;
  
  