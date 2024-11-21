import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import TestingScreen from './Screens/TestingScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Tes02 from './Screens/Tes02';



export default function App() {

  const Stack=createNativeStackNavigator();
  const Tab=createBottomTabNavigator()

  function MyTabs() {


    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tab.Screen name="Home" component={HomeScreen} 
        screenOptions={{headerShown:false}}
          options={{

            tabBarIcon:({focused})=>(
              <View>
                <FontAwesome name='home' size={24} color='#000'/>
              </View>
            )
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon:({focused})=>(
            <View>
               <FontAwesome name='user' size={24} color='#000'/>
            </View>
          )
        }}/>
        <Tab.Screen name="Testing" component={TestingScreen} options={{
          tabBarIcon:({focused})=>(
            <View>
            <FontAwesome name='code' size={24} color='#000'/>
            </View>
          )
        }}/>
        <Tab.Screen name="Test02" component={Tes02} options={{  
          tabBarIcon:({focused})=>(
            <View>
            <FontAwesome name='code' size={24} color='#000'/>
            </View>
          )
        }}/>
       
        
      
      </Tab.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Register' component={Register} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Tabs' component={MyTabs}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})