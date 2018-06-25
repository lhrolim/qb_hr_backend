import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {connect} from "react-redux";
import HidableListHeader from '../../../components/hidableListHeader'
import InputTextOption from '../components/offerFilter/inputTextOption'
import CustomSlider from '../components/offerFilter/customSlider'
import CheckList from '../components/offerFilter/checkList'
import Button from '../../../components/button'
import filters from "../../../contants/filters"
import {fetchOffersList} from "../actions/offerAction";
import School from '../../../../assets/img/school.png'
import Place from '../../../../assets/img/place.png'
import { objectToArray } from '../../../helpers/index'

class OfferFilter extends Component {

    static navigationOptions = ({navigation}) => {
        const {state} = navigation
        return {
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: (
                <TouchableOpacity onPress={() => state.params.clear()}>
                    <Text style={{marginRight: 15}}> Limpar </Text>
                </TouchableOpacity>
            )
        }

    };

    clear(props) {
        props.fetchOffersList({page: 1}, true)
    }

    componentDidMount(){
        this.props.navigation.setParams({clear: () => this.clear(this.props)})
    }

    constructor(props) {
        super(props);

        this.state = {
            offeredPriceMax: props.offeredPriceMax || 2000.0,
            discountPercentageMin: props.discountPercentageMin || 15.0,
            kind: props.kind,
            level: props.level,
            shift: props.shift,
        }
    }

    listSearch(type) {
        this.props.navigation.navigate('offersearch', {type})
    }

    filter() {
        const filter = {
            offeredPriceMax,
            discountPercentageMin,
            kind,
            level,
            shift
        } = this.state

        this.props.fetchOffersList(filter, false)
        this.props.navigation.goBack()
    }

    render() {

        const{
            courseSearch,
            universitySearch,
        } = this.props

        const {
            offeredPriceMax,
            discountPercentageMin,
            kind,
            shift,
            level,
        } = this.state

        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <HidableListHeader title={'Curso'}>
                    <InputTextOption
                        text={courseSearch ? courseSearch : filters.COURSE}
                        onPress={() => this.listSearch(filters.COURSE)}
                        image={School}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Universidade'}>
                    <InputTextOption
                        text={universitySearch ? universitySearch : filters.UNIVERSITY}
                        onPress={() => this.listSearch(filters.UNIVERSITY)}
                        image={Place}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Preço máximo'}>
                    <CustomSlider
                        value={offeredPriceMax}
                        onValueChange={(value) => this.setState({offeredPriceMax: value})}
                        maxValue={10000}
                        text={`Até R$${offeredPriceMax}`}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Desconto mínimo'}>
                    <CustomSlider
                        value={discountPercentageMin}
                        onValueChange={(value) => this.setState({discountPercentageMin: value})}
                        maxValue={100}
                        text={`Mais de ${discountPercentageMin}%`}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Distância'}>
                    <CheckList
                        list={kind ? objectToArray(kind) : []}
                        onValueChange={() => this.setState({kind})}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Período'}>
                    <CheckList
                        list={shift ? objectToArray(shift) : []}
                        onValueChange={() => this.setState({shift})}
                    />
                </HidableListHeader>
                <HidableListHeader title={'Tipo'}>
                    <CheckList
                        list={level ? objectToArray(level) : []}
                        onValueChange={() => this.setState({level})}
                    />
                </HidableListHeader>
                <View style={{padding: 20}}>
                    <Button
                        title={'Filtrar'}
                        onPress={() => this.filter()}
                    />
                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        courseSearch: state.offerReducer.filter && state.offerReducer.filter.course && state.offerReducer.filter.course.name,
        universitySearch: state.offerReducer.filter && state.offerReducer.filter.university && state.offerReducer.filter.university.name,
        offeredPriceMax: state.offerReducer.filter && state.offerReducer.filter.offeredPriceMax,
        discountPercentageMin: state.offerReducer.filter && state.offerReducer.filter.discountPercentageMin,
        kind: state.offerReducer.filter && state.offerReducer.filter.kind,
        shift: state.offerReducer.filter && state.offerReducer.filter.shift,
        level: state.offerReducer.filter && state.offerReducer.filter.level,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOffersList: (filter, clear) => dispatch(fetchOffersList({page: 1, ... filter}, clear, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferFilter);
