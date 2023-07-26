import React from 'react';
import { View,Text,StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Bar } from 'react-native-progress'; 
export default function ProgressBar(props)
{
// const [progress, setProgress] = useState(0.1);
  return(
    <View style={{ height:60, width: '100%', backgroundColor: '#fff',justifyContent: 'center', alignItems: 'center'}}>
        <Bar progress={props.progress} width={300} borderWidth={0} unfilledColor="#ccc" style={{position: 'absolute', top: 0}}/>
      </View>
  );
};