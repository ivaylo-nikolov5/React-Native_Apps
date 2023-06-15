import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Ivo</Text>
      <Button 
        title="youtube channel"
        onPress={() => {Linking.openURL("https://www.youtube.com/channel/UC6Ly_tnsu5sI5k4ZqGedelw")}}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center"
   },

   text: {
    color: "#fff",
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 20,

   }
});

export default App;
