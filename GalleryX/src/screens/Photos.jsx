import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, Animated, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import getMediaFiles from "../funcs/getMediaFiles";
import photosStyles from "../../assets/styles/photosStyles";

function Photos() {
    const [mediaData, setMediaData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const scrollY = new Animated.Value(0);

    useEffect(() => {
        getMediaFiles(setMediaData);
    }, []);

    const renderMediaItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item)}>
            <Image
                source={{ uri: `file://${item}` }}
                style={{ width: 122, height: 122, margin: 5 }}
            />
        </TouchableOpacity>
    );

    const translateY = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, -65],
        extrapolate: 'clamp'
    });

    const translateYPhotos = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, -20],
        extrapolate: 'clamp'
    });

    const titleOpacity = scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });

    return (
        <View style={photosStyles.body}>
            <View style={photosStyles.headerContainer}>
                <Animated.View style={{ opacity: headerTitleOpacity }}>
                    <Text style={photosStyles.headerText}>Photos</Text>
                </Animated.View>

                <View style={photosStyles.headerIconsContainer}>
                    <Icon name="comments" size={25} color="#fff" style={{ marginRight: 20 }} />
                    <Icon name="info" size={25} color="#fff" />
                </View>
            </View>

            <Animated.View style={[photosStyles.titleContainer, { transform: [{ translateY }], opacity: titleOpacity }]}>
                <Text style={photosStyles.title}>Photos</Text>
            </Animated.View>

            <FlatList
                data={mediaData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMediaItem}
                numColumns={3}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                contentContainerStyle={{ marginTop: translateYPhotos + 65 }}
            />

            <Modal visible={selectedImage !== null} transparent={true}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => setSelectedImage(null)}>
                            <Image source={{ uri: `file://${selectedImage}` }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity style={photosStyles.closeButton} onPress={() => setSelectedImage(null)}>
                            <Text style={photosStyles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Photos;
