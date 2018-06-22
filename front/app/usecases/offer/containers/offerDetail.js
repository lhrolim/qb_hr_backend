import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {HeaderDetail} from "../components/offerDetail/header";
import defaultStyles from '../../../contants/styles'
import { Price } from '../../../components/price'
import Button from '../../../components/button'

class OfferDetail extends Component {

    static navigationOptions = {
        headerStyle: {
            position: 'absolute'
        },
    };


    render() {
        return (
            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                <ScrollView
                >
                    <HeaderDetail navigation={this.props.navigation}/>
                    <OfferBody/>

                </ScrollView>

                <DetailFooter />
            </View>

        );
    }
}

const OfferBody = () => (
    <View style={{padding: 20, paddingBottom: 150}}>
        <Text style={defaultStyles.boldText}> Sobre Engenharia de Computação</Text>
        <Text
            style={defaultStyles.text}> textãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãotextãolalalalalalalalaldassdasaddsaasddsasadalalala </Text>
    </View>
)

const DetailFooter = () => (
    <View style={styles.footerContainer}>
        <Price
            price={'100.00'}
            offer={'50.00'}
            scholarship={'50.0'}
        />
        <Text style={defaultStyles.boldText} > Uma economia de 8 mil reais</Text>
        <Button title={'Quer essa bolsa'} onPress={() => console.log('click')}/>
    </View>
)

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'white',
        height: 150,
        width: '100%',
        position: 'absolute',
        padding: 15,
    }
})

export default OfferDetail;
