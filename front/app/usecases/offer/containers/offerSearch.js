import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SearchList from '../../../components/searchList'
import colors from "../../../contants/colors";


class OfferSearch extends Component {

    static navigationOptions = {
        headerStyle:{
            backgroundColor: colors.primaryAccent
        },
        headerTintColor: 'white',
    };

    constructor(props) {
        super(props)
        this.state = {
            text: 'Texto incial',
        }
    }

    onTextChange(text) {
        this.setState({text})
    }

    render() {

        const {
            text
        } = this.state

        return (
                <SearchList
                    list={['a','b','c','d']}
                    onChangeText={(text) => this.onTextChange(text)}
                    text={text}
                    clearText={() => this.setState({text: ''})}
                    onItemSelected={(item) => console.log(item)}
                />
        );
    }
}

export default OfferSearch;

