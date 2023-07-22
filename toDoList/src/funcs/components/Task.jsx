import {React} from "react";
import { 
    Text,
    View, 
} from "react-native";

import CustomButton from "./CustomButton";

const Task = (props) => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            width: 310,
            borderBottomWidth: 1,
            padding: 5,
            marginBottom: 5,
        }}>
            <Text style={{
                color: "#000",
                fontSize: 23,
                maxWidth: "80%"
            }}>{props.text}</Text>
            <CustomButton
                title="✔️"
                color="#04c73890"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    width: 47,
                    heigth:  60,
                    borderRadius: 10,
                }}
                onPressHandler={() => props.removeTask(props.id)}
            />
        </View>
    )
}

export default Task;