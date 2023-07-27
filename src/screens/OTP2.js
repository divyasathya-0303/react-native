import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image} from 'react-native';
import ProgressBar from '../components/Progressbar';

const OtpPage = (props) => {
  const [otp, setOtp] = useState('');
  const otpInputRef = useRef([]);
  const handleOtpChange = (text, index) => {
    setOtp((prevOtp) => {
      const otpArray = prevOtp.split('');
      otpArray[index] = text;
      return otpArray.join('');
    });
    if (text !== '' && index < otpInputRef.current.length - 1) {
      otpInputRef.current[index + 1].focus();
    }
  };
  const onprs=()=>{
   props.navigation.navigate('everify');

};
  const handleSubmitOtp = () => {
    console.log('OTP submitted:', otp);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Mobile Verification</Text>
       <View style={{top:55,right:150}}> 
       <TouchableOpacity onPress={()=>{props.navigation.navigate('mobileverification')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity> 
       </View> 
      <View style={styles.otpContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={otp[index]}
            onChangeText={(text) => handleOtpChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpInputRef.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={onprs} style={styles.button} >
      <View style={[
                        styles.btnContinue,
                        {
                            backgroundColor: otp? '#434343' : '#AFAFAF'
                        }
                    ]}>
       
        <Text style={styles.buttonText}>Veify OTP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#050507',
    fontFamily: 'Merriweather',
    top:80,
    right:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  otpInput: {
    //flex:1,
    marginTop:300,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    height:'48px',
    color:'#272727'
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  btnContinue: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:'700'
  },
});

export default OtpPage;
