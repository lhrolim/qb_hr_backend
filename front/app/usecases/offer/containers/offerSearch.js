import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, Picker, Slider } from 'react-native';
import { connect } from 'react-redux';
import { setOfferFilters } from "../offeraction";
import { styles } from '../styles/default';

class OfferSearch extends Component {
    _minOfferedPrice = 100;
    _maxOfferedPrice = 2000;
    _priceStep = 100;
    _kinds = ['Presencial', 'EAD'];
    _levels = ['Graduação', 'Pós-Graduação'];
    _shifts = ['Manhã', 'Tarde', 'Noite', 'Virtual'];

    static navigationOptions = {
        title: 'Filtros de Bolsas'
    };

    _mountPicker = (options) => options.map((opt, id) => {
        return (<Picker.Item label={opt} value={opt} key={id} />);
    });

    _updateFilters = (filter) => {
        this.props.dispatch(setOfferFilters(filter));
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


                <Text style={styles.textLarge}>Tipo de Curso</Text>
                <Picker
                    selectedValue={this.props.offerFilters.kind}
                    style={{ alignSelf: 'stretch' }}
                    onValueChange={(itemValue, itemIndex) => this._updateFilters({ kind: itemValue })}>
                    {this._mountPicker(this._kinds)}
                </Picker>


                <Text style={styles.textLarge}>Formação</Text>
                <Picker
                    selectedValue={this.props.offerFilters.level}
                    style={{ alignSelf: 'stretch' }}
                    onValueChange={(itemValue, itemIndex) => this._updateFilters({ level: itemValue })}>
                    {this._mountPicker(this._levels)}
                </Picker>


                <Text style={styles.textLarge}>Período</Text>
                <Picker
                    selectedValue={this.props.offerFilters.shift}
                    style={{ alignSelf: 'stretch' }}
                    onValueChange={(itemValue, itemIndex) => this._updateFilters({ shift: itemValue })}>
                    {this._mountPicker(this._shifts)}
                </Picker>

                <Text>Filtros: {JSON.stringify(this.props.offerFilters)}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { offerFilters: state.offerReducer.offerFilters };
};

export default connect(mapStateToProps)(OfferSearch);

