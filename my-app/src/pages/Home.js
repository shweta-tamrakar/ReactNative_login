import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function Home({navigation}) {
  return (
      <ImageBackground source={require("./img/green-leaves.jpg")} style={{height:'100%'}}>
        <View style={[styles.container, styles.shadowProp]}>
        <Text style={{color:'white', fontSize: 54 , textAlign:'center'}}>Let's strat</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{backgroundColor:'green', borderRadius:100, alignItems:'center', width:250, paddingVertical:5 , marginVertical:10}}>
        <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{backgroundColor:'white', borderRadius:100, alignItems:'center', width:250, paddingVertical:5}}>
        <Text style={{color:'darkgreen', fontSize:25, fontWeight:'bold'}}>Signup</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
container:{
    // alignItems:'center',
    // marginHorizontal:40,
    // marginVertical:300,
    // elevation: 5,
    // backgroundColor:'red'

    
    alignItems:'center',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 260,
    elevation:5,
  
},
shadowProp: {  
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },  
})