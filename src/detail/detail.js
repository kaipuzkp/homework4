import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated’, ‘Module RCTImageLoader']);

export class Detail extends Component {
static navigationOptions = {
    title: 'Detail',
    };
  render() {
    const { navigation } = this.props;
    const titlename = navigation.getParam('title', 'Title');
    return (
      <View>
        <Text>This is Callout title: {titlename}</Text>
      </View>
    )
  }
};

export default Detail;