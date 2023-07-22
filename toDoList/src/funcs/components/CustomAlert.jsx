import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = (props) => {
  return (
    <Modal visible={props.visible} transparent>
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.message}>{props.message}</Text>
          <TouchableOpacity style={styles.okButton} onPress={props.onOKPress}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#04c73890',
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomAlert;
