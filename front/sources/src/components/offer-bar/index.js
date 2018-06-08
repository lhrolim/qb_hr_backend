import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

class OfferBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.btnTouchable} 
            onPress={this.props.onPress}>
            <View style={styles.btnContainer}>
              <Ionicons name={this.props.isFiltered ? "ios-options": "ios-options-outline"} 
              size={25} color="#333333" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.pageContent}>
          <Text>{this.props.perPage} de </Text>
          <Text>{this.props.total} resultados</Text>
        </View>
      </View> 
    );
  }
}

OfferBar.propTypes = {
  isFiltered: PropTypes.bool,
  perPage: PropTypes.number,
  total: PropTypes.number,
  onPress: PropTypes.func
}

OfferBar.defaultProps = {
  isFiltered: false,
  perPage: 0,
  total: 0
}

export default OfferBar