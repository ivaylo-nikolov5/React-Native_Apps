import { StyleSheet } from "react-native";

const photosStyles = StyleSheet.create({
    body: {
        backgroundColor: "#000000",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        borderBottomColor: "#364087",
        borderBottomWidth: 1,
        // justifyContent: "center"
    },

    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15,

    },

    headerText: {
        color: "#fff",
        fontSize: 20,
    },

    headerIconsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center",
    },

    titleContainer: {
        width: "100%",        
        display: "flex",
        justifyContent: "center",

    },

    title: {
        color: "#fff",
        fontFamily: "Arial",
        fontSize: 35,
        marginLeft: 25
    },
})

export default photosStyles;