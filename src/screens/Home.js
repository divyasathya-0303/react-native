import React from 'react';
import { View,Text,StyleSheet, Image , TouchableOpacity} from 'react-native';
export default function Home(props)
{
    return(
          <View>
           
            <Image source={require('../../assets/images/backimage.jpg')} style={{height:'60%',width:'100%'}}/>
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('login')}} style={{position:'absolute'}}>
            <Image source={require('../../assets/images/logo.png')} />
            </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                {/* <Text style={{fontFamily: 'Merriweather-Black'}} className='text-[#050507] bg-[#000] text-xs'>Magppie Planner</Text> */}
                <Text style={styles.text}>Magppie Planner</Text>
                <Text style={styles.Text}>A platform for employee task management</Text>
            </View>
           
       </View>
    );
};
//test
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#434343', 
        borderRadius:5 , 
        paddingVertical:30, 
        paddingHorizontal:5, 
        alignitem:'center'
    },
    container: {
    //   flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    textContainer: {
        //   flex: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
          top:'22%'
        },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'black',
      fontFamily: 'Merriweather',
    },
    Text:
    {
        fontsize:15,
        color:'grey'
    },
    image: {
            width: '100%', 
            height: 50, 
            }

  });