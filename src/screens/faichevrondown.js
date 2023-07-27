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
          placeholderTextColor="black"
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
     // position: 'absolute',
     justifyContent:'center',
     alignItems:'center',
      width: '100%',
    },
    textInput: {
      width: '80%',
      height: 40,
      top:70,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    iconContainer: {
      position: 'absolute',
      top: 80,
      right: 40,
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
      paddingHorizontal: 100,
      paddingVertical: 50,
      backgroundColor:'red'
    },
    optionText: {
      fontSize: 10,
    },
  });
  
  export default GenderSelection;
  