import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { applyFilters, fetchingData, listScreen, listOffers, resetFilters } from '../offeraction'
import { Activity } from './activity'
import { MultiSelectInput } from '../../../shared/multiSelect'

class OfferSearchView extends Component {
  state = {
    kinds: [
      {id: 'Presencial', name: 'Presencial'},
      {id: 'EAD', name: 'EAD'},
    ],
  }

  handleSelect = (selectedItems, type) => {
    this.props.filters[type] = selectedItems
    console.log(this.props.filters[type], selectedItems)
    this.props.applyFilters({filters: this.props.filters})
  }

  render() {
    const { fields, filters, loading } = this.props;
    const { kinds, levels, shifts } = fields
    const { kind, level, shift } = filters
    if (this.props.loading) {
      return (
        <Activity />
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <MultiSelectInput
            items={kinds}
            single={false}
            onSelectedItemsChange={selectedItems => this.handleSelect(selectedItems, 'kind')}
            selectedItems={kind}
            selectText="Selecione o modelo"
            searchInputPlaceholderText="Qual o modelo do curso?"
          />
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ applyFilters, fetchingData, listScreen, listOffers, resetFilters }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfferSearchView);
