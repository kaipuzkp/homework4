/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated’, ‘Module RCTImageLoader']);
import {
  StackNavigator,
} from 'react-navigation';

import Detail from './src/detail/detail';
import Home from './src/home/home';

const AppNavigator = StackNavigator({
  HomeScreen: {screen: Home},
  DetailScreen: {screen: Detail},
});

// import Mapbox from '@mapbox/react-native-mapbox-gl';
// Mapbox.setAccessToken('pk.eyJ1Ijoibmlub2tpcmkiLCJhIjoiY2pnc2picnR5MGh6NjJxcTlrNndqeTVobCJ9.n27taL_XQJFpGs_zOfpVLA');

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component{
  render() {
    return (
      <AppNavigator />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   callout:{
//     // width:400,
//     // backgroundColor: '#F5FCFF',
//   },
//   calloutContainer: {
//     // width:200,
//     // padding:50,
//   },
//   button:{
//     // width:50,
//     // backgroundColor: 'blue',
//   },
// });
