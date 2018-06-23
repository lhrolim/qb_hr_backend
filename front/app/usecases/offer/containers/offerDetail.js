import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import FitImage from 'react-native-fit-image';

import { detailOffer } from "../offeraction";
import { styles } from '../styles/default';

import agent from 'infra/server/superagent';
import priceFormatter from 'infra/helpers/formatting';

class OfferDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalRulesVisible: false
        };

        this.render = this.render.bind(this);
    }

    static navigationOptions = {
        title: 'Detalhes'
    };

    async componentWillMount() {
        // Reset this.props.offerDetail if id is different
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

    _modalOffer = (offer) => (
        <Modal isVisible={this.state.isModalVisible}
            onBackdropPress={() => this._toggleModal()}>
            <View style={styles.modalContent}>
                <Text style={[styles.textLarge, { textAlign: 'center' }]}>Parabéns!</Text>
                <Text style={styles.text}>
                    <Text>Você conseguiu a bolsa para</Text>
                    <Text style={{ fontWeight: "bold" }}> {offer.course ? offer.course.name : ''}</Text> <Text>em</Text>
                    <Text style={{ fontWeight: "bold" }}> {offer.university ? offer.university.name : ''}</Text>
                    <Text>!</Text>
                </Text>
                <TouchableOpacity style={styles.successButton} onPress={this._toggleModal}>
                    <Text style={styles.buttonText}>Ok!</Text>
                </TouchableOpacity>
            </View>
        </Modal>);

    _toggleModalRules = () =>
        this.setState({ isModalRulesVisible: !this.state.isModalRulesVisible });

    _modalRules = () => (
        <Modal isVisible={this.state.isModalRulesVisible}
            onBackdropPress={() => this._toggleModalRules()}>
            <View style={styles.modalContent}>
                <Text style={[styles.textLarge, { textAlign: 'center' }]}>Regras e Observações</Text>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus lacus et ipsum lacinia ullamcorper. Donec a risus ullamcorper, auctor diam a, dignissim erat. Donec eu sapien urna. Maecenas mattis porta turpis, sit amet maximus nulla porttitor et. Sed ipsum lorem, semper pretium mattis ut, molestie quis nunc. Vivamus interdum turpis sed imperdiet volutpat. In faucibus consequat diam a rutrum. Aenean augue diam, interdum in quam vitae, feugiat imperdiet dui. Pellentesque tellus ante, viverra eu suscipit ac, fringilla vitae odio. Integer urna risus, congue et vestibulum luctus, feugiat sed erat.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this._toggleModalRules}>
                        <Text style={styles.buttonText}>Entendi</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>);

    render() {
        const formattedDiscount = Number(this.props.offerDetail.discount_percentage).toFixed(0);

        if (!this.props.offerDetail.university || !this.props.offerDetail.course)
            return (<View />);

        const offer = this.props.offerDetail;
        const formattedPeriod = `${offer.course.max_periods / 2} ANOS`;
        return (
            <View
                style={styles.offerDetail}
            >
                <ScrollView style={styles.detailScroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.detailScrollContainer}>
                        <View style={styles.offerCardHeader}>
                            <View style={styles.roundImageContainer}>
                                <FitImage source={{ uri: offer.university.logo }} style={styles.universityLogo} />
                            </View>
                            <Text style={styles.universityName}>{offer.university.name}</Text>
                        </View>
                        <View style={styles.courseInfo}>
                            <Text style={styles.courseName}>{offer.course.name}</Text>
                            <Text style={styles.offerCardText}>{offer.course.level.toUpperCase()}</Text>
                            <View style={styles.offerCardInfoContainer}>
                                <Text style={styles.offerCardText}>
                                    {offer.course.kind.toUpperCase()}
                                </Text>
                                <Text style={styles.offerCardText}>
                                    {offer.course.shift.toUpperCase()}
                                </Text>
                                <Text style={styles.offerCardText}>
                                    {formattedPeriod}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.rulesAndInfos} onPress={this._toggleModalRules}>
                            <Text style={[styles.textLarge, { fontWeight: 'normal', textDecorationLine: 'underline' }]}>Regras e Observações</Text>
                        </TouchableOpacity>
                        <View style={styles.courseDescriptionContainer}>
                            <Text style={[styles.textLarge, { textAlign: 'left' }]}>Descrição do Curso:</Text>
                            <Text style={[styles.text, { textAlign: 'left' }]}>{offer.course.description}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.detailOverlay}>
                    <View style={styles.detailPriceContainer}>
                        <View style={styles.offerDiscount}>
                            <Text style={[styles.offerDiscountNumber, styles.highlightColor]}>{formattedDiscount}%</Text>
                            <Text style={styles.offerDiscountText}>de bolsa</Text>
                        </View>
                        <View style={[styles.offerPrices, { justifyContent: 'center' }]}>
                            <Text style={[styles.offerDiscountPrice, styles.normalColor]}>{priceFormatter.format(offer.offered_price)}/mês</Text>
                            <Text style={styles.offerPrice}>{priceFormatter.format(offer.full_price)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this._toggleModal}>
                        <Text style={styles.offerButtonText}>Quero essa Bolsa!</Text>
                    </TouchableOpacity>
                </View>

                {this._modalOffer(offer)}
                {this._modalRules()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { offerDetail: state.offerReducer.offerDetail };
};

export default connect(mapStateToProps)(OfferDetail);
