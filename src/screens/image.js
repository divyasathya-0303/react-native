import React from 'react';
import {Image,View} from 'react-native';
export default function image(){
    return(
        <View style={{flex:1,alignItems:'center',justifycontent:'center',backgroundColor:'white'}}>
            <View style={{padding:200}}>
            <Image source={require('../../assets/images/sandclock.png')}/>
            </View>
        </View>
    );
};