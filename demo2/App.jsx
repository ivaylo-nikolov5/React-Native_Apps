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
} from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  
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
        <Text style={styles.text}>
          Your name is: {name}
        </Text>
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
    fontStyle: "italic",
    margin: 10,
   }, 

   input: {
    borderWidth: 1,
    width: 200,
    borderColor: "#555555",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
   },

});

export default App;
