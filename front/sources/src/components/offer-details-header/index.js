import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

class OfferDetailsHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={styles.imageLogo}
            source={require('../../image/quero-bolsa-750x250.jpg')}
          />
          <TouchableOpacity style={styles.btnTouchable}
            onPress={this.props.onBack}>
            <Ionicons name="ios-arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

OfferDetailsHeader.propTypes = {
  onBack: PropTypes.func
}

export default OfferDetailsHeader