import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';

class Loading extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1, 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff'
        }}>
        <ActivityIndicator />
      </View>
    );
  }
};

export default Loading
