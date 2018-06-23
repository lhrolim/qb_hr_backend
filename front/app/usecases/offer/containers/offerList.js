import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from 'react-redux';

import OfferListInfiniteView from '../components/offerListInfiniteView';

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
    title: 'Quero Bolsa'
  };

  _goToDetail = (offer) => {
    const detailNav = NavigationActions.navigate({
      routeName: "offerdetail",
      params: { offerId: offer.id }
    });
    this.props.navigation.dispatch(detailNav);
  };

  _goToFilter = () => {
    const filterNav = NavigationActions.navigate({
      routeName: "offersearch"
    });
    this.props.navigation.dispatch(filterNav);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <OfferListInfiniteView
          listData={this.props.listData}
          onItemPress={this._goToDetail}
          onHeaderPress={this._goToFilter}
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
