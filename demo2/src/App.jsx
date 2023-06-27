import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';

const App = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 2) { 
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
   
  };
  
  return (
    <ImageBackground 
      style={styles.body}
      source={{uri: "https://pixabay.com/get/gbc0457c62df23bf137980fa41e3b9587f81dd5b760995786778eb446cfca4a2e2073e799d845e67a008ce7d63d12b133425d4648bcc647431387e2c5e1ecefd5_1280.jpg"}}
    >
      <Header/>
      <Modal
        visible={showWarning}
        onRequestClose={() => {
          setShowWarning(false);
        }}
        hardwareAccelerated
      >
        <View style={styles.centeredView}>
          <View style={styles.warning}>
            <View style={styles.warning_title}>
              <Text style={styles.warning_title_text}>WARNING</Text>
            </View>

            <View style={styles.warning_body}>
              <Text style={styles.warning_body_text}>The name must be longer than 2 characters!</Text>
            </View>

            <Pressable 
              style={styles.agree}
              onPress={() => setShowWarning(false)}
              android_ripple={{color: "#fff"}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>
        Please write your name: 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => setName(value)}
        maxLength={50}
      />

      <CustomButton
        onPressHandler={onPressHandler}
        submitted={submitted}
        title={submitted ? "Logout" : "Login"}
        color={"#5a9dc4"}
      />

      <CustomButton
        onPressHandler={() => {}}
        title={"Test"}
        color={"#ff00ff"}
        style={{margin: 10}}
      />

      {/* <Pressable
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
      </Pressable> */}

      {submitted? 
        <View style={styles.body}>
          <Text style={styles.text}>
            You are registered as: {name}
          </Text>

          <Image
            style={styles.image}
            source={require("../assets/done.png")}
            resizeMode={"stretch"}
          />
        </View>
        :
          <View style={styles.body}>
             <Image
                style={styles.image}
                source={require("../assets/error.png")}
                resizeMode={"stretch"}
              />
          </View> 
     }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
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
    color: "#000"
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

   warning: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
   },

   centeredView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
   },

   warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff00",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   },

   warning_title_text: {
    fontSize: 28,
    fontWeight: 600,
    color: "#000"
   },

   warning_body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
   },

   warning_body_text: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
   },

   agree: {
    backgroundColor: "#82d4e0",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
   },

   image: {
    width: 100,
    height: 100,
    marginTop: 50,

   },


});

export default App;
