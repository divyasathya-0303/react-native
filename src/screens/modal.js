import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Switch, Modal } from 'react-native';

const EmailPhoneForm = () => {
  const [isEmailInput, setIsEmailInput] = useState(true); // To track if email input is active
  const [inputValue, setInputValue] = useState(''); // For storing the input value
  const [isModalVisible, setIsModalVisible] = useState(false); // To track if the modal is visible

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSwitchToggle = () => {
    // Toggle between email and phone number input
    setIsEmailInput((prevValue) => !prevValue);
    setInputValue(''); // Clear the input value when switching
  };

  // Validate email format
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

  // Validate phone number format (for example, assuming the phone number should be 10 digits)
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

      {/* Modal */}
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
  // ... your existing styles ...
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
