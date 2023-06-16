import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App = () => {
  // const [name, setName] = useState("Ivo");
  // const [session, setSession] = useState({number: 6, title: "state"});
  // const [current, setCurrent] = useState(true);
  
  // const onClickHandler = () => {
  //   setName("Programming with Ivo");
  //   setSession({number: 7, title: "Style"});
  //   setCurrent(false);
  // }

  const [count, setCount] = useState(0);
  const [timesClicked, setTimesClicked] = useState(0);

  const increment = () => {
    setCount(count + 5);
    setTimesClicked(timesClicked + 1);
  };

  return (
    <View style={styles.body}>

      {/* <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? "current session" : "next session"}</Text>
      <Button 
        title="Update State"
        onPress={onClickHandler}
      ></Button> */}
      <Text style={styles.text}>{count}</Text>
      <Button title="ADD" onPress={increment}></Button>
      <Text style={styles.text}>You clicked {timesClicked} times</Text>
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
