import React, { useState,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,StatusBar,Image,KeyboardAvoidingView} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Bar } from 'react-native-progress'; 


export default function name(props){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [progress, setProgress] = useState(0.1);

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleGenderSelection = (selectedGender) => {
      setGender(selectedGender);
      setIsDropdownVisible(false);
    };
    const increaseProgress = () => {
      if (progress < 1) {
        // Increase the progress by 0.1 in each step
        setProgress(prevProgress => Math.min(prevProgress + 0.1, 1));
      };
    };
    const next=()=>{
      props.navigation.navigate('organizationaldetail');
    };
    const isname=name.trim() !== '';
    const isgender=gender.trim() !== '';
    useEffect(() => {
      // You can also use this effect to reset the progress when needed.
      // For example, if the progress should reset to 0 after some action is completed.
      if (progress === 1) {
        setProgress(0);
      }
    }, [progress]);
  
    // const handleSaveData = () => {
    //   console.log('Name:', name);
    //   console.log('Gender:', gender);
    //     };
  
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View style={{top:-60,right:20}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('login')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity>
      </View>
        {/* <Text style={{color:'#050507',fontWeight:'bold',fontsize:'20',top:-50}}>Personal Details</Text> */}
        <Text style={styles.text}>personal Details</Text>
      <View style={{ height:60, width: '100%', backgroundColor: '#fff' ,justifyContent: 'center', alignItems: 'center' ,position: 'relative'}}>
        <Bar progress={progress} width={300} borderWidth={0} unfilledColor="#ccc" style={{position: 'absolute', top: 0}}/>
      </View>
        <Text style={{color:'#272727',fontsize:40,top:-100}}>Enter your personal details to setup your account</Text>
        <Text style={styles.textTitle}>Your Name</Text>
        {/* <View style={{backgroundColor:'#F0F0F0'}}> */}
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Enter your name"
          placeholderTextColor="#8B8F93"
        />
        {/* </View> */}
        <Text style={styles.textTitle}>Select Gender</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsDropdownVisible(!isDropdownVisible)}
        >
         {/* <TouchableOpacity style={styles.iconContainer} onPress={() => handleGenderSelection('')}>
          <FontAwesomeIcon icon="chevron-down" size={20} color="#333" />
        </TouchableOpacity> */}
          <Text style={{color:'#8B8F93'}}>{gender === '' ? 'Select your Gender' : gender}</Text>
        </TouchableOpacity>
        {isDropdownVisible && (
    
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => handleGenderSelection('Male')}>
              <Text style={{color:'black'}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelection('Female')}>
              <Text style={{color:'black'}}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelection('Other')}>
              <Text style={{color:'black'}}>Other</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{marginBottom:60}}>
        <TouchableOpacity 
        //style={styles.saveButton} 
        onPress={next} 
        disabled={!isname || !isgender}>
        <View
          style={[
            styles.btnContinue,
            {
              backgroundColor: isname && isgender ? '#434343' : '#AFAFAF',
            },
          ]}
        >
          <Text style={styles.textContinue}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      padding: 20,
      backgroundColor:'white'
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color:'black',
      fontFamily: 'Merriweather',
      top:-90,
    },
    textTitle: {
        marginBottom: 10,
        marginTop: 1,
        fontSize: 15,
        alignContent: 'flex-start',
        color: 'black'
    },
    input: {
      width: '100%',
      height: 40,
     // borderColor: 'gray',
     // borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      color:'black',
      backgroundColor:'#F0F0F0',
      borderRadius:10
    },
    dropdownButton: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
     // borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor:'#F0F0F0',
      borderRadius:10
    },
    dropdownContainer: {
      width: '100%',
     // borderColor: 'gray',
     // borderWidth: 1,
     // justifyContent: 'center',
      alignItems: 'center',
     // text:'black',
     // backgroundColor:'blue'
    },
    btnContinue: {
      width: 320,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      bottom:-180
    },
    textContinue: {
      color: '#ffffff',
      alignitem: 'center',
    },
    // saveButton: {
    //   width: '100%',
    //   height: 40,
    //   //backgroundColor: 'blue',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor:'#AFAFAF',
    //   bottom:-200
    //   //marginBottom:
    // },
  });
  

  