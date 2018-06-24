import React , { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class OfferBenefits extends PureComponent {
  render () {
    const { offeredPrice, fullPrice, discount } = this.props;
    return (
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitsValues}>
          <Text style={styles.offeredPrice}>R$ {offeredPrice}/mês</Text>
          <Text style={styles.fullPrice}>R$ {fullPrice}</Text>
        </View>
        <View>
          <Text style={styles.discount}>{discount}%</Text>
          <Text> de bolsa</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  benefitsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 5
  },
  benefitsValues: {
    flex: 1
  },
  discount: {
    color: '#4cca7a',
    fontWeight: 'bold',
    fontSize: 30
  },
  fullPrice: {
    textDecorationLine: 'line-through'
  },
  offeredPrice: {
    fontWeight: 'bold',
    fontSize: 25
  }
});
