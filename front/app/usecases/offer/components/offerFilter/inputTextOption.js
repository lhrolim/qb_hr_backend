import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import School from '../../../../../assets/img/school.png'
import Place from '../../../../../assets/img/place.png'
import Filter from '../../../../../assets/img/filter.png'
import colors from '../../../../contants/colors'
import filters from '../../../../contants/filters'

export default InputTextOption = ({onPress, text}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Text style={styles.text}> {text} </Text>
            <Image style={styles.image} source={School}/>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    image: {
        height: 25,
        width: 25,
        tintColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 14,
        flex: 1,
    },
})