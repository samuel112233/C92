import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
 
export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>

    )
  }
}
var AppNavigator = createSwitchNavigator({
  Intro:{screen:IntroScreen},
  SignUp:{screen:SignUpScreen},
  Login:{screen:LoginScreen}
})
var AppContainer = createAppContainer(AppNavigator)
