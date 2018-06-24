import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { applyFilters, fetchingData, listScreen, listOffers } from '../offeraction'
import { Activity } from './activity'
import { MultiSelectInput } from '../../../shared/multiSelect'
let { width, height } = Dimensions.get('window')
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Slider,
  Dimensions,
  ScrollView,
  BackHandler,
  StyleSheet
} from 'react-native';

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
    ],
    ranges: [
      {type: 'currency', stateKey: 'offered_price_max', min: 0, max: 1000, step: 10, textPrefix: 'Valor máximo: R$', textSufix: ''},
      {type: 'percentage', stateKey: 'discount_percentage_min', min: 0, max: 100, step: 5, textPrefix: 'Desconto mínimo: ', textSufix: '%'}
    ]
  }

  _handleSelect = (selectedItems, type) => {
    this.setState({ [type]: selectedItems })
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.listScreen);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.listScreen);
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
          if(Array.isArray(this.state[key])) {
            this.state[key] = !!filters[key] ? [filters[key]] : []
          } else {
            this.state[key] = !!filters[key] ? filters[key] : ''
          }
        }
      }
    }
    const { offered_price_max } = this.state
    console.log('olha o max', offered_price_max)
    if(offered_price_max) {
      this.setState({offered_price_max: this._formatRangeVal(offered_price_max, 'currency')})
    }
  }

  _formatRangeVal = (val, type) => {
    if(type == 'percentage') return parseFloat(val)
    if(type == 'currency') return parseFloat(val).toFixed(2).replace('.', ',')
  }

  _filterOffers = () => {
    const { filters } = this.props
    for (const key in filters) {
      if(this.state.hasOwnProperty(key)){
        if(Array.isArray(filters[key])) {
          filters[key] = this.state[key]
        } else if(!isNaN(parseFloat(this.state[key]))){
          filters[key] = `${parseFloat(this.state[key])}`
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
        <ScrollView>
          <View style={styles.filtersContainer}>
            {
              this.state.fields.map((field, index) => {
                return (
                  <MultiSelectInput
                    key={index}
                    items={this.props.fields[field.items]}
                    single={field.single}
                    onSelectedItemsChange={selectedItems => this._handleSelect(selectedItems, field.selected)}
                    selectedItems={this.state[field.selected]}
                    selectText={field.selectText}
                    searchInputPlaceholderText={field.search}
                  />
                )
              })
            }
            {
              this.state.ranges.map((range, index) => {
                return (
                  <View style={styles.rangeContainer} key={index}>
                    <Text>{range.textPrefix} {this.state[range.stateKey]}{range.textSufix}</Text>
                    <Slider
                      style={styles.range}
                      step={range.step}
                      minimumValue={range.min}
                      maximumValue={range.max}
                      value={parseFloat(this.state[range.stateKey])}
                      onValueChange={val => this.setState({ [range.stateKey]: this._formatRangeVal(val, range.type) })}
                    />
                  </View>
                )
              })
            }
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity onPress={this._resetFields} style={styles.btn}>
              <Button color="#db502b" title="Limpar" onPress={this._resetFields}></Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._filterOffers} style={styles.btn}>
              <Button title="Filtrar" onPress={this._filterOffers}></Button>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ applyFilters, fetchingData, listScreen, listOffers }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfferSearchView);

const styles = StyleSheet.create({
  filtersContainer: {
    flex: 1,
    padding: 10
  },
  rangeContainer: {
    paddingVertical: 10
  },
  range: {
    width: width - 40
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  btn: {
    flex: 0.4
  }
});
