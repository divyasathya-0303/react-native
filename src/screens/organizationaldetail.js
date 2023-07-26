import { View, Text,StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native';
import React, { useState,useEffect } from 'react';
import { Bar } from 'react-native-progress'; 
import ProgressBar from '../components/Progressbar';
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default function organizationaldetail(props) {
  // const [progress, setProgress] = useState(0.1);

  // const increaseProgress = () => {
  //   if (progress < 1) {
  //     // Increase the progress by 0.1 in each step
  //     setProgress(prevProgress => Math.min(prevProgress + 0.1, 1));
  //   };
  // };
  const next=()=>{
    props.navigation.navigate('mobileverification');
  };
  // useEffect(() => {
  //   // You can also use this effect to reset the progress when needed.
  //   // For example, if the progress should reset to 0 after some action is completed.
  //   if (progress === 1) {
  //     setProgress(0);
  //   }
  // }, [progress]);

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
    <Text style={{color:'#272727',fontsize:40}}>Enter your organizational details to setup your account </Text>
    {/* <Text style={{fontFamily: 'Merriweather-Regular',color:'black' }} className={`text-[20px]`}>black</Text> */}
    {/* <View style={{ height:60, width: '100%', backgroundColor: '#fff',justifyContent: 'center', alignItems: 'center'}}>
        <Bar progress={progress} width={300} borderWidth={0} unfilledColor="#ccc" style={{position: 'absolute', top: 0}}/>
      </View> */}
      <ProgressBar progress="0.3"/>
      {/* <View style={{marginBottom:600}}> */}
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
        bottom:0
       
      }
})