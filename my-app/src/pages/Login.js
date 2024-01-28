import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Login({ navigation }) {
  return (
    
    <ImageBackground source={require("./img/leaves (1).jpg")} style={{height:'100%'}}>
        <View style={styles.container}>
        <Text style={{color:'white',fontSize:64, fontWeight:'bold', marginVertical:20, textAlign:'center', marginRight:70}}>Login</Text>
        <View style={styles.bg}>
          <Text style={{fontSize:30, color:'green', fontWeight:'bold', marginRight:70}}>Welcome Back</Text>
          <Text style={{fontSize:13, color:'gray', fontWeight:'bold', marginRight:80, marginBottom:20}}>Login to your account</Text>
          <View style={styles.input}>
            <TextInput placeholder='Enter your Email' placeholderTextColor={"green"}></TextInput>
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Password' placeholderTextColor={"green"}></TextInput>
          </View>
          <View style={{alignItems:'flex-end', width:'78%', paddingRight:85,}}>
            <TouchableOpacity>
              <Text style={{color:'green', fontWeight:'bold', fontSize:16}}>Forget Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{backgroundColor:'green', borderRadius:100, alignItems:'center', width:310, paddingVertical:10 , marginVertical:200, marginRight:95}}>
        <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
        <View>

          <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Text style={{color:'gray', fontWeight:'bold', fontSize:16, marginVertical:-195, textAlign:'center',}}>Don't have an account?   </Text>

          <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
          <Text style={{color:'green', fontWeight:'bold', fontSize:16, marginVertical:-195, textAlign:'center', marginRight:95}}>Signup</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    width:460,
   
  },
 
  bg:{
    backgroundColor:'white',
    height:700,
    width:460,
    borderTopLeftRadius:130,
    paddingTop:100,
    alignItems:'center'
  },
  input:{
    backgroundColor:'rgb(220,220,220)',
    borderRadius:100,
    width:'70%',
    paddingHorizontal:20,
    paddingVertical:10,
    marginRight:90,
    height:50,
    marginVertical:10
  }
})