import React , { PureComponent } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { OfferBenefits } from './offerBenefits'


export class OfferCard extends PureComponent {
  render () {
    const offer = this.props.offer;
    return (
      <TouchableOpacity
        onPress={() => this.props.triggerDetail()}
        style={styles.cardContainer}
      >
        <View style={styles.cardPart}>
          <Image style={styles.logo} source={{ uri: offer.university.logo }}/>
          <View style={styles.cardTopPart}>
            <Text style={styles.cardTextTopPart}>{offer.course.name}</Text>
            <Text style={styles.cardTextTopPart}>{offer.course.level}</Text>
          </View>
        </View>
        <View style={styles.cardPart}>
          <Text style={styles.cardMiddlePart}>{offer.course.shift}</Text>
          <Text style={styles.cardMiddlePart}>{offer.course.kind}</Text>
          <Text style={styles.cardMiddlePart}>{offer.course.max_periods} períodos</Text>
        </View>
        <OfferBenefits
          offeredPrice={offer.offered_price}
          fullPrice={offer.full_price}
          discount={offer.discount_percentage}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    margin: 10
  },
  cardPart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 5
  },
  logo: {
    flex: 0.2,
    height: 50,
    paddingRight: 30,
    resizeMode: 'contain'
  },
  cardTopPart: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  cardTextTopPart: {
    fontWeight: 'bold'
  },
  cardMiddlePart: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 5,
    borderRadius: 10
  },
});
