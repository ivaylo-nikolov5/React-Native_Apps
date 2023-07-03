import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
    return(
      <View
        style={styles.view}
      >

      <Text
        style={styles.text}
      >
        React Native Tutorial
      </Text>

      </View>
    );
}

export default Header;