import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

class AcquireTuitionScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name='md-checkmark' size={55} color='#000' />
        <Text>Sucesso</Text>
        <Button
          onPress={() => this.props.navigation.navigate('OfferList')}
          title="OK"
        />
      </View>
    );
  }
}

export default connect()(AcquireTuitionScreen)