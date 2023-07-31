import { PermissionsAndroid } from "react-native";
import fetchPhotosAndVideos from "./fetchPhotosAndVideos";

const requestStoragePermission = async (setMediaData) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to display photos and videos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
        // Proceed to fetch photos and videos
        fetchPhotosAndVideos(setMediaData);
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
};

export default requestStoragePermission;
  