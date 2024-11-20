import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const {height}=Dimensions.get('window')
export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);



  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

 
  const validatePassword = (password) => {
    return password.length >= 6;
  };

 
  const handleEmailChange = (emailText) => {
    setEmail(emailText);
    setEmailVerify(validateEmail(emailText)); // Set email verification status
  };

  const handlePasswordChange = (passwordText) => {
    setPassword(passwordText);
    setPasswordVerify(validatePassword(passwordText)); // Set password verification status
  };



  const navigation=useNavigation();
  return (
  <ScrollView>
      <View style ={styles.container}>

      <View style={styles.LoginHeader}>
  <View style={styles.LoginImageContainer}>
    <Text style={styles.LoginImage}>Image</Text>
  </View>
  <View style={styles.LoginHeaderText}>
    <Text style={styles.LoginText}>Sign in to your Account</Text>
  </View>
</View>

    
  
  
    <View style={styles.SecondContainer}>
    <View style={styles.action}>
            <FontAwesome name="user" color="#16423C" style={styles.smallIcon} />
            <TextInput 
            placeholder=" Email" 
            style={styles.textInput} 
            onChange={e => handleEmailChange(e.nativeEvent.text)}
            value={email}
            />
           {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Feather name="x-circle" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{ marginLeft: 20, color: 'red' }}>
              Please enter a valid email address
            </Text>
          )}

            <View style={styles.action}>
            <FontAwesome name="lock" color="#16423C" style={styles.smallIcon} />
            <TextInput 
            placeholder="Password"
             style={styles.textInput} 
             onChange={e => handlePasswordChange(e.nativeEvent.text)}
             value={password}
             secureTextEntry={true}
           />
           {password.length < 1 ? null : passwordVerify ? (
             <Feather name="check-circle" color="green" size={20} />
           ) : (
             <Feather name="x-circle" color="red" size={20} />
           )}
         </View>
         {password.length < 1 ? null : passwordVerify ? null : (
           <Text style={{ marginLeft: 20, color: 'red' }}>
             Password should be at least 6 characters
           </Text>
         )}
      <View >
            <TouchableOpacity 
              // onPress={() => navigation.navigate('ForgotPassword')}
              style={{ 
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: 8,
                marginRight: 10,
              }}>
              <Text style={{color: '#16423C', fontWeight: '700'}}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View> 

      <View style={styles.button}>
            <TouchableOpacity style={styles.btn} >
            <View>
                <Text style={styles.textSign}>Log in</Text>
            </View>
            </TouchableOpacity>
            <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
                ----Or Continue as----
            </Text>                
         </View>

       
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <View>
                <Text style={styles.textSign}>Sign Up</Text>
            </View>
            </TouchableOpacity>
      

            </View>
      
     
    </View>
</View>

  </ScrollView>

  )
}

const styles = StyleSheet.create({
  container:{
   
  },
  SecondContainer:{
    flex:0.70,
    justifyContent:'center',
    paddingHorizontal:20,
    marginTop:50,
  },
  LoginHeader: {
    height: height * 0.3,
    backgroundColor: '#16423C',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', 
  },
  // LoginImageContainer: {
  //   position: 'absolute',
  //   top: '50%', 
  //   left: '50%', 
  //   transform: [{ translateX: -50 }, { translateY: -50 }], 
  // },
  LoginImage: {
    color: '#fff',
    fontSize: 20,
  },
  LoginHeaderText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  LoginText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
  },
  
InputContainer: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10, 
  margin: 10,
  
  fontSize: 16,
  color: '#333',
 
 
},
button: {
  alignItems: 'center',
 
  alignItems: 'center',
  textAlign: 'center',
  margin: 20,
},
btn: {
  width: '50%',
  backgroundColor: '#16423C',
  alignItems: 'center',
  paddingHorizontal: 15,
  paddingVertical: 15,
  borderRadius: 10,
},
btn1:{
  width: '50%',
  marginTop:50,
  backgroundColor: '#16423C',
  padding:15,
  marginLeft:'auto',
  marginRight:'auto',
  alignItems: 'center',
  borderRadius: 6,
},
inBut2: {
  backgroundColor: '#16423C',
  height: 65,
  width: 65,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
},
bottomButton: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
textSign:{
  color:'#fff'
},
action: {
  flexDirection: 'row',
  width:320,
  marginTop:15,
  borderBlockColor:'#BEBEBE',
  borderBottomWidth:1,
  paddingBottom:10,
  fontFamily:'GeezaPro-Bold',
  fontSize:15,
},
textInput: {
  flex: 1,
  marginTop: -12,
},
smallIcon: {
  marginRight: 20,
  fontSize: 24,
},


})