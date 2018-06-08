import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FilterHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeBtnTouchable}
            onPress={this.props.closeOnPress}>
            <View style={styles.btnContainer}>
              <Ionicons name="ios-close" size={40} color="#fff"/>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>FILTRO</Text>
          <TouchableOpacity style={styles.resetBtnTouchable}
            onPress={this.props.resetOnPress}>
            <View style={styles.btnContainer}>
              <Text style={styles.redefinirBtnText}>Redefinir</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

FilterHeader.propTypes = {
  closeOnPress: PropTypes.func,
  resetOnPress: PropTypes.func
}

export default FilterHeader
