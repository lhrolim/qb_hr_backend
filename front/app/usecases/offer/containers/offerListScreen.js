import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationActions} from "react-navigation";
import {connect} from 'react-redux'
import { fetchOffersList } from "../actions/offerAction";
import { OfferList } from "../components/offerList";
import { HeaderInput } from "../components/headerInput";


class OfferListScreen extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#16A7BF',
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

    componentWillMount() {
        this.props.fetchOffersList(this.props.currentPage) //get first page
    }

    componentWillReceiveProps(nextProps) {
        console.log('list', nextProps.offersList)
    }

    render() {
        const {
            offersList
        } = this.props

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <HeaderInput />
                <OfferList
                    list={offersList}
                    fetchMoreOffers={() => this.fetchMoreOffers()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        offersList: state.offerReducer.offersList,
        currentPage: state.offerReducer.currentPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOffersList: (page) => dispatch(fetchOffersList(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListScreen);
;
