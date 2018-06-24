import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, View, Text, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchingData, listScreen } from '../offeraction'
import { Activity } from './activity'
import { OfferTuition } from './offerTuition'
import { OfferDetailDescription } from './offerDetailDescription'
import { TuitionModal } from './tuitionModal'
import Modal from "react-native-modal";

class OfferDetailView extends Component {
  state = {
    isModalVisible: false
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.listScreen);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.listScreen);
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  render () {
    const { offer, loading } = this.props
    if (loading) {
      return (
        <Activity />
      )
    } else {
      return (
        <View>
          <OfferDetailDescription offer={offer}/>
          <OfferTuition
            offeredPrice={parseFloat(offer.offered_price).toFixed(2).replace('.', ',')}
            fullPrice={parseFloat(offer.full_price).toFixed(2).replace('.', ',')}
            discount={offer.discount_percentage.split('.')[0]}
            triggerModal={this._toggleModal}
          />
          <Modal
            isVisible={this.state.isModalVisible}
            onBackButtonPress={() => this._toggleModal()}
          >
            <TuitionModal triggerModal={this._toggleModal} />
          </Modal>
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchingData, listScreen }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfferDetailView);
