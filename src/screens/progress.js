// import React, { useState,useEffect} from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(progress, {
//       toValue: 75,
//       duration: 2000,
//     }).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.bar, { width: progress }]} />
//       <Text>{progress}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 20,
//     backgroundColor: '#ccc',
//     borderRadius: 10,
//     margin: 10,
//   },
//   bar: {
//     height: 20,
//     backgroundColor: '#333',
//     borderRadius: 10,
//   },
// });

// export default ProgressBar;
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Animated, Text } from 'react-native';

// const ProgressBar = ({ progress }) => {
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: progress,
//       duration: 500, // Adjust the duration as per your preference
//       useNativeDriver: false, // Set to true if possible for better performance
//     }).start();
//   }, [progress]);

//   const width = animation.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%'],
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.bar, { width }]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 20,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   bar: {
//     height: '50%',
//     width:'5%',
//     backgroundColor: '#333',
//     borderRadius: 10,
//     bottom:100,
//     top:10
//   }
// });

// export default ProgressBar;

// import { View,Text,SafeAreaView } from "react-native";
// import React from "react";
// import { Bar } from 'react-native-progress'; 
// export default function App(){
//   return(
//     //<SafeAreaView style={{flex:1}}>
//       <View style={{height:500,width:'100%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
//         <Bar progress={0.3} width={300}/>
//       </View>
//    // </SafeAreaView>
//   )
// }

import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Bar } from 'react-native-progress';

export default function App() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 1) {
      // Increase the progress by 0.1 in each step
      setProgress(prevProgress => Math.min(prevProgress + 0.1, 1));
    }
  };

  useEffect(() => {
    // You can also use this effect to reset the progress when needed.
    // For example, if the progress should reset to 0 after some action is completed.
    if (progress === 1) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 500, width: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Bar progress={progress} width={200} />
      </View>
      <TouchableOpacity onPress={increaseProgress} style={{ padding: 10, backgroundColor: '#007BFF', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Increase Progress</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
