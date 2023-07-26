import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import PhoneInput from 'react-native-phone-number-input';
import tw from 'twrnc';
export default function Login(props) {
  const [email, setemail] = useState('');
  const [SelectedSwitch, setSelectedSwitch] = useState(2);
  const [num, setnum] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Function to validate email using regular expression

  const onchangephone = number => {
    setphonenumber(number);
  };
  const onchangeemail = email => {
    setemail(email);
  };

  const onprss = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValidEmail(false);
      props.navigation.navigate('OTPVerification');
    } else {
      setIsValidEmail(true);
    }
  };
  const onprsss=()=>{
    props.navigation.navigate('gender');
  };
  const isEmailValid = email.trim() !== ''; // Check if email is not empty
  const isphone = phonenumber.trim() !== '';
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />
      <Image
        source={require('../../assets/images/backimage.jpg')}
        style={{height: '30%', width: '100%'}}
      />
      <View
        style={{
          padding: '5%',
          position: 'absolute',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.text}>Log in to you Account</Text>
        <Text numberOfLines={2} style={styles.secondtext}>
          Login for daily goal planning and task management
        </Text>
      </View>
      <View style={{padding: '5%'}}>
        <View style={{alignItems: 'center'}}>
          <CustomSwitch
            selectionMode={2}
            roundCorner={true}
            option1={'Email'}
            option2={'Phone Number'}
            onSelectSwitch={setSelectedSwitch}
            selectionColor={'#FFFFFF'}
          />
        </View>
        <View style={{paddingTop: '5%'}}>
          {SelectedSwitch == 2 ? (
            <>
              <Text style={styles.textTitle}>Phone Number</Text>
              <View style={styles.openDilogView}>
                {/* <TextInput       
                                        placeholder="Enter Phone Number"
                                        placeholderTextColor="#8B8F93"
                                        keyboardType="numeric"
                                        value={phonenumber}
                                        onChangeText={onchangephone}
                                        secureTextEntry={false}
                                    /> */}
                <PhoneInput
                  containerStyle={tw`text-black bg-[#F0F0F0] w-full flex-row items-center  jusitify-center`}
                  textInputStyle={tw`text-black bg-[#F0F0F0]`}
                                    
                  textContainerStyle={{backgroundColor: '#F0F0F0'}}
                  defaultValue={num}
                  defaultCode="IN"
                  onChangeText={text => {
                    setnum(text);
                  }}
                  layout="second"
                  onChangeFormattedText={text => {
                    setphonenumber(text);
                  }}
                  withDarkTheme
                  placeholder='phone'
                  placeholderTextColor="#8B8F93"
                />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.textTitle}>Email Id</Text>
              <View style={styles.openDilogView}>
                <TextInput
                  style={styles.TextInputStyle}
                  placeholder="Enter your Email Id"
                  placeholderTextColor="#8B8F93"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={onchangeemail}
                  secureTextEntry={false}
                />
              </View>
              {isValidEmail && (
                <Text style={styles.errorMessage}>Invalid Email Id</Text>
              )}
            </>
          )}
        </View>
      </View>
      <View style={styles.viewBottom}>
        <TouchableOpacity
          onPress={onprss}
          style={[styles.button, !isEmailValid && styles.disabledButton]}
          disabled={!isEmailValid}>
          <View
            style={[
              styles.btnContinue,
              {
                backgroundColor: email ? '#434343' : '#AFAFAF',
              },
            ]}>
            <Text style={styles.textContinue}>Get OTP</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            padding: '2%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Don't Have an Account?
          </Text>
          <TouchableOpacity onPress={onprsss}>
          <Text
            style={{
              color: '#1A63BD',
            }}>
            Sign Up
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    // textAlign: 'left',
    //  marginBottom:100,
    marginTop: 100,
    //textAlign: 'center',
    //alignSelf: 'center',
  },
  secondtext: {
    margin: 4,
    color: '#ffffff',
    fontWeight: '400',
    // textAlign:'left'
  },
  textTitle: {
    marginBottom: 10,
    marginTop: 1,
    fontSize: 15,
    alignContent: 'flex-start',
    color: 'black',
  },

  openDilogView: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: '1%',
    // paddingLeft: '5%',
     backgroundColor: '#F0F0F0',
    borderRadius:10
    },
  TextInputStyle: {
    //height: 50,
    color: 'black',
    width: 327,
    height: 48,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
  btnContinue: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {
    color: '#ffffff',
    alignitem: 'center',
  },
  customswitch: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  errorMessage: {
    color: 'red',
    marginTop: 2,
  },
  disabledButton: {
    //   backgroundColor: '#AFAFAF',
  },
});