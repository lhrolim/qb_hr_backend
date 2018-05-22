import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connnect } from 'react-redux'

import  agent from 'infra/server/superagent'

class OfferList extends Component {



  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentWillMount() {
    //TODO: bring initial list
    const list = await agent.Offer.list();
    // this.props.dispatch({type:"xxx"})
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "yellowgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>1</Text>
      </View>
    );
  }
}

export default OfferList;
