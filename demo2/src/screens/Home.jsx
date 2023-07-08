import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';

function Home({navigation, route}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    useEffect(() => {
      getData();
    }, []);

    const getData = () => {
      try {
        AsyncStorage.getItem("UserData")
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);
            setAge(user.Age);
          } else {
            console.log("Name is null!");
          }
        }

        )

      } catch (error) {
        console.log(error);
      }
    }

    const updateData = async () => {
      if (name.length <= 2 || age.length < 1 || age.length > 3) {
          Alert.alert("Please enter a valid data!")
      } else {
          try {
              await AsyncStorage.setItem("UserData", JSON.stringify({Name: name, Age: age}))
              Alert.alert("Success!", "Your data has been updated.")
          } catch (error) {
              console.log(error);
          }
      }
   }

   const removeData = async () => {
      try {
          await AsyncStorage.removeItem("UserName");
          navigation.navigate("Login");
      } catch (error) {
          console.log(error);
      }
  }

    return (
      <View style={styles.body}>
        <Text 
        style={[
          GlobalStyle.CustomFont,
          styles.text
        ]}
        >
          Welcome {name}!
        </Text>

        <Text 
        style={[
          GlobalStyle.CustomFont,
          styles.text
        ]}
        >
          Your age is {age}!
        </Text>

        <TextInput
          style={styles.input}
          placeholder={"Enter your name..."}
          value={name}
          onChangeText={(value) => setName(value)}
        />

        <TextInput
          style={[
            styles.input,
            {marginTop: 0}
          ]}
          placeholder={"Enter your age..."}
          value={age}
          onChangeText={(value) => setAge(value)}
        />

        <CustomButton
          color={"#1eb910"}
          title={"Update"}
          style={{
            borderRadius: 15,
            width: 100,
            alignItems: "center",
          }}
          onPressHandler={updateData}
        />

        <CustomButton
          color={"#bf6504"}
          title={"Remove"}
          style={{
            borderRadius: 15,
            width: 100,
            alignItems: "center",
            marginTop: 20
          }}
          onPressHandler={removeData}
        />
        
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
     color: "#000",
    },
    
    input: {
      width: 300,
      borderWidth: 1,
      borderColor: "#555",
      borderRadius: 15,
      backgroundColor: "#fff",
      marginTop: 120,
      marginBottom: 30,
      fontSize: 20,
      paddingLeft: 15,
    }
 });

export default Home;