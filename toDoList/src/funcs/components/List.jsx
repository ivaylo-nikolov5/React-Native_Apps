import React from "react";
import {
    View,
    Text,
} from "react-native";

const List = (props) => { 
    return (
        <View style= {{
            width: 300,
            justifyContent: "center",
            alignContent: "center",
            borderBottomWidth: 2,
            marginBottom: 15
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#000"
            }}>List</Text>

        </View>
    )
}

export default List;