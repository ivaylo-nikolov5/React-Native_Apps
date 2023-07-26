import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import globalStyles from "../styles/globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../funcs/components/CustomAlert";
import TextInp from "../funcs/components/TextInp";
import CustomButton from "../funcs/components/CustomButton";
import Task from "../funcs/components/Task";

function ListTasks({ route }) {
  const { listId, name } = route.params;
  const [listTasks, setListTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpen(false));

    loadListTasksFromStorage(listId); // Load tasks from AsyncStorage on initial mount
  }, [listId]);

  useEffect(() => {
    saveTasksToStorage(listId, listTasks); // Save tasks to AsyncStorage whenever the listTasks state changes
  }, [listId, listTasks]);

  const loadListTasksFromStorage = async (id) => {
    try {
      const storedListTasks = await AsyncStorage.getItem(`listTasks_${id}`);
      if (storedListTasks !== null) {
        setListTasks(JSON.parse(storedListTasks));
      }
    } catch (error) {
      console.error("Error loading list tasks from AsyncStorage:", error);
    }
  };

  const saveTasksToStorage = async (id, tasks) => {
    try {
      await AsyncStorage.setItem(`listTasks_${id}`, JSON.stringify(tasks));
    } catch (error) {
      console.log("Error saving tasks to AsyncStorage:", error);
    }
  };

  const addTask = () => {
    if (newTaskName.length <= 0 || newTaskName.length > 100) {
      setAlertVisible(true);
      setNewTaskName("");
      return;
    }

    const newTask = { id: listTasks.length, text: newTaskName };
    setListTasks((prevTasks) => [...prevTasks, newTask]); // Use functional update to get the latest state
    setNewTaskName("");
  };

  const removeTask = (id) => {
    const newTasks = listTasks.filter((task) => task.id !== id);
    setListTasks(newTasks);
  };

  const handleOKPress = () => {
    setAlertVisible(false);
  };

  const tasks = listTasks.map((task) => {
    return <Task key={task.id} id={task.id} text={task.text} removeTask={removeTask} />;
  });

  return (
    <View style={globalStyles.body}>
      <Text style={globalStyles.tasksTitle}>Tasks in {name}</Text>

      <CustomAlert
        visible={isAlertVisible}
        title="Warning!"
        message="The task length should be between 1 and 100 characters!"
        onOKPress={handleOKPress}
      />

      <ScrollView
        style={{
          height: 300,
          borderWidth: 2,
          marginTop: 90,
          paddingTop: -10,
          borderRadius: 20,
          paddingLeft: 15,
          paddingRight: 15,
          borderColor: "#5c5c5c",
          display: tasks.length > 0 ? "flex" : "none",
        }}
      >
        <View style={globalStyles.currentTasksContainer}>{tasks}</View>
      </ScrollView>

      <TextInp
        styles={globalStyles}
        placeholder="Enter a new list name..."
        phColor="#000"
        text={newTaskName}
        isKeyboardOpen={isKeyboardOpen}
        setText={setNewTaskName}
      />

      <CustomButton
        pressedColor="#04c73890"
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
        text={newTaskName}
        onPressHandler={addTask}
      />
    </View>
  );
}

export default ListTasks;
