import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


import getMediaFiles from "../funcs/getMediaFiles";
import photosStyles from "../../assets/styles/photosStyles";

function Photos() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
      getMediaFiles(setMediaData);
    }, []);

    

  return (
      <View style={photosStyles.body}>
          <View style={photosStyles.headerContainer}>
              <View>
                  {/* <Text style={photosStyles.headerText}>Photos</Text> */}
              </View>
            
              <View style={photosStyles.headerIconsContainer}>
                  <Icon name="comments" size={25} color="#fff" style={{marginRight: 20}}/>
                  <Icon name="info" size={25} color="#fff"/>
              </View>
          </View>
          <View style={photosStyles.titleContainer}>
              <Text style={photosStyles.title}>Photos</Text>
          </View>

          <View>
              {/* Display media files */}
              <FlatList
                  data={mediaData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <Image
                      source={{ uri: `file://${item}` }} // Use 'file://' prefix to load local file paths
                      style={{ width: 100, height: 100, margin: 5 }}
                    />
                  )}
                  numColumns={3}
              />
          </View>

          


      </View>
    );
}

export default Photos;
