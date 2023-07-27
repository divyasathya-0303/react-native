import React,{useState}from 'react';
import { View,Text,StyleSheet, Image , TouchableOpacity,StatusBar} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import ProgressBar from '../components/Progressbar';

import tw from 'twrnc';
export default function mobile(props)
{  
  const [num, setnum] = useState('');
  const [phonenumber, setphonenumber] = useState('');

    const next=()=>{
        props.navigation.navigate('OTP2');
      };
    return(
        <View style={styles.container}>
            <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View style={{top:35,right:23}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('organizationaldetail')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity>
      </View>
      <Text style={styles.text}>Mobile Verification</Text>
      {/* <TouchableOpacity onPress={()=>{props.navigation.navigate('organizationaldetail')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity> */}
      <Text style={{color:'#272727',fontWeight:'bold'}}>Enter your mobile number to verrify</Text>
     <ProgressBar progress="0.6" />  
     <>
              <Text style={styles.textTitle}>Phone Number</Text>
              <View style={styles.openDilogView}>
                {/* <TextInput       
                                   <ProgressBar progress="0.6"/>
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
                  withDarktheme
                  placeholder='phone'
                  placeholderTextColor="#8B8F93"
                />
              </View>
            </>
            {/* <View style={{marginBottom:500}}> */}
           <TouchableOpacity style={styles.saveButton} onPress={next} >
                 <Text>Continue</Text>
            </TouchableOpacity>
          {/* </View> */}
        </View>
            );
};
const styles=StyleSheet.create({
  container: {
    flex: 1,
   //justifyContent: 'center',
    //alignItems: 'center',
   padding: 40,
   backgroundColor:'white',
   //height:'100%'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#050507',
    fontFamily: 'Merriweather',
    top:5,
  },
textTitle: {
  //marginBottom: 0,
  marginTop: 2,
  fontSize: 15,
  alignContent: 'flex-start',
  color: 'black',
},saveButton: {
  width: '100%',
  height: 40,
  //backgroundColor: 'blue',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#AFAFAF',
  bottom:0,
  top:400
 
}


}
)

