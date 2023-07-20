import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";
import CustomButton from "../funcs/components/CustomButton";
import TextInp from "../funcs/components/TextInp";
import Task from "../funcs/components/Task";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Tasks() {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [text, setText] = useState('');

  // Load tasks from AsyncStorage on component mount
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  // Function to load tasks from AsyncStorage
  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setCurrentTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks from AsyncStorage:', error);
    }
  };

  // Function to save tasks to AsyncStorage
  const saveTasksToStorage = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  const addTask = () => {
    const newTask = { id: currentTasks.length, text: text };
    setCurrentTasks([newTask, ...currentTasks]);
    setText("");
    saveTasksToStorage([newTask, ...currentTasks]); // Save updated tasks to AsyncStorage
  };

  const removeTask = (id) => {
    const newTasks = currentTasks.filter(task => task.id !== id);
    setCurrentTasks(newTasks);
    saveTasksToStorage(newTasks); // Save updated tasks to AsyncStorage
  };
    
  const tasks = currentTasks.map((task) => (
    <Task key={task.id} id={task.id} text={task.text} removeTask={removeTask} />
  ));

  return (
    <View style={globalStyles.body}>
      <Text style={globalStyles.tasksTitle}>Your Current Tasks</Text>

      <ScrollView style={{
        height: 300,
        borderWidth: 2,
        marginTop: 10,
        paddingTop: -10,
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: "#5c5c5c",
        display: tasks.length > 0 ? "flex" : "none"
      }}>
        <View style={globalStyles.currentTasksContainer}>
          {tasks}
        </View>
      </ScrollView>

      <TextInp
        styles={globalStyles}
        placeholder="Enter a new task..."
        phColor="#000"
        text={text}
        setText={setText}
      />

      <CustomButton
        color="#04c73890"
        title="Add Task"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          width: 120,
          height: 48,
        }}
        text={text}
        onPressHandler={addTask}
      />
    </View>
  );
}

export default Tasks;
