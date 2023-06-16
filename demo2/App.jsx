import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.row2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.row3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>

        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
      


      {/* <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center"
   },

   row1: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
   },

   row2: {
    width: "100%",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
   },

   row3: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
   },

   view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff",
   },

   view2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff00ff",
   },

   view3: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff00",
   },

   view4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0000",
   },

   view5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ff00",
   },

   view6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
   },

   view7: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000ff",
   },

  //  view1: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "#00ffff",
  //   justifyContent: "center",
  //   alignItems: "center"
  //  },

  //  view2: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "#ff0000",
  //   justifyContent: "center",
  //   alignItems: "center"
  //  },

  //  view3: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "#ffff00",
  //   justifyContent: "center",
  //   alignItems: "center"
  //  },

   text: {
    color: "#000",
    fontSize: 35,
    fontStyle: "italic",
   }, 
});

export default App;
