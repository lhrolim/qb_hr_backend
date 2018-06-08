import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

class OfferResultHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name='ios-bookmarks-outline' size={23} color='#fff' />
            </View>
            <Text style={styles.text}>{this.props.resCourseText}</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.iconContainer}>
              <Ionicons style={styles.icon} name='ios-pin-outline' size={23} color='#fff' />
            </View>
            <Text style={styles.text}>{this.props.resUniversityText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

OfferResultHeader.propTypes = {
  resUniversityText: PropTypes.string,
  resCourseText: PropTypes.string,
}

OfferResultHeader.defaultProps = {
  resUniversityText: 'Onde você quer estudar?',
  resCourseText: 'O que você quer estudar?',
}

export default OfferResultHeader