import React from 'react';
import { Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { offerDetailsActions } from '../../redux/actions';

import { Loading, OfferDetailsHeader } from '../../components';

import styles from './offer-details-style';

class OfferDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: '#ffff',
      headerStyle: {
        backgroundColor: '#05869b'
      },
      title: 'Detalhe da oferta',

    };
  };

  componentWillMount() {
    const offerId = this.props.navigation.getParam('offerId');
    this.props.fetchOfferDetails(offerId);
  }

  render() {
    const { offer, isLoading, error } = this.props.offerDetails;
    if (!isLoading && Object.keys(offer).length > 0) {
      return (
        <ScrollView style={styles.scrollview}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.logoHeader}
                resizeMode="contain"
                source={{ uri: offer.university.logo }} />
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
              <View style={styles.titleInfo}>
                <Text style={styles.titleText}>Sobre {offer.course.name}</Text>
              </View>
              <View style={styles.description}>
                <Text>Sobre {offer.course.description}</Text>
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
            <View style={styles.action}>
              <TouchableOpacity style={styles.btnAcquire}
                onPress={() => this.props.navigation.navigate('AcquireTuitionModal')}>
                <View style={styles.btnContainer}>
                  <Text style={styles.btnAcquireText}>Quero a bolsa</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      );
    }

    return <Loading />
  }
}


function mapStateToProps(state) {
  return {
    offerDetails: state.offerDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(offerDetailsActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsScreen)