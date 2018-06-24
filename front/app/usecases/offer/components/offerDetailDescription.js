import React , { PureComponent } from 'react'
import { Image, Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { OfferBenefits } from './offerBenefits'
let { width, height } = Dimensions.get('window')

export class OfferDetailDescription extends PureComponent {
  render () {
    const offer = this.props.offer;
    return (
      <ScrollView>
        <View style={styles.detailContainer}>
          <Image style={styles.logo} source={{ uri: offer.university.logo }}/>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{offer.course.level}</Text>
            <Text style={styles.title}>{offer.course.name}</Text>
          </View>
          <View style={styles.characteristics}>
            <Text style={styles.characteristicText}>{offer.course.shift}</Text>
            <Text style={styles.characteristicText}>{offer.course.kind}</Text>
            <Text style={styles.characteristicText}>{offer.course.max_periods} semestres</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Sobre {offer.course.name}:</Text>
            <Text>{offer.course.description}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: 10,
    paddingTop: 30,
    marginBottom: 150,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 2
  },
  characteristics: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  subTitle: {
    fontWeight: '600'
  },
  characteristicText: {
    paddingHorizontal: 5,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 2
  },
});
