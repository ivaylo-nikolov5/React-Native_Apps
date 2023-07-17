import React from "react";
import {
    Text,
    View,

} from "react-native";
import globalStyles from "../styles/globalStyles";

function Tasks() {
    return (
        <View style={globalStyles.body}>
            <Text>Your tasks</Text>
        </View>
    )
}

export default Tasks;