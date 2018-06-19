import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationActions} from "react-navigation";
import {connect} from 'react-redux'

import agent from 'infra/server/superagent'
import { fetchOffersList } from "../offerAction";
import navigationReducer from "../../../../infra/navigation/navigationReducer";

class OfferList extends Component {


    static navigationOptions = {
        title: 'List',
        headerStyle: {
            backgroundColor: '#f4511e',
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
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "yellowgreen",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>List</Text>
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                    }}
                    onPress={() => this.fetchMoreOffers()}
                >
                    <Text title="Load Detail">Load Detail</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
;
