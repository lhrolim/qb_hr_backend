import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, Picker, Slider, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { setOfferFilters, removeOfferFilter } from "../offeraction";
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

    _updateFilters = (filter) => {
        // Assumes filter is always an object with a single key
        let key = Object.keys(filter)[0];
        if (filter[key] == null) {
            this.props.dispatch(removeOfferFilter(key));
        }
        else {
            this.props.dispatch(setOfferFilters(filter));
        }
    };

    _mountPicker = (options) => options.map((opt, id) => {
        return (<Picker.Item label={opt} value={opt} key={id} />);
    });

    _pickerItemDefault = (<Picker.Item label="Selecione..." value={null} key="-1" />);

    _multiSelectItems = (items) => items.map((item, id) => {
        return { id: id, name: item };
    });

    _handleBackButton = () => {
        this.props.navigation.goBack();
        return true;
    };

    componentDidMount() {
        if (Platform.OS == "android") {
            BackHandler.addEventListener('hardwareBackPress', this._handleBackButton);
        }
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton);
    };

    _getSelectText = (values) => {
        if (values && values.length)
            return values.join(', ');
        else
            return 'Selecione...';
    }

    _multiSelect(values, label, stateKey) {
        items = [{
            name: label,
            id: 0,
            children: values.map((el) => {
                return {
                    name: el,
                    id: el
                }
            })
        }];

        return (
            <SectionedMultiSelect
                style={{ alignSelf: 'stretch', flexDirection: 'row' }}
                styles={{
                    itemText: styles.selectItemText,
                    subItemText: styles.selectSubItemText,
                    container: styles.selectModalContent,
                    backdrop: styles.selectModalBackdrop,
                    scrollView: styles.selectModalScrollView,
                    button: styles.button,
                    confirmText: styles.buttonText
                }}
                items={items}
                uniqueKey='id'
                subKey='children'
                selectText={this._getSelectText(this.props.offerFilters[stateKey])}
                alwaysShowSelectText={true}
                showDropDowns={false}
                readOnlyHeadings={true}
                onSelectedItemsChange={(selectedValues) => this._updateFilters({ [stateKey]: selectedValues })}
                selectedItems={this.props.offerFilters[stateKey]}
                hideSearch={true}
                confirmText='Pronto'
                showChips={false}
            />
        );
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

                <Text style={styles.textLarge}>Formação</Text>
                {this._multiSelect(this._levels, 'Formação', 'level')}

                <Text style={styles.textLarge}>Período</Text>
                {this._multiSelect(this._shifts, 'Período', 'shift')}

                <Text style={styles.textLarge}>Tipo de Curso</Text>
                {this._multiSelect(this._kinds, 'Tipo de Curso', 'kind')}

                <Text>Filtros: {JSON.stringify(this.props.offerFilters)}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { offerFilters: state.offerReducer.offerFilters };
};

export default connect(mapStateToProps)(OfferSearch);

