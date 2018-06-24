import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { searchScreen, detailScreen, detailOffer, fetchingData } from '../offeraction'
import { OfferCard } from './offerCard'
import { OfferListSubHeader } from './offerListSubHeader'
import { Activity } from './activity'

class OfferListView extends Component {
  _emitLoadMoreOffers = () => this.props.loadMoreOffers()

  _triggerDetail = id => {
    this.props.fetchingData()
    this.props.detailOffer(id)
    this.props.detailScreen()
  }

  _keyExtractor = (item, index) => item.uuid.toString()

  _renderItem = ({item}) => {
    item.offered_price = parseFloat(item.offered_price).toFixed(2).replace('.', ',')
    item.full_price = parseFloat(item.full_price).toFixed(2).replace('.', ',')
    item.discount_percentage = item.discount_percentage.split('.')[0]
    return (
      <OfferCard
        triggerDetail={() => this._triggerDetail(item.id)}
        offer={item}
      />
    )
  }

  render () {
    if (this.props.loading) {
      return (
        <Activity />
      )
    } else {
      return (
        <View style={styles.listContainer}>
          <OfferListSubHeader
            searchScreen={this.props.searchScreen}
            total={this.props.total}
            length={this.props.offers.length}
           />
          <FlatList
            data={this.props.offers}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReachedThreshold={2}
            onEndReached={this._emitLoadMoreOffers}
          />
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchScreen, detailScreen, detailOffer, fetchingData }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfferListView);

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    flex: 1,
  }
});
