import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { listOffers, fetchingData } from '../offeraction'
import  OfferListView  from '../components/offerListView'

class OfferList extends Component {
  static navigationOptions = {
    title: 'Lista de Ofertas',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  _loadMoreOffers = () => {
    const { offers, filters } = this.props
    if(offers.length != filters.offset) {
      filters.offset = offers.length.toString()
      this.props.listOffers(filters)
    }
  }

  componentDidMount() {
    this.props.fetchingData()
    this.props.listOffers(this.props.filters);
  }

  render() {
    const { loading, offers, total } = this.props
    return (
      <OfferListView
        offers={offers}
        total={total}
        loading={loading}
        loadMoreOffers={() => this._loadMoreOffers()}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.offerReducer.loading,
  offers: state.offerReducer.offers,
  total: state.offerReducer.total,
  filters: state.offerReducer.filters,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ listOffers, fetchingData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
