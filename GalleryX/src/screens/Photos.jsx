import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import photosStyles from "../../assets/styles/photosStyles";
import RNFS from 'react-native-fs';

function Photos() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    getMediaFiles();
  }, []);

  const getMediaFiles = async () => {
    try {
      const mediaDirectory = RNFS.PicturesDirectoryPath; // Change this to the appropriate directory

      const files = await RNFS.readDir(mediaDirectory);

      const mediaFiles = files.filter((file) => {
        return file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.mp4');
      });

      const mediaPaths = mediaFiles.map((file) => file.path);
      setMediaData(mediaPaths);
    } catch (error) {
      console.error('Error getting media files:', error);
    }
  };

  return (
    <View style={photosStyles.body}>
      <View style={photosStyles.headerContainer}>
        <View>
          <Text style={photosStyles.headerText}>Photos</Text>
        </View>
       
        <View style={photosStyles.headerIconsContainer}>
          <Icon name="comments" size={25} color="#fff" style={{marginRight: 20}}/>
          <Icon name="info" size={25} color="#fff"/>
        </View>
      </View>
      <View style={photosStyles.titleContainer}>
        <Text style={photosStyles.title}>Photos</Text>
      </View>

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
  );
}

export default Photos;
