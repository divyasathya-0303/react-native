
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/login';
import home from './src/screens/Home';
import OTPVerification from './src/screens/OTPVerification';
import personaldetails from './src/screens/personaldetails';
import organizationaldetail from './src/screens/organizationaldetail';
import mobileverification from './src/screens/mobileverification';
import mobileOTP from './src/screens/mobileOTP';
import emailverification from './src/screens/emailverification';
import emailOTP from './src/screens/emailOTP';
import faichevrondown from './src/screens/faichevrondown';
import image from './src/screens/image';
import modal from './src/screens/modal';

export default function App()
{
  const Stack = createStackNavigator();

return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home}  options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={login}  options={{ headerShown: false }}/> 
        <Stack.Screen name="OTPVerification" component={OTPVerification}  options={{ headerShown: false }}/> 
        <Stack.Screen name="personaldetails" component={personaldetails}  options={{ headerShown: false }}/> 
        <Stack.Screen name="organizationaldetail" component={organizationaldetail}  options={{ headerShown: false }}/> 
        <Stack.Screen name="mobileverification" component={mobileverification}  options={{ headerShown: false }}/> 
        <Stack.Screen name="mobileOTP" component={mobileOTP}  options={{ headerShown: false }}/> 
        <Stack.Screen name="emailverification" component={emailverification}  options={{ headerShown: false }}/> 
        <Stack.Screen name="OTP3" component={OTP3}  options={{ headerShown: false }}/> 
        <Stack.Screen name="image" component={image}  options={{ headerShown: false }}/> 
        <Stack.Screen name="faichevrondown" component={faichevrondown}  options={{ headerShown: false }}/> 
        <Stack.Screen name="modal" component={modal}  options={{ headerShown: false }}/> 


      </Stack.Navigator>
    </NavigationContainer>
  );
  };



