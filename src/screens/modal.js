import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Switch, Modal } from 'react-native';

const EmailPhoneForm = () => {
  const [isEmailInput, setIsEmailInput] = useState(true); 
  const [inputValue, setInputValue] = useState(''); 
  const [isModalVisible, setIsModalVisible] = useState(false); 

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleSwitchToggle = () => {
    setIsEmailInput((prevValue) => !prevValue);
    setInputValue(''); 
  };
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
  const isPhoneValid = /^\d{10}$/.test(inputValue);
  const isInputValid = isEmailInput ? isEmailValid : isPhoneValid;
  const handleSubmit = () => {
    if (isInputValid) {
      setIsModalVisible(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{backgroundColor:'blue'}}>
      <View style={styles.switchContainer}>
        <Text>Email</Text>
        <Switch value={isEmailInput} onValueChange={handleSwitchToggle} />
        <Text>Phone</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder={isEmailInput ? 'Enter your email' : 'Enter your phone number'}
        keyboardType={isEmailInput ? 'email-address' : 'phone-pad'}
        autoCapitalize={isEmailInput ? 'none' : 'none'}
        autoCompleteType={isEmailInput ? 'email' : 'tel'}
      />

      <TouchableOpacity style={[styles.submitButton, { backgroundColor: isInputValid ? '#434343' : '#AFAFAF' }]} onPress={handleSubmit} disabled={!isInputValid}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modal Content</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#434343',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default EmailPhoneForm;
