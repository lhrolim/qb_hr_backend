import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class InterestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Interesses!</Text>
      </View>
    );
  }
}

export default connect()(InterestScreen)