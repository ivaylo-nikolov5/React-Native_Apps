import { MediaLibrary } from 'react-native-media-library';

const fetchPhotosAndVideos = async (setMediaData) => {
    try {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: ['photo', 'video'],
        sortBy: ['creationTime'],
        ascending: false,
      });
  
      // Extract the asset URI and media type from the response
      const data = media.assets.map(asset => ({
        uri: asset.uri,
        type: asset.mediaType,
      }));
  
      // Set the data to the state
      setMediaData(data);
    } catch (err) {
      console.warn(err);
    }
};

export default fetchPhotosAndVideos;
  