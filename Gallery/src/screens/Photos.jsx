import { 
    Text, 
    View,
    FlatList, 
    PermissionsAndroid 
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState, useEffect } from "react";

import photosStyles from "../../assets/styles/photosStyles";
import requestStoragePermission from "../funcs/requestStoragePermission";


function Photos() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        requestStoragePermission(setMediaData)
        console.log("Success")
    }, []);


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
        </View>
    )
} 

export default Photos;