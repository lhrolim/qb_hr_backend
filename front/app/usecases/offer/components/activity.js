import React , { PureComponent } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'


export class Activity extends PureComponent {
  render () {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
