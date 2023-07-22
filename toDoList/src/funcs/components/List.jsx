import React from "react";
import {
    View,
    Text,
} from "react-native";
import CustomButton from "./CustomButton";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const List = (props) => { 
    return (
        <View style= {{
            display: "flex",
            flexDirection: "row",
            width: 300,
            justifyContent: "space-between",
            alignContent: "center",
            borderBottomWidth: 2,
            marginBottom: 15
        }}>
            <Text style={{
                fontSize: 25,
                maxWidth: "80%",
                fontWeight: "bold",
                color: "#000",
                marginLeft: 5,
            }}>
                {props.name}
            </Text>

            <CustomButton
                pressedColor="#f00"
                title={
                    <FontAwesome5 name={"trash"} size={25} color={"#000"} />
                }
                color="transparent"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    width: 47,
                    heigth:  60,
                    borderRadius: 10,
                }}
                onPressHandler={() => props.removeList(props.id)}
            />

        </View>
    )
}

export default List;