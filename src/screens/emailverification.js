import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet ,Image} from 'react-native';

const EmailForm = (props) => {
  const [email, setEmail] = useState('');
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleSubmit = () => {
   props.navigation.navigate('OTP3');
  };
  return (
    <View style={styles.container}>
       <Text>Email Id Verification</Text>
       <View style={{top:55,right:150}}> 
       <TouchableOpacity onPress={()=>{props.navigation.navigate('mobileverification')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity> 
      </View> 
      <Text style={{color:"black"}}>Email Id</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Enter your Email Id"
        placeholderTextColor={"#8B8F93"}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <TouchableOpacity style={[styles.submitButton, { backgroundColor: isEmailValid ? '#434343' : '#AFAFAF' }]} onPress={handleSubmit} disabled={!isEmailValid}>
        <Text style={styles.submitButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize:20,
    fontWeight: 'bold',
    color:'#050507',
    fontFamily: 'Merriweather',
    top:80,
    right:40
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
    backgroundColor: '#F0F0F0',
    borderRadius: 10
  },
  submitButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AFAFAF',
    borderRadius: 10
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default EmailForm;