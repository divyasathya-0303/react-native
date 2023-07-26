
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/login';
import home from './src/screens/Home';
import OTPVerification from './src/screens/OTPVerification';
import gender from './src/screens/gender';
import organizationaldetail from './src/screens/organizationaldetail';
import mobileverification from './src/screens/mobileverification';

export default function App()
{
  const Stack = createStackNavigator();

return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home}  options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={login}  options={{ headerShown: false }}/> 
        <Stack.Screen name="OTPVerification" component={OTPVerification}  options={{ headerShown: false }}/> 
        <Stack.Screen name="gender" component={gender}  options={{ headerShown: false }}/> 
        <Stack.Screen name="organizationaldetail" component={organizationaldetail}  options={{ headerShown: false }}/> 
        <Stack.Screen name="mobileverification" component={mobileverification}  options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
  };



