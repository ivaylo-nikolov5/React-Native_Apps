import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";
import CustomButton from "../funcs/components/CustomButton";
import TextInp from "../funcs/components/TextInp";
import Task from "../funcs/components/Task";

function Tasks() {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    setCurrentTasks([{ id: currentTasks.length, text: text }, ...currentTasks]);
    setText("");
  };

  const removeTask = (id) => {
    let newTasks = [];
  
    for (let i = 0; i < currentTasks.length; i++) {
      if (currentTasks[i].id !== id) {
        newTasks.push(currentTasks[i]);
      }
    }
  
    setCurrentTasks(newTasks);
  };
    
  const tasks = currentTasks.map((task) => (
    <Task key={task.id} id={task.id} text={task.text} removeTask={removeTask} />
  ));

  return (
    <View style={globalStyles.body}>
      <Text style={globalStyles.tasksTitle}>Your Current Tasks</Text>

      {/* Wrap the tasks view with ScrollView */}
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
