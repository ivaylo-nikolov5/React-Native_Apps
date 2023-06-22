import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 1) { 
      setSubmitted(!submitted);
    } else {
      // Alert.alert("Warning", 
      // "The name must be longer than 2 characters!",
      // [ 
      //   {text: "Do not show again", onPress: () => console.warn("Do not show again pressed!")},
      //   {text: "Cancel", onPress: () => console.warn("Cancel Pressed!")},
      //   {text: "OK", onPress: () => console.warn("OK Pressed!")},
      // ], 
      // {cancelable: true, onDismiss: () => console.warn("Alert dismissed!")}
      // );

      ToastAndroid.showWithGravityAndOffset(
      "The name must be longer than 2 characters!", 
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      0)
    }
   
  };
  
  return (
    <View style={styles.body}>
        <Text style={styles.text}>
          Please write your name: 
        </Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. John"
          onChangeText={(value) => setName(value)}
          maxLength={50}
        />

        <Pressable
          onPress={onPressHandler}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          android_ripple={{color: "#00f"}}
          style={({pressed}) => [
            {backgroundColor: pressed ? "#1df705" : "#5a9dc4"},
            styles.touchable
          ]}
        >
          <Text 
            style={styles.text}
          >{submitted ? "Logout" : "Login"}</Text>
        </Pressable>

        {submitted? 
          <Text style={styles.text}>
            You are registered as: {name}
          </Text>
        :null}
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
   },
   
   text: {
    color: "#000",
    fontSize: 20,
    margin: 10,
   }, 

   input: {
    borderWidth: 1,
    width: 200,
    borderColor: "#555555",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20, 
   },

   button: {
    marginBottom: 20,
    marginTop: 20,
   },

   touchable: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
   },

});

export default App;
