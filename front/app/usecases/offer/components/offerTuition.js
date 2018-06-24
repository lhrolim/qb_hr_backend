import React , { PureComponent } from 'react'
import { View, TouchableOpacity, StyleSheet, Button, Dimensions } from 'react-native'
import { OfferBenefits } from './offerBenefits'
let { width, height } = Dimensions.get('window')

export class OfferTuition extends PureComponent {
  render () {
    const { fullPrice, offeredPrice, discount } = this.props
    return (
      <View style={styles.tuitionContainer}>
        <OfferBenefits
          offeredPrice={offeredPrice}
          fullPrice={fullPrice}
          discount={discount}
        />
        <TouchableOpacity onPress={() => this.props.triggerModal()} style={styles.tuitionBtn}>
          <Button title="Quero a bolsa!" onPress={() => this.props.triggerModal()}></Button>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tuitionContainer: {
    flex: 1,
    zIndex: 10,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 150,
    backgroundColor: '#ffffff'
  },
  tuitionBtn: {
    flex: 1,
    margin: 5,
    width: width - 10
  },
});
