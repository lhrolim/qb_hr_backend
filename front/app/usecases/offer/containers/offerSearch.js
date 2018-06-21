import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, Picker, Slider } from 'react-native';
import { connect } from 'react-redux';
import { setOfferFilters } from "../offeraction";
import { styles } from '../styles/default';

class OfferSearch extends Component {
    _minOfferedPrice = 100;
    _maxOfferedPrice = 2000;
    _priceStep = 100;

    static navigationOptions = {
        title: 'Filtros de Bolsas'
    };

    _updateFilters = (filter) => {
        this.props.dispatch(setOfferFilters(filter));
    }

    render() {
        return (
            <View style={styles.offerSearch}>
                <Text style={styles.textLarge}>Valor da mensalidade</Text>
                <Slider
                    style={{ alignSelf: 'stretch' }}
                    minimumValue={this._minOfferedPrice}
                    maximumValue={this._maxOfferedPrice}
                    step={this._priceStep}
                    value={this.props.offerFilters.offered_price_max}
                    onValueChange={(value) => this._updateFilters({ offered_price_max: value })}
                />
                {this.props.offerFilters.offered_price_max &&
                    <Text>Até R$ {this.props.offerFilters.offered_price_max},00</Text>}


                <Text style={styles.textLarge}>Desconto Mínimo</Text>
                <Slider
                    style={{ alignSelf: 'stretch' }}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={this.props.offerFilters.discount_percentage_min}
                    onValueChange={(value) => this._updateFilters({ discount_percentage_min: value })}
                />
                {this.props.offerFilters.discount_percentage_min &&
                    <Text>{this.props.offerFilters.discount_percentage_min}%</Text>}

                <Text>Filtros: {JSON.stringify(this.props.offerFilters)}</Text>
            </View>
        );
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
}

const mapStateToProps = (state) => {
    return { offerFilters: state.offerReducer.offerFilters };
};

export default connect(mapStateToProps)(OfferSearch);

