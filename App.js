import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import BottomTabNavigator from './src/Modules/BottomTabNavigator'
import SignUpScreen from './src/Modules/SignUpScreen';
import SplashScreen from './src/Modules/SplashScreen';
import ModalScreen from './src/Modules/ModalScreen';
import Settings from './src/Modules/Settings';
import LoginScreen from './src/Modules/LoginScreen';

const Stack = createNativeStackNavigator()

const MyStack = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name='SplashScreen' component={SplashScreen} />
       <Stack.Screen name= 'BottomTabNavigator' component={BottomTabNavigator}/>
       <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
       <Stack.Screen name='ModalScreen'  component={ModalScreen}/>
       <Stack.Screen name='Settings' component={Settings}/>
       </Stack.Navigator>
    </NavigationContainer>

  );
};


export default MyStack;

