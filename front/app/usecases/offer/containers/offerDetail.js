import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { listOffers, fetchingData } from '../offeraction'
import  OfferDetailView  from '../components/offerDetailView'

class OfferDetail extends Component {
  static navigationOptions = {
    title: 'Detalhes',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  componentDidMount() {
    this.props.fetchingData()
  }

  render() {
    const { loading, offer } = this.props
    return (
      <OfferDetailView offer={offer} loading={loading}/>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.offerReducer.loading,
  offer: state.offerReducer.offer
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ listOffers, fetchingData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);
