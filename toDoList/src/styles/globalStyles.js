import { StyleSheet } from "react-native";
import { JumpingTransition } from "react-native-reanimated";

const globalStyles = StyleSheet.create({
    body: {
        backgroundColor: "#cfcfcf",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 210,
        height: 210,
    },

    appTitle: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: -35,
        color: "#000",
    },

    calendar: {
        // width: "50%",
        // height: "25%"
    },

    weekDaysContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        marginBottom: -37,
        marginTop: 10,
        zIndex: 10,
    },   

    weekDays: {
        fontWeight: "bold",
        marginRight: 13,
        color: "#000",
        fontSize: 16,
    },

    yearHeader: {
        fontSize: 30,
        fontWeight: "bold",
        zIndex: 50,
        color: "#000",
        marginBottom: 10
    },

    homeHeader: {
        width: "82%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginTop: -20,
        borderBottomColor: "#000",
        borderBottomWidth: 3,
    }


});

export default globalStyles;