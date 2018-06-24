import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationActions} from "react-navigation";
import {connect} from 'react-redux'
import { fetchOffersList } from "../actions/offerAction";
import { OfferList } from "../components/offerList/offerList";
import defaultStyles from '../../../contants/styles'
import { HeaderInput } from "../components/offerList/headerInput";
import colors from '../../../contants/colors'
import Loading from "../../../components/loading";

class OfferListScreen extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: colors.primaryAccent,
            height: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    navigate = () => {
        const detailNav = NavigationActions.navigate({
            routeName: "offerdetail",
            params: {name: "My Detail..."}
        });
        this.props.navigation.dispatch(detailNav);
    };

    fetchMoreOffers() {
        const nextPage = this.props.currentPage + 1
        this.props.fetchOffersList(nextPage)
    }

    openOfferDetail(id) {
        this.props.navigation.navigate('offerdetail', {id})
    }

    refresh() {
        this.props.fetchOffersList(0, true)
    }

    search(type) {
        this.props.navigation.navigate('offersearch', {type})
    }

    componentWillMount() {
        this.props.fetchOffersList(this.props.currentPage) //get first page
    }

    render() {
        const {
            offersList,
            err,
            loading,
            courseSearch,
            universitySearch,
        } = this.props

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <HeaderInput onPress={(type) => this.search(type)} courseSearch={courseSearch} universitySearch={universitySearch}/>
                {err && <Text style={defaultStyles.errorPlaceholder}> Ocorreu um erro ao carregar a lista. Por favor, tente novamente.</Text>}
                <OfferList
                    list={offersList}
                    fetchMoreOffers={() => this.fetchMoreOffers()}
                    openOfferDetail={(id) => this.openOfferDetail(id)}
                    loading={loading}
                    onRefresh={() => this.refresh()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        offersList: state.offerReducer.offersList,
        err: state.offerReducer.err,
        loading: state.offerReducer.loading,
        currentPage: state.offerReducer.filter.page,
        courseSearch: state.offerReducer.filter && state.offerReducer.filter.course && state.offerReducer.filter.course.name,
        universitySearch: state.offerReducer.filter && state.offerReducer.filter.university && state.offerReducer.filter.university.name,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOffersList: (page, clear) => dispatch(fetchOffersList({page: page}, clear))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListScreen);
