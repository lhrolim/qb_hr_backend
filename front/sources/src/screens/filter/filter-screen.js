import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FilterHeader, FilterItem } from '../../components';
import { filterActions } from '../../redux/actions';

import styles from './filter-style';


class FilterScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: this.props.filter.qs.course || '',
      university: this.props.filter.qs.university || ''
    };
  }

  searchOffer() {
    const {course,university } = this.state;
    if(course != '' || university != '') {
      this.props.filterActive(this.state)
      this.props.navigation.goBack()
    }
  }
  
  resetFilter() {
    this.setState({course: '', university: ''},() => this.props.filterReset());
  }

  render() {
    return (
      <View style={styles.container}>
        <FilterHeader 
          closeOnPress={() => { this.props.navigation.goBack() }}
          resetOnPress={() => this.resetFilter()} />
        <FilterItem
          title="Curso"
          text={this.state.course}
          placeholder="O que você quer estudar?"
          onChangeText={(text) => this.setState({ course: text })} />
        <FilterItem
          title="Faculdade"
          text={this.state.university}
          placeholder="Onde quer estudar?"
          onChangeText={(text) => this.setState({ university: text })} />
        <View style={styles.action}>
          <TouchableOpacity style={styles.btnAcquire}
            onPress={() => {
              this.searchOffer();
            }}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnAcquireText}>Buscar bolsa</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(filterActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen)