import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './auth-loading-style'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrap();
  }

  bootstrap = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect()(AuthLoadingScreen)