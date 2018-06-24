import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { mountFilterFields, fetchingData } from '../offeraction'
import  OfferSearchView  from '../components/offerSearchView'

class OfferSearch extends Component {
  static navigationOptions = {
    title: 'Filtros',
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
    this.props.mountFilterFields();
  }

  render() {
    const { loading, filters, fields } = this.props
    return (
      <OfferSearchView filters={filters} loading={loading} fields={fields}/>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.offerReducer.loading,
  filters: state.offerReducer.filters,
  fields: state.offerReducer.fields,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ mountFilterFields, fetchingData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferSearch);
