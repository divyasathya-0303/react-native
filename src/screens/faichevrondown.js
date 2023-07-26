import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

library.add(faChevronDown);
const GenderSelection = () => {
    const [gender, setGender] = useState('');
  
    const genderOptions = ['Male', 'Female', 'Others'];
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  
    const handleGenderSelect = (option) => {
      setGender(option);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Select Gender"
          value={gender}
          editable={false}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleGenderSelect('')}>
          <FontAwesomeIcon icon="chevron-down" size={20} color="#333" />
        </TouchableOpacity>
        {/* Gender Options */}
        {gender === '' && (
          <View style={styles.optionsContainer}>
            {genderOptions.map((option) => (
              <TouchableOpacity key={option} style={styles.option} onPress={() => handleGenderSelect(option)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
    },
    textInput: {
      width: '100%',
      height: 40,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    iconContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    optionsContainer: {
      position: 'absolute',
      top: 50,
      right: 10,
      backgroundColor: '#fff',
      elevation: 3,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    option: {
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    optionText: {
      fontSize: 0,
    },
  });
  
  export default GenderSelection;
  