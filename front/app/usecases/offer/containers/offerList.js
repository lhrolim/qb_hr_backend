import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from 'react-redux';

import OfferListInfiniteView from '../components/offerListInfiniteView';

import agent from 'infra/server/superagent'

class OfferList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredTotal: 0,
      total: 0
    };

    this.render = this.render.bind(this);
  }

  static navigationOptions = {
    title: 'List'
  };

  navigate = (offer) => {
    const detailNav = NavigationActions.navigate({
      routeName: "offerdetail",
      params: { offerId: offer.id }
    });
    this.props.navigation.dispatch(detailNav);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <OfferListInfiniteView
          listData={this.props.listData}
          onItemPress={this.navigate}
          filteredTotal={this.state.filteredTotal}
          total={this.state.total} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { listData: state.offerReducer.listData };
};

export default connect(mapStateToProps)(OfferList);
