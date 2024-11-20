import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height} = Dimensions.get('window');

export default function Register() {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState('false');
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType] = useState('User');
  const [secretText, setSecretType] = useState('');

  const navigation = useNavigation();

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    //  setNameVerify()
    setNameVerify(nameVar.length > 1);
    //  if(nameVar.length >1){
    //     setNameVerify(true);
    //  }
  }
  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    // if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
    if (/^[\w.%+-]+@(gmail\.com|mailinator\.com)$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }
  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);
    if (/[1-9]{1}[0-9]{9}/.test(mobileVar)) {
      setMobile(mobileVar);
      setMobileVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }
  return (
    // <View>
    //   <Text>Register</Text>
    //   <Button title='Go to Register' onPress={()=>navigation.navigate('Tabs')}/>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.LoginHeader}>
          <View style={styles.LoginImageContainer}>
            <Text style={styles.LoginImage}>Image</Text>
          </View>
          <View style={styles.LoginHeaderText}>
            <Text style={styles.LoginText}>Register</Text>
            <Text style={styles.LoginsubText}>Create your Account</Text>
          </View>
        </View>

        <View style={styles.SecondContainer}>
          <View style={styles.action}>
            <FontAwesome name="user" color="#16423C" style={styles.smallIcon} />
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              onChange={e => handleName(e)}
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Feather name="x-circle" color="red" size={20} />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Name should be more than 1 characters
            </Text>
          )}
          <View style={styles.action}>
            <Feather name="mail" color="#16423C" style={styles.smallIcon} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={e => handleEmail(e)}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Feather name="x-circle" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Enter Proper Email Address
            </Text>
          )}
          <View style={styles.action}>
            <FontAwesome
              name="phone"
              color="#16423C"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              onChange={e => handleMobile(e)}
              maxLength={10}
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Feather name="x-circle" color="red" size={20} />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Mobile number should be minimum 10 digits
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesome name="lock" color="#16423C" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={e => handlePassword(e)}
              secureTextEntry={showPassword}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => navigation.navigate('Tabs')}
              >
              <View>
                <Text style={styles.textSign}>Register</Text>
              </View>
            </TouchableOpacity>
            <Text>Already have an acoount</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <View>
                <Text style={{flexDirection: 'row'}}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  SecondContainer: {
    flex: 0.7,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
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
    left: 20,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
  LoginsubText:{
    color:'#fff',
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
  btn1: {
    width: '50%',
    marginTop: 50,
    backgroundColor: '#16423C',
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
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
  textSign: {
    color: '#fff',
  },
  action: {
    flexDirection: 'row',
    width: 320,
    marginTop: 15,
    borderBlockColor: '#BEBEBE',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontFamily: 'GeezaPro-Bold',
    fontSize: 15,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
  },
  smallIcon: {
    marginRight: 20,
    fontSize: 24,
  },
});
