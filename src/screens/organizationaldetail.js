import { View, Text,StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native';
import React, { useState,useEffect } from 'react';
import { Bar } from 'react-native-progress'; 
import ProgressBar from '../components/Progressbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

library.add(faChevronDown);



//import { TouchableOpacity } from 'react-native-gesture-handler';

export default function organizationaldetail(props) {
  const next=()=>{
    props.navigation.navigate('mobileverification');
  };
  return (
    <View style={styles.container}>
     <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View style={{top:35,right:23}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('gender')}}>
      <Image source={require('../../assets/images/backicon.png')} />
      </TouchableOpacity>
      </View>
    <Text style={styles.text}>organizational Details</Text>
    <ProgressBar progress="0.3"/>
    <Text style={{color:'#272727',fontweight:'bold'}}>Enter your organizational details to setup your account </Text>
    {/* <Text style={{fontFamily: 'Merriweather-Regular',color:'black' }} className={`text-[20px]`}>black</Text> 
     <View style={{ height:60, width: '100%', backgroundColor: '#fff',justifyContent: 'center', alignItems: 'center'}}> */}
    

        <TouchableOpacity style={styles.saveButton} onPress={next} >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
  );
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
        //alignItems: 'center',
       padding: 40,
       backgroundColor:'white',
       //height:'100%'
      },
      text: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'black',
        fontFamily: 'Merriweather',
        top:5,
      },
      saveButton: {
        width: '100%',
        height: 40,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#AFAFAF',
       // bottom:0
       top:450
       
      }
})