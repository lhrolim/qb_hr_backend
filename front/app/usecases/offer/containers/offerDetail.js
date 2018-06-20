import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, Button, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { detailOffer } from "../offeraction";
import { styles } from '../styles/default';

import agent from 'infra/server/superagent'

class OfferDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  static navigationOptions = {
    title: 'Detail'
  };

  async componentWillMount() {
    // Reset offer if id is different
    if (this.props.offerDetail && this.props.offerDetail.id &&
      this.props.offerDetail.id !== this.props.navigation.state.params.offerId) {
      this.props.dispatch(detailOffer({}));
    }
    const result = await agent.Offer.detail(this.props.navigation.state.params.offerId);
    this.props.dispatch(detailOffer(result));
  }

  _handleBackButton = () => {
    this.props.navigation.goBack();
    return true;
  };

  componentDidMount() {
    if (Platform.OS == "android") {
      BackHandler.addEventListener('hardwareBackPress', this._handleBackButton);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View
        style={styles.offerDetail}
      >
        <Text>{JSON.stringify(this.props.offerDetail)}</Text>
        <TouchableOpacity style={styles.button} onPress={this._toggleModal}>
          <Text style={styles.buttonText}>Quero essa bolsa!</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}
          onBackdropPress={() => this._toggleModal()}>
          <View style={styles.modalContent}>
            <Text style={styles.textLarge}>Parabéns!</Text>
            <Text style={styles.text}>
              <Text>Você conseguiu a bolsa para</Text>
              <Text style={{ fontWeight: "bold" }}> {this.props.offerDetail.course ? this.props.offerDetail.course.name : ''}</Text> <Text>em</Text>
              <Text style={{ fontWeight: "bold" }}> {this.props.offerDetail.university ? this.props.offerDetail.university.name : ''}</Text>
              <Text>!</Text>
            </Text>
            <TouchableOpacity style={styles.successButton} onPress={this._toggleModal}>
              <Text style={styles.buttonText}>Ok!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { offerDetail: state.offerReducer.offerDetail };
};

export default connect(mapStateToProps)(OfferDetail);
