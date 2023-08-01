import RNFS from 'react-native-fs';

const getMediaFiles = async (setMediaData) => {
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

export default getMediaFiles;