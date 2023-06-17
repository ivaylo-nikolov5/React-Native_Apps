import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {

  const [Data, setData] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"]
    }, 

    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2"]
    }, 

    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2"]
    }, 
  ])

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const idx = Data.length + 1;
    setData([...Data, 
      {
        title: `Title ${idx}`,
        data: [`Item ${idx}-1`, `Item ${idx}-2`]
      }
    ]);
    setRefreshing(false);
  }

//   const [items, setItems] = useState([
//     {name: "Item 1"},
//     {name: "Item 2"},
//     {name: "Item 3"},
//     {name: "Item 4"},
//     {name: "Item 5"},
//     {name: "Item 6"},
//     {name: "Item 7"},
//     {name: "Item 8"},
//     {name: "Item 9"},
//     {name: "Item 10"},
//   ]);

//   const [refreshing, setRefreshing] = useState(false);
//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...items, {name: "Item 69"}]);
//     setRefreshing(false);
//   };

//   const DATA = [
//     {
//       title: "Title 1",
//       data: ["Item 1-1", "Item 1-2", "Item 1-3", "Item 1-4", "Item 1-5"]
//     },

//     {
//       title: "Title 2",
//       data: ["Item 2-1", "Item 2-2", "Item 2-3", "Item 2-4", "Item 2-5"]
//     },

//     {
//       title: "Title 3",
//       data: ["Item 3-1", "Item 3-2", "Item 3-3", "Item 3-4", "Item 3-5"]
//     },

//     {
//       title: "Title 4",
//       data: ["Item 4-1", "Item 4-2", "Item 4-3", "Item 4-4", "Item 4-5"]
//     },

//     {
//       title: "Title 5",
//       data: ["Item 5-1", "Item 5-2", "Item 5-3", "Item 5-4", "Item 5-5"]
//     },
// ]
  
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Data}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.title}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#5accf2"]}
        />
      }
    />


    // <SectionList
    //   sections={DATA}
    //   renderItem={({item}) => (
    //       <Text style={styles.text}>{item}</Text>
    //   )}
    //   renderSectionHeader={({section}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    // />

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#00ff9a"]}
    //     />
    //   }

    // />
    // <ScrollView refreshControl={
    //   <RefreshControl
    //     refreshing={refreshing}
    //     onRefresh={onRefresh}
    //     colors={["#00ff9a"]}
    //   />
    // } style={styles.body}>
    //   {
    //     items.map((object) => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>


  );
}

const styles = StyleSheet.create({
   body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
   },

   title: {
    backgroundColor: "#5accf2",
    borderColor: "#000000",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
   },

   item: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#777777",
    paddingBottom: 5,
    paddingTop: 5,
    
   },
   
   text: {
    color: "#000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
   }, 

   itemText: {
    color: "#000",
    fontSize: 35,
    margin: 10,
   }
});

export default App;
