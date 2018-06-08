import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

class ItemOffer extends React.Component {
  render() {
    const offer = this.props.offer
    return (
      <TouchableOpacity style={styles.btnTouchable}
        onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.logoHeader}
              resizeMode="contain"
              source={{ uri: offer.university.logo }}
            />
            <View style={styles.titleHeader}>
              <Text style={styles.titleText}>{offer.course.name}</Text>
              <Text style={styles.subTitleText}>{offer.course.level.toUpperCase()}</Text>
              <Text style={styles.subTitle2Text}>{offer.university.name}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.infoBody}>
              <View style={styles.viewInfoBody}>
                <Text style={styles.textInfoBody}>{offer.course.kind}</Text>
              </View>
              <View style={styles.viewInfoBody}>
                <Text style={styles.textInfoBody}>{offer.course.shift}</Text>
              </View>
              <View style={styles.viewInfoBody}>
                <Text style={styles.textInfoBody}>{offer.course.maxPeriods} anos</Text>
              </View>
            </View>
            <View style={styles.accessory}>
              <Ionicons name="ios-arrow-forward" size={30} color='#000' />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.infoPrice}>
              <Text style={styles.offeredPrice}>{currencyFormatter.format(offer.offeredPrice, { locale: 'pt-BR' })}/mês</Text>
              <Text style={styles.fullPrice}>{currencyFormatter.format(offer.fullPrice, { locale: 'pt-BR' })}</Text>
            </View>
            <View style={styles.highlightPerc}>
              <Text style={styles.discountPercentage}>{Math.floor(offer.discountPercentage)}%</Text>
              <Text>de bolsa</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

ItemOffer.propTypes = {
  onPress: PropTypes.func,
  offer: PropTypes.object
}

export default ItemOffer