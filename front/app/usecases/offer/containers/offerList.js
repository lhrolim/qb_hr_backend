import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationActions } from "react-navigation";

import { OfferListView } from '../components/offerListView';

import agent from 'infra/server/superagent'

class OfferList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: []
    };
  }

  static navigationOptions = {
    title: 'List',
    headerStyle: {
      backgroundColor: '#0F9BB1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentDidMount() {
    try {
      const list = await agent.Offer.list();
      this.setState({
        offers: list
      });
      console.log(list);
    } catch (err) {
      console.log(err);
    }
  }

  navigate = (offer) => {
      const detailNav = NavigationActions.navigate({
        routeName: "offerdetail",
        params: { name: offer.uuid }
      });
      this.props.navigation.dispatch(detailNav);
    };

  render() {

    // TODO: Show message if no offers found

    return (
      <View style={{flex: 1}}>
        <OfferListView data={this.state.offers} onItemPress={this.navigate} />
      </View>
    );
  }
}

export default OfferList;
