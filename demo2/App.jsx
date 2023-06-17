import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, item: "Item 1"},
    {key: 2, item: "Item 2"},
    {key: 3, item: "Item 3"},
    {key: 4, item: "Item 4"},
    {key: 5, item: "Item 5"},
    {key: 6, item: "Item 6"},
    {key: 7, item: "Item 7"},
    {key: 8, item: "Item 8"},
    {key: 9, item: "Item 9"},
    {key: 10, item: "Item 10"},
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 69, item: "Item 69"}]);
    setRefreshing(false);
  };
  
  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={["#00ff9a"]}
      />
    } style={styles.body}>
      {
        items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
   },

   item: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
   },
   
   text: {
    color: "#000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
   }, 
});

export default App;
