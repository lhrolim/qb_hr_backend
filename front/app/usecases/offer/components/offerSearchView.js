import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { applyFilters, fetchingData, listScreen, listOffers } from '../offeraction'
import { Activity } from './activity'
import { MultiSelectInput } from '../../../shared/multiSelect'

class OfferSearchView extends Component {
  state = {
    kind: [],
    level: [],
    shift: [],
    course_name: [],
    university_id: [],
    discount_percentage_min: '',
    offered_price_max: '',
    fields: [
      {items: 'courses', selected: 'course_name', single: false, selectText: 'Selecione o curso', search: 'Qual o curso?'},
      {items: 'universities', selected: 'university_id', single: true, selectText: 'Selecione a universidade', search: 'Qual a universidade?'},
      {items: 'kinds', selected: 'kind', single: false, selectText: 'Selecione o modelo', search: 'Qual o modelo de curso?'},
      {items: 'levels', selected: 'level', single: false, selectText: 'Selecione o nível', search: 'Qual o nível do curso?'},
      {items: 'shifts', selected: 'shift', single: false, selectText: 'Selecione o período', search: 'Qual o período do curso?'},
    ]
  }

  handleSelect = (selectedItems, type) => {
    this.setState({ [type]: selectedItems })
  }

  _resetFields = () => {
    this.setState({
      kind: [],
      level: [],
      shift: [],
      university_id: [],
      course_name: [],
      discount_percentage_min: '',
      offered_price_max: '',
    })
  }

  componentDidMount() {
    const { filters } = this.props
    for (const key in filters) {
      if(this.state.hasOwnProperty(key)){
        if(Array.isArray(filters[key])) {
          this.state[key] = filters[key]
        } else {
          this.state[key] = !!filters[key] ? [filters[key]] : []
        }
      }
    }
  }

  _filterOffers = () => {
    const { filters } = this.props
    for (const key in filters) {
      if(this.state.hasOwnProperty(key)){
        if(Array.isArray(filters[key])) {
          filters[key] = this.state[key]
        } else {
          filters[key] = this.state[key].length > 0 ? this.state[key][0] : ''
        }
      }
    }
    this.props.applyFilters(filters)
    this.props.fetchingData()
    this.props.listOffers(filters)
    this.props.listScreen()
  }

  render() {
    if (this.props.loading) {
      return (
        <Activity />
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          {
            this.state.fields.map((field, index) => {
              return (
                <MultiSelectInput
                  key={index}
                  items={this.props.fields[field.items]}
                  single={field.single}
                  onSelectedItemsChange={selectedItems => this.handleSelect(selectedItems, field.selected)}
                  selectedItems={this.state[field.selected]}
                  selectText={field.selectText}
                  searchInputPlaceholderText={field.search}
                />
              )
            })
          }
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this._resetFields} style={{flex: 0.4}}>
              <Button color="#db502b" title="Limpar" onPress={this._resetFields}></Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._filterOffers} style={{flex: 0.4}}>
              <Button title="Filtrar" onPress={this._filterOffers}></Button>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ applyFilters, fetchingData, listScreen, listOffers }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfferSearchView);
