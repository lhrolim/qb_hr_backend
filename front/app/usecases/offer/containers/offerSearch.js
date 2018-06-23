import React, { Component } from 'react';
import { Platform, BackHandler, View, Text, Slider, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { setOfferFilters, removeOfferFilter, clearOfferFilters, setSubjects, setUniversities } from "../offeraction";
import { styles } from '../styles/default';
import priceFormatter from 'infra/helpers/formatting';

import agent from 'infra/server/superagent'

class OfferSearch extends Component {
    _minOfferedPrice = 100;
    _maxOfferedPrice = 2000;
    _priceStep = 100;
    _kinds = ['Presencial', 'EAD'];
    _levels = ['Graduação', 'Pós-Graduação'];
    _shifts = ['Manhã', 'Tarde', 'Noite', 'Virtual'];

    constructor(props) {
        super(props);
        this.state = {
            selectedDiscount: 0,
            selectedMaxPrice: this._maxOfferedPrice
        }
    }

    static navigationOptions = {
        title: 'Filtros de Bolsas'
    };

    _singleFilters = ['university_id', 'subject_id'];
    _updateFilters = (filter) => {
        // Assumes filter is always an object with a single key
        let key = Object.keys(filter)[0];

        // Handle filter removal when the value is null or undefined
        if (!filter[key]) {
            this.props.dispatch(removeOfferFilter(key));
        }
        else {
            this.props.dispatch(setOfferFilters(filter));
        }
    };
    _clearFilters = () => {
        this.props.dispatch(clearOfferFilters());
        this.setState({
            selectedDiscount: 0,
            selectedMaxPrice: this._maxOfferedPrice
        })
    }

    _handleBackButton = () => {
        this.props.navigation.goBack();
        return true;
    };

    async componentWillMount() {
        const subjectResult = await agent.Subject.list();
        const subjects = subjectResult.map((s) => {
            return {
                id: s.id,
                name: s.name
            }
        });
        this.props.dispatch(setSubjects(subjects));

        const universityResult = await agent.University.list();
        const universities = universityResult.map((u) => {
            return {
                id: u.id,
                name: u.name
            }
        });
        this.props.dispatch(setUniversities(universities));
    }

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

    _renderSelect = (items, stateKey, single) => {
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
                    confirmText: styles.buttonText,
                    selectToggle: { marginVertical: 5 }
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
                single={!!single}
            />
        );
    }

    _multiSelect = (values, label, stateKey) => {
        items = [{
            name: label,
            id: 0,
            children: values ? values.map((el) => {
                return {
                    name: el,
                    id: el
                }
            }) : []
        }];

        return this._renderSelect(items, stateKey, false);
    }

    _singleSelect = (values, label, stateKey) => {
        items = [{
            name: label,
            id: 0,
            children: values
        }];

        return this._renderSelect(items, stateKey, true);
    }

    render() {
        return (
            <View style={styles.offerSearch}>
                <View style={styles.filters}>
                    <ScrollView>
                        <View style={styles.filtersContainer}>
                            <View>
                                <Text style={styles.textLarge}>Universidade</Text>
                                {this._singleSelect(this.props.universities, 'Universidade', 'university_id')}
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Curso</Text>
                                {this._singleSelect(this.props.subjects, 'Curso', 'subject_id')}
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Valor da mensalidade</Text>
                                <Slider
                                    style={{ alignSelf: 'stretch' }}
                                    minimumValue={this._minOfferedPrice}
                                    maximumValue={this._maxOfferedPrice}
                                    step={this._priceStep}
                                    value={this.state.selectedMaxPrice}
                                    onValueChange={(value) => this.setState({ selectedMaxPrice: value })}
                                    onSlidingComplete={(value) => this._updateFilters({ offered_price_max: value })}
                                />
                                <Text>Até {priceFormatter.format(this.state.selectedMaxPrice)}</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Desconto Mínimo</Text>
                                <Slider
                                    style={{ alignSelf: 'stretch' }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={1}
                                    value={this.state.selectedDiscount}
                                    onValueChange={(value) => this.setState({ selectedDiscount: value })}
                                    onSlidingComplete={(value) => this._updateFilters({ discount_percentage_min: value })}
                                />
                                <Text>{this.state.selectedDiscount}%</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Formação</Text>
                                {this._multiSelect(this._levels, 'Formação', 'level')}
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Período</Text>
                                {this._multiSelect(this._shifts, 'Período', 'shift')}
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textLarge}>Tipo de Curso</Text>
                                {this._multiSelect(this._kinds, 'Tipo de Curso', 'kind')}
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.buttonOverlay}>
                    <TouchableOpacity
                        style={
                            [Object.keys(this.props.offerFilters).length == 0 ?
                                styles.disabledButton :
                                styles.button, { flex: 1, marginRight: 5 }]
                        }
                        onPress={this._clearFilters}
                        disabled={Object.keys(this.props.offerFilters).length == 0}
                    >
                        <Text style={styles.buttonText}>Limpar Filtros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.successButton, { flex: 1, marginLeft: 5 }]}
                        onPress={this._handleBackButton}
                    >
                        <Text style={styles.buttonText}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        offerFilters: state.offerReducer.offerFilters,
        subjects: state.offerReducer.subjects,
        universities: state.offerReducer.universities
    };
};

export default connect(mapStateToProps)(OfferSearch);
