import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Price = ({price, offer, scholarship}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.price}> R${fixPriceFormat(offer)}/mês </Text>
                <Text style={styles.slicedText}> R${fixPriceFormat(price)} </Text>
            </View>
            <View style={{flex: 1}}/>
            <View>
                <Text style={styles.scholarship}> {fixPercentageFormat(scholarship)}% </Text>
                <Text> {'de bolsa'} </Text>
            </View>
        </View>
    )
}

const fixPriceFormat = (str) => {
    return str.replace('.', ',')
}

const fixPercentageFormat = (str) => {
    return parseInt(str)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    scholarship: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'green',
    },
    slicedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: 'gray',
    }
})