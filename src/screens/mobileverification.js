import React from 'react';
import { View,Text,StyleSheet, Image , TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import tw from 'twrnc';
export default function mobile(props)
{
    const next=()=>{
        props.navigation.navigate('OTPVerification');
      };
    return(
        <View>
            <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <Text>Mobile Verification</Text>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('organizationaldetail')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity>
     <Text>Enter your mobile number to verrify</Text>
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
            <View style={{marginBottom:60}}>
           <TouchableOpacity style={styles.saveButton} onPress={next} >
                 <Text>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
            );
};