import { React, useState, useEffect, } from "react";
import {
    Text,
    View,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,

} from "react-native";

import globalStyles from "../styles/globalStyles";
import TextInp from "../funcs/components/TextInp";
import CustomButton from "../funcs/components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import List from "../funcs/components/List";

function Lists() {
    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState('');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setIsKeyboardOpen(true);
            }
        );
        Keyboard.addListener(
            "keyboardDidHide",
            () => setIsKeyboardOpen(false)
        );

        loadListsFromStorage();
    }, []);

    // Function to load tasks from AsyncStorage
    const loadListsFromStorage = async () => {
        try {
            const storedLists = await AsyncStorage.getItem('lists');
            if (storedLists !== null) {
                setLists(JSON.parse(storedLists));
            }
        } catch (error) {
            console.error('Error loading lists from AsyncStorage:', error);
        }
    };

    // Function to save tasks to AsyncStorage
    const saveListsToStorage = async (lists) => {
        try {
        await AsyncStorage.setItem('lists', JSON.stringify(lists));
        } catch (error) {
        console.error('Error saving lists to AsyncStorage:', error);
        }
    };

    const addList = () => {
        const newList = { id: lists.length, newListName: newListName };
        setLists([newList, ...lists]);
        setNewListName("");
        saveListsToStorage([newList, ...lists]); // Save updated tasks to AsyncStorage
    };

    const removeList = (id) => {
        // const newTasks = currentTasks.filter(task => task.id !== id);
        // setCurrentTasks(newTasks);
        // saveTasksToStorage(newTasks); // Save updated tasks to AsyncStorage
    };

    const listsComponent = lists.map((list) => (
        <List key={list.id} id={list.id} name={list.text} removeList={removeList} />
    ));


    return (
        <KeyboardAvoidingView style={globalStyles.body}>
            <Text style={globalStyles.tasksTitle}>Your Lists</Text>

            <ScrollView style={{ height: 300, borderWidth: 2, marginTop: 90, paddingTop: -10, borderRadius: 20, paddingLeft: 15, paddingRight: 15, borderColor: "#5c5c5c", display: lists.length > 0 ? "flex" : "none" }}>
                <View style={globalStyles.currentTasksContainer}>
                    {listsComponent}
                </View>
            </ScrollView>

            <TextInp
                styles={globalStyles}
                placeholder="Enter a new task..."
                phColor="#000"
                text={newListName}
                isKeyboardOpen={isKeyboardOpen}
                setText={setNewListName}
            />

            <CustomButton
                color="#04c73890"
                title="Add List"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    width: 120,
                    height: 48,
                    display: isKeyboardOpen ? "none" : "block",
                }}
                text={newListName}
                onPressHandler={addList}
            />

        </KeyboardAvoidingView>
    )
}

export default Lists;