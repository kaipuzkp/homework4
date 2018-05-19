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

import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1Ijoibmlub2tpcmkiLCJhIjoiY2pnc2picnR5MGh6NjJxcTlrNndqeTVobCJ9.n27taL_XQJFpGs_zOfpVLA');

export class Home extends Component {
    static navigationOptions = {
        title: 'Home',
      };
    state = {
        title: 'Aloha',
      }
    render() {
    const{title}=this.state;
      return (
        <View style={styles.container}>
          {/* <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text> */}
          <Mapbox.MapView
              styleURL={Mapbox.StyleURL.Street}
              zoomLevel={15}
              centerCoordinate={[-123.1118716,49.2847564]}
              style={styles.container}>
             <Mapbox.PointAnnotation
            id="skdjlsjlda"
            coordinate={[-123.110798,49.285116]}
            onSelected={()=>{console.log("selected")}}
            title="hello"> 
            <View>
              <Mapbox.Callout
                style={styles.callout}
                containerStyle={styles.calloutContainer}
                title={title}
              >
              <View style={styles.view}>
                <Text>Text</Text>
              <Button
                style={styles.button}
                title="Detail"
                onPress={() => this.props.navigation.navigate('DetailScreen',{title:this.state.title})}
                /> 
                </View> 
              
              </Mapbox.Callout> 
            </View>
            
              </Mapbox.PointAnnotation> 
           
          </Mapbox.MapView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    callout:{
      // width:400,
      // backgroundColor: '#F5FCFF',
    },
    calloutContainer: {
      // width:200,
      // padding:50,
    },
    button:{
      // width:50,
      // backgroundColor: 'blue',
    },
    view:{
      backgroundColor:'#FFFFFF',
      width:100,
      height:100,
    }
  });
  export default Home