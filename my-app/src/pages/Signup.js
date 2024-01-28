import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signup() {
  return (
    <ImageBackground source={require("./img/leaves (1).jpg")} style={{height:'100%'}}>
    <View style={styles.container}>
    <Text style={{color:'white',fontSize:64, fontWeight:'bold', marginTop:20, textAlign:'center', marginRight:70}}>Register</Text>
    <Text style={{color:'white',fontSize:16, fontWeight:'bold', textAlign:'center', marginRight:70, marginBottom:20}}>create a new account</Text>

    <View style={styles.bg}>
      <View style={styles.input}>
        <TextInput placeholder='First Name' placeholderTextColor={"green"}></TextInput>
      </View>

      <View style={styles.input}>
        <TextInput placeholder='Last Name' placeholderTextColor={"green"}></TextInput>
      </View>

      <View style={styles.input}>
        <TextInput placeholder='Contact Number' placeholderTextColor={"green"}></TextInput>
      </View>

      <View style={styles.input}>
        <TextInput placeholder='Password' placeholderTextColor={"green"}></TextInput>
      </View>

      <View style={styles.input}>
        <TextInput placeholder='Confirm Password' placeholderTextColor={"green"}></TextInput>
      </View>

      <View style={{ justifyContent:'center'}}>
        <TouchableOpacity style={{judisplay:"flex", flexDirection:'row',paddingRight:70, width:"80%", justifyContent:'center'}}>
          <Text style={{color:'grey', fontSize:16}}>By signing in, you agree to our </Text>
          <Text style={{color:'green', fontWeight:'bold', fontSize:16}}>Terms & condition</Text>
        </TouchableOpacity>
      </View>

      <View style={{ }}>
        <TouchableOpacity style={{display:"flex", flexDirection:'row',paddingRight:95, width:"80%"}}>
          <Text style={{color:'grey', fontSize:16}}>and {""} </Text>
          <Text style={{color:'green', fontWeight:'bold', fontSize:16}}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{backgroundColor:'green', borderRadius:100, alignItems:'center', width:310, paddingVertical:10 , marginVertical:40, marginRight:95}}>
    <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>Signup</Text>
    </TouchableOpacity>
    <View>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <Text style={{color:'gray', fontWeight:'bold', fontSize:16, marginVertical:-30, textAlign:'center',}}>Already have an account?   </Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={{color:'green', fontWeight:'bold', fontSize:16, marginVertical:-30, textAlign:'center', marginRight:95,}}>Login</Text>
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
paddingTop:50,
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
  