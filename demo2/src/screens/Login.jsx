import {React, useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, TextInput, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage"

function Login({ navigation }) {

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
              navigation.navigate("Home")
            } else {
              console.log("Name is null!");
            }
          }
  
          )
  
        } catch (error) {
          console.log(error);
        }
      }

    const setData = async () => {
        if (name.length <= 2 || age.length < 1 || age.length > 3) {
            Alert.alert("Error", "Please enter valid data!")
        } else {
            let user = {
                Name: name,
                Age: age
            }
            try {
                await AsyncStorage.setItem("UserData", JSON.stringify(user))
                navigation.navigate("Home");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View
            style={styles.body}
        >
            <Image
                style={styles.logo}
                source={require("../../assets/images/logo.png")}
            />
            <Text
                style={styles.text}
            >Async Storage
            </Text>

            <TextInput
                style={styles.textInput}
                placeholder={"Username"}
                onChangeText={(value) => setName(value)}
            />

            <TextInput
                style={[
                    styles.textInput,
                    {marginTop: 0}
                ]}
                placeholder={"Age"}
                onChangeText={(value) => setAge(value)}
            />

            <CustomButton
                color={"#1eb910"}
                title={"Login"}
                style={{
                    borderRadius: 15,
                    width: 100,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPressHandler={setData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0080ff"
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: "#fff",
        fontWeight: 500,
    },

    textInput: {
        width: 300,
        borderWidth: 1,
        borderColor: "#555",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginTop: 120,
        marginBottom: 30,
        fontSize: 20,
        paddingLeft: 15,
        textAlign: "center"
    }
    
})


export default Login;