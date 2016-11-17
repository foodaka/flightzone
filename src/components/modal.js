import React from 'react';

import { View, Text, Modal } from 'react-native';

const ModalTest = ({ isLoading }) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isLoading}
        onRequestClose={() => {alert("Modal has been closed.")}}
      >
      <Text>Hi im the modal</Text>
      </Modal>
    </View>
  );
};


const styles = {
  modalContainer: {
    backgroundColor: 'green'
  }
};


export default Modal;
